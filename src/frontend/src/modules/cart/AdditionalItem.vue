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
        :modClass="modClass"
        :modClassBtn="modClassBtn"
        @changePlusIngredients="increaseAddItemCount"
        @changeMinusIngredients="decreaseAddItemCount"
      >
      </VIngredientCounter>

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
      modClass: "additional-list__counter",
      modClassBtn: "counter__button--orange",
    };
  },
  computed: {
    imgPath() {
      return `@/assets${this.item.image}`;
    },
  },
  methods: {
    ...mapActions("Cart", ["increaseAddCounter"]),
    increaseAddItemCount() {
      this.item.count++;
      this.increaseAddCounter(this.item);
    },
    decreaseAddItemCount() {
      this.item.count--;
      this.increaseAddCounter(this.item);
    },
  },
};
</script>

<style></style>
