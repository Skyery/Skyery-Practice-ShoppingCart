<script>
import SlotCard from "@/components/SlotCard.vue";
export default {
  props: ["product"],
  components: { SlotCard },
  data() {
    return {
      active: false,
      isLeft: false,
    };
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch("removeFromCart", this.product);
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.product);
    },
    getOffset(e) {
      if (e.pageX < window.innerWidth / 2) {
        this.isLeft = false;
      } else {
        this.isLeft = true;
      }
    },
  },
  computed: {
    product_count() {
      return this.$store.getters.productCount(this.product);
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-title">
      <div class="titleCurrencyBarL"></div>
      <div class="titleCurrencyBarR"></div>
      <div class="titleCurrencyText">
        <span
          @mouseenter="(active = true), getOffset($event)"
          @mouseleave="active = false"
        >
          {{ product.name }}
          <transition name="slotTooltip">
            <slot-card
              v-show="active"
              :class="{ left: isLeft, right: !isLeft }"
            >
              <template v-slot:name>
                <span>{{ product.name }}</span>
              </template>
              <template v-slot:category>
                {{ product.category }}
              </template>
              <template v-slot:description_1>
                <span class="description_Mod">{{ product.description_1 }}</span>
              </template>
              <template v-slot:description_2>
                <span class="description_Des">{{ product.description_2 }}</span>
              </template>
              <template v-slot:src>
                <img :src="product.url" />
              </template>
            </slot-card>
          </transition>
        </span>
      </div>
    </div>
    <div class="card-content">
      {{ product.category }}
      <div class="currencySeparator"></div>
      <span class="description_Mod">{{ product.description_1 }}</span>
      <div class="currencySeparator"></div>
    </div>
    <div class="card-img">
      <img :src="product.url" />
    </div>
    <div class="card-price">${{ product.price }}</div>
    <div class="card-btn-container">
      <button class="description-btn" @click="removeFromCart()">-</button>
      <span>{{ product_count }}</span>
      <button class="description-btn" @click="addToCart()">+</button>
    </div>
  </div>
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

.card {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;

  .card-title {
    position: relative;
    height: 34px;
    background: url("~@/assets/ItemsHeaderCurrencyMiddle.png") repeat-x top left;

    .titleCurrencyBarL {
      background: url("~@/assets/ItemsHeaderCurrencyLeft.png") no-repeat top
        left;
      height: 34px;
      width: 29px;
      position: absolute;
    }
    .titleCurrencyBarR {
      background: url("~@/assets/ItemsHeaderCurrencyRight.png");
      height: 34px;
      width: 29px;
      right: 0;
      position: absolute;
    }

    .titleCurrencyText {
      height: 34px;
      padding: 3px 3px;
      color: gray;

      > span {
        cursor: pointer;
        position: relative;
        font-size: 18px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .card-content {
    padding: 2px;
    color: gray;

    .currencySeparator {
      height: 8px;
      margin: 1px 0;
      background: url("~@/assets/ItemsSeparatorCurrency.png") no-repeat center;
    }

    .description_Mod {
      color: #8888ff;
    }
  }

  .card-img > img {
    vertical-align: middle;
  }

  .card-price {
    margin-top: 2px 0;
    font-weight: bold;
    font-size: 24px;
    color: #ccba84;
  }

  .card-btn-container {
    margin: 2px 0 8px 0;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      color: gray;
      font-size: 18px;
    }

    .description-btn {
      width: 30px;
      height: 30px;
      margin: 0 1.5rem;
      font-size: 16px;
      border: none;
      border-radius: 50%;
      background-color: #00bc8c;
      transition: 0.2s;

      &:hover {
        background-color: #009670;
      }

      &:active {
        background-color: #008966;
      }
    }
  }
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>