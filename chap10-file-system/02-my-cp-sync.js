#!/usr/bin/node

const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3];

fs.writeFileSync(dst,fs.readFileSync(src));
