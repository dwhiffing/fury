#!/bin/bash

echo "Updating content from word documents..."

for file in $(find ./docs -name '*.docx'); do
  dirname=$(dirname $file)
  dirname=$(echo ${dirname#./docs/})
  filename=$(basename $file)
  filename="${filename%.*}"
  assetsdir=assets/images/$dirname/$filename
  markdowndir=content/$dirname/$filename

  if [ $filename = "index" ]; then
    assetsdir=assets/images/$dirname
    markdowndir=content/$dirname
  fi

  if [ ! -d $assetsdir ]; then
    mkdir -p $assetsdir
  fi

  if [ ! -d $markdowndir ]; then
    mkdir -p $markdowndir
  fi

  if [ ! -f $markdowndir/index.yml ]; then
    cat > $markdowndir/index.yml << ENDOFFILE
title: $filename
nav:
  - /_shared/nav.md

main: body.md
ENDOFFILE
  fi

  pandoc $file -f docx -t gfm > $assetsdir/"$filename.md" --extract-media $assetsdir
  sed -E "s/(assets)/\/\1/g;s/(media\/)//g;s/(\.\/docs\/)//g" $assetsdir/$filename.md > $markdowndir/body.md

  if [ -d $assetsdir/media ]; then
    mv $assetsdir/media/* $assetsdir
    rm -rf $assetsdir/media
  fi

  rm $assetsdir/$filename.md
done

echo "Cleaning up after updating content..."

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

if [ -d assets/images/wp/docs ]; then
  mv assets/images/wp/docs/* assets/images/wp/
  rm -rf assets/images/wp/docs
fi

if [ -f content/wp/docs/body.md ]; then
  mv content/wp/docs/body.md content/wp/body.md
fi

if [ -d content/wp/docs/ ]; then
  rm -rf content/wp/docs/
fi
