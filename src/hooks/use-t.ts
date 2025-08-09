import { useTranslation } from 'react-i18next';

export const NAMESPACE_LANGUAGE_KEY = 'translation';
export const useT = (keyPrefix: string) =>
  useTranslation(NAMESPACE_LANGUAGE_KEY, { keyPrefix });
