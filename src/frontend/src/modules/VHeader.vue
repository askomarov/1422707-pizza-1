<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'Index' }" class="logo">
        <img
          src="@/assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link :to="{ name: 'Cart' }">
        {{ getTotalCartPrice }} ₽
      </router-link>
    </div>
    <div class="header__user">
      <router-link :to="{ name: 'Login' }" class="header__login"
        ><span>Войти</span></router-link
      >
    </div>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("Cart");
export default {
  name: "VHeader",
  computed: {
    ...mapGetters(["getTotalCartPrice"]),
  },
};
</script>

<style></style>
