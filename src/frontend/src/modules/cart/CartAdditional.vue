<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <AdditionalItem
        v-for="item in additionalGoods"
        :item="item"
        :key="item.id"
      ></AdditionalItem>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdditionalItem from "./AdditionalItem.vue";
export default {
  components: { AdditionalItem },
  name: "CartAdditional",
  computed: {
    ...mapState("Cart", ["additionalGoods"]),
  },
};
</script>

<style></style>
