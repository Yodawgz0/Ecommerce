<template>
  <v-container>
      <v-card v-for="(product,index) in getFavproducts" :key="index">
        <v-row class="mb-6" no-gutters>
          <v-col sm="5" md="3" order="first">
            <v-img class="pa-3 ma-5 mt-10" height="200" width="150" :src="product.image"></v-img>
          </v-col>
          <v-col>
            <v-card-title class="headline">{{ product.name }}</v-card-title>
            <v-card-subtitle>₹ {{ product.price }}.00</v-card-subtitle>
          </v-col>
          <v-col sm="5" offset-sm="2" md="2" offset-md="0">
            <v-btn class="ma-2" outlined color="indigo" @click="remove(index)">
              <span>Remove</span>
            </v-btn>
            <v-row>                        
            <v-col sm="5" offset-sm="2" md="2" offset-md="0">
            <v-btn class="ma-2" outlined color="indigo" >
              <span>Move to Cart</span>
            </v-btn>            
          </v-col>
          </v-row>
          </v-col>
        </v-row>        
      </v-card>
      <v-spacer></v-spacer>

    <div v-if="!hasproduct()">
      <b-jumbotron>
        <template v-slot:header>No products</template>

        <template v-slot:lead>
          There are no products in your favs you can either navigate to you favs or you can go back to home page by selecting
        </template>

        <hr class="my-4" />
        <v-row>
        <router-link to="./">
          <b-button variant="primary">Back to Home</b-button>
        </router-link>
        <v-col class="pa-1"></v-col>
        <router-link to="/Cart">
        <b-button variant="success">Go to cart</b-button>
         </router-link>
        </v-row>
      </b-jumbotron>
    </div>
   
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  computed: {
    ...mapGetters(["getFavproducts"])
  },

  methods: {
    ...mapActions(["removeProducts","addProducts", "showorHiddenModal"]),

    addProductToCart(products){
      this.addProducts(products);
    },
  
    hasproduct() {
      return this.getFavproducts.length > 0;
    },
    totalprice() {
      return this.getFavproducts.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    remove(index) {
      this.removeProducts(index);
    }
  }
};
</script>
<style >
.filt {
  margin-left: 400px;
  margin-top: -450px;
}
</style>
