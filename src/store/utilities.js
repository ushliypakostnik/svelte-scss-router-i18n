import { LANGUAGES } from './constants.js';
import { writable } from 'svelte/store';

export const language = writable(LANGUAGES[0]);
