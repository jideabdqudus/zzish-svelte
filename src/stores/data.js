// src/stores/userData.js
import { writable } from 'svelte/store';

export const data = writable({
  answers: {},
  selectedLanguage: '',
  languageCode: '',
});
