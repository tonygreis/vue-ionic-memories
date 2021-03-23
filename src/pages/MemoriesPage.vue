<template>
  <base-layout pageTitle="All Memries">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memory-list :memories="memories"></memory-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import MemoryList from "../components/memories/MemoryList";
export default {
  components: {
    MemoryList,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      add,
    };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style></style>
