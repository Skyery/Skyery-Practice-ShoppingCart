<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Register",
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const Register = () => {
      apiGetFirebaseRequest
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          router.replace({ path: "/login" });
        })
        .catch((err) => console.log(err.message));
    };
    return { email, password, Register };
  },
};
</script>

<template>
  <div class="register">
    <h1>註冊</h1>
    <form @submit.prevent="Register">
      <div>
        <label>Email : </label>
        <input type="text" placeholder="請輸入Email" v-model="email" />
      </div>
      <div>
        <label>密碼 : </label>
        <input type="password" placeholder="請輸入密碼" v-model="password" />
      </div>
      <input type="submit" value="註冊" />
      <p>
        你已經擁有帳戶?
        <router-link to="/login"> 登入帳戶</router-link>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.register {
  box-sizing: border-box;

  > h1 {
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
      }
      > input {
        width: 100%;
        flex: 0 0 75%;
        color: #ccc;
        background-color: #434343;
        border: 1px solid #555;
        border-radius: 3px;
        line-height: 1.5;
        padding-left: 0.5rem;

        &:focus {
          border-color: #aa9e82;
        }
      }
    }

    > input {
      width: 100px;
      margin: 0 auto 1rem auto;
      padding: 5px;
      color: #ccc;
      background-color: #434343;
      border: 2px solid #555;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        box-shadow: 0 2px 8px #666;
      }
    }

    > p {
      margin: 0;
      color: #ccc;

      > a {
        text-decoration: none;
        color: #aa9e82;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media screen and (max-width: 564px) {
  .register > form {
    max-width: 100%;
    margin: 0;

    > div {
      flex-direction: column;

      > input {
        flex: 0 0 100%;
      }
    }
  }
}
</style>