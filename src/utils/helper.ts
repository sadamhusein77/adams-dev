import { v4 as uuidv4 } from "uuid";

export function formatEpochToLocalizedDate(epochSeconds: number): string {
  const date = new Date(epochSeconds * 1000);

  const lang = localStorage.getItem("lang-id") === "EN" ? "en-US" : "id-ID";

  const time = date.toLocaleTimeString(lang, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const datePart = date.toLocaleDateString(lang, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return `${time}, ${datePart}`;
}

export const formatByGroup = (str: string, groupSize: number): string => {
  if (typeof str !== 'string') {
    console.warn('Invalid input: `str` must be a string.');
    return '';
  }

  if (typeof groupSize !== 'number' || groupSize <= 0) {
    console.warn('Invalid input: `groupSize` must be a positive number.');
    return str;
  }

  if (str.length === 0 || str.length <= groupSize) {
    return str;
  }

  const regex = new RegExp(`.{1,${groupSize}}`, 'g');
  return str.match(regex)?.join(' ') ?? '';
};

export function getDeviceId(): string {
  const STORAGE_KEY = "device-id";
  let deviceId = localStorage.getItem(STORAGE_KEY);
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  return deviceId;
}

export function getLangDevice(): string {
  const STORAGE_KEY = "lang-id";
  let langId = localStorage.getItem(STORAGE_KEY);
  if (!langId) {
    langId = 'ID';
    localStorage.setItem(STORAGE_KEY, langId);
  }
  return langId;
}

