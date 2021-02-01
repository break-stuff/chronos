
import { addToCart, getCart, removeFromCart, updateCart } from '../cartUtils';
import { Product } from '../productUtils';

describe('updateCart', () => {
    it('should update existing cart quantity of existing cart items', async () => {
        updateCart('TW2R82900US', 5);
        const cart = getCart();
        const cartItem = cart.find(x => x.sku === 'TW2R82900US');
        
        expect(cartItem.quantity).toBe(5);
    });
});

describe('addToCart', () => {
    const product: Product = {
        "id": 16,
        "url": "https://www.timex.com/black-leather-watch-case-for-2-watches-plus-passport/Black-Leather-Watch-Case-for-2-Watches-Plus-Passport.html?dwvar_Black-Leather-Watch-Case-for-2-Watches-Plus-Passport_color=Black&cgid=accessories#start=1",
        "categoryId": 4,
        "sku": "TW7C821000L",
        "listPrice": 69.00,
        "salePrice": 0,
        "rating": 3.0,
        "name": "Leather Folio Case and Passport Holder For Two Watches",
        "description": "Be ready for each new adventure. Designed with the jet-setter in mind, our black leather watch case with soft-touch lining holds two watches and your passport, keeping your watches safe and passport secure while traveling.",
        "images": [
            "https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,b_white/w_520,c_fit/Catalogs/timex-master-catalog/images/TW7C82100.png",
            "https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,b_white/w_900,c_fit/Catalogs/timex-master-catalog/images/TW7C82100_B.png"
        ],
        "isInStock": false,
        "accessory": null,
        "relatedProducts": []
    };

    it('should add new item to cart', async () => {
        addToCart(product, 1);
        const cart = getCart();
        const cartItem = cart.find(x => x.sku === 'TW2R82900US');
        
        expect(cartItem).toBeDefined();
    });

    it('should increase the quantity of an existing cart item', async () => {
        addToCart(product, 1);
        const cart = getCart();
        expect(cart.find(x => x.sku === 'TW7C821000L').quantity).toBe(2);
    });
});


describe('removeFromCart', () => {
    it('should remove an existing cart item', async () => {
        removeFromCart('TW2R82900US');
        const cart = getCart();
        const cartItem = cart.find(x => x.sku === 'TW2R82900US');
        
        expect(cartItem).toBeUndefined();
    });
});
