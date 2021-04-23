<template>
  <div class="cart-card-empty">
    <h2>購物車裡什麼也沒有！</h2>
    <router-link class="btn btn-default" to="/">來去逛逛</router-link>
  </div>
</template>

<style lang="scss" scoped>
.cart-card-empty {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    margin: 0 0 1rem 0;
    color: #fff;
  }
}
</style>