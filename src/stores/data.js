import { writable } from 'svelte/store';

export const data = writable({
  answers: {},
  selectedLanguage: '',
  languageCode: '',
});
