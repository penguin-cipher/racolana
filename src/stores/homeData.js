import { defineStore } from "pinia";

export const useHomeStore = defineStore("homeStore", {
  state: () => ({
    serviceData: [
      {
        rating: 4.7,
        serviceName: "clearing ",
        location: "Cbd",
        Price: "ksh 750",
        Description:
          "Clearing of lands which include bushes, weeds among others",
        serviceImg:
          "https://mydecorative.com/wp-content/uploads/2019/03/land-clearing.jpg",
      },
      {
        rating: 4.1,
        serviceName: "Househelp",
        location: "Cbd",
        Price: "ksh 1500",
        Description: "Taking care of the house and a baby",
        serviceImg:
          "https://images.pexels.com/photos/5591833/pexels-photo-5591833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        rating: 4.8,
        serviceName: "Groundsman",
        location: "Cbd",
        Price: "ksh 850",
        Description: "Taking care of the ground work around the house",
        serviceImg:
          "https://images.pexels.com/photos/7728016/pexels-photo-7728016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        rating: 4.5,
        serviceName: "landscapers",
        location: "Cbd",
        Price: "ksh 1340",
        Description: "doing gardening",
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
  }),

  // getters: {
  //   getServiceId: function () {
  //     this.serviceData.map((service) => {
  //       return service.id;
  //     });
  //   },
  // },
});
