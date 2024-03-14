<template>
  <v-container fluid class="fill-height">
    <v-row no-gutters class="justify-center">
      <StationCard :stations="stations" />
    </v-row>
  </v-container>
</template>

<script>
import StationCard from "@/components/StationCard";
export default {
  components: { StationCard },
  data() {
    return {
      stations: [],
    };
  },
  mounted() {
    this.getStations();
  },
  methods: {
    async getStations() {
      try {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTElWRS1DT0RJTkciLCJjcmVhdGVkb24iOiIyMDI0LTAzLTE0IDA5OjA1OjE4In0.q7RSjWJE6kOIkbqzWX6Nl9FB6wkbL0De4fem0MxOQC4";
        const data = await this.$axios.get(
          `https://reservationdev.railink.co.id:8001/api/service/artsmidapp/middleware/info/get_stasiun`,
          {
            headers: {
              token: token,
            },
          }
        );
        this.stations = data.data.response.stasiunlist;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
