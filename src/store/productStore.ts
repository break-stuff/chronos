import { createStore } from "@stencil/store";

const { state } = createStore({
    products: []
});

export default state;