<template>
  <div class="cart-container">
    <img :src="cartImg" class="cart-img" />
    <div class="cart-wrapper">
      <div class="cart-info">
        <h1>{{ cartLocation }}</h1>
        <h3>{{ cartDescription }}</h3>
        <div class="cartDetails">
          <h4>Total: {{ cartPrice }}</h4>
          <div class="cart-button">Get work</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cartImg:
        "https://mydecorative.com/wp-content/uploads/2019/03/land-clearing.jpg",
      cartRating: 4.1,
      cartDescription:
        "Clearing of lands which include bushes, weeds among others",
      cartLocation: "Nairobi, cbd",
      cartPrice: "ksh 450",
    };
  },
};
</script>

<style>
@import "../style/CartItems.css";
</style>
