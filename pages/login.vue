<template>
  <LoginCard @login="handleLogin" />
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
export default {
  components: { LoginCard },
  layout: "plain",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async handleLogin(data) {
      try {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
        this.$auth
          .loginWith("local", {
            data: data,
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            console.log(this.$auth);
            this.$toast.success("Welcome");
            this.$router.push("/");
          });
      } catch (error) {
        this.$toast.error("Error:", error);
      }
    },
  },
};
</script>
