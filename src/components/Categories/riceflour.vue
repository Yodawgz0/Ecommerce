<template>
  <div class="grey lighten-3">
    <h2 align="center" class="pt-5 teal--text">Rice &amp; Flour</h2>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="pa-1"></v-col>
      <ListofProducts :products="getRiceflour" />
      <v-col cols="pa-1"></v-col>
    </v-row>
  </div>
</template>

<script>
import ListofProducts from "../ListofProducts";
import { mapGetters } from "vuex";

export default {
  components: {
    ListofProducts
  },

  computed: {
    ...mapGetters(["getRiceflour"])
  }
};
</script>