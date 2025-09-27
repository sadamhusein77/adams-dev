export const basenamePath =  import.meta.env.PUBLIC_BASE_NAME_PATH || "http://localhost:3000/";
export const baseApiUrl = import.meta.env.PUBLIC_BASE_API_URL || '';

export const localStorageKey = {
  ihForm: {
    timerMaxAttempt: 'IhForm_timerMaxAttempt',
    finishMaxAttempt: 'IhForm_finishMaxAttempt',
    timerMaxAttemptUntil: 'IhForm_timerMaxAttemptUntil',
  },
  otpPage: {
    timer: 'otpPage_timer_countdown',
    finish: 'otpPage_finish_countdown',
    timerMaxAttempt: 'otpPage_timerMaxAttempt',
    timerMaxAttemptUntil: 'otpPage_timerMaxAttemptUntil',
    finishMaxAttempt: 'otpPage_finishMaxAttempt',
  },
  otpOptions: {
    timer: 'otpOptions_timer_countdown',
    finish: 'otpOptions_finish_countdown'
  }
  
}

export const QUERY_KEYS = {
  landing: {
    featureWork: 'landing-feature-work'
  }
}

export const baseNameApp = 'Adams Dev'