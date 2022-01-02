export type Purchase = {
    companyName: string;
    category: string;
    totalCost: number;
    purchaseDate: string;
    purchaseSchedule: number;
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

export const serviceList: Service[] = [
    {
        name: "Affirm",
    },
    {
        name: "Klarna",
    },
    {
        name: "PayPal",
    },
    {
        name: "Splitit",
    },
    {
        name: "Perpay",
    },
]

export const categoryList: Category[] = [
    {
        name: "Cosmetics",
    },
    {
        name: "Electronics",
    },
    {
        name: "Travel",
    },
    {
        name: "Home & Furniture",
    },
    {
        name: "Clothing",
    },
]


export const serviceConfig: { [key: string]: string } = {
    "Affirm": '#6927e3',
    "AfterPay": '#50f2cf',
    "Klarna": '#fa93d4',
    "PayPal": '#080482',
    "Splitit": '#5d0494',
    "Perpay": '#65ab87'
}
