<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: ["order"],
  setup(props) {
    const store = useStore();
    const cart_total = computed(() => store.getters.cartTotal);

    return { cart_total, props };
  },
  methods: {
    complet() {
      const transactionID = this.getTransactionID();
      this.$store.dispatch("addTransactionID", transactionID);
      const products = this.$store.getters.cartItems;
      const cartTotal = this.$store.getters.cartTotal;
      const orderRef = apiGetFirebaseRequest.database().ref("orderList");
      const order = {
        transactionID: this.props.order.transactionID,
        userData: {
          userName: this.props.order.name,
          userEmail: this.props.order.email,
          userPhone: this.props.order.phone,
          userAddress: this.props.order.address,
        },
        orderContent: {
          product: [],
          total: cartTotal,
        },
      };

      products.forEach((el) => {
        const product = {
          productName: el.name,
          productCount: el.count,
          productPrice: el.price,
        };
        order.orderContent.product.push(product);
      });

      orderRef.push(order);

      this.$store.dispatch("clearCart");
      this.$router.push("/complet");
    },
    getTransactionID() {
      const formatNumber = (n) => {
        n = n.toString();
        return n[1] ? n : "0" + n;
      };

      const getDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        return (
          [year, month, day].map(formatNumber).join("") +
          [hour, min, sec].map(formatNumber).join("")
        );
      };
      return getDate(new Date());
    },
  },
};
</script>

<template>
  <div class="checkOutTotal">
    <table>
      <tr>
        <td>收件人姓名</td>
        <td>{{ props.order.name }}</td>
      </tr>
      <tr>
        <td>電子信箱</td>
        <td>{{ props.order.email }}</td>
      </tr>
      <tr>
        <td>收件人電話</td>
        <td>{{ props.order.phone }}</td>
      </tr>
      <tr>
        <td>收件人地址</td>
        <td>{{ props.order.address }}</td>
      </tr>
    </table>
    <div class="checkOutTotal-container">
      <span>總計 : ${{ cart_total }}</span>
      <button class="btn btn-default" @click="complet">確認付款</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkOutTotal {
  box-sizing: border-box;

  table {
    max-width: 1140px;
    margin: 2rem auto 0 auto;
    width: 100%;
    color: gray;
    background-color: #303030;
    border-collapse: collapse;

    tr {
      display: flex;
      justify-content: space-around;
      text-align: left;
      padding: 0.7rem 0;
      border-bottom: 1px solid #434343;

      &:last-child {
        border: none;
      }

      &:hover {
        background-color: #444;
      }
    }

    td {
      font-size: 1.2rem;

      &:nth-child(2n + 1) {
        color: #ddd;
        font-weight: bold;
        width: 20%;
      }
      &:nth-child(2n) {
        color: #ccc;
        width: 60%;
      }
    }
  }

  .checkOutTotal-container {
    display: flex;
    justify-content: end;
    max-width: 1140px;
    width: 100%;
    margin: 1.5rem auto;

    > span {
      font-weight: bold;
      font-size: 1.7rem;
      color: #aa9e82;
    }

    > button,
    span {
      margin-right: 1rem;
    }
  }
}

@media screen and (max-width: 1200px) {
  .checkOutTotal table,
  .checkOutTotal .checkOutTotal-container {
    max-width: 960px;
  }
}
@media screen and (max-width: 990px) {
  .checkOutTotal table,
  .checkOutTotal .checkOutTotal-container {
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  .checkOutTotal table,
  .checkOutTotal .checkOutTotal-container {
    max-width: 540px;
  }
}
</style>