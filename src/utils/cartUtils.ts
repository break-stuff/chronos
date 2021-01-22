import cartStore from '../store/cartStore';
import { Product } from './productUtils';

export type CartItem = {
    sku: string,
    name: string,
    price: number,
    quantity: number,
    imageUrl: string
};

export function getCart(): CartItem[] {
    return cartStore.items;
}

export function updateCart(sku: string, quantity: number) {
    let cartItem: CartItem = cartStore.items.find(x => x.sku === sku);

    if (!cartItem)
        return;

    cartItem.quantity = quantity;

    cartStore.items = [...cartStore.items];
}

export function addToCart(product: Product, quantity: number): void {
    let cartItem: CartItem = cartStore.items.find(x => x.sku === product.sku);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartStore.items = [...cartStore.items];
        return;
    }

    cartItem = {
        sku: product.sku,
        name: product.name,
        price: product.salePrice ? product.salePrice : product.listPrice,
        quantity: quantity,
        imageUrl: product.images[0]
    };

    cartStore.items = [...cartStore.items, cartItem];
}

export function removeFromCart(sku: string) {
    cartStore.items = cartStore.items.filter(x => x.sku !== sku);
}