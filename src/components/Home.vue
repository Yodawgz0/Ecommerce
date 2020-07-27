<template>
  <div>    
    <BrowseVendors />
    <Hoveritems />
    <Categories />
  </div>
</template>

<script>

import Hoveritems from "../components/Hoveritems";
import Categories from "../components/Categories";
import BrowseVendors from "../components/BrowseVendors";

export default {
  name: "App",

  components: {
    Hoveritems,
    Categories,
    BrowseVendors
  },

  data: () => ({
    //
  })
};
</script>
