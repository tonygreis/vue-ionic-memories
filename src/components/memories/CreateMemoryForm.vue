<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="form.title" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image Url</ion-label>
        <ion-input type="url" v-model="form.imageUrl" required></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="form.description"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default {
  emits: ["save-memory"],
  components: {
    IonLabel,
    IonItem,
    IonList,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      form: {
        title: "",
        imageUrl: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.form.title,
        imageUrl: this.form.imageUrl,
        description: this.form.description,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>

<style></style>
