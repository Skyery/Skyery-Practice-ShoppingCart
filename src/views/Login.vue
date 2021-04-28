<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const isLogin = ref(true);
    const title = ref("登入");
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const Login = () => {
      apiGetFirebaseRequest
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          router.go(-1);
        })
        .catch((err) => console.log(err.message));
    };

    const Register = () => {
      apiGetFirebaseRequest
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          toggleIsLogin();
        })
        .catch((err) => console.log(err.message));
    };

    const toggleIsLogin = () => {
      isLogin.value = !isLogin.value;
      isLogin.value == true ? (title.value = "登入") : (title.value = "註冊");
    };

    return { title, email, password, Login, isLogin, toggleIsLogin, Register };
  },
};
</script>

<template>
  <div class="login">
    <h1>{{ title }}</h1>
    <div class="formContainer">
      <transition name="login">
        <form v-show="isLogin" @submit.prevent="Login">
          <div>
            <label>Email : </label>
            <input type="text" placeholder="請輸入Email" v-model="email" />
          </div>
          <div>
            <label>密碼 : </label>
            <input
              type="password"
              placeholder="請輸入密碼"
              v-model="password"
            />
          </div>
          <input type="submit" value="登入" />
          <p>
            需要一個新帳戶嗎?
            <a href="javascript:;" @click="toggleIsLogin"> 建立帳戶</a>
          </p>
        </form>
      </transition>
      <transition name="login">
        <form v-show="!isLogin" @submit.prevent="Register">
          <div>
            <label>Email : </label>
            <input type="text" placeholder="請輸入Email" v-model="email" />
          </div>
          <div>
            <label>密碼 : </label>
            <input
              type="password"
              placeholder="請輸入密碼"
              v-model="password"
            />
          </div>
          <input type="submit" value="註冊" />
          <p>
            你已經擁有帳戶?
            <a href="javascript:;" @click="toggleIsLogin"> 登入帳戶</a>
          </p>
        </form>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-enter-active {
  transition: opacity 0.25s ease-in;
  transition-delay: 0.25s;
}
.login-leave-active {
  transition: opacity 0.25s ease-in;
}
.login-enter-from,
.login-leave-to {
  opacity: 0;
}
.login-enter-to,
.login-leave-from {
  opacity: 1;
}

.login {
  box-sizing: border-box;

  > h1 {
    color: #ccba84;
  }

  .formContainer {
    position: relative;
    width: 100%;

    > form {
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      max-width: 400px;
      top: 0;
      left: 50%;
      transform: translate(-50%);
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
}

@media screen and (max-width: 564px) {
  .login > form {
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
