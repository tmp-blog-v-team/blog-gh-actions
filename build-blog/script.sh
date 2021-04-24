#!/bin/sh

# Initialize repository
cp -r /blog/* .
git submodule update -i

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Initialize repository failed"
  exit 1
fi

# Build blog
npm run build

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Build site failed"
  exit 1
fi

echo "::set-output name=status::success"
exit 0
