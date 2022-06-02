<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <div v-if="!orderPizzaList.length" class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>
        <CartPizzaList v-if="orderPizzaList.length"></CartPizzaList>

        <CartAdditional v-if="orderPizzaList.length"></CartAdditional>

        <CartForm v-if="orderPizzaList.length"></CartForm>
      </div>
    </main>

    <CartFooter v-if="orderPizzaList.length" />
  </form>
</template>

<script>
import { mapState } from "vuex";
import CartFooter from "@/modules/cart/CartFooter.vue";
import CartPizzaList from "@/modules/cart/CartPizzaList.vue";
import CartAdditional from "@/modules/cart/CartAdditional.vue";
import CartForm from "../modules/cart/CartForm.vue";

export default {
  name: "cart",
  components: { CartFooter, CartPizzaList, CartAdditional, CartForm },
  computed: {
    ...mapState("Cart", ["orderPizzaList", "totalAdditionlPrice"]),
  },
};
</script>

<style></style>
