<script>
import { apiGetFirebaseRequest } from "@/api/index.js";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const inputMessage = ref("");
    const state = reactive({
      userName: "",
      messages: [],
    });

    onBeforeMount(() => {
      apiGetFirebaseRequest.auth().onAuthStateChanged((user) => {
        if (user) {
          const _userName = apiGetFirebaseRequest
            .auth()
            .currentUser.email.split("@")[0];
          state.userName = _userName;
        } else {
          router.push({ path: "/login" });
        }
      });
    });

    const SendMessage = () => {
      const messagesRef = apiGetFirebaseRequest.database().ref("messages");
      if (inputMessage.value === "" || inputMessage.value === null) return;
      const message = {
        userName: state.userName,
        content: inputMessage.value,
      };
      messagesRef.push(message);
      inputMessage.value = "";
    };

    onMounted(() => {
      const messagesRef = apiGetFirebaseRequest.database().ref("messages");
      messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        if (data === null) return;
        let _messages = [];
        Object.keys(data).forEach((key) => {
          _messages.push({
            id: key,
            userName: data[key].userName,
            content: data[key].content,
          });
        });
        state.messages = _messages;
      });
    });

    return { state, inputMessage, SendMessage };
  },
};
</script>

<template>
  <header>
    <h1>
      你好, <span>{{ state.userName }}</span> 今晚想聊點什麼?
    </h1>
  </header>
  <section class="chatContainer">
    <div
      v-for="message in state.messages"
      :key="message.key"
      :class="
        message.userName == state.userName ? 'message current-user' : 'message'
      "
    >
      <div class="message-inner">
        <div class="userName">{{ message.userName }}</div>
        <div class="content">{{ message.content }}</div>
      </div>
    </div>
  </section>
  <footer>
    <form @submit.prevent="SendMessage">
      <input type="text" v-model="inputMessage" placeholder="請輸入訊息..." />
      <input type="submit" value="送出" />
    </form>
  </footer>
</template>

<style lang="scss" scoped>
header > h1 {
  color: #eee;

  > span {
    color: #ccba84;
  }
}
.chatContainer {
  border-radius: 24px 24px 0px 0px;
  background-color: #303030;
  padding: 2rem;
  .message {
    display: flex;
    margin-bottom: 15px;

    .message-inner {
      .userName {
        color: #aa9e82;
        font-size: 1.25rem;
        margin-bottom: 5px;
        padding: 0 15px;
      }
      .content {
        display: inline-block;
        padding: 10px 20px;
        background-color: #444;
        border-radius: 999px;
        color: #eee;
        font-size: 18px;
        line-height: 1.2em;
        text-align: left;
      }
    }
    &.current-user {
      margin-top: 30px;
      justify-content: flex-end;
      text-align: right;
      .message-inner {
        max-width: 75%;
        .content {
          color: #333;
          font-weight: bold;
          background-color: #ccc;
        }
      }
    }
  }
}
footer {
  position: sticky;
  bottom: 0px;
  background-color: gray;
  padding: 30px;
  border-radius: 0 0 24px 24px;
  form {
    display: flex;
    input[type="text"] {
      flex: 1 1 100%;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px 0px 0px 8px;

      color: #333;
      font-size: 18px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      background-color: #eee;
      transition: 0.4s;
      &::placeholder {
        color: #888;
        transition: 0.4s;
      }
    }

    input[type="submit"] {
      appearance: none;
      border: none;
      outline: none;
      background: none;
      display: block;
      padding: 10px 15px;
      border-radius: 0px 8px 8px 0px;
      background-color: #333;
      color: #ccba84;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>