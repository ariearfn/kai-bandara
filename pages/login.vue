<template>
  <LoginCard @login="handleLogin" />
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
export default {
  components: { LoginCard },
  layout: "plain",

  methods: {
    handleLogin(data) {
      // this.errorMessage = undefined;
      // this.loading = true;
      // this.$auth
      //   .loginWith("local", { data: this.credentials })
      //   .then(() => {
      //     this.$toast.success("Welcome, " + this.$auth.user.name);
      //     if (this.$auth.user.role === "Administrator") {
      //       this.$router.push("/app/dashboard");
      //     } else if (this.$auth.user.role === "Customer") {
      //       this.$router.push("/");
      //     }
      //   })
      //   .catch((err) => {
      //     this.errorMessage = err.response.data.error.message;
      //   })
      //   .finally(() => (this.loading = false));
      const token =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
      this.$axios
        .post(
          "https://reservationdev.railink.co.id:8001/api/service/artsmidapp/member/login",
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
  },
};
</script>
