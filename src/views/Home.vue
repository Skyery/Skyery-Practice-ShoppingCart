<script>
import ProductTable from "@/components/product/ProductTable.vue";
import Footer from "@/components/Footer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: { ProductTable, Footer },
  setup() {
    const store = useStore();

    const getProducts = computed(() => {
      return store.getters["Products/getProducts"];
    });

    return { getProducts };
  },
};
</script>

<template>
  <h1>商品資訊</h1>
  <div class="home">
    <div class="product-card-container">
      <table>
        <thead>
          <tr>
            <th>商品</th>
            <th>價格</th>
            <th>加入購物車</th>
          </tr>
        </thead>
        <ProductTable
          v-for="product in getProducts"
          :key="product.id"
          :product="product"
        />
      </table>
    </div>
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: #ccba84;
}

.home {
  box-sizing: border-box;

  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto 6rem auto;
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
        width: 40%;
      }
      thead > tr > th:nth-child(2),
      thead > tr > th:nth-child(3) {
        width: 30%;
      }

      td {
        width: 20px;
      }
    }
  }
}

.footer-container {
  background-color: #375a7f;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1200px) {
  .home .product-card-container {
    max-width: 960px;
  }
}
@media screen and (max-width: 990px) {
  .home .product-card-container {
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  .home .product-card-container {
    max-width: 540px;
  }
}
@media screen and (max-width: 564px) {
  .home .product-card-container {
    padding: 0;
  }
}
</style>