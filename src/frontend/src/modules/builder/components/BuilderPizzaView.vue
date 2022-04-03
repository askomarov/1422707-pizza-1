<template>
  <AppDrop @drop="OnDrop">
    <div class="content__constructor">
      <div class="pizza" :class="pizzaFoundationClass">
        <div class="pizza__wrapper">
          <div
            v-for="(count, name) in this.orderedPizza.ingredients"
            :key="name + count"
            class="pizza__filling"
            :class="ingredintClass(count, name)"
          ></div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/components/AppDrop.vue";

export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  props: {
    orderedPizza: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ingredintClass(count, name) {
      let className;
      switch (count) {
        case 1:
          className = `pizza__filling--${name}`;
          break;
        case 2:
          className = `pizza__filling--${name} pizza__filling--second`;
          break;
        case 3:
          className = `pizza__filling--${name} pizza__filling--third`;
          break;
      }
      return className;
    },
    OnDrop(evt) {
      return this.$emit("onDrop", evt);
    },
  },
  computed: {
    pizzaFoundationClass() {
      let foundationClass = "";
      switch (this.orderedPizza.sauce.name) {
        case "tomato":
          foundationClass =
            this.orderedPizza.dough.name === "large"
              ? "pizza--foundation--big-tomato"
              : "pizza--foundation--small-tomato";
          break;
        case "creamy":
          foundationClass =
            this.orderedPizza.dough.name === "large"
              ? "pizza--foundation--big-creamy"
              : "pizza--foundation--small-creamy";
          break;
      }
      return foundationClass;
    },
  },
};
</script>

<style></style>
