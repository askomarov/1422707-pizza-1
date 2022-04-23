<template>
  <AppDrop @drop="getIngredient">
    <div class="content__constructor">
      <div class="pizza" :class="pizzaFoundationClass">
        <div class="pizza__wrapper">
          <div
            v-for="item in ingredients"
            :key="item.class"
            class="pizza__filling"
            :class="ingredintClass(item.count, item.class)"
          ></div>
        </div>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Builder");
import AppDrop from "@/components/AppDrop.vue";

export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  computed: {
    ...mapState(["saucesID", "doughID", "ingredients"]),
    pizzaFoundationClass() {
      let foundationClass = "";
      switch (this.saucesID) {
        case 1:
          foundationClass =
            this.doughID === 1
              ? "pizza--foundation--small-tomato"
              : "pizza--foundation--big-tomato";
          break;
        case 2:
          foundationClass =
            this.doughID === 2
              ? "pizza--foundation--big-creamy"
              : "pizza--foundation--small-creamy";
          break;
      }
      return foundationClass;
    },
  },
  methods: {
    ...mapActions(["increaseCounter"]),
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
    getIngredient(id) {
      let name = Object.keys(id)[0];
      this.increaseCounter(name);
    },
  },
};
</script>

<style></style>
