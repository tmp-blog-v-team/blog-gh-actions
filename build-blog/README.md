# build-blog

GitHub Action for build blog.

## Action Inputs

none

## Action Outputs

none

## Example usage

```yaml
upload-gh-pages:
  runs-on: ubuntu-latest
  steps:
  - uses: actions/checkout@v2
    with:
      submodules: true
  - name: build-blog
    uses: cssjpn/blog-gh-actions/build-blog@v1
```