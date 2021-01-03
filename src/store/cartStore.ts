import { createStore } from "@stencil/store";

const { state } = createStore({
  items: [],
  total: 0
});

export default state;