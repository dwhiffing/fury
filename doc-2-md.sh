#!/bin/bash

# rm -rf ./assets/images/
# mkdir ./assets/images/

for file in $(find ./docs -name '*.docx'); do
  countryname=$(basename $(dirname $file))
  filename=$(basename $file)
  filename="${filename%.*}"
  assetsdir=assets/images/nato/$countryname/$filename
  markdowndir=content/nato/$countryname/$filename
  if [ $filename = "index" ]; then
    assetsdir=assets/images/nato/$countryname
    markdowndir=content/nato/$countryname
  fi
  assetsdir_esc=$(echo $assetsdir | sed -e 's/[\/&]/\\&/g')

  mkdir $assetsdir

  pandoc $file -f docx -t gfm > $assetsdir/"$filename.md" --extract-media $assetsdir
  sed -E "s/(assets)/\/\1/g;s/(media\/)//g" $assetsdir/$filename.md > $markdowndir/body.md

  mv $assetsdir/media/* $assetsdir
  rm -rf $assetsdir/media
  rm $assetsdir/$filename.html
  rm $assetsdir/$filename.md
done
