/* eslint-disable id-length */
"use strict";
/**
 * Returns boolean.
 *
 * @param {string} char the strings in upper or lower case.
 * @return {boolean} if vowel true else false.
 */
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1;
  }