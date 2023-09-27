<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Especie animal
      
    p.mb-5(data-aos="fade-left") En los sistemas productivos pecuarios existe diversidad de especies con las que es posible desarrollar iniciativas viables desde el punto de vista socioeconómico, financiero y ambiental, las cuales se han convertido en sustento para millones de familias que habitan entornos rurales y periurbanos alrededor del mundo, por lo que es difícil determinar un número exacto de especies empleadas en la producción animal. En Colombia, de acuerdo con el volumen de producción registrado para el año 2020, se tiene que las principales explotaciones pecuarias son las siguientes:
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span #[em Principales sistemas productivos pecuarios en Colombia año 2020]

    .row.justify-content-center
      .col-8
        .tabla-b.mb-5 
          table
            caption Nota. Con base en el Ministerio de Agricultura y Desarrollo Rural (2021).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th(colspan=2) Especie productiva
                th(colspan=2)  Porcentaje de participación sobre la producción total
            tbody.text-center
              tr
                td(colspan=2)  Avicultura carne
                td(colspan=2)  31,85 %
              tr
                td(colspan=2)  Bovino leche
                td(colspan=2)  21,25 %
              tr
                td(colspan=2)  Avicultura huevo
                td(colspan=2)  19,32 %
              tr
                td(colspan=2)  Bovina carne
                td(colspan=2)  14,63 %
              tr
                td(colspan=2)  Porcicultura carne
                td(colspan=2)  8,64 %
              tr
                td(colspan=2)  Piscicultura
                td(colspan=2)  3,94 %
              tr
                td(colspan=2)  Bufalina carne
                td(colspan=2)  0,14 %
              tr
                td(colspan=2)  Acuicultura camarón
                td(colspan=2)  0,13 %
              tr
                td(colspan=2)  Miel de abejas
                td(colspan=2)  0,08 %
              tr
                td(colspan=2)  Ovina carne
                td(colspan=2)  0,01 %
              tr
                td(colspan=2)  Caprina carne
                td(colspan=2)  0,01 %

        p.text-center.mb-5(data-aos="fade-left") Para entenderlo mejor se recomienda ver la siguiente figura.

        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span #[em Porcentaje de participación sobre la producción total]

        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Figura 1 Porcentaje de participación sobre la producción total En la figura se observa avicultura carne con 32 %, bovino leche con 22 %, avicultura huevo con 18 %, bovina carne con 14 %, porcicultura carne con 8 %, picicultura con 4 %, bufalina carne con 0,5 %, sin porcentaje acuicultura camarón, miel de abejas, ovina carne, caprina carne.')

    .row.justify-content-center.mt-5.mb-5 
      .col-10
        .row.justify-content-center
          .col.lg-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/2.svg', alt='Figura 1 Porcentaje de participación sobre la producción total En la figura se observa avicultura carne con 32 %, bovino leche con 22 %, avicultura huevo con 18 %, bovina carne con 14 %, porcicultura carne con 8 %, picicultura con 4 %, bufalina carne con 0,5 %, sin porcentaje acuicultura camarón, miel de abejas, ovina carne, caprina carne.')
          .col-9
            p(data-aos="fade-left") Además de las anteriores especies, también existen otros sistemas productivos que se desarrollan a menor escala, pero no por ello dejan de ser de importancia en la generación de alimentos y materias primas. Entre ellos están la producción de conejos, cuyes, codornices, algunos tipos de reptiles, el lombricultivo, pavos, patos, gansos, avestruces y chigüiros entre otras. También existen explotaciones dedicadas a la cría de animales para diversos usos, entre los cuales destacan los équidos (caballos, mulas, asnos), alpacas y llamas.

    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Características
    
    .row.mb-5.align-content-center
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/3.svg' alt='')
      .col-md-6(data-aos="fade-right")
        p.mb-3 Para agrupar las especies pecuarias se han utilizado varias denominaciones, pero la más reconocida es la que las clasifica por su tamaño en especies mayores (por ejemplo: bovinos, bufalinos, équidos) y menores (como ovinos, caprinos, aves). Además de estos se deben tener en cuenta las explotaciones acuícolas, piscícolas y hasta las de insectos.
        .tarjeta.p-4(style="border-radius: 0; background-color:#DBF9BD").mb-3
          p Para efectos prácticos, los sistemas pecuarios se han agrupado en “familias” de especies, lo cual facilita su abordaje y comprensión. Estos grupos, a su vez, se subdividen en especies animales de importancia para la obtención de alimento o materias primas u otros servicios. Los principales grupos de especies pecuarias son los que se presentan a continuación:
        
    .row.justify-content-center.mb-5
      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Bovinos.
              p Vacas, toros, bueyes.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Equinos.
              p  Caballos, mulas, asnos.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Bufalinos.
              p  Búfalos.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/7.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Ovinos.
              p  Ovejas, camuros, corderos.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/8.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Caprinos.
              p  Cabras.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Aves.
              p  Gallinas, codornices, patos, pavos, avestruces, gansos.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/10.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Peces.
              p  Truchas, mojarras, bagres, tilapias.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/11.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Porcinos.
              p  Cerdos.

      .col-4
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/12.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D7DDD2")
            .p-4
              h4 Otras especies menores.
              p  Conejos, cuyes.
    
    p(data-aos="fade-left") Las especies animales más empleadas en la producción pecuaria poseen características que los diferencian entre sí, y que definen el tipo de explotación en el que se pueden emplear.

    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span #[em Características de las especies animales]

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-8.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/13.svg', alt='Figura 3 Características de especies pecuarias en la figura se observa las principales características de bovinos, equinos, bufalinos, ovinos, caprinos, aves, peces, porcinos, otras especies menores.')

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-8.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/13-m.svg', alt='Figura 3 Características de especies pecuarias en la figura se observa las principales características de bovinos, equinos, bufalinos, ovinos, caprinos, aves, peces, porcinos, otras especies menores.')



    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Manejo

    .row.justify-content-center.mt-5.mb-5 
      .col
        .row.justify-content-center
          .col.lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/14.svg', alt='Texto que describa la imagen')
          .col-8
            p(data-aos="fade-left") El manejo de las especies pecuarias se refiere a todas las actividades y labores que se realizan al interior de la unidad productiva para garantizar su funcionamiento de manera segura, para los animales y los manejadores, lograr su rentabilidad y generar su sostenibilidad. Las actividades de manejo varían de acuerdo con la especie, la etapa de desarrollo en que se encuentren, el sistema de explotación y el destino de la producción, entre otros factores, pero siempre tomando como principio el bienestar animal.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span #[em Principales labores de manejo pecuario]

    .row.justify-content-center
      .col-10
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th(colspan=2) Categoria
                th(colspan=2)  Descripción
            tbody.text-center
              tr
                td(colspan=2)  Movilización
                td(colspan=2)  Transporte de los animales dentro o fuera del predio, bien sea desplazándose por sí mismos o utilizando cualquier otro medio.
              tr
                td(colspan=2)  Sujeción
                td(colspan=2)  Inmovilización del animal para la realización de algún procedimiento. 
              tr
                td(colspan=2)  Aislamiento
                td(colspan=2)  Consiste en separar del resto de los animales a aquellos individuos que presenten enfermedades o lesiones que puedan poner en riesgo su integridad o la de los demás. 
              tr
                td(colspan=2)  Tratamiento
                td(colspan=2)  Realización de cualquier procedimiento para atender una lesión o enfermedad.
              tr
                td(colspan=2)  Reproducción asistida
                td(colspan=2)  Labores relacionadas con la inseminación artificial o la colecta de semen. 
              tr
                td(colspan=2)  Reproducción natural controlada
                td(colspan=2)  Se refiere a las prácticas en las cuales se requiere la presencia de un macho reproductor para realizar la cubrición de las hembras en ambientes controlados. 
              tr
                td(colspan=2)  Apero
                td(colspan=2)  Colocar los aperos a los animales para desarrollar trabajos propios de la especie en la unidad productiva (tracción, carga, monta).
              tr
                td(colspan=2)  Herraje
                td(colspan=2)  En equinos, revisar y mantener las herraduras y los cascos. 
              tr
                td(colspan=2)  Identificación
                td(colspan=2)  Marcaje y etiquetado de individuos. 
              tr
                td(colspan=2)  Alimentación
                td(colspan=2)  Todas las actividades relacionadas con la nutrición de los animales: preparar raciones, disponer el alimento. 
              tr
                td(colspan=2)  Zootécnicas
                td(colspan=2)  Son prácticas comunes que se realizan básicamente para facilitar el trabajo con los animales, evitar que se causen daño entre ellos o mejorar los parámetros productivos. Entre estas prácticas están: destete, castración, descorne, ordeño (bovinos); descole y descolmille (cerdos); corte de pezuñas, corte de cola, esquilado (ovinos y caprinos); corrección del pico (si es estrictamente necesario y bajo supervisión), sacrificio humanitario (aves de corral). 
    
    .row.justify-content-center.mb-5
      .tarjeta.p-4.color-secundario(data-aos="flip-up")
        .row.justify-content-center
          .col-sm-1
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/15.svg', alt='Texto que describa la imagen')
          .col-sm-11
            p(data-aos="fade-left") Todas las actividades de manejo animal se deben realizar por parte de personal formado y calificado, de tal forma que se garantice el bienestar del animal sin causarle ningún tipo de angustia o sufrimiento. Cada una de las especies tiene sus propias características, por lo que se debe diseñar un plan de manejo que esté acorde con sus necesidades y les brinde la mejor atención.

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/16.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En todas las prácticas de manejo de los animales, se deben incluir los criterios de bienestar animal establecidos por la OIE (Organización Mundial de Sanidad Animal) a fin de evitar dolor, estrés, angustia, sufrimiento, miedo o todo aquello que pueda ser entendido como una acción de maltrato (Instituto Colombiano Agropecuario, 2020).
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Bienestar 

    p(data-aos="fade-left").mb-5 El bienestar animal es un término relativamente nuevo en los procesos productivos pecuarios, se relaciona con:

    .row.mb-5.align-content-center
      .col-md-2(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/17.svg' alt='')
      .col-md-10(data-aos="fade-right")
        .cajon.p-4.color-primario.mb-3
          p La calidad de vida de los animales que hacen parte de este tipo de explotaciones e incluye la generación de acciones a través de las cuales se les brinde a estos un trato ético que optimice su salud, la producción y mejore los parámetros de calidad e inocuidad de los productos que se deriven de estas actividades (Ministerio de Agricultura y Desarrollo Rural, 2020).
        p De acuerdo con la Resolución 136 de 2020 del Ministerio de Agricultura y Desarrollo Rural, el bienestar animal es el modo en que este afronta las condiciones de su entorno. Se dice que un animal está en buenas condiciones de bienestar si está sano, cómodo, bien alimentado y seguro; si puede expresar formas innatas de comportamiento y si no padece sensaciones desagradables de dolor, miedo o desasosiego. 
        p El bienestar animal se basa en tres principios, los cuales se presentan a continuación:
        
    .titulo-sexto.color-acento-contenido
      h5 Figura 3
      span #[em Bienestar animal ]

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/18.svg', alt='Figura 4 Bienestar animal En la figura se observa como bienestar animal libre de hambre, sed o desnutrición; libre de impedimentos para manifestar su comportamiento natural, y libre de temor o angustia.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/18-m.svg', alt='Figura 4 Bienestar animal En la figura se observa como bienestar animal libre de hambre, sed o desnutrición; libre de impedimentos para manifestar su comportamiento natural, y libre de temor o angustia.')

    p(data-aos="fade-left") Las Resoluciones 136 y 253 de 2020, del Ministerio de Agricultura y Desarrollo Rural, abordan el tema del bienestar animal y definen los aspectos que se deben tener en cuenta para garantizar esta condición en las principales explotaciones pecuarias, elementos que son transferibles a todos los procesos productivos que involucren el trabajo con animales.
    p(data-aos="fade-left").mb-5 Dentro de los elementos que se deben tener en cuenta para garantizar el bienestar animal se encuentran los siguientes:

    

    .row.justify-content-center.mb-5
      .col-8
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#D7DDD2")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/19.svg')
            .col-10
              p El alojamiento les debe proteger de los elementos, ofrecer buena ventilación y temperatura adecuada. Buena iluminación y ser de fácil limpieza y desinfección. Igualmente se deben manejar las densidades apropiadas para cada especie. 
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/20.svg')
            .col-10
              p Las instalaciones deben satisfacer las necesidades de #[em confort] y socialización. Los materiales y el tipo de construcción deben garantizar la integridad física de los animales. 
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#D7DDD2")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/21.svg')
            .col-10
              p Se debe garantizar el acceso al agua y a los alimentos en cantidades suficientes y en condiciones higiénicas. Los alimentos comerciales deben tener registro ICA. La cantidad de comederos y bebederos debe ser suficiente para el número de animales alojados. 
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/22.svg')
            .col-10
              p Los animales deben tener espacio para expresar su comportamiento natural, realizar cambios de posturas y descansar.  
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#D7DDD2")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/23.svg')
            .col-10
              p Todos los animales deben estar incluidos en los programas oficiales de prevención, control y erradicación de enfermedades, de bioseguridad y todos los demás impulsados por la autoridad sanitaria, en este caso el ICA. 
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema1/24.svg')
            .col-10
              p El manejo de los animales se realizará por personal cualificado. Todos los procedimientos, de cualquier índole, deben utilizar elementos que minimicen el dolor. Los medicamentos y demás insumos empleados en el manejo animal deben tener registro ICA. 
        .tarjeta.p-1(style="border-radius: 0 ; background-color:#F6F6F6")
          p Nota. Con base en el Ministerio de Agricultura y Desarrollo Rural (2020).
</template>

<script>
export default {
  name: 'Tema1',
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
