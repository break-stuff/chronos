import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  items: [
    {
      "sku": "TW2R82900US",
      "name": "American Documents® 41mm Leather Strap Watch",
      "price": 495,
      "quantity": 1,
      "imageUrl": "https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,b_white/w_520,c_fit/Catalogs/timex-master-catalog/images/TW2R82900.png"
    },
    {
      "sku": "TW2U37800VQ",
      "name": "Waterbury Traditional Automatic Open-Heart Dial 42mm Stainless Steel Bracelet Watch",
      "price": 167,
      "quantity": 1,
      "imageUrl": "https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,b_white/w_900,c_fit/Catalogs/timex-master-catalog/images/TW2U37800.png"
    },
    {
      "sku": "TW2T71200VQ",
      "name": "Waterbury Classic Chronograph 40mm Leather Strap Watch",
      "price": 109.99,
      "quantity": 1,
      "imageUrl": "https://images.timex.com/image/upload/q_auto,f_auto/e_sharpen:120,b_white/w_520,c_fit/Catalogs/timex-master-catalog/images/TW2T71200.png"
    }
  ],
  total: 771.99,
  count: 3
});

onChange('items', value => {
  state.total = value.reduce((total, x) => total += (x.quantity * x.price), 0);
  state.count = value.reduce((total, x) => total += x.quantity, 0);
});

export default state;