export interface ButtonTypes {
  totalValue: number;
  setTotalValue: React.Dispatch<React.SetStateAction<number>>;
  currentOperator: string;
  setCurrentOperator: React.Dispatch<React.SetStateAction<string>>;
  newInputValue: number;
  setNewInputValue: React.Dispatch<React.SetStateAction<number>>;
}
