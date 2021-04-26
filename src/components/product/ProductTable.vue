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

    const product_count = computed(() => {
      return store.getters.productCount(props.product);
    });

    const removeFromCart = () => {
      store.dispatch("removeFromCart", props.product);
    };

    const addToCart = () => {
      store.dispatch("addToCart", props.product);
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
      product_count,
      removeFromCart,
      addToCart,
      handLeave,
      getOffset,
    };
  },
};
</script>

<template>
  <tbody>
    <tr>
      <th>
        <img :src="props.product.url" />
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
      </th>
      <td>
        <div class="price">$ {{ props.product.price }}</div>
      </td>
      <td>
        <div class="btn-container">
          <button @click="removeFromCart()">-</button>
          <span>{{ product_count }}</span>
          <button @click="addToCart()">+</button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.slotTooltip-enter-active,
.slotTooltip-leave-active {
  transition: opacity 0.15s ease-in;
}

.slotTooltip-enter-from,
.slotTooltip-leave-to {
  opacity: 0;
}
.slotTooltip-enter-to,
.slotTooltip-leave-from {
  opacity: 1;
}

tbody {
  border-bottom: 1px solid #434343;

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #444;
  }

  > tr > th {
    text-align: left;

    img {
      margin: 0 6rem;
      width: 70px;
      height: auto;
      vertical-align: middle;
    }
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
  }

  > tr > th,
  > tr > td {
    padding: 12px;

    .price {
      color: #ccc;
      font-weight: bold;
      font-size: 20px;
    }

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;

      > button {
        width: 30px;
        height: 30px;
        font-size: 16px;
        margin: 0 1.5rem;
        border: none;
        border-radius: 50%;
        background-color: #ccc;
        transition: background-color 0.15s ease;

        &:hover {
          background-color: #999;
        }
        &:active {
          background-color: #555;
        }
      }

      > span {
        color: #ccc;
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  tbody > tr > th > img {
    margin: 0 3rem;
  }
}
@media screen and (max-width: 990px) {
  tbody > tr > th > img {
    margin: 0 1.5rem;
  }

  tbody > tr > td .btn-container > button {
    width: 25px;
    height: 25px;
    margin: 0 1rem;
  }
}
@media screen and (max-width: 767px) {
  tbody > tr > th > img {
    display: none;
  }
}
</style>