<template>
  <LoginCard @login="handleLogin" />
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
export default {
  components: { LoginCard },
  layout: "plain",

  methods: {
    handleLogin() {
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
      this.$router.push("/app");
    },
  },
};
</script>
