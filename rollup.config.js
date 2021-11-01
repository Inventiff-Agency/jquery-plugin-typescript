import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  // Define the JavaScript file to use as the starting point for bundling.
  input: 'src/example-plugin.ts',

  // Define the output options for the generated bundle.
  output: {
    // Define the bundle file.
    file: 'dist/example-plugin-bundle.js',
    // Define the bundle format (self-executing function in this case).
    format: 'iife',
    // Enable generation of a separate source map file.
    sourcemap: true,
    // Define the module "jquery" to be expected as a global variable "jQuery".
    globals: {
      jquery: 'jQuery'
    }
  },

  // Define the module "jquery" to be excluded from the bundle.
  external: [
    'jquery'
  ],

  // Define the plugins to use during bundling.
  plugins: [
    typescript(),
    terser(),
  ]
};
