<template>
  <AppDrop @drop="$emit('onDrop', $event)">
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
      if (item.count === 1) {
        className = `pizza__filling--${item.ingredient}`;
      } else if (item.count === 2) {
        className = `pizza__filling--${item.ingredient} pizza__filling--second`;
      } else if (item.count === 3) {
        className = `pizza__filling--${item.ingredient} pizza__filling--third`;
      }
      return className;
    },
  },
};
</script>

<style></style>
