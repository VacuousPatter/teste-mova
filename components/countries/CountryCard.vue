<template>
  <v-hover v-slot="{hover}">
    <v-card class="countries__country" link nuxt :to="`/country/${country.cca3||country.alpha3Code}`">
      <v-responsive :aspect-ratio="16/9">
        <v-img :aspect-ratio="16/9" :src="country.flags.png || country.coatOfArms.png" />
      </v-responsive>
      <v-expand-transition>
        <div
          v-if="hover"
          class="country__hover-panel"
        >
          <p>{{ country.name.common }} | {{ country.cca3 }}</p>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.country__hover-panel{
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: #fff;
}

.country__hover-panel p{
  margin: 15px;
  font-size: 1.1em;
}
</style>
