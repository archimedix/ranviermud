#!/bin/bash
for f in ${files}; do
    iconv -t utf8 ${f} > /tmp/utf8conversion
    mv /tmp/utf8conversion ${f}
done