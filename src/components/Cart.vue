<template>
  <div class="indigo lighten-4">
    <v-container>
      <v-app class="indigo lighten-4">
        <v-row>
          <v-col cols="8">
            <v-card v-if="hasproduct()" max-width="800">
              <v-card-title>
                <h4>My Cart ({{ countproduct()}})</h4>
                <v-spacer></v-spacer>
                <v-text-field placeholder="Delivery Sector (Ex. R6,R7)"></v-text-field>
              </v-card-title>
              <b-card v-for="(product,index) in getCartproducts" :key="index">
                <v-row class="mb-6" no-gutters>
                  <v-col sm="5" md="3" order="first">
                    <v-img :src="product.image"></v-img>
                  </v-col>
                  <v-col class="ml-10">
                    <v-card-title class="headline">{{ product.name }}</v-card-title>
                    <v-card-subtitle>Seller: {{ product.seller }} will be added</v-card-subtitle>
                    <v-row class="d-flex justify-space-between">
                      <v-col>
                        <v-card-subtitle>₹ {{ product.price }}.00</v-card-subtitle>
                      </v-col>
                      <v-col>
                        <v-card-text>Delivery By Today 7pm</v-card-text>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <!--buttons -->
                <v-row>
                  <div class="d-flex align-items-left">
                    <v-col>
                      <div class="my-n6">
                        <label for="sb-inline"></label>
                        <b-form-spinbutton id="sb-inline" placeholder="--" v-model="value" inline></b-form-spinbutton>
                      </div>
                    </v-col>
                    <v-col>
                      <v-btn outlined color="pink" @click="remove(index)">
                        <span>Save to Favs</span>
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn outlined color="indigo" @click="remove(index)">
                        <span>Remove</span>
                      </v-btn>
                    </v-col>
                  </div>
                </v-row>
              </b-card>
            </v-card>
             <v-card v-if="hasproduct()" align="right">
            <v-btn min-width="300" x-large color="warning" class="my-2 mr-3 px-n8" >Place Order</v-btn>
               </v-card>
          </v-col>
          <!--Price Details-->
          <v-col cols="4">
            <div v-if="hasproduct()">
              <v-card>
                <v-card-text class="v-price font-weight-medium">PRICE DETAILS</v-card-text>
                <v-divider class="mt-n1"></v-divider>
                <v-row class="mt-n3 ml-1">
                  <v-col>Price ({{countproduct()}})</v-col>
                  <v-col>₹ {{ totalprice() }}</v-col>
                </v-row>

                <v-row class="mt-n3 ml-1">
                  <v-col>Delivery Fee</v-col>

                  <v-col v-if="totalprice()>500">
                    Free
                    <v-tooltip v-model="show" top>
                      <template v-slot:activator="{ on }">
                        <v-icon medium v-on="on">mdi-alert-octagram</v-icon>
                      </template>
                      <span>Free Delivery: 500+</span>
                    </v-tooltip>
                  </v-col>

                  <v-col v-else>
                    {{Math.round(0.03 * totalprice())}}
                    <v-tooltip v-model="show" top>
                      <template v-slot:activator="{ on }">
                        <v-icon medium v-on="on">mdi-alert-octagram</v-icon>
                      </template>
                      <span>Free Delivery: 500+</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
                <p class="bordr"></p>
                <div>
                  <h6 align="right" class="mr-2" v-if="hasproduct()">Total Amount: ₹ {{ totalprice() }}.00</h6>
                </div>
                <p class="bordr"></p>
              </v-card>
            </div>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>
        <v-card>
          <div v-if="!hasproduct()">
            <b-jumbotron>
              <template v-slot:header>No products</template>

              <template
                v-slot:lead
              >There are no products in your cart you can either navigate to you favs or you can go back to home page by selecting</template>

              <hr class="my-4" />
              <v-row>
                <router-link to="./">
                  <b-button variant="primary">Back to Home</b-button>
                </router-link>
                <v-col class="pa-1"></v-col>
                <router-link to="/Favs">
                  <b-button variant="success">Go to Favs</b-button>
                </router-link>
              </v-row>
            </b-jumbotron>
          </div>
        </v-card>

      </v-app>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartproducts"])
  },

  methods: {
    ...mapActions(["removeProducts"]),
    hasproduct() {
      return this.getCartproducts.length > 0;
    },
    totalprice() {
      return this.getCartproducts.reduce(
        (current, next) => current + next.price,
        0
      );
    },
    countproduct() {
      return this.getCartproducts.length;
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
.v-card__text {
  font-size: 1rem;
}
.v-application .headline {
  font-size: 1.2rem !important;
}
.v-card__subtitle,
.v-card__text {
  font-size: 1rem;
}
.bordr {
  border-top: 1px dashed grey;
}
</style>
