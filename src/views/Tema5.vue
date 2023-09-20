<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Equipos y utensilios
    
    .row.justify-content-center.mt-5.mb-5 
      .col
        .row.justify-content-center
          .col.lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen')
          .col-8
            p(data-aos="fade-left") Los animales están expuestos a múltiples riesgos en especial por la acción de agentes contaminantes como hongos, virus y bacterias los cuales pueden llegar a afectar seriamente la productividad, por lo que es absolutamente necesario implementar protocolos de aseo y desinfección para reducir estas amenazas. Para el desarrollo de los procesos de sanitización, limpieza y desinfección de las instalaciones pecuarias se requiere de equipos, utensilios y herramientas las cuales además de facilitar el trabajo aumentan la eficiencia de las actividades.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Características

    p(data-aos="fade-left") Los principales elementos empleados en la limpieza y desinfección de instalaciones pecuarias se pueden agrupar en las siguientes categorías: para remoción, transporte y disposición de residuos, para lavado general, para aplicación de sustancias desinfectantes, para desinfección física.
    p(data-aos="fade-left").mb-5 Estos son los equipos y utensilios para remoción, transporte y disposición de residuos:

    .row.justify-content-center.mb-5
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/2.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBF9BD")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Azadón
            p.mb-0 Se utiliza para amontonar y recoger los residuos, especialmente de las camas de galpones. 
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/3.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBF9BD")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Pala
            p.mb-0 Para recoger los residuos, formar pilas, llenar la carretilla.  
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/4.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBF9BD")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Carretilla
            p.mb-0 Para el transporte de los residuos hasta los sitios de disposición.
      .col-sm-3.col-xl-3.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema5/5.svg' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBF9BD")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Rastrillo
            p.mb-0 Para amontonar y separar materiales gruesos de la capa de residuos.

    p(data-aos="fade-left").mb-5 Para el lavado general se recomiendan estos elementos que pueden ser análogos o un poco más industrializados llegando inclusive a tener herramientas programables y con alta tecnología:

    .row.justify-content-center.mb-5 
      .col-4
        img(src='@/assets/curso/temas/tema5/6.svg' alt='AvatarTop').mb-3
        h4 Manguera
        p Para la conducción del agua hasta el sitio que se desea lavar y desinfectar. Una buena presión de agua es recomendable para remover buena parte de los residuos.
      .col-4
        img(src='@/assets/curso/temas/tema5/7.svg' alt='AvatarTop').mb-3
        h4 Escoba
        p Para restregar y remover los residuos que estén adheridos a las superficies. 
      .col-4
        img(src='@/assets/curso/temas/tema5/8.svg' alt='AvatarTop').mb-3
        h4 Cepillo
        p Para restregar las superficies contaminadas con diversos tipos de sustancias. 

    .tarjeta.p-3(style="border-radius: 0; background-color:#FFFAD0")
      p Por el lado de la desinfección que es tan importante en los procesos de cuidado pecuario es necesario tener los siguientes elementos de apoyo a la hora de aplicar algunos de los químicos desinfectantes, se debe tener cuidado con su control y manipulación por parte de los humanos y animales:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Fumigadora de espalda
          p  Es un equipo manual en el cual por medio de la presión de aire se aplica el producto desinfectante. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/9.svg', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/10.svg', alt='Texto que describa la imagen')
        .col-md-6
          h3 Fumigadora de motor
          p Por medio de la fuerza del motor se aplica una solución desinfectante a alta presión. Es ideal para lugares de difícil acceso. 


      .row
        .col-md-6.mb-4.mb-md-0
          h3 Nebulizador
          p Es especial para impregnar superficies con la sustancia desinfectante debido a que pulveriza las gotas de agua.  

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/11.svg', alt='Texto que describa la imagen')

      .row
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/12.svg', alt='Texto que describa la imagen')

        .col-md-6.mb-4.mb-md-0
          h3 Termonebulizador
          p Por medio de la acción del calor las gotas de agua de la solución desinfectante se convierten en niebla que se adhiere fácilmente a las superficies.  
      .row
        .col-md-6
          h3 Aplicador de espuma
          p Algunas sustancias desinfectantes se aplican en forma de espuma, por lo que este implemento resulta de bastante utilidad.
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/13.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-8
        p(data-aos="fade-left").text-center Adicionalmente se recomienda tener un flameador como elemento de desinfección profunda.

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/14.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Flameador] <br> <br>Este equipo funciona generalmente a gas y permite aplicar calor directamente sobre las superficies que se deseen desinfectar. Es altamente eficiente en explotaciones avícolas, principalmente.

        p(data-aos="fade-left").mb-5 El tipo de utensilio, equipo o herramienta a emplear en los procesos de limpieza y desinfección depende principalmente de la clase de explotación en la que se requiera desarrollar el proceso. En sistemas productivos intensivos, es más común el uso de equipos más sofisticados, pues el área de las instalaciones y el volumen de trabajo son mucho mayores.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Manual de operación 

    .row.justify-content-center.mt-5.mb-5 
      .col
        .row.justify-content-center
          .col-8
            p(data-aos="fade-left") Al igual que ocurre con los equipos empleados en otros procesos que tienen lugar en las explotaciones agropecuarias, los equipos empleados en la limpieza y desinfección de instalaciones pecuarias siempre están acompañados de sus respectivos manuales de operación. Es una labor fundamental del administrador de la unidad pecuaria tener a la mano los manuales de operación de todos los equipos, instruir al personal para que los estudie, realizar jornadas de inducción y reinducción sobre la operación de los aparatos y disponer de una lista de contactos de proveedores y almacenes técnicos en los que sea posible encontrar respuestas ante situaciones de mal funcionamiento o dudas en la operación de los elementos.
            p(data-aos="fade-left") El estudio del manual de operación permitirá un uso más eficiente del equipo, alargará su vida útil y proporcionará información importante sobre su almacenamiento, ensamble, cuidados durante la operación, recomendaciones de seguridad y mantenimiento.
            p(data-aos="fade-left") En términos generales, un manual de operación contiene:
          .col.lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/15.png', alt='Texto que describa la imagen')

    AcordionA(tipo="b" clase-tarjeta="tarjeta")(style="background-color: #DBF9BD")
      .row(titulo="Identificación")
        .col.mb-4.mb-md-0
          p Se indica la marca del equipo, el nombre, el modelo y la referencia, ya que el manual es único e intransferible para cada equipo. No es homologable con equipos similares.

      .row(titulo="Información de seguridad")
        .col
          p Allí se presentan las precauciones básicas que se deben tener en cuenta, así como un listado de las etiquetas de advertencia que se encuentran en el equipo. Igualmente se definen los equipos de protección que se deben emplear durante la operación de la máquina.
          .titulo-sexto.color-acento-contenido
            h5 Figura 13
            span #[em Advertencia de seguridad manual de operación termo-nebulizador]
          figure
            img(src='@/assets/curso/temas/tema5/16.svg', alt='Figura 13 Advertencia de seguridad manual de operación termo-nebulizador En la figura se observa las advertencias de seguridad del SN101E puesta en servicio.')
            figcaption Nota. Tomada de Swingtec GmbH (2019).

      .row(titulo="Componentes del equipo")
        .col
          p Se presenta un diagrama en cual se describen las partes del equipo y su ubicación, lo cual es absolutamente necesario para proceder con la operación del aparato.
          .titulo-sexto.color-acento-contenido
            h5 Figura 14
            span #[em Esquema de componentes de un equipo termo-nebulizador]
          figure
            img(src='@/assets/curso/temas/tema5/17.svg', alt='Figura 14 Esquema de componentes de un equipo termo-nebulizador En la figura se observa los componentes de un equipo termo-nebulizador.')
            figcaption Nota. Tomada de Agriavi (2018).

      .row(titulo="Operación")
        .col
          p Esta sección generalmente incluye una explicación de los medidores, los interruptores y controles del equipo; funcionamiento de los accesorios y la información básica para el transporte del aparato.
          figure
            img(src='@/assets/curso/temas/tema5/18.svg', alt='')

      .row(titulo="Mantenimiento")
        .col
          p Se dan recomendaciones, paso a paso, de la forma como se debe hacer le mantenimiento del equipo, la periodicidad, los elementos de protección que se requieren y las herramientas necesarias. Igualmente se expresa en qué casos será necesario acudir al servicio técnico. Las actividades de mantenimiento de los equipos siempre están acompañadas de diagramas que presentan de forma secuencial cómo realizar estas labores.
          figure
            img(src='@/assets/curso/temas/tema5/19.svg', alt='')
            figcaption Nota. Tomada de Caterpillar (2007). 

            
          
</template>

<script>
export default {
  name: 'Tema5',
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
