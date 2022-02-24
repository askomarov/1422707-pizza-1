<template>
  <AppDrop @drop="OnDrop">
    <div class="content__constructor">
      <div
        class="pizza"
        :class="`pizza--foundation--${orderedPizza.dougth.foundation}-${orderedPizza.souce.classWord}`"
      >
        <div class="pizza__wrapper">
          <div
            v-for="item in orderedPizza.ingredients"
            :key="item.id"
            class="pizza__filling"
            :class="ingredintClass(item)"
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
    ingredintClass(item) {
      let className;
      switch (item.count) {
        case 1:
          className = `pizza__filling--${item.ingredient}`;
          break;
        case 2:
          className = `pizza__filling--${item.ingredient} pizza__filling--second`;
          break;
        case 3:
          className = `pizza__filling--${item.ingredient} pizza__filling--third`;
          break;
      }
      return className;
    },
    OnDrop(evt) {
      return this.$emit("onDrop", evt);
    },
  },
  computed: {},
};
</script>

<style></style>
