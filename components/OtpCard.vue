<template>
  <v-container fluid class="pa-0">
    <v-row v-if="$device.isDesktop" no-gutters>
      <v-col cols="6">
        <v-card
          class="card-register"
          height="100vh"
          width="100vw"
          color="white"
          flat
          rounded="0"
          style="padding-top: 24px"
        >
          <v-row no-gutters class="justify-center" style="padding-top: 198px">
            <v-img
              src="/kai-bandara.webp"
              height="120"
              width="100"
              contain
              eager
              @click="$router.push('/')"
            />
          </v-row>
          <v-row class="text-center" no-gutters>
            <v-col cols="12">
              <v-card-text
                class="title-txt color1--text"
                style="color: whitesmoke"
              >
                Sudah Memiliki Akun?
              </v-card-text>
            </v-col>
            <v-col cols="12">
              <v-btn
                to="/login"
                elevation="0"
                class="text-none color1--text"
                text
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6" align="center" class="color1">
        <v-card>
          <v-form @submit.prevent="$emit('otp', otp)">
            <v-card-text>OTP Code</v-card-text>
            <v-card-text>
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field
                    v-model="otp"
                    color="color1"
                    outlined
                    elevation="10"
                    placeholder="OTP Code"
                /></v-col> </v-row
            ></v-card-text>
            <v-card-actions>
              <v-btn type="submit">Submit</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OtpCard",
  data() {
    return {
      otp: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
