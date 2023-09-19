<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Higienización

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Productos, concentraciones y preparación

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Métodos, frecuencia y periodicidad

    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Fichas técnicas, responsables

    separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Cronograma de actividades higienización
</template>

<script>
export default {
  name: 'Tema6',
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
