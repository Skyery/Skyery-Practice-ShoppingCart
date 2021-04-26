<script>
import CartCard from "@/components/cart/CartCard.vue";
import CartCardEmpty from "@/components/cart/CartCardEmpty.vue";
import CartTotalPayment from "@/components/cart/CartTotalPayment.vue";
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "Cart",
  components: { CartCard, CartTotalPayment, CartCardEmpty },
  setup() {
    const store = useStore();

    const items = computed(() => {
      return store.getters.cartItems;
    });

    const cartCount = computed(() => {
      return store.getters.cartItemsLength;
    });

    watch(cartCount, (newCount) => {
      newCount === 0 ? true : false;
    });

    return { items, cartCount };
  },
};
</script>

<template>
  <h1>購物車</h1>
  <CartCard v-for="product in items" :key="product.id" :product="product" />
  <CartTotalPayment v-if="cartCount" />
  <CartCardEmpty v-else />
</template>

<style lang="scss" scoped>
h1 {
  color: #ccba84;
}
</style>