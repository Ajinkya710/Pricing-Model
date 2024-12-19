export interface PricingDetail {
  id: string;
  productId: string;
  profileId: string;
  amount: number;
  adjustment: number;
  newAmount: number;
  isValid: boolean;
}
