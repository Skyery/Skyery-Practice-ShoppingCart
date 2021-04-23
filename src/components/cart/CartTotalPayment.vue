<script>
import { computed, ref } from "vue";
import store from "@/store";
import { apiGetFirebaseRequest } from "@/api/index.js";
export default {
  setup() {
    const routerPath = ref("");
    const cart_total = computed(() => {
      return store.getters.cartTotal;
    });

    const CheckAuthStatus = () => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (user) {
          routerPath.value = "order";
        } else {
          routerPath.value = "login";
        }
      });
    };

    return { cart_total, CheckAuthStatus, routerPath };
  },
};
</script>

<template>
  <div class="cartTotal">
    <h3>總計: ${{ cart_total }}</h3>

    <div class="btn-container">
      <router-link class="btn" to="/">繼續選購</router-link>
      <router-link
        class="btn btn-default"
        :to="`/${routerPath}`"
        @click="CheckAuthStatus"
        >前往結帳</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cartTotal {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding: 1rem 0;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;

  h3 {
    margin: 0 0 1rem 0;
    color: #fff;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #555;
    padding-top: 1rem;

    > a:first-child {
      margin-right: 2rem;
    }
  }
}

@media (max-width: 500px) {
  .cartTotal {
    width: 100%;
  }
}
</style>