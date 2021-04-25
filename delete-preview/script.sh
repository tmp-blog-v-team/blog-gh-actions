#!/bin/sh

# Initialize repository
cp -r /blog/* .

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Initialize repository failed"
  exit 1
fi

# Delete merged preview site
npm run deleteMergedPreview 

ret=$?
if [ $ret != 0 ]; then
  echo "::error file=script.sh::Delete preview failed"
  exit 1
fi

echo "::set-output name=status::success"
exit 0
