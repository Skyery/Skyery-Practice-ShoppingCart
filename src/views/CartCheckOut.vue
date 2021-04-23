<script>
import CartCheckProducts from "@/components/cart/CartCheckProducts.vue";
import CartCheckUser from "@/components/cart/CartCheckUser.vue";
import { apiGetFirebaseRequest } from "@/api/index.js";
import { useStore } from "vuex";
import { onBeforeMount, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { CartCheckProducts, CartCheckUser },
  setup() {
    const store = useStore();
    const router = useRouter();
    const order = computed(() => store.getters.orderList);
    const cart = computed(() => store.getters.cartItems);

    onMounted(() => {
      if (JSON.stringify(order.value) === "{}") router.go(-1);
    });

    onBeforeMount(() => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.push("/login");
        }
      });
    });

    return { order, cart };
  },
};
</script>

<template>
  <h1>確認訂單</h1>
  <div class="checkOut">
    <div class="product-card-container">
      <table>
        <thead>
          <tr>
            <th>商品</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <CartCheckProducts
          v-for="product in cart"
          :key="product.id"
          :product="product"
        />
      </table>
    </div>
  </div>
  <CartCheckUser :order="order" />
</template>

<style lang="scss" scoped>
h1 {
  color: #ccba84;
}
.checkOut {
  box-sizing: border-box;

  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

    table {
      width: 100%;
      color: gray;
      background-color: #303030;
      border-collapse: collapse;

      thead > tr > th {
        padding: 12px;
        border-bottom: 2px solid #ccc;
        border-bottom-width: 2px;
      }

      thead > tr > th:nth-child(1) {
        width: 33.33%;
      }
      thead > tr > th:nth-child(2),
      thead > tr > th:nth-child(3) {
        width: 33.33%;
      }

      td {
        width: 20px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .checkOut .product-card-container {
    max-width: 960px;
  }
}
@media screen and (max-width: 990px) {
  .checkOut .product-card-container {
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  .checkOut .product-card-container {
    max-width: 540px;
  }
}
@media screen and (max-width: 564px) {
  .checkOut .product-card-container {
    padding: 0;
  }
}
</style>