<script>
import SlotCard from "@/components/SlotCard.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  props: ["product"],
  components: { SlotCard },
  setup(props) {
    const active = ref(false);
    const pos = ref(0);
    const store = useStore();

    const item_cost = computed(() => {
      return props.product.price * props.product.count;
    });

    const deleteFromCart = () => {
      store.dispatch("deleteFromCart", props.product);
    };

    const handLeave = () => {
      active.value = false;
    };

    const getOffset = (e) => {
      active.value = true;
      const isSmall = window.innerWidth < 767 ? true : false;

      if (isSmall) {
        e.clientY < window.innerHeight / 2 ? (pos.value = 3) : (pos.value = 4);
      } else {
        if (e.clientY < 200) {
          pos.value = 0;
        } else if (e.clientY > 700) {
          pos.value = 1;
        } else {
          pos.value = 2;
        }
      }
    };
    return {
      props,
      active,
      pos,
      item_cost,
      deleteFromCart,
      handLeave,
      getOffset,
    };
  },
};
</script>

<template>
  <div class="cart-card">
    <div class="content">
      <div>
        <span
          class="productName"
          @mouseenter="getOffset($event)"
          @mouseleave="handLeave"
        >
          {{ props.product.name }}

          <transition name="slotTooltip">
            <slot-card
              v-show="active"
              :class="[
                { top: pos == 1 },
                { bottom: pos == 0 },
                { center: pos == 2 },
                { 'top-sm': pos == 4 },
                { 'bottom-sm': pos == 3 },
              ]"
            >
              <template v-slot:name>
                {{ props.product.name }}
              </template>
              <template v-slot:category>
                {{ props.product.category }}
              </template>
              <template v-slot:description_1>
                {{ props.product.description_1 }}
              </template>
              <template v-slot:description_2>
                {{ props.product.description_2 }}
              </template>
              <template v-slot:src>
                <img :src="props.product.url" />
              </template>
            </slot-card>
          </transition>
        </span>
      </div>
      <h4>數量: {{ props.product.count }}</h4>
      <h4>小計: ${{ item_cost }}</h4>
    </div>
    <div class="btn-container">
      <button class="btn btn-attention" @click="deleteFromCart()">刪除</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-card {
  display: flex;
  width: 90%;
  margin: 0 auto 1rem auto;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #444;

  .content {
    flex: 0 0 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    .productName {
      position: relative;
      color: #aa9e82;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    :nth-child(n) {
      flex: 0 0 33.33%;
    }
  }

  .btn-container {
    flex: 0 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .cart-card {
    flex-direction: column;
    width: 100%;
    margin: 0.5rem 0;
    .btn-container {
      border-top: 1px solid #555;
      padding: 1rem;
    }
  }
}
</style>