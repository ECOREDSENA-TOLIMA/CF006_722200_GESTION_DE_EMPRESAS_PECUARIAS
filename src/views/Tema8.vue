<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Filtros sanitarios
      
    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Clases y características

    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2  Equipos

    separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3  Protocolos
</template>

<script>
export default {
  name: 'Tema8',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
