# deploy-preview

GitHub Action for deploying preview site.

## Action Inputs

| Input | Required | Description | Default |
|:----- |:-------- |:----------- |:------- |
| `token` | **required** | GitHub token | |
| `azure-storage-connection-string` | **required**| Azure Storage connection string | |
| `preview-base-url` | **required** | Base URL of preview site (ex. https://contosoblobaccount.z22.web.core.windows.net/) | |
| `branch-name` | | branch name | ${{ github.event.client_payload.pull_request.head.label }} |
| `pr-url` | | URL of pull request | ${{ github.event.client_payload.pull_request.html_url }} |
| `repo-owner` | | repository owner | ${{ github.event.repository.owner.login }} |
| `repo-name` | | reporisoty name | ${{ github.event.repository.name }} |

## Action Outputs

none

## Example usage

```yaml
- name: Deploy preview site
  uses: cssjpn/blog-gh-actions/deploy-preview@v1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    azure-storage-connection-string: ${{ secrets.AZURE_STORAGE_CONNECTION_STRING }}
    preview-base-url: "https://contosoblobaccount.z22.web.core.windows.net/"
```