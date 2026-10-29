const path = require('node:path');
require('esbuild').buildSync({
  entryPoints: [path.resolve(__dirname, '../source/frame3d.js')],
  outfile: path.resolve(__dirname, '../prototype/frame3d.js'),
  bundle: true, format: 'iife', target: ['es2020'], minify: true,
  legalComments: 'inline', logLevel: 'info',
});
