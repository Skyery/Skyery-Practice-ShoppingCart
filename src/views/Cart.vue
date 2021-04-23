<script>
import CartCard from "@/components/cart/CartCard.vue";
import CartCardEmpty from "@/components/cart/CartCardEmpty.vue";
import CartTotalPayment from "@/components/cart/CartTotalPayment.vue";
export default {
  name: "Cart",
  components: { CartCard, CartTotalPayment, CartCardEmpty },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    cartCount() {
      return this.$store.getters.cartItemsLength;
    },
  },
  watch: {
    cartCount(newCount) {
      newCount === 0 ? true : false;
    },
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