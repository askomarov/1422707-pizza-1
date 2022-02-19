<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="item in doughs"
          class="dough__input"
          :class="`dough__input--${item.doughClassMod}`"
          :key="item.id"
        >
          <VRadioButton
            class="visually-hidden"
            name="dough"
            :value="item"
            :checked="item.name === selectedDough.name"
            @changeItemValue="changeDough"
          >
          </VRadioButton>

          <b>{{ item.name }}</b>
          <span>{{ item.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import VRadioButton from "@/components/VRadioButton.vue";

export default {
  name: "BuilderDoughSelector",
  components: {
    VRadioButton,
  },
  props: {
    doughs: {
      type: Array,
      required: true,
    },
    selectedDough: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeDough(value) {
      this.$emit("changeDough", value);
    },
  },
};
</script>

<style></style>
