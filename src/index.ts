// Imports
import a2o from '@abcnews/alternating-case-to-object';
import { decode } from '@abcnews/base-36-props';
import { attach } from './lib/attach.js';
import { getTier } from '@abcnews/env-utils';

// Make things work in IE11
require('url-search-params-polyfill');

// TODO: Possibly add a proxy function
const params = new URLSearchParams(window.location.search);
const proxyString = params.get('proxy');

/**
 * Adds scripts to the page as specified in a base36
 * hash fragment.
 *
 * @returns undefined
 */

const base36Interactives = () => {
  // Look for scripts hash
  let encodedHashElement = document.querySelector(
    `[name^='interactivescripts']`
  );

  // Decode the base 36 hash
  const decoded: any = decode(
    a2o(encodedHashElement!.getAttribute('name')).encoded
  );

  // If proxying then proxy
  if (proxyString && getTier() === 'preview') {
    console.log(`Proxying: ${proxyString}`);
    attach(proxyString);
  } else {
    // Loop through the scripts
    for (const script of decoded.scripts) {
      attach(script);
    }
  }
};

export default base36Interactives;
