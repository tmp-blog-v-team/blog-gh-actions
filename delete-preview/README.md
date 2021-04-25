# delete-preview

GitHub Action for deleting preview site.

## Action Inputs

| Input | Required | Description | Default |
|:----- |:-------- |:----------- |:------- |
| `token` | **required** | GitHub token | |
| `azure-storage-connection-string` | **required**| Azure Storage connection string | |
| `repo-owner` | | repository owner | ${{ github.event.repository.owner.login }} |
| `repo-name` | | reporisoty name | ${{ github.event.repository.name }} |

## Action Outputs

none

## Example usage

```yaml
delete-preview:
runs-on: ubuntu-latest
if:
    github.event_name == 'pull_request_target' && github.event.action == 'closed'
steps:
- name: Delete preview site
    uses: cssjpn/blog-gh-actions/delete-preview@v1
    with:
    token: ${{ secrets.GITHUB_TOKEN }}
    azure-storage-connection-string: ${{ secrets.AZURE_STORAGE_CONNECTION_STRING }}
```
