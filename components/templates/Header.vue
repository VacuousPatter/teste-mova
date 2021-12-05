<template>
  <v-app-bar
    fixed
    app
    height="100px"
  >
    <nuxt-link to="/" class="link-home">
      <img class="link-home__logo" src="/images/logo_principal.png" alt="Logo da Mova">
    </nuxt-link>
    <v-spacer />
    <v-btn outlined tile color="primary" class="button--back" @click="backRoute">
      <v-icon left>
        mdi-keyboard-return
      </v-icon>
      Voltar
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    backRoute () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.link-home{
  max-height: 100%;
  display: inline-block;
}

.link-home__logo{
  height: 61px;
  display: block;
}

.button--back{
  text-transform: none;
}
</style>
