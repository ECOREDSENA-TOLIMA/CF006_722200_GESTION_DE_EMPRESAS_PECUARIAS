<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Control de plagas y vectores

    p(data-aos="fade-left").mb-5 Un vector es un elemento vivo o inerte que lleva consigo alguna contaminación no usual, a continuación, se amplía la información:

    .tarjeta.tarjeta(style="background-color: #DBF9BD").p-4.mb-5(data-aos="flip-up")
      h4.titulo-cuarto
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los vectores entre los que se encuentran roedores, moscas y aves, suelen ser transmisores de enfermedades que reducen la productividad pecuaria, ingieren o dañan el alimento destinado a los animales y, en ocasiones, pueden afectar incluso la infraestructura productiva (Porkcolombia, 2016).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/1.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Una mala gestión de las plagas y los vectores al interior de las unidades pecuarias a menudo puede traer consecuencias nefastas para la explotación pecuaria, por lo que este es un aspecto que debe cobrar un especial interés por parte del empresario del campo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/2.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Los vectores biológicos son organismos que portan patógenos, especialmente virus y bacterias, que tienen la capacidad de enfermar a otros seres vivos. Por su parte, las plagas son organismos que debido a su proliferación en determinados ambientes pueden causar afectaciones a los seres humanos o a sus productos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Dentro de los organismos que más comúnmente se consideran plagas están los roedores (ratones, ratas) los que a menudo consumen y contaminan los alimentos concentrados destinados para la alimentación animal. Igualmente, otro gran grupo de plagas está compuesto por los artrópodos (insectos) que pueden parasitar a los animales o bien convertirse en vectores de enfermedades al movilizarse de una granja a otra o al entrar en contacto con superficies contaminadas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/4.svg', alt='Texto que describa la imagen')

       


    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Medidas de prevención

    p(data-aos="fade-left").mb-5 En todas las explotaciones pecuarias es posible que se encuentren problemas de plagas, debido a la misma naturaleza de la actividad productiva, sin embargo, es posible mantener bajos los niveles de infestación siguiendo algunas recomendaciones básicas:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 13
          span #[em Medidas de prevención para manejo de plagas]

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/5.svg', alt='Figura 13 Medidas de prevención para manejo de plagas En la figura se observa como medidas manejo de excretas, manejo de mortalidades, aguas residuales, trampas, manejo de residuos, bodegas, podas, aseo.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/5-m.svg', alt='Figura 13 Medidas de prevención para manejo de plagas En la figura se observa como medidas manejo de excretas, manejo de mortalidades, aguas residuales, trampas, manejo de residuos, bodegas, podas, aseo.')
    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2  Métodos de control

    p(data-aos="fade-left") Además de las medidas de prevención, es importante diseñar estrategias que permitan hacer un manejo eficiente e integrado de los problemas de plagas, para lo cual es importante conocer sus hábitos, su comportamiento y su biología. En el siguiente cuadro se presentan algunos de los métodos más empleados en el manejo de plagas en explotaciones pecuarias. 
    p(data-aos="fade-left").mb-5 Se recomienda ver el Manual de control de plagas en avicultura de Fenavi (2020) que reposa en el material complementario.

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8
          span #[em Principales métodos de control de plagas en industrias pecuarias]
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Tipo de control
                th Características
                th Ventajas
                th Desventajas
            tbody.text-center
              tr
                td #[b Control biológico]
                td Realizar las adecuaciones correspondientes para evitar el drenaje de aguas residuales a libre exposición.
                td Protección del entorno y la biodiversidad. <br> Alta sostenibilidad.
                td Alto costo de inversión inicial.
              tr
                td #[b Control etológico]
                td Se realiza con base en los comportamientos naturales de la plaga. Atrayentes, cebos tóxicos.
                td Protección del entorno y la biodiversidad. <br>Baja inversión inicial. <br>100 % natural.
                td Bajos niveles de efectividad.
              tr
                td #[b Control químico]
                td Utilización de compuestos de síntesis química para controlar los organismos plaga.
                td Alta efectividad. <br> Control eficiente en términos de tiempo.
                td Contaminación del entorno. <br> Daños colaterales en organismos benéficos.
              tr
                td #[b Control físico]
                td Funcionan mediante la captura de los individuos o su eliminación al alterar las condiciones de su entorno. Trampas, riego por aspersión, destrucción de hábitats.
                td Protección de suelos y aguas. <br>100 % natural. <br>Aplicable en cualquier época del año.
                td Mayor inversión de tiempo para realizar controles. 
              tr
                td #[b Control cultural]
                td Implementación de prácticas que modifican el entorno de las especies plaga; control de malezas, destrucción de hábitats de plagas, volteo y compostaje de excretas.
                td Bajo costo. <br>100 % natural. <br>Se puede realizar en cualquier momento.
                td Demanda mayor cantidad de mano de obra.

    separador
    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3  Periodicidad de aplicación

    p(data-aos="fade-left").mb-5 Uno de los principales aspectos que se debe tener en cuenta para el manejo integrado de las plagas de las explotaciones pecuarias, es el ciclo de vida de los individuos, pues no en todas las etapas de desarrollo están en capacidad de causar afectaciones a los animales y materias primas. Con base en esta información, es posible identificar las épocas más propicias para desarrollar las medidas de control. 

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9
          span #[em Periodicidad de las actividades de manejo de plagas]
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Tipo de control
                th Periodicidad
            tbody.text-center
              tr
                td Control biológico
                td Liberación de biocontroladores cada 15 días inicialmente. Luego la frecuencia se puede ampliar hasta los dos o tres meses. 
              tr
                td Control etológico
                td Permanente.
              tr
                td Control químico
                td Aplicaciones cada 15 días en horas de poca actividad biológica. Temprano en la mañana o al final de la tarde. controladores cada 15 días inicialmente. Luego la frecuencia se puede ampliar hasta los dos o tres meses. 
              tr
                td Control físico y cultural
                td Permanente.

    figure.mb-5
      img(src='@/assets/curso/temas/tema7/6.svg')

    p(data-aos="fade-left") En el caso de los insectos, la implementación periódica de medidas de manejo es importante para romper los ciclos de vida y de esta forma reducir significativamente las poblaciones. Igualmente, en el caso de los roedores, la combinación de la utilización de cebos tóxicos con la destrucción de los hábitats propicios para su reproducción es una forma altamente eficiente de combatir el problema. 
    p(data-aos="fade-left").mb-5 Para el manejo químico de las infestaciones de plagas de insectos, es importante rotar los ingredientes activos, ya que si se usan frecuentemente los mismos compuestos químicos es posible que con el tiempo se genere resistencia.
</template>

<script>
export default {
  name: 'Tema7',
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
