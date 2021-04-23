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
  methods: {
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
  computed: {
    item_cost() {
      return this.product.price * this.product.count;
    },
  },
};
</script>

<template>
  <tbody>
    <tr>
      <th>
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
      </th>
      <td>{{ product.count }}</td>
      <td>${{ item_cost }}</td>
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
  color: #ccc;
  border-bottom: 1px solid #434343;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #444;
  }

  > tr > th .productName {
    position: relative;
    color: #aa9e82;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > tr > th,
  > tr > td {
    padding: 12px;
  }
}
</style>