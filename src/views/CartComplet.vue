<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    onBeforeMount(() => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.push({ path: "/login" });
        }
      });
    });

    const transactionID = computed(() => store.getters.transactionID);
    const backHome = () => router.push({ path: "/" });
    return { transactionID, backHome };
  },
};
</script>

<template>
  <div class="cardComplet">
    <h1>付款完成，感謝您的支持</h1>
    <h3>
      訂單編號 : <span>{{ transactionID }}</span>
    </h3>
    <button class="btn btn-default" @click="backHome">繼續購物</button>
  </div>
</template>

<style lang="scss" scoped>
.cardComplet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 0;
    color: #fff;
  }

  h3 {
    color: #ccc;

    > span {
      color: #ccba84;
    }
  }

  button {
    margin-top: 1.5rem;
  }
}
</style>

