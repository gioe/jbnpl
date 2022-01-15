import {Account, Membership, Payment, Event} from "./types";
import {ConnectionStatus} from "./userEnums";

export const parseMemberships = (fetchedMemberships: any) => {
    return fetchedMemberships.response.map((value: { user_guid: string, guid: any; aggregated_at: any; successfully_aggregated_at: any; connection_status: ConnectionStatus; is_authenticated: any; name: any; institution_code: any; }) => {
        return {
            guid: value.guid,
            aggregatedAt: value.aggregated_at,
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
export const parsePayments = (fetchedPayments: any) => {
    const payments = fetchedPayments.map((value: { _id: any; category: any; top_level_category: any; transacted_at: any; type: any; amount: any; description: any; guid: any; original_description: any; }) => {
        return {
            id: value._id,
            category: value.category,
            topLevelCategory: value.top_level_category,
            transactedAt: value.transacted_at,
            type: value.type,
            amount: value.amount,
            description: value.description,
            guid: value.guid,
            originalDescription: value.original_description,
        }
    }) as Payment[]

    const formattedDescription = (value: Payment) => {
        return value.description + ":" + " " + "$" + value.amount.toString()
    }

    const events = payments.map(value => {
        return {
            title: formattedDescription(value),
            start: value.transactedAt,
            end: value.transactedAt,
            allDay: true,
            resource: null,
        }
    }) as Event[]

    return {
        payments,
        events
    }
}
