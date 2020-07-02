// Make things work in IE11
import 'url-search-params-polyfill';

// Imports
import a2o from '@abcnews/alternating-case-to-object';
import { decode } from '@abcnews/base-36-props';
import { attach } from './lib/attach.js';

// TODO: Possibly add a proxy function
// const params = new URLSearchParams(window.location.search);
// const proxyString = params.get("proxy");
// console.log("Proxy: " + proxyString);

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

  // Loop through the scripts
  for (const script of decoded.scripts) {
    attach(script);
  }
};

export default base36Interactives;
