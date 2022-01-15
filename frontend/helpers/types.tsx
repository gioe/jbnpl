import { ConnectionStatus, } from "./userEnums";
import { AccountSubtype, AccountType } from "./accountEnums";
import {
    PaymentCategory,
    TopLevelPaymentCategory
} from "./transactionEnums";

export type Challenge = {
    fieldName: string | null;
    guid: string;
    label: string;
    type: string;
}

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

export type Payment = {
    id: string;
    category: PaymentCategory;
    topLevelCategory: TopLevelPaymentCategory;
    transactedAt: Date;
    type: string;
    amount: number;
    description: string;
    guid: string;
    originalDescription: string;
    lender: string;
    itemName: string;
}

export type Account = {
    guid: string;
    id: string;
    memberGuid: string;
    userGuid: string;
    accountNumber: string;
    availableBalance: number;
    balance: number;
    currencyCode: string;
    institutionCode: string;
    name: string;
    type: AccountType;
    subType: AccountSubtype;
}

export type Membership = {
    guid: string;
    aggregatedAt: string;
    successfullyAggregatedAt: string;
    connectionStatus: ConnectionStatus;
    isAuthenticated: boolean;
    name: string;
    institutionCode: string;
    userGuid: string;
    challenges: Challenge[] | null;
}

export type Event = {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
}

export type ChallengeResponse = {
    guid: string;
    value: string;
}

export type CredentialRequest = {
    guid: string;
    value: string;
}

export type CredentialsUpdateRequest = {
    memberGuid: string;
    credentials: CredentialRequest[];
}

export type MembershipRequest = {
    institutionCode: string;
    credentials: CredentialRequest[];
}

export type Credentials = {
    fieldName: string;
    guid: string;
    label: string;
    displayOrder: number;
    fieldType: string;
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
    credentials?: Credentials[];
}

export type Service = {
    name: string;
}

export type Category = {
    name: string;
}

export type PaymentInfoRequest = {
    paymentId: string | undefined;
    itemName: string;
    totalCost: number;
    paymentNumber: number;
    totalMonthlyPayments: number;
    apr: number;
    // firstPaymentDate: string | null;
}
