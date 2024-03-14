<template>
  <LoginCard @login="handleLogin" />
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
export default {
  components: { LoginCard },
  layout: "plain",

  methods: {
    async handleLogin(data) {
      try {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
        const response = await this.$axios
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
          .then(() => {
            this.$toast.success("Welcome");
            this.$router.push("/app/");
          });
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
