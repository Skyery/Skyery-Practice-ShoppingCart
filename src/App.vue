<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const userName = ref("");
    const activeLogout = ref(false);
    const store = useStore();
    const router = useRouter();

    onBeforeMount(() => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (user) {
          const _userName = apiGetFirebaseRequest
            .auth()
            .currentUser.email.split("@")[0];
          userName.value = _userName;
        } else {
          userName.value = "登入";
        }
      });
    });

    onMounted(() => {
      store.dispatch("Products/handInit");
      store.dispatch("updateCartFromLocalStorage");
    });

    const cart_Items_Length = computed(() => {
      return store.getters.cartItemsLength;
    });

    const Logout = () => {
      apiGetFirebaseRequest
        .auth()
        .signOut()
        .then(() => router.push({ path: "/login" }))
        .catch((err) => console.log(err.message));

      activeLogout.value = false;
      router.push({ path: "/" });
    };

    const AuthStatusMenu = () => {
      if (userName.value === "登入") return;
      activeLogout.value = true;
    };

    const AuthLink = () => {
      userName.value === "登入" ? router.push({ path: "/login" }) : "";
    };

    return {
      userName,
      activeLogout,
      cart_Items_Length,
      Logout,
      AuthStatusMenu,
      AuthLink,
    };
  },
};
</script>

<template>
  <div id="nav">
    <div class="nav-container">
      <div class="nav-left">
        <router-link class="logo" to="/">流亡購物網</router-link>
        <router-link to="/">商品</router-link>
      </div>
      <div class="nav-right">
        <ul>
          <li>
            <router-link to="/cart"
              >購物車 ({{ cart_Items_Length }})</router-link
            >
          </li>
          <li @mouseenter="AuthStatusMenu" @mouseleave="activeLogout = false">
            <a @click="AuthLink">
              {{ userName }}
            </a>
            <div v-show="activeLogout" class="btn-logout">
              <span @click="Logout">登出</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body,
ul,
li {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 1rem;
  list-style: none;
}
body {
  background-color: #222222;
}

#nav {
  box-sizing: border-box;
  width: 100%;
  background-color: #375a7f;
  padding: 1rem 1rem;

  .nav-container {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;

    a {
      font-weight: bold;
      color: #ccc;
      text-decoration: none;
      font-size: 1.2rem;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }

    .nav-left .logo {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      margin-right: 1.75rem;
      font-size: 1.25rem;
    }

    .nav-right > ul {
      display: flex;

      li {
        margin-right: 1.5rem;

        > a {
          cursor: pointer;
        }

        &:last-child {
          position: relative;
          margin: 0;
          z-index: 0;

          .btn-logout {
            position: absolute;
            padding: 0.5rem 1rem;
            height: auto;
            left: 50%;
            top: 100%;
            transform: translate(-50%);
            background-color: #222222;
            border: 1px solid #ccc;
            border-radius: 5px;
            z-index: 1;

            > span {
              white-space: nowrap;
              cursor: pointer;
              font-weight: bold;
              color: #ccc;
              font-size: 1rem;
              transition: color 0.2s;

              &:hover {
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  #nav .nav-container {
    max-width: 960px;
  }
}
@media screen and (max-width: 990px) {
  #nav .nav-container {
    max-width: 720px;
  }
}
@media screen and (max-width: 767px) {
  #nav .nav-container {
    max-width: 540px;
    padding: 0;

    .nav-left .logo {
      margin-right: 1rem;
    }

    .nav-right > ul li {
      margin-right: 0.75rem;
    }
  }
}

// Common Area
.btn {
  display: block;
  padding: 0.5rem 1rem;
  color: #aa9e82;
  background-color: transparent;
  border: 1px solid #ccba84;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.15rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #000;
    background-color: #aa9e82;
  }
}
.btn-default {
  color: #000;
  background-color: #aa9e82;

  &:hover {
    color: #aa9e82;
    background-color: transparent;
  }
}
.btn-attention {
  color: #fff;
  background-color: #f05e6a;

  &:hover {
    color: #fff;
    background-color: #a8444c;
  }
}
.btn-notAllowed {
  opacity: 0.3;
  pointer-events: none;
}
// Common Area -x
</style>
