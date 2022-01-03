export type User = {
    name: null | string;
    email: string;
    password: string;
}

export type Purchase = {
    companyName: string;
    category: string;
    totalCost: number;
    purchaseDate: string;
    purchaseSchedule: number;
}

export type Institution = {
    code: string;
    name: string;
    logoUrlSmall: string;
    logoUrlMedium: string;
    url: string;
    supportsAccountIdentification: boolean;
    supportsAccountStatement: boolean;
    supportsAccountVerification: boolean;
    supportsOauth: boolean;
    supportsTransactionHistory: boolean;
}

export type Service = {
    name: string;
}

export type ServiceSelectionState = {
    service: Service;
    isSelected: boolean;
}

export type Category = {
    name: string;
}
