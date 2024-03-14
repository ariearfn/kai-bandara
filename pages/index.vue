<template>
  <v-container fluid class="fill-height justify-center">
    <v-btn to="/register">To Register</v-btn>

    <v-btn @click="getOtp"> test</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // async getStasiun() {
    //   const token =
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
    //   this.$axios
    //     .get(
    //       "https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/info/get_stasiun",
    //       {
    //         headers: {
    //           token: token,
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // },
    async getOtp() {
      const otp = 123456;
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
      this.$axios
        .get(
          `https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/activation?otp=${otp}`,
          {
            headers: {
              token: token,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
