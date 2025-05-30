/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { type Product } from '../models/Product';
import { response } from '../models/utils/constant';

interface PriceRange {
	min: number;
	max: number;
}

interface ProductStore {
	products: Product[];
	prodSelected: Product;
	valueChecked: string[];
	priceRange: PriceRange;
	setProducts: (products: Product[]) => void;
	setProduct: (product: Product) => void;
	setValueChecked: (valueChecked: string[]) => void;
	setPriceRange: (priceRange: PriceRange) => void;
	filterInfoProduct: (e: unknown) => void;
	filterProductsByMark: (marks: string[]) => void;
	filterByReviews: (reviews: number) => void;
	filterByPrice: (price: PriceRange) => void;
	showDetailsInfoProduct: (id: number) => void;
}

const useProductStore = create<ProductStore>((set) => ({
	products: [],
	prodSelected: {} as Product,
	valueChecked: [],
	priceRange: { min: 0, max: 5000 },
	setProduct: (product) => set({ prodSelected: product }),
	setProducts: (products) => set({ products }),
	setValueChecked: (valueChecked) => set({ valueChecked }),
	setPriceRange: (priceRange: any) => set({ priceRange }),
	filterInfoProduct: (e: any) =>
		set(() => {
			const newInfoFiltered = response.filter((product) => product.name.toLowerCase().includes(e.toLowerCase()));
			return { products: newInfoFiltered };
		}),
	filterProductsByMark: (marks) =>
		set(() => {
			if (marks.length === 0) return { products: response };
			const filteredProducts = response.filter((product) => marks.includes(product.mark));
			return { products: filteredProducts };
		}),
	filterByReviews: (reviews) =>
		set(() => {
			const filteredProducts = response.filter((product) => product.score === reviews);
			return { products: filteredProducts };
		}),
	filterByPrice: (priceRange) =>
		set(() => {
			const { min, max } = priceRange;
			const filteredProducts = response.filter((product) => product.price >= min && product.price <= max);
			return { products: filteredProducts };
		}),
	showDetailsInfoProduct: (id) =>
		set(() => {
			const product = response.find((product) => product.id === id);
			if (product) {
				return { products: [product] };
			}
			return { products: [] };
		}),
}));

export default useProductStore;
