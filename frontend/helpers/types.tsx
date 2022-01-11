import { ConnectionStatus, } from "./userEnums";
import { AccountSubtype, AccountType } from "./accountEnums";
import { TopLevelTransactionCategory, TransactionCategory } from "./transactionEnums";

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

export type Transaction = {
    category: TransactionCategory;
    createdAt: string;
    date:string;
    postedAt: string;
    topLevelCategory: TopLevelTransactionCategory;
    transactedAt: string;
    type: string;
    accountGuid: string;
    amount: number;
    description: string;
    guid: string;
    isExpense: boolean;
    isBillPay: boolean;
    isDirectDeposit: boolean;
    isFee: boolean;
    isIncome: boolean;
    isOverdraftFee: boolean;
    isSubscription: boolean;
    memberGuid: string;
    merchantGuid: string;
    originalDescription: string;
    userGuid: string;
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
    isBeingAggregated: boolean;
    successfullyAggregatedAt: string;
    connectionStatus: ConnectionStatus;
    isAuthenticated: boolean;
    name: string;
    institutionCode: string;
    userGuid: string;
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

export type ServiceSelectionState = {
    service: Service;
    isSelected: boolean;
}

export type Category = {
    name: string;
}
