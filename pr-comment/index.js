const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const ghToken = core.getInput('token');
    const octokit = github.getOctokit(ghToken);
    const context = github.context;

    const { data: pull } = await octokit.pulls.get({
      ...context.repo,
      pull_number: context.issue.number
    });

    const branch = `pr-${pull.number}`;
    const msg = `🥳 Thanks for your contribution!
<details>
Hi reviewers, could you review this PR? To checkout this PR and run preview server locally,

\`\`\`shell
git fetch origin pull/${pull.number}/head:${branch}
git checkout ${branch}
git submodule update -i
docker-compose up
\`\`\`
User with write access can comment to accept this PR for deploying preview site:
\`/ok-to-preview sha=${pull.head.sha.substring(0, 8)}\`
</details>`;

    octokit.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: msg
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
