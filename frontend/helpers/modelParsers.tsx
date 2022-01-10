import {Account, Membership, Transaction} from "./types";
import {ConnectionStatus} from "./userEnums";

export const parseMemberships = (fetchedMemberships: any) => {
    return fetchedMemberships.response.map((value: { user_guid: string, guid: any; aggregated_at: any; is_being_aggregated: any; successfully_aggregated_at: any; connection_status: ConnectionStatus; is_authenticated: any; name: any; institution_code: any; }) => {
        return {
            guid: value.guid,
            aggregatedAt: value.aggregated_at,
            isBeingAggregated: value.is_being_aggregated,
            successfullyAggregatedAt: value.successfully_aggregated_at,
            connectionStatus: value.connection_status,
            isAuthenticated: value.is_authenticated,
            name: value.name,
            institutionCode: value.institution_code,
            userGuid: value.user_guid
        }
    }) as Membership[]
}

export const parseAccounts = (fetchedAccounts: any) => {
    return fetchedAccounts.map((value: { guid: any; id: any; member_guid: any; user_guid: any; account_number: any; available_balance: any; balance: any; currency_code: any; institution_code: any; name: any; type: any; subtype: any; }) => {
        return {
            guid: value.guid,
            id: value.id,
            memberGuid: value.member_guid,
            userGuid: value.user_guid,
            accountNumber: value.account_number,
            availableBalance: value.available_balance,
            balance: value.balance,
            currencyCode: value.currency_code,
            institutionCode: value.institution_code,
            name: value.name,
            type: value.type,
            subType: value.subtype,
        }
    }) as Account[]
}

export const parseTransactions = (fetchedTransactions: any) => {
    return fetchedTransactions.map((value: { category: any; created_at: any; date: any; posted_at: any; top_level_category: any; transacted_at: any; type: any; account_guid: any; amount: any; description: any; guid: any; is_expense: any; is_bill_pay: any; is_direct_deposit: any; is_fee: any; is_income: any; is_overdraft_fee: any; is_subscription: any; member_guid: any; merchant_guid: any; original_description: any; user_guid: any; }) => {
        return {
            category: value.category,
            createdAt: value.created_at,
            date: value.date,
            postedAt: value.posted_at,
            topLevelCategory: value.top_level_category,
            transactedAt: value.transacted_at,
            type: value.type,
            accountGuid: value.account_guid,
            amount: value.amount,
            description: value.description,
            guid: value.guid,
            isExpense: value.is_expense,
            isBillPay: value.is_bill_pay,
            isDirectDeposit: value.is_direct_deposit,
            isFee: value.is_fee,
            isIncome: value.is_income,
            isOverdraftFee: value.is_overdraft_fee,
            isSubscription: value.is_subscription,
            memberGuid: value.member_guid,
            merchantGuid: value.merchant_guid,
            originalDescription: value.original_description,
            userGuid: value.user_guid
        }
    }) as Transaction[]
}
