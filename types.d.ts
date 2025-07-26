export declare interface ISubscriptionPlan {
    id: string;
    name: string;
    planId: string;
    description: string;
    renews: string;
    period: number; // in months
    price: number; // in USD
}

export type NewSubscriptionPlan = Partial<Omit<ISubscriptionPlan, "id">>;