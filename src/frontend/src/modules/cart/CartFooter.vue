<template>
  <section class="footer">
    <div class="footer__more">
      <router-link
        :to="{ name: 'Index' }"
        class="button button--border button--arrow"
      >
        Хочу еще одну
      </router-link>
    </div>
    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>
    <div class="footer__price">
      <b>Итого: {{ getTotalCartPrice }} ₽</b>
    </div>

    <div class="footer__submit">
      <button
        type="submit"
        :disabled="!orderPizzaList.length"
        class="button"
        @click.prevent="makeOrder"
      >
        Оформить заказ
      </button>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } = createNamespacedHelpers("Cart");
export default {
  name: "cartFooter",
  computed: {
    ...mapState(["orderPizzaList"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
  methods: {
    ...mapActions(["resetCartState"]),
    makeOrder() {
      this.$router.push("popup");
      this.resetCartState();
    },
  },
};
</script>

<style></style>
