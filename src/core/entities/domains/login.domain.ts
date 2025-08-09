export type LoginSuccess = {
    token: string;
    refresh_token: string;
}

export type LoginTooManyRequest = {
   retry_after_seconds: number;
}

export type LoginPostDomain = LoginSuccess | LoginTooManyRequest;
