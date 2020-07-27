<template>
  <div>
    <v-row no gutters>
      <v-card height="500" width="2000">
        <v-col cols="12" sm="6">
          <v-img class="pa-3 ma-10" height="400" width="300" :src="currentProducts.image" img-left></v-img>
        </v-col>
        <v-col cols="12" sm="6" class="filt">
          <v-card-title>
            {{ currentProducts.name }}
            <v-spacer></v-spacer>
            <v-dialog ref="dialog" v-model="modal" width="400">
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-share-variant</v-icon>
              </template>
              <v-card>
                <v-card-title>
                  <span class="title font-weight-bold">Share</span>
                  <v-spacer></v-spacer>
                  <v-btn class="mx-0" icon @click.stop="modal = !modal">
                    <v-icon>mdi-close-circle-outline</v-icon>
                  </v-btn>
                </v-card-title>
                <v-list>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon color="indigo">mdi-facebook</v-icon>
                    </v-list-item-action>
                    <v-card-title>Facebook</v-card-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon color="cyan">mdi-twitter</v-icon>
                    </v-list-item-action>
                    <v-card-title>Twitter</v-card-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-action>
                      <v-icon>mdi-email</v-icon>
                    </v-list-item-action>
                    <v-card-title>Email</v-card-title>
                  </v-list-item>
                </v-list>
                <v-text-field
                  ref="link"
                  :label="copied ? 'Link copied' : 'Click to copy link'"
                  class="pa-4"
                  readonly
                  value="https://g.co/kgs/nkrK43"
                  @click="copy"
                ></v-text-field>
              </v-card>
            </v-dialog>
          </v-card-title>
          <v-card-subtitle>{{currentProducts.details}}</v-card-subtitle>
          <v-divider></v-divider>
          <v-rating
            v-model="currentProducts.stars"
            readonly
            half-increments
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
          <span class="ma-2">{{currentProducts.totalreviews}} Reviews &amp; Ratings</span>
          <v-spacer></v-spacer>
          <v-btn class="ma-2" tile outlined color="pink">
            <v-icon left>mdi-heart</v-icon>Add To Favs
          </v-btn>
          <v-btn class="ma-2" tile outlined color="primary"
          @click.native="addProductToCart(currentProducts)">
            <v-icon left>mdi-cart</v-icon>Add to Cart
          </v-btn>
          <v-col cols="4" sm="4">
            <v-select :items="items" label="Quantity" solo></v-select>
          </v-col>
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    items: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    copied: false,
    modal: false,
    dialog: false
  }),
  computed: {
    ...mapGetters({
      currentProducts: "getCurrentproducts"
    })
  },
  methods: {
    ...mapActions(["addProducts", "showorHiddenModal"]),
    addProductToCart(products){
      this.addProducts(products);
    },
  },
  copy() {
    const markup = this.$refs.link;
    markup.focus();
    document.execCommand("selectAll", false, null);
    this.copied = document.execCommand("copy");
  }
};
</script>
<style >
.filt {
  margin-left: 500px;
  margin-top: -450px;
}
</style>
