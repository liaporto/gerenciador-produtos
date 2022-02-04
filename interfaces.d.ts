interface IProduct {
  [key: string]: string | number;
}

interface Product extends IProduct {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalValue: number;
}

interface FormRegisteredProduct {
  name: string;
  quantity: number;
  unitPrice: number;
  totalValue: number;
}