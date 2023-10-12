<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Filtros sanitarios
      
    p(data-aos="fade-left") De acuerdo con la Resolución 20033 de 2016 del Instituto Colombiano Agropecuario, un filtro sanitario es una instalación ubicada antes de ingresar a las áreas de producción, que cuenta con un área para cambio de ropa del personal, un sistema para la desinfección del calzado y un lavamanos provisto con agua potable, jabón, solución desinfectante y elementos higiénicos para el secado de manos. 
    p(data-aos="fade-left").mb-5 El filtro sanitario debe:

    .row.justify-content-center.mb-5 
      .col
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema8/1.svg')
            .col-10
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Estar ubicado en el sitio de ingreso a las áreas de producción.
                li 
                  i.lista-ul__vineta
                  | Estar construido con materiales que faciliten su aseo y desinfección.
                li 
                  i.lista-ul__vineta
                  | Contar con #[em vestier], sanitario y lavamanos con capacidad para el número trabajadores.
                li 
                  i.lista-ul__vineta
                  | Tener, en lo posible, un área de ingreso (área sucia), un área intermedia (ducha) y un área limpia donde se encuentre la dotación usará el operario dentro de la explotación productiva.

   

    separador
    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Clases y características
    
    .row.mb-5.align-content-center
      .col-md-8(data-aos="fade-right")
        p Los filtros sanitarios cumplen una función bastante importante al evitar el paso de agentes contaminantes externos hacia el interior de la unidad productiva e, igualmente, previenen la contaminación entre las zonas de trabajo dentro de la explotación pecuaria. 
        p Estos filtros pueden emplear una o varias barreras para impedir el paso de los agentes contaminantes y poseer diversos niveles de complejidad, de acuerdo con el tipo de explotación, la especie pecuaria y el destino de la producción. Por ejemplo, los filtros sanitarios de las explotaciones dedicadas a la producción de material genético tienen muchas más barreras que aquellos instalados en las explotaciones de pollo de engorde o producción de huevo.
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/2.svg' alt='')  
    
    separador
    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2  Equipos

    p(data-aos="fade-left").mb-5 Para la construcción de los filtros sanitarios se pueden emplear desde equipos muy sencillos con un nivel muy bajo de tecnificación hasta sistemas complejos que emplean de forma simultánea dos o más mecanismos de limpieza y desinfección. En el caso de las explotaciones porcícolas, por ejemplo, la normatividad recomienda emplear duchas, lavamanos, #[em vestier], elementos para secar las manos y sanitario. Sin embargo, algunos sistemas más sencillos solo emplean pediluvios, lavamanos o puntos de sanitización de manos. Entre los equipos que a menudo se utilizan en los filtros sanitarios están los siguientes:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/3.svg' alt='AvatarTop')
        h4.text-center Lavabotas

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/4.svg' alt='AvatarTop')
        h4.text-center Pediluvios

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/5.svg' alt='AvatarTop')
        h4.text-center Lavamanos automático

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/6.svg' alt='AvatarTop')
        h4.text-center Dispensador de toallas
      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/7.svg' alt='AvatarTop')
        h4.text-center Secador de manos automático

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/8.svg' alt='AvatarTop')
        h4.text-center Arco sanitario

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/9.svg' alt='AvatarTop')
        h4.text-center Rodiluvio

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/10.svg' alt='AvatarTop')
        h4.text-center Filtros sanitarios integrados
      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/11.svg' alt='AvatarTop')
        h4.text-center Sistema de higiene integrado


    separador
    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3  Protocolos

    p(data-aos="fade-left").mb-5 Un protocolo es un conjunto de medidas, instrucciones o procedimientos que orientan y controlan cómo se deben llevar a cabo determinadas actividades al interior de la unidad pecuaria. En el caso de la bioseguridad, estos protocolos permiten al personal organizar en un orden lógico las actividades que conllevarán a la mitigación de los riesgos asociados al ingreso de agentes patógenos. Dentro de los protocolos para la implementación de los filtros sanitarios se deben incluir disposiciones que eviten la entrada y dispersión de organismos potencialmente peligrosos.

    .row.justify-content-center.mb-5
      .col-10
        .row.justify-content-center.mb-5
          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/12.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Filtro sanitario de ingreso
                  p Definir la ubicación del filtro sanitario de ingreso a la unidad productiva

          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/13.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Equipos y sustancias desinfectantes
                  p Determinar el tipo de equipos que estarán en cada filtro y las sustancias desinfectantes que se utilizarán con su ficha técnica correspondiente. 

          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/14.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Filtros sanitarios internos
                  p Definir la ubicación y el número de filtros sanitarios internos para evitar la propagación de patógenos al interior de la unidad productiva.

          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/15.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Protocolos de limpieza y desinfección
                  p Establecer los procedimientos de limpieza y desinfección para el paso por cada uno de los filtros sanitarios de la unidad productiva. 

          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/16.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Plano general
                  p Establecer en un plano la ubicación de los filtros sanitarios dentro de la unidad productiva. 

          .col-6.mb-5
            .tarjeta-avatar-b(style="height:100%")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema8/17.svg' alt='AvatarTop')
              .tarjeta(style="background-color:#D7DDD2")
                .p-4
                  h4 Responsables
                  p Identificar los responsables de verificar el funcionamiento de los filtros sanitarios y del diligenciamiento de los registros de ingreso. 

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
