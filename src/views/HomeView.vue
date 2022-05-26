<template>
  <div class="home-c">
    <div class="home-barr">
      <div class="greet-temp">
        <h1>Hi! welcome to racolana</h1>
        <h3>enjoy our services</h3>
      </div>
      <div class="search"></div>
    </div>
    <div class="service-temp">
      <div class="service-info">
        <h3>service name</h3>
        <div class="service-rate">
          <h4>service provider</h4>
          <h4> 4.7</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data() {
        return {
          homeData: [
            {
              serviceData: [
                {
                  rating: 4.7,
                  serviceName: "clearing ",
                  serviceProvider: "racolana",
                  serviceImg:
                    "https://mydecorative.com/wp-content/uploads/2019/03/land-clearing.jpg",
                },
                {
                   rating: 4.1,
                  serviceName: "Househelp",
                  serviceProvider: "racolana",
                  serviceImg:
                    "https://images.pexels.com/photos/5591833/pexels-photo-5591833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                  rating: 4.8,
                  serviceName: "Groundsman",
                  serviceProvider: "racolana",
                  serviceImg:
                    "https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                  rating: 4.5,
                  serviceName: "landscapers",
                  serviceImg:
                    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/02/featured-image-landscaper.jpeg",
                },
              ],

              recoomendations: [{}],
            },
          ],
        };
      },
    };
  },
};
</script>

<style>
@import "../style/HomeView.css";
</style>
