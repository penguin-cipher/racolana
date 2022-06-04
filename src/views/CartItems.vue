<template>
  <div
    class="cart-container"
    v-for="({ location, Price, Description, serviceImg }, index) in itemData"
    :key="index"
  >
    <img :src="serviceImg" class="cart-img" />
    <div class="cart-wrapper">
      <div class="cart-info">
        <h1>{{ location }}</h1>
        <h3>{{ Description }}</h3>
        <div class="cartDetails">
          <h4>Total: {{ Price }}</h4>
          <div class="cart-button">Get work</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHomeStore } from "../stores/homeData";
const homeStore = useHomeStore();
const { serviceData } = homeStore;

const props = defineProps({
  id: String,
});

let itemData = [];

serviceData.forEach((item) => {
  if (item.serviceName == props.id) {
    itemData.push(item);
  }
});
console.log(itemData);
console.log(props.id);
</script>
<style>
@import "../style/CartItems.css";
</style>
