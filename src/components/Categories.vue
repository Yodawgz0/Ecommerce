<template>
  <div>
    <!--Staple Items-->
    <div class="grey lighten-3">
      <h2 align="center" class="pt-5 teal--text">Staple Items</h2>
      <v-divider inset></v-divider>
      <v-row>
        <v-col cols="pa-1"></v-col>
        <!--StapleFood1-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
          <router-link to="/riceflour">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\StapleFoods1.jpg"
              ></v-img>
              <v-card-title>Rice &amp; Flour</v-card-title>
            </v-card>
            </router-link>
          </v-hover>
        </v-col>
        <!--StapleFood2-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\StapleFoods2.jpg"
              ></v-img>
              <v-card-title>Spices</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--StapleFoods3-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\StapleFoods3.jpg"
              ></v-img>
              <v-card-title>Poha</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="pa-1"></v-col>
      </v-row>
    </div>
    <!--Fruits & Vegetables-->
    <div class="green accent-1">
      <h2 align="center" class="pt-5 teal--text">Fruits &amp; Vegetables</h2>
      <v-divider inset></v-divider>
      <v-row>
        <v-col cols="pa-1"></v-col>
        <!--Fruits-->
        <v-col cols="auto m-a-5 pa-3">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\fruits1.jpg"
              ></v-img>
              <v-card-title>Fruits</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--Vegetables-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\vegetables.jpg"
              ></v-img>
              <v-card-title>Vegetables</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--Sprouts-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\sprouts.jpg"
              ></v-img>
              <v-card-title>Sprouts</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--Exotics-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\exotics.png"
              ></v-img>
              <v-card-title>Exotics</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="pa-1"></v-col>
      </v-row>
    </div>
    <!--Household &amp; Cleaning-->
    <div class="grey lighten-3">
      <h2 align="center" class="pt-5 teal--text">Household &amp; Cleaning</h2>
      <v-divider inset></v-divider>
      <v-row>
        <v-col cols="pa-1"></v-col>
        <!--Cleaning-->
        <v-col cols="auto m-a-5 pa-3">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\Cleaning.jpg"
              ></v-img>
              <v-card-title>Cleaning</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--utensils-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\utensils.png"
              ></v-img>
              <v-card-title>utensils</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--laundry-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 yellow lighten-4"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\laundry.jpg"
              ></v-img>
              <v-card-title>Laundry</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="pa-1"></v-col>
      </v-row>
    </div>
    <!--Personal Care-->
    <div class="green accent-1">
      <h2 align="center" class="pt-5 teal--text">Personal Care</h2>
      <v-divider inset></v-divider>
      <v-row>
        <v-col cols="pa-1"></v-col>
        <!--Cream-->
        <v-col cols="auto m-a-5 pa-3">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\cream.jpg"
              ></v-img>
              <v-card-title>Cream</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--Deos-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img class="white--text align-end" height="200" width="200" src="..\assets\deo.jpg"></v-img>
              <v-card-title>Deos</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <!--makeup-->
        <v-col cols="auto m-a-5 pa-2">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card
              class="d-inline-block mx-auto pa-2 pink lighten-5"
              shaped
              :elevation="hover ? 16 : 2"
              href="https://www.google.com"
            >
              <v-img
                class="white--text align-end"
                height="200"
                width="200"
                src="..\assets\makeup.jpg"
              ></v-img>
              <v-card-title>Make Up</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="pa-1"></v-col>
      </v-row>
    </div>
  </div>
</template>