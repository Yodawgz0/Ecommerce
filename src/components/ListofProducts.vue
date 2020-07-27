<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="d-flex flex-wrap">
            <v-card
              v-for="(product,index) in products"
              :key="index"
              class="mx-auto my-12"
              max-width="280"
            >
              <v-img class="pa-3 ma-5 mt-10" height="200" width="150" :src="product.image" />
              <router-link to="/productcard">
                <v-card-title @click="addCurrentProduct(product)">{{ product.name }}</v-card-title>
              </router-link>
              <v-rating
                half-increments
                v-model="product.stars"
                readonly
                background-color="orange lighten-3"
                color="orange"
              ></v-rating>
              <v-card-text>₹ {{ product.price }}.00</v-card-text>
              <v-divider></v-divider>
              <v-btn
                class="mx-3 ma-4"
                dark
                color="black"
                @click.native="addProductToCart(product)"
              >
                <span>Add To Cart</span>
                <v-icon class medium color="light-green accent-3">mdi-cart-outline</v-icon>
              </v-btn>
              <v-btn @click.native="addProductToFavs(product)" class="mx-3 ma-4" dark color="pink">
                <v-icon class medium color="white">mdi-heart</v-icon>
              </v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  props: ["products"],

  methods: {
    ...mapActions(["addProducts", "currentProducts"]),

    addProductToCart(product) {
      this.addProducts(product);
    },
    addProductToFav(product) {
      this.addProducts(product);
    },
    addCurrentProduct(product) {
      this.currentProducts(product);
    }
  }
};
</script>

<style>
.v-card__title {
  word-break: break-word;
}
.v-card__subtitle,
.v-card__text {
  font-size: 1.5rem;
}
</style>