<template>
  <RegisterCard @registration="handleRegister" />
</template>

<script>
import RegisterCard from "@/components/RegisterCard.vue";
export default {
  components: { RegisterCard },
  layout: "plain",

  methods: {
    async handleRegister(data) {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
      this.$axios
        .post(
          "https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/register",
          data,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.handleOtp();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    handleOtp() {
      const otp = "123456";
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
