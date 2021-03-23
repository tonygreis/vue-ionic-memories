<template>
  <ion-list>
    <memory-item v-for="memory in memories" :key="memory.id" :memory="memory">
    </memory-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoryItem from "./MemoryItem";
export default {
  props: ["memories"],
  components: {
    IonList,
    MemoryItem,
  },
};
</script>

<style></style>
