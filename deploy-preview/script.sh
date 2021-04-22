#!/bin/sh

# Initialize repository
cp -r /blog/* .
git submodule update -i

# TODO: move to blog-build-tools
rm -f gulpfile.js
#curl -o gulpfile.js https://raw.githubusercontent.com/jpazureid/blog/master/gulpfile.js
cp /gulpfile.js .

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Initialize repository failed"
  exit 1
fi

# Build & Upload preview
npm run uploadPreview

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Build site failed"
  exit 1
fi

echo "::set-output name=status::success"
exit 0
