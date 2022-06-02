<template>
  <div class="home-c">
    <!-- <div class="search">
      <svg class="search-icon" viewBox="0 0 24 24">
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
      <input
        type="search"
        v-bind="homedata"
        class="search"
        placeholder="search for services"
      />
    </div> -->
    <div class="home-bar">
      <div class="mobile-greet">
        <h1>Explore services</h1>
      </div>
      <div class="greet-temp">
        <h1>Hi! welcome to Cbd</h1>
        <h3>enjoy our services</h3>
      </div>
    </div>
    <div class="service-responsive">
      <div
        class="service-temp"
        v-for="(
          { rating, serviceName, location, serviceImg }, index
        ) in homeData[0].serviceData"
        :key="index"
      >
        <div class="service-img">
          <img
            :src="serviceImg"
            :alt="serviceName"
            class="service-temp-image"
          />
        </div>
        <div class="service-info">
          <h3>{{ serviceName }}</h3>
          <div class="service-r">
            <div class="service-l">
              <svg class="location-icon" viewBox="0 0 24 24">
                <path
                  d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
                />
              </svg>
              <h4>{{ location }}</h4>
            </div>
            <div class="service-s">
              <svg class="star-icon" viewBox="0 0 24 24">
                <path
                  d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"
                />
              </svg>
              <h4>{{ rating }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-header">
      <h3>Upcoming</h3>
    </div>
    <div
      class="upcoming-container"
      v-for="(
        { upcomingImg, upcomingName, upcomingDescription }, index
      ) in homeData[0].upcomingData"
      :key="index"
    >
      <div class="upcoming-wrapper">
        <img :src="upcomingImg" :alt="upcomingName" class="upcoming-img" />
        <div class="upcoming-info">
          <h2>{{ upcomingName }}</h2>
          <h4>{{ upcomingDescription }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeData: [
        {
          serviceData: [
            {
              rating: 4.7,
              serviceName: "clearing ",
              location: "Cbd",
              serviceImg:
                "https://mydecorative.com/wp-content/uploads/2019/03/land-clearing.jpg",
            },
            {
              rating: 4.1,
              serviceName: "Househelp",
              location: "Cbd",
              serviceImg:
                "https://images.pexels.com/photos/5591833/pexels-photo-5591833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              rating: 4.8,
              serviceName: "Groundsman",
              location: "Cbd",
              serviceImg:
                "https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
              rating: 4.5,
              serviceName: "landscapers",
              location: "Cbd",
              serviceImg:
                "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/02/featured-image-landscaper.jpeg",
            },
          ],

          upcomingData: [
            {
              upcomingImg:
                "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg",
              upcomingName: "Family Photo",
              upcomingDescription: "Capturing moments with our new camera team",
            },
            {
              upcomingImg:
                "https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_960_720.jpg",
              upcomingName: "Dance lessons",
              upcomingDescription: "Capturing moments with our new camera team",
            },
            {
              upcomingImg:
                "https://cdn.pixabay.com/photo/2014/04/05/11/40/car-316709_960_720.jpg",
              upcomingName: "Driver",
              upcomingDescription: "Linking you to other drivers",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
@import "../style/HomeView.css";
</style>
