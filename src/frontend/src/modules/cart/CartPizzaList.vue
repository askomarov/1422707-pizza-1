<template>
  <ul class="cart-list sheet">
    <CartPizzaListItem
      v-for="pizza in this.orderPizzaList"
      :key="pizza.id"
      :pizza="pizza"
    ></CartPizzaListItem>
  </ul>
</template>

<script>
// import { mapState, mapGetters, mapActions } from "vuex";
import { mapState } from "vuex";
import CartPizzaListItem from "./CartPizzaListItem.vue";
export default {
  components: { CartPizzaListItem },
  name: "CartPizzaList",
  computed: {
    ...mapState("Cart", ["orderPizzaList"]),
  },
};
</script>

<style></style>
