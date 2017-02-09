# #!/bin/bash

GITBOOK_REP=$1
SUMMARY_FILE="SUMMARY.md"
echo $OUTPUT_FILE

if [ -d "$GITBOOK_REP" ]; then

  echo "Entering directory '$GITBOOK_REP'..."
  cd $GITBOOK_REP
  if [ -f "$SUMMARY_FILE" ]; then
    # read summary and get texts by order in a single big file
    pandoc $SUMMARY_FILE -t html | \
      grep -o '<a href=['"'"'"][^"'"'"']*['"'"'"]' | \
      sed -e 's/^<a href=["'"'"']//' -e 's/["'"'"']$//'| \
      xargs cat | \
      pandoc -f markdown --variable fontsize=10pt \
              --variable geometry:paperwidth=6in \
              --variable geometry:paperheight=9in \
              --variable geometry:margin=1in \
              --variable mainfont="Times" \
             --variable documentclass=memoir --toc --latex-engine=xelatex -o aetipandoc.pdf
  else
    echo "File '$SUMMARY_FILE' does not exist"
  fi
else
echo "Directory '$GITBOOK_REP' does not exist"
fi