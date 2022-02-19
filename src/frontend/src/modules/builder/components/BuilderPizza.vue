<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="setPizzaName"
      />
    </label>
    <BuilderPizzaView :orderedPizza="orderedPizza"></BuilderPizzaView>
    <div class="content__result">
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <button type="button" class="button" :disabled="isBtnActive">
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script>
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";

export default {
  name: "BuilderPizza",
  components: { BuilderPizzaView },
  props: {
    orderedPizza: {
      type: Object,
      required: true,
    },
    pizzaPrice: {
      type: Number,
      required: true,
    },
    isBtnActive: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    setPizzaName(evt) {
      this.$emit("setPizzaName", evt.target.value);
    },
  },
};
</script>

<style></style>
