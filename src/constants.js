const ENDPOINRT = "https://jpcssblogdev.azurewebsites.net/api";
const AUDIENCE = "api://jpcssblogdev.azurewebsites.net"
const TOKEN_ENDPOINT = `${ENDPOINRT}/auth/token`
const LINKED_ENDPOINT = `${ENDPOINRT}/githublinks`

const GITHUB_WORKFLOW = process.env.GITHUB_WORKFLOW;
const GITHUB_SHA = process.env.GITHUB_SHA;
const GITHUB_RUN_NUMBER = process.env.GITHUB_RUN_NUMBER;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;

const GITHUB_TRACES = {
  GITHUB_WORKFLOW,
  GITHUB_SHA,
  GITHUB_RUN_NUMBER,
  GITHUB_REPOSITORY
}

export {
    ENDPOINRT,
    AUDIENCE,
    TOKEN_ENDPOINT,
    LINKED_ENDPOINT,
    GITHUB_TRACES,
}