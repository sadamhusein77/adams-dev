import { useCallback } from 'react';

type StorageType = 'local' | 'session';

export function useStorage(type: StorageType = 'local') {
  const storage = type === 'local' ? localStorage : sessionStorage;

  const setItem = useCallback(<T>(key: string, value: T, ttl?: number) => {
    try {
      storage.setItem(key, JSON.stringify(value));
      if (ttl) {
        const expiry = Date.now() + ttl;
        storage.setItem(`${key}__ttl`, expiry.toString());
      } else {
        storage.removeItem(`${key}__ttl`);
      }
    } catch (err) {
      console.error(`Error setting ${type}Storage item "${key}":`, err);
    }
  }, [type]);

  const getItem = useCallback(<T = unknown>(key: string): T | null => {
    try {
      const ttlRaw = storage.getItem(`${key}__ttl`);
      if (ttlRaw && Date.now() > parseInt(ttlRaw, 10)) {
        storage.removeItem(key);
        storage.removeItem(`${key}__ttl`);
        return null;
      }

      const raw = storage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      console.error(`Error getting ${type}Storage item "${key}":`, err);
      return null;
    }
  }, [type]);

  const removeItem = useCallback((key: string) => {
    try {
      storage.removeItem(key);
      storage.removeItem(`${key}__ttl`);
    } catch (err) {
      console.error(`Error removing ${type}Storage item "${key}":`, err);
    }
  }, [type]);

  return { setItem, getItem, removeItem };
}
