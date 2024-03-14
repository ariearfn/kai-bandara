<template>
  <div>
    <OtpCard v-if="showOTPForm" @otp="handleOtp" />
    <RegisterCard v-else @registration="handleRegister" />
  </div>
</template>

<script>
import RegisterCard from "@/components/RegisterCard";
import OtpCard from "@/components/OtpCard";
export default {
  components: { RegisterCard, OtpCard },
  layout: "plain",
  data() {
    return {
      showOTPForm: false,
    };
  },
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
          this.showOTPForm = true;
          // this.handleOtp();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async handleOtp(data) {
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
      try {
        const response = await this.$axios.get(
          `https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/activation?otp=${data}`,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        );

        // If OTP validation successful, handle accordingly
        if (response.status === 200) {
          console.log(response);
        }
      } catch (error) {
        console.error("OTP validation error:", error);
        // Handle OTP validation error
      }
    },
  },
};
</script>
