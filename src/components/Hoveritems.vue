<template>
  <div>
    <v-sheet class="mx-auto teal lighten-4" elevation="8">
      <v-slide-group
        v-model="model"
        class="pa-6"
        :prev-icon="prevIcon ? 'mdi-minus' : undefined"
        :next-icon="nextIcon ? 'mdi-plus' : undefined"
        :multiple="multiple"
        :show-arrows="showArrows"
        :center-active="centerActive"
        cycle
      >
        <v-slide-item v-for="n in 15" :key="n">
          <v-hover v-slot:default="{ hover }" close-delay="200">
            <v-card
              :color="active ? 'peach' : 'grey lighten-1'"
              :elevation="hover ? 16 : 2"
              class="mx-3"
              height="132"
              width="200"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >100.00</div>
                </v-expand-transition>
                <v-btn absolute color="teal" class="white--text" bottom left>
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
              </v-img>
            </v-card>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: null,
    multiple: false,
    mandatory: false,
    showArrows: true,
    prevIcon: false,
    nextIcon: false,
    centerActive: false
  })
};
</script> 



<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
