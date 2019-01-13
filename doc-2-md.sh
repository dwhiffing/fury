#!/bin/bash

for file in $(find ./docs -name '*.docx'); do
  dirname=$(dirname $file)
  dirname=$(echo ${dirname#./docs/})
  countryname=$(basename $(dirname $file))
  filename=$(basename $file)
  filename="${filename%.*}"
  assetsdir=assets/images/nato/$dirname/$filename
  markdowndir=content/nato/$dirname/$filename

  if [ $filename = "index" ]; then
    assetsdir=assets/images/nato/$dirname
    markdowndir=content/nato/$dirname
  fi

  if [ ! -d $assetsdir ]; then
    mkdir -p $assetsdir
  fi

  if [ ! -d $markdowndir ]; then
    mkdir -p $markdowndir
  fi

  if [ ! -f $markdowndir/index.yml ]; then
    cat > $markdowndir/index.yml << ENDOFFILE
title: NATO
nav:
  - /_shared/nav.md

main: body.md
ENDOFFILE
  fi

  pandoc $file -f docx -t gfm > $assetsdir/"$filename.md" --extract-media $assetsdir
  sed -E "s/(assets)/\/\1/g;s/(media\/)//g;s/(\.\/docs\/)//g" $assetsdir/$filename.md > $markdowndir/body.md

  mv $assetsdir/media/* $assetsdir
  rm -rf $assetsdir/media
  rm $assetsdir/$filename.md
  
done

if [ -d assets/images/nato/docs ]; then
  mv assets/images/nato/docs/* assets/images/nato/
  rm -rf assets/images/nato/docs
fi

if [ -f content/nato/docs/body.md ]; then
  mv content/nato/docs/body.md content/nato/body.md
fi

if [ -d content/nato/docs/ ]; then
  rm -rf content/nato/docs/
fi
