<script>
import { onBeforeMount, reactive, ref, watch } from "vue";
import { apiGetFirebaseRequest } from "@/api/index.js";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userData = reactive({
      name: "",
      email: "",
      phone: "",
      address: "",
      transactionID: 0,
    });
    const isCheck = ref(true);
    const _isCheck = reactive({
      phone: false,
      address: false,
    });
    const isNum = /^[0-9]*[1-9][0-9]*$/;
    const router = useRouter();

    onBeforeMount(() => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (user) {
          const userEmail = apiGetFirebaseRequest.auth().currentUser.email;
          const userName = userEmail.split("@")[0];

          userData.name = userName;
          userData.email = userEmail;
        } else {
          router.push({ path: "/login" });
        }
      });
    });

    setTimeout(() => {
      watch(
        () => userData.phone,
        (newVal) => {
          const checkNum = isNum.test(newVal);
          if (newVal.length < 8) {
            _isCheck.phone = false;
            return alert("電話不能小於8個字元");
          } else if (!checkNum) {
            _isCheck.phone = false;
            return alert("電話須為數字");
          }
          _isCheck.phone = true;
        }
      );
      watch(
        () => userData.address,
        (newVal) => {
          if (newVal.length < 1) {
            _isCheck.address = false;
            return alert("收件地址為必填");
          }
          _isCheck.address = true;
        }
      );
    }, 1000);

    watch(_isCheck, (newVal) => {
      newVal.phone && newVal.address
        ? (isCheck.value = false)
        : (isCheck.value = true);
    });

    return { userData, isCheck };
  },
  methods: {
    orderData() {
      this.$store.dispatch("addtoOrder", this.userData);
      this.$router.push({ path: "/checkOut" });
    },
  },
};
</script>

<template>
  <div class="cart-order">
    <h1>填寫訂單資料</h1>
    <form @submit.prevent="orderData">
      <div>
        <label>收件人姓名</label>
        <input
          type="text"
          placeholder="請輸入收件人姓名"
          v-model="userData.name"
        />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="請輸入Email" v-model="userData.email" />
      </div>
      <div>
        <label>電話</label>
        <input
          type="text"
          placeholder="請輸入電話"
          v-model.lazy="userData.phone"
        />
      </div>
      <div>
        <label>地址</label>
        <input
          type="text"
          placeholder="請輸入收件地址"
          v-model.lazy="userData.address"
        />
      </div>
      <div class="btn-container">
        <router-link class="btn" to="/cart">回購物車</router-link>
        <button
          type="submit"
          class="btn btn-default"
          :class="{ 'btn-notAllowed': isCheck }"
        >
          提交訂單
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.cart-order {
  h1 {
    color: #ccba84;
  }

  > form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #353535;
    border: 2px solid #444;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aa9e82;
      margin-bottom: 1.5rem;

      > label {
        width: 100%;
        flex: 0 0 25%;
        text-align: left;

        &::after {
          content: " *";
          color: #f05e6a;
        }
      }
      > input {
        width: 100%;
        flex: 0 0 75%;
        padding-left: 0.5rem;
        color: #ccc;
        background-color: #434343;
        border: 1px solid #555;
        border-radius: 3px;
        line-height: 1.5;

        &:focus {
          border-color: #aa9e82;
        }
      }
    }

    .btn-container {
      margin: 0;

      a:first-child {
        margin-right: 2rem;
      }

      a:last-child {
        position: relative;

        > button {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border: none;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .cart-order > form {
    max-width: 500px;

    > div {
      flex-direction: column;

      > input {
        box-sizing: border-box;
        margin-top: 0.5rem;
        padding-left: 0.5rem;
        line-height: 1.5;
      }
    }

    .btn-container {
      > a:first-child {
        box-sizing: border-box;
        width: 100%;
        margin: 0 0 1rem 0;
      }

      > button {
        width: 100%;
      }
    }
  }
}
</style>