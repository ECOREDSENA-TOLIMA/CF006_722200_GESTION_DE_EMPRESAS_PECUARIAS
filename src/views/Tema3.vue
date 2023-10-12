<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de producción 

    .row.justify-content-center.mt-5.mb-5 
      .col
        .row.justify-content-center
          .col.lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/1.svg', alt='Texto que describa la imagen')
          .col-8
            p(data-aos="fade-left") Cada una de las explotaciones que tienen lugar en los entornos rurales y que utilizan animales para la generación de ingresos, o con fines de autoabastecimiento, reciben el nombre de sistemas productivos. No existe una cifra exacta sobre la cantidad de sistemas productivos agropecuarios que hay en el mundo, debido a que estos son tan diversos como las especies animales y vegetales que se utilizan para la alimentación y la industria. A grandes rasgos los siguientes son los dos sistemas de producción más comunes:

    .titulo-sexto.color-acento-contenido
      h5 Figura 6
      span #[em Características de los sistemas productivos]

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/2.svg', alt='Figura 6 Características sistemas productivos En la figura se observa sistemas productivos agrícolas; sistemas productivos pecuarios.') 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/2-m.svg', alt='Figura 6 Características sistemas productivos En la figura se observa sistemas productivos agrícolas; sistemas productivos pecuarios.') 

    .row.justify-content-center.mt-5.mb-5 
      .col-10 
        p(data-aos="fade-left") Los sistemas de producción agrícolas son aquellos en los cuales se utilizan especies vegetales para la producción de alimentos y materias primas, tales como el café, palma de aceite, el arroz, yuca o caña de azúcar, entre otros. Por su parte, los sistemas de producción pecuaria son aquellos en los que la especie central es una especie animal, como el caso del ganado bovino, ganado ovino, caprino, peces o aves. Incluso existen algunos sistemas productivos donde en un mismo espacio se pueden cultivar especies animales y vegetales, como es el caso de los sistemas silvopastoriles.
        p(data-aos="fade-left").mb-5 La principal clasificación de los sistemas productivos agropecuarios se da con el tipo de explotación que se desarrolla, por lo que se tienen sistemas productivos intensivos, semi intensivos y extensivos. Estos se aplican para diversas especies pecuarias, desde las explotaciones de ganado bovino hasta los montajes con especies menores. Algunas de sus principales características son las siguientes:

        .row.justify-content-center.mb-3(style="background-color:#3B5620; border-radius:20px;margin-left:0px")
          .col-3
           img(src='@/assets/curso/temas/tema3/3.png').p-0
          .col-9.p-3.text-white 
            h4 Sistemas extensivos
            p Cría de animales en grandes extensiones de tierra. Son sistemas con baja demanda de mano de obra, equipos e insumos. Se caracterizan por sus bajos costos de producción. Los tiempos para el sacrificio de los animales son mucho mayores que con los otros sistemas. Generalmente poseen una baja rentabilidad. En especies menores se denominan también sistemas de traspatio. 
        .row.justify-content-center.mb-3(style="background-color:#3B5620; border-radius:20px;margin-left:0px")
          .col-3
           img(src='@/assets/curso/temas/tema3/4.png').p-0
          .col-9.p-3.text-white 
            h4 Sistemas semintensivos
            p Es uno de los más empleados en el mundo entero. Los animales son criados y alimentados en campo pero además reciben un refuerzo alimenticio o una suplementación. Utilizan una mayor cantidad de mano de obra y recursos que los sistemas extensivos. Por lo general se hace necesario el uso de instalaciones para el resguardo y manejo de los animales.
        .row.justify-content-center.mb-5(style="background-color:#3B5620; border-radius:20px;margin-left:0px")
          .col-3
           img(src='@/assets/curso/temas/tema3/5.png').p-0
          .col-9.p-3.text-white 
            h4 Sistemas intensivos
            p Son sistemas altamente dependientes de la tecnología y tienen una demanda considerable de recursos y mano de obra. Generalmente requieren de grandes inversiones para su instalación. Los niveles de rentabilidad en este tipo de explotaciones a menudo son  mayores. Se emplean las mayores densidades de animales por metro cuadrado posible, siempre respetando el bienestar animal. 

        .text-decor.text-white.text-center(data-aos="flip-up").mb-5
          p.mt-3.p-2 Sistemas productivos y bioseguridad

        p(data-aos="fade-left") Independientemente del sistema de producción que se emplee, es necesario implementar los protocolos de bioseguridad para la protección de los animales tanto de la unidad productiva como de las granjas circundantes. Generalmente, en los sistemas de producción extensivos o traspatio los productores tienden a ser menos rigurosos con los parámetros de bioseguridad, por lo que es importante que las recomendaciones relacionadas con la protección de la salud de los animales sean implementadas independientemente de esta condición.
</template>

<script>
export default {
  name: 'Tema3',
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
