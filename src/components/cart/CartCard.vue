<script>
import SlotCard from "@/components/SlotCard.vue";
export default {
  props: ["product"],
  components: { SlotCard },
  data() {
    return {
      active: false,
      pos: 0,
    };
  },
  computed: {
    item_cost() {
      return this.product.price * this.product.count;
    },
  },
  methods: {
    deleteFromCart() {
      this.$store.dispatch("deleteFromCart", this.product);
    },
    getOffset(e) {
      const isSmall = window.innerWidth < 767 ? true : false;

      if (isSmall) {
        e.clientY < window.innerHeight / 2 ? (this.pos = 3) : (this.pos = 4);
      } else {
        if (e.clientY < 200) {
          this.pos = 0;
        } else if (e.clientY > 700) {
          this.pos = 1;
        } else {
          this.pos = 2;
        }
      }
    },
  },
};
</script>

<template>
  <div class="cart-card">
    <div class="content">
      <div>
        <span
          class="productName"
          @mouseenter="(active = true), getOffset($event)"
          @mouseleave="active = false"
        >
          {{ product.name }}

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
                {{ product.name }}
              </template>
              <template v-slot:category>
                {{ product.category }}
              </template>
              <template v-slot:description_1>
                {{ product.description_1 }}
              </template>
              <template v-slot:description_2>
                {{ product.description_2 }}
              </template>
              <template v-slot:src>
                <img :src="product.url" />
              </template>
            </slot-card>
          </transition>
        </span>
      </div>
      <h4>數量: {{ product.count }}</h4>
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