<template>
  <v-container fluid class="fill-height pa-0">
    <v-row v-if="$device.isDesktop" no-gutters>
      <v-col cols="6" align="center" class="color1">
        <v-card
          class="color1--text"
          style="margin-top: 200px; padding: 24px"
          flat
          width="400px"
          rounded
          elevation="0"
          color="white"
        >
          <v-form @submit.prevent="$emit('login', credentials)">
            <v-row no-gutters class="text-center">
              <v-card-text class="title-txt"> Login </v-card-text>
              <v-card-subtitle v-if="errorMessage" class="text-capitalize"
                >* {{ errorMessage }}</v-card-subtitle
              >
            </v-row>
            <v-card-text class="py-0">
              <v-row no-gutters class="px-2 pt-6">
                <v-col cols="12">
                  <v-text-field
                    v-model="credentials.email"
                    color="color1"
                    class="pt-2"
                    outlined
                    elevation="10"
                    placeholder="Email"
                  />
                </v-col>
                <v-col cols="12" class="pt-0">
                  <v-text-field
                    v-model="credentials.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    class="pt-2 pw"
                    color="color1"
                    outlined
                    placeholder="password"
                    :disabled="
                      credentials.email === undefined ||
                      credentials.email === ''
                    "
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn
                    block
                    type="submit"
                    color="color1"
                    rounded
                    elevation="0"
                    class="text-none"
                    style="border-radius: 8px"
                    :disabled="
                      credentials.password === undefined ||
                      credentials.password === ''
                    "
                    :loading="loading"
                  >
                    <span class="btn-txt" style="color: white">Login</span>
                  </v-btn>
                </v-col>
                <v-col cols="12" class="text-center pt-6">
                  <v-btn
                    text
                    class="color1--text font-weight-bold text-none"
                    small
                    to="/"
                  >
                    Kembali
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
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
            />
          </v-row>
          <v-row class="text-center" no-gutters>
            <v-col cols="12">
              <v-card-text
                class="title-txt color1--text"
                style="color: whitesmoke"
              >
                Anda Belum Memiliki Akun?
              </v-card-text>
            </v-col>

            <v-col cols="12">
              <v-btn
                to="/register"
                elevation="0"
                class="text-none color1--text"
                text
              >
                Daftar Disini
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else no-gutters>
      <v-col cols="12" align="center" style="background-color: white">
        <v-card
          class="color1--text"
          style=""
          flat
          width="400px"
          rounded
          elevation="0"
          color="white"
        >
          <v-form @submit.prevent="$emit('login', credentials)">
            <v-row no-gutters class="justify-center">
              <v-img
                src="/kai-bandara.webp"
                height="120"
                width="100"
                contain
                eager
                @click="$router.push('/')"
              />
            </v-row>
            <v-row no-gutters class="text-center">
              <v-card-text class="title-txt"> Login </v-card-text>
            </v-row>
            <v-card-text class="py-0">
              <v-row no-gutters class="px-2 pt-6">
                <v-col cols="12">
                  <v-text-field
                    v-model="credentials.email"
                    color="color1"
                    class="pt-2"
                    outlined
                    elevation="10"
                    placeholder="Email"
                  />
                </v-col>
                <v-col cols="12" class="pt-0">
                  <v-text-field
                    v-model="credentials.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    class="pt-2 pw"
                    color="color1"
                    outlined
                    rounded
                    placeholder="password"
                    :disabled="
                      credentials.email === undefined ||
                      credentials.email === ''
                    "
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn
                    block
                    type="submit"
                    color="color1"
                    rounded
                    elevation="0"
                    class="text-none"
                    style="border-radius: 8px"
                    :disabled="
                      credentials.password === undefined ||
                      credentials.password === ''
                    "
                  >
                    <span class="btn-txt" style="color: white">Login</span>
                  </v-btn>
                </v-col>
                <v-col cols="12" class="text-center pt-6">
                  <v-btn
                    text
                    class="color1--text font-weight-bold text-none"
                    small
                    to="/"
                  >
                    Kembali
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
            <v-row class="text-center pt-4" no-gutters>
              <v-col cols="12">
                <v-card-text class="subtitle-1" style="color: #d30100">
                  Anda Belum Memiliki Akun?
                  <br />
                  <v-btn
                    to="/register"
                    elevation="0"
                    class="text-none color1--text"
                  >
                    Daftar Disini
                  </v-btn>
                </v-card-text>
              </v-col>

              <v-col cols="12"> </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginCard",
  props: {},
  data() {
    return {
      errorMessage: undefined,
      loading: false,
      savePw: false,
      dialog: false,
      add: {},
      credentials: {},
      reset: {},
      showPassword: false,
      logos: ["/google.svg", "/apple.svg", "/facebook.svg"],
    };
  },
  computed: {
    labelButton() {
      if (
        this.credentials.email === undefined ||
        this.credentials.email === ""
      ) {
        return "email...";
      } else if (
        this.credentials.password === undefined ||
        this.credentials.password === ""
      ) {
        return "password...";
      } else {
        return "Silahkan Login";
      }
    },
  },
  methods: {},
};
</script>

<style scoped>
.card-login {
  height: 100vh;
}
.card-register {
  box-shadow: 0px 40px 40px 0px rgba(112, 144, 176, 0.2);
  -webkit-box-shadow: 0 0 30px rgba(112, 144, 176, 0.2) !important;
  border-radius: 50px 100px 100px 50px;
  height: 100vh;
}
.title-txt {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}
.btn-txt {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}
.text-txt {
  color: #323232;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.logo-style {
  border-radius: 8px;
  border: 1px solid #323232;
  background: #fff;
}
::v-deep .v-text-field .v-input__control .v-input__slot {
  box-shadow: -9px 6px 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 48px;
}
.v-input__icon.v-input__icon-append i {
  font-size: 64px;
}
</style>
