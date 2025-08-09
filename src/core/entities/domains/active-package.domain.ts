export type TDetailPackageMapper = {
    to_all_operator: string;
    to_member: string;
}

export type TFamilyQuotaDetail = {
    quota: string;
    voice: TDetailPackageMapper;
    sms: TDetailPackageMapper;
}

export type TChannelItem = {
    name: string;
    icon_url: string;
}

export type TMinipackTV = {
    channels: TChannelItem[];
    additional_channel_count: number;
}

export type TPackageInternet = {
    quota_total: string;
    quota_usage?: string;
    quota_unit: string;
    quota_percentage: number;
    due_date?: string;
}

export type TActivePackage = {
    package_name: string;
    internet: TPackageInternet;
    last_updated: string;
}

export type TPostPaidPackage = {
    package_name_hssp: string;
    orbit_quota: string;
    family_quota?: string;
    digital_lifestyle?: TChannelItem[];
    minipack_tv?: TMinipackTV;
    family_quota_details?: TFamilyQuotaDetail;
}

export type ActivePackageDomain = 
    (TActivePackage & TPostPaidPackage)
  | TActivePackage