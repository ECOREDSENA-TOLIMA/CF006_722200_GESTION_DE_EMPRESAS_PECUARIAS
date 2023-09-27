<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") La sanidad es una de las áreas más importantes del manejo zootécnico, pues una buena salud de los animales tiene un efecto directo en su productividad y bienestar, en la salud del personal que labora en las explotaciones, en la calidad e inocuidad del producto final y, por ende, en la salud de los consumidores como se evidencia a continuación:

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
