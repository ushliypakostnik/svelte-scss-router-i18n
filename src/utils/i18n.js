import { _, addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';
import { LANGUAGES } from '../store/constants';

import en from '../../public/locales/en/translation.json';
import ru from '../../public/locales/ru/translation.json';

addMessages(LANGUAGES[0].name, en);
addMessages(LANGUAGES[1].name, ru);

init({
  fallbackLocale: LANGUAGES[0].name,
  initialLocale: getLocaleFromNavigator(),
});

export { _ };
