# Build blog and Publish to GitHub Pages

This workflow will generate static files and upload push to the `gh-pages` branch.

The blog-example repository uses this workflow.

https://github.com/cssjpn/blog-example/tree/main/.github/workflows

```yaml
# File: {your-blog-repo}/.github/workflows/upload-gh-pages.yml

name: upload-gh-pages

on:
  push:
    branches:
      - master

jobs:
  upload-gh-pages:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
      with:
        submodules: true

    - name: build-blog
      uses: cssjpn/blog-gh-actions/build-blog@v1

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./public
```

Note: GitHub automatically creates a `GITHUB_TOKEN` secret to use in your workflow. [Authentication in a workflow - GitHub Docs](https://docs.github.com/en/actions/reference/authentication-in-a-workflow)

## Actions

* [build-blog](../build-blog): building blog
