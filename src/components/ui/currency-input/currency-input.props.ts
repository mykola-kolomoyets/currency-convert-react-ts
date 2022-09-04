/* eslint-disable no-unused-vars */
export interface CurrencyInputProps {
  /**
   * FIELDS
   */
  label?: string;
  currency: string;
  amount: number;
  currencies: string[];

  secondCurrency?: string;
  rate?: number;

  /**
   * METHODS
   */
  onCurrencyChange: (selectedCurrency: string) => void;
  onAmountChange: (amount: number) => void;
}