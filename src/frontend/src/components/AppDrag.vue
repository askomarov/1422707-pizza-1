<template>
  <div
    :draggable="isDraggble"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
// import { MAX_INGREDIENT_COUNT } from "@/common/constants.js";
import { DATA_TRANSFER_PAYLOAD, MOVE } from "@/common/constants";

export default {
  name: "AppDrag",
  props: {
    transferData: {
      type: Object,
      required: true,
    },
    isDraggble: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = MOVE;
      dataTransfer.dropEffect = MOVE;
      dataTransfer.setData(
        DATA_TRANSFER_PAYLOAD,
        JSON.stringify(this.transferData)
      );
      this.$emit("drag");
    },
  },
};
</script>

<style></style>
