# jpcssblogdev-token

GitHub Action for acquiring token to call jpcssblogdev api.

## Required permissions

| Permissions | Description |
|:-----  |:--------|
| `id_token: write`| for generating github id_token |

## Action Inputs

none

## Action Outputs

| Output | Description |
|:-----  |:--------|
| `token`| secret token to call jpcssblogdev api |

## Example usage

```yaml
name: get token

on:
  schedule:
    - cron: '0 0 1,15 * *'
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

permissions:
  id-token: write

jobs:
  store_token:
    runs-on: ubuntu-latest

    steps:
      - name: Get JPCSSBlogDev Token
        id: jpcssblogdev
        uses: cssjpn/blog-gh-actions/jpcssblogdev-token@v1

      - name: Generate GitHub token for writing secrets
        id: generate_token
        uses: tibdex/github-app-token@v1
        with:
          app_id: ${{ secrets.APP_ID }}
          private_key: ${{ secrets.PRIVATE_KEY }}

      - name: Store token to repository Secrets
        env:
          TOKEN: ${{ steps.jpcssblogdev.outputs.token }}
          GITHUB_TOKEN: ${{ steps.generate_token.outputs.token }}
          REPOSITORY: ${{ github.event.repository.full_name }}
        run: |
          gh secret set JPCSSBLOG_DEV_TOKEN --body "$TOKEN" -R "$REPOSITORY"
```