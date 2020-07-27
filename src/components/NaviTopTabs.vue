<template>
  <div class="toolbar">
    <v-toolbar dark prominent color="#182628" height="60">
      <v-row>
        <v-app-bar-nav-icon large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-chip class="pa-5 ma-2 link" color="#57BA98" text-color="white">
          <router-link to="/">GROE</router-link>
        </v-chip>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mic"
          prepend-inner-icon="search"
          label="Search"
          single-line
          solo-inverted
          centered
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon large>mdi-account</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon large>mdi-export</v-icon>
        </v-btn>
      </v-row>
      <template v-slot:extension>
        <v-spacer></v-spacer>
        <!--Favs & Cart-->
        <router-link to="/Favs">
          <v-btn class="mx-3" dark color="pink">
            <span>Favs</span>
            <v-icon dark>mdi-heart</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/Cart">
          <v-btn class="mx-3" dark color="black">
            <span>Cart</span>
            <v-icon medium color="light-green accent-3">mdi-cart-outline</v-icon>
            <v-badge v-if="hasproduct()" offset-x="-3" offset-y="-3" :content="productnumber()"></v-badge>
          </v-btn>
        </router-link>
      </template>
    </v-toolbar>
    <div class="blue-grey darken-4">
      <b-button-toolbar>
        <b-dropdown class="m-md-2" text="Diary">
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>

        <b-dropdown class="m-md-2">
          <template v-slot:button-content>
            Custom
            <strong>Content</strong> with
            <em>HTML</em> via Slot
          </template>
          <b-dropdown-item href="#">An item</b-dropdown-item>
          <b-dropdown-item href="#">Another item</b-dropdown-item>
        </b-dropdown>
      </b-button-toolbar>
    </div>
    <!--Navigation Drawer-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Ashley Tennyson</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <!-- Items  Category-->
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Admins Category -->
        <v-list-group no-action prepend-icon="account_circle">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>My Account</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(admin, i) in admins" :key="i" link>
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <!--  Category -->
        <v-list-item v-b-toggle.categorysidebar link>
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Shop By Category</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <b-sidebar id="categorysidebar" right title="Sidebar" no-header>
          <template v-slot:default="{ hide }">
            <v-list>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>mdi-backburger</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title @click="hide">Main Menu</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
              <v-list-item v-for="([icon, text], i) in categoryitems" :key="i" link>
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </template>
        </b-sidebar>
        <!-- itemsafter Category -->
        <v-list-item v-for="item in itemsafter" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    drawer: null,
    absolute: false,
    opacity: 0.5,
    overlay: false,
    items: [{ title: "Home", icon: "mdi-home" }],
    admins: [
      ["My Profile", "mdi-human-greeting"],
      ["My Orders", "dashboard"],
      ["My Payments", "money"],
      ["My Wallet", "mdi-wallet"],
      ["Rating & Reviews", "mdi-star-circle"]
    ],
    categoryitems: [
      ["mdi-rice", "Staple Items"],
      ["mdi-food-apple", "Fruits & Vegetables"],
      ["mdi-home-circle", "Household & Cleaning"],
      ["mdi-headphones", "Electronics"],
      ["mdi-baby", "Personal Care"]
    ],
    itemsafter: [
      { title: "Notifcations", icon: "mdi-alert-circle-outline" },
      { title: "Customer Service", icon: "mdi-cellphone-dock" },
      { title: "FAQs", icon: "question_answer" },
      { title: "Settings", icon: "settings" }
    ]
  }),
  computed: {
    ...mapGetters(["getCartproducts"])
  },

  methods: {
    productnumber() {
      return this.getCartproducts.length;
    },
    hasproduct() {
      return this.getCartproducts.length > 0;
    }
  }
};
</script>



