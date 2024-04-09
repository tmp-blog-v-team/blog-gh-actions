# check-linked-account

**This action has been deprecated. The API for checking linked account will be stop after May 9 2024**

GitHub Action for checking github account is microsoft linked or not.

## Required permissions

Your GitHub repository need to be registered as allowed repositories. If you would like to add your repository to allow list, please contact to repository owner.

## Action Inputs

| Input | Required | Description | Default |
|:----- |:-------- |:----------- |:------- |
| `token` | **required** | JPCSSBlog Dev token | |
| `githubId` | **required**| github account id | ${{ github.event.pull_request.head.repo.owner.login }} |
| `allowExternalUser` | | allow non FTE account like v-username | 'allow' |

## Action Outputs

| Output | Description |
|:-----  |:--------|
| `isLinked`| output `true` if githubId is linked account, `false` if not linked. |

## Example usage

```yaml
# This is a basic workflow to help you get started with Actions

name: check linked account

on:
  pull_request_target:
    types: [opened, reopened, closed]

permissions:
  contents: read
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: check linked account
        id: check_linked_account
        uses: cssjpn/blog-gh-actions/check-linked-account@v1
        with:
          token: ${{ secrets.JPCSSBLOG_DEV_TOKEN }}
      
      - name: deploy preview
        if: steps.check_linked_account.outputs.isLinked == 'true'
        run:
          echo "write deploy task here"
```
