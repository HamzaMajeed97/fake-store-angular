import { Product } from './product';

export interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}
