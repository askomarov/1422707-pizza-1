<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="imgPath" width="39" height="60" :alt="item.name" />
      <span>{{ item.name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <VIngredientCounter
        :value="item.count"
        :id="item.id.toString()"
        class="additional-list__counter"
        :modClassBtn="modClassBtn"
        @changePlusIngredients="increaseAddItemCount"
        @changeMinusIngredients="decreaseAddItemCount"
      />

      <div class="additional-list__price">
        <b>× {{ item.price }}</b>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import VIngredientCounter from "../../components/VIngredientCounter.vue";
export default {
  components: { VIngredientCounter },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modClassBtn: "counter__button--orange",
    };
  },
  computed: {
    imgPath() {
      return `@/assets${this.item.image}`;
    },
  },
  methods: {
    ...mapActions("Cart", ["increaseAddCounter", "decreaseAddCounter"]),
    increaseAddItemCount() {
      this.increaseAddCounter(this.item);
    },
    decreaseAddItemCount() {
      this.decreaseAddCounter(this.item);
    },
  },
};
</script>

<style></style>
