<template>
  <v-card
    width="100%"
    class="card-style"
    style="margin-left: 40px; margin-right: 40px"
  >
    <v-form @submit.prevent="searchTicket(payload)">
      <v-row class="pa-6" no-gutters>
        <v-col class="" cols="4">
          <span class="ml-4 color2--text">Origin</span>
          <v-autocomplete
            v-model="payload.origin"
            :items="stations"
            item-value="code"
            item-text="name"
            color="color1"
            class="mx-4 pt-2 placeholder-custom"
            outlined
            elevation="10"
            placeholder="Select Origin Station"
            dense
        /></v-col>
        <v-col class="" cols="4">
          <span class="ml-4 color2--text">Destination</span>
          <v-autocomplete
            v-model="payload.destination"
            :items="stations"
            item-value="code"
            item-text="name"
            color="color1"
            class="mx-4 pt-2 placeholder-custom"
            outlined
            elevation="10"
            placeholder="Select Destination Station"
            dense
            :disabled="payload.origin === undefined || payload.origin === ''"
        /></v-col>
        <v-col cols="4">
          <span class="ml-4 grey--text">Total Passenger</span>
          <v-select
            v-model="payload.passenger"
            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            color="color1"
            class="mx-4 pt-2 placeholder-custom"
            outlined
            elevation="10"
            placeholder="-"
            dense
          />
        </v-col>
        <v-col cols="4">
          <span class="ml-4 color2--text">Departure Date</span>
          <v-text-field
            v-model="payload.departureDate"
            type="date"
            color="color1"
            class="mx-4 pt-2 placeholder-custom"
            outlined
            elevation="10"
            dense
          />
        </v-col>
        <v-col align-self="center" class="text-right">
          <v-btn
            class="text-none white--text font-weight-bold"
            style="border-radius: 10px"
            elevation="0"
            color="color2"
            type="submit"
          >
            Find Ticket
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "StationCard",
  props: {
    stations: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      payload: {
        passenger: 1,
        memberCode: 11111,
      },
      results: [],
    };
  },
  computed: {},
  methods: {
    async searchTicket(payload) {
      try {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
        const data = await this.$axios.get(
          `https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/schedule/arts_getschedule?org=${payload.origin}&des=${payload.destination}&date=${payload.departureDate}&member_code=${payload.memberCode}`,
          {
            headers: {
              token: token,
            },
          }
        );
        this.results = data;
      } catch (error) {
        this.$toast.error(error);
      }
    },
  },
};
</script>

<style scoped>
::v-deep .placeholder-custom input::placeholder {
  font-size: 14px;
  color: black;
}

.card-style {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 40px 40px 0px rgba(112, 144, 176, 0.2);
  -webkit-box-shadow: 0 0 30px rgba(112, 144, 176, 0.2) !important;
  position: relative;
  transition: 0.5s;
  top: 0px;
}
.card-style:hover {
  /* transform: translateY(-10px); */
  box-shadow: 0px 40px 40px 0px rgba(112, 144, 176, 0.38);
  -webkit-box-shadow: 0 0 30px rgba(112, 144, 176, 0.38) !important;
}
</style>
