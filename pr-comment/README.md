# pr-comment

GitHub Action for posting bot comment to pull request.

## Action Inputs

| Input | Required | Description | Default |
|:----- |:-------- |:----------- |:------- |
| `token` | **required** | GitHub token | |

## Action Outputs

none

## Example usage

```yaml
pr-comment:
  runs-on: ubuntu-latest
  if:
    github.event_name == 'pull_request_target' &&
    (github.event.action == 'opened' || github.event.action == 'reopened')
  steps:
  - name: pr-comment
    uses: cssjpn/blog-gh-actions/pr-comment@v1
    with:
      token: ${{ secrets.GITHUB_TOKEN }}
```