<script>
import SlotCard from "@/components/SlotCard.vue";
import { computed, ref } from "vue";
export default {
  props: ["product"],
  components: { SlotCard },
  setup(props) {
    const active = ref(false);
    const pos = ref(0);

    const item_cost = computed(() => {
      return props.product.price * props.product.count;
    });

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
      getOffset,
      handLeave,
    };
  },
};
</script>

<template>
  <tbody>
    <tr>
      <th>
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
      <td>{{ props.product.count }}</td>
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