export interface ShopItem {
  id: number;
  img: string;
  hoverImg?: string;
  name: string;
  slug: string;
  price: number;
  prevPrice?: number;
  discount?: boolean;
  popularity?: number;
  rating?: number;
  quantity: number;
  category?: string;
  color?: string;
}
