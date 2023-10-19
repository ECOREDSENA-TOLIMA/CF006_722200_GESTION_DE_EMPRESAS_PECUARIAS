<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Normativa seguridad y salud en el Trabajo

    .row.mb-5.align-content-center
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema10/1.png' alt='')  
      .col-md-8(data-aos="fade-right")
        p La implementación de los proyectos productivos pecuarios es una de las actividades que se ha convertido en alternativa de empleo digno para miles de familias en el territorio nacional, ya que es una industria creciente en un país que cada vez demanda más alimentos y materias primas. 
        p Como muchas otras industrias en Colombia, la empresa pecuaria ha evolucionado en los últimos años y se ha transformado conforme a las exigencias normativas que rigen los temas de empleo, seguridad y formalización laboral. Igualmente, la adopción por parte de muchos empresarios del agro de los lineamientos y principios de las Buenas Prácticas Pecuarias (BPP) y Buenas Prácticas Agrícolas (BPA) ha llevado a que se incorporen en la actividad productiva estos elementos, con lo cual el sector agropecuario ha dado un paso importante hacia la tecnificación de los procesos y el desarrollo de la actividad productiva conforme a los estándares internacionales. 

    .row.mb-5.justify-content-center.align-content-center
      .col-md-10(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-5
          p En cuanto a la normativa relacionada con la seguridad y salud en el trabajo se tiene que desde la década de los 50 se vienen dando avances importantes en lo relacionado con la reivindicación de los derechos de los trabajadores y la búsqueda de relaciones más justas entre estos y sus patronos. Con la incorporación del Código Sustantivo del Trabajo se logró aportar a la consolidación de las relaciones entre trabajadores y empleadores dentro de un ambiente de coordinación económica y equilibrio social. 
        p(data-aos="fade-left") A continuación, se presenta un recuento del marco normativo que acompaña los procesos de seguridad y salud en el trabajo. 
    .titulo-sexto.color-acento-contenido
      h5 Tabla 12
      span #[em Normativa seguridad y salud en el trabajo]
    .tabla-b.mb-5 
        table
          thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
            tr.text-center
              th Normativa seguridad y salud en el trabajo
          tbody
            tr
              td Código Sustantivo del Trabajo. 1951 Regulación de Relaciones Laborales.
            tr
              td Resolución 2400 1979 por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.
            tr
              td Resolución 2013 1986 por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.
            tr 
              td Resolución 1792 1990 por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.
            tr
              td Decreto-Ley 1295 1994 por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
            tr 
              td Ley 1010 2006 por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.
            tr
              td Resolución 1401 2007 por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.
            tr 
              td Resolución 2346 2007 por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.
            tr
              td Resolución 2646 2008 por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.
            tr 
              td Resolución 0652 2012 por la cualquier se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas y se dictan otras disposiciones.
            tr
              td Resolución 1409 2012 por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.
            tr 
              td Decreto 1072 2015 Decreto Único Reglamentario del Sector Trabajo.
            tr
              td Resolución 0312 2019 por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.

    separador
    #t_10_1.titulo-segundo.color-acento-contenido
      h2 10.1  Clases de riesgo

    .row.mb-5.align-content-center
      .col-md-8(data-aos="fade-right")
        p Para hablar de seguridad y salud en el trabajo obligatoriamente se debe hablar de riesgos, pues estos son inherentes a toda actividad humana. De acuerdo con el Ministerio de Trabajo, un riesgo se define como la combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos. Por otro lado, “la estimación del riesgo consiste en emitir un juicio sobre la tolerancia o no del riesgo estimado. En este orden de ideas, la seguridad y salud en el trabajo es el desarrollo de un proceso lógico y por etapas, basado en la mejora continua, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo” (Ministerio de trabajo 2016).
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema10/2.svg' alt='')  

    //- .row.justify-content-center.mb-5
    //-   .col-10
    //-     .titulo-sexto.color-acento-contenido
    //-       h5 Tabla 13
    //-       span #[em Características del agua para consumo humano]
    //-     .tabla-b.mb-5 
    //-       table
    //-         caption Nota. Tomada del Ministerio de la Protección Social (2007).
    //-         thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
    //-           tr.text-center
    //-             th Características físicas
    //-             th Valor máximo aceptable
    //-         tbody.text-center
    //-           tr
    //-             td Color aparente
    //-             td 15
    //-           tr
    //-             td Olor y sabor
    //-             td Aceptable
    //-           tr
    //-             td Turbiedad 
    //-             td 2

    .row.justify-content-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13
          span #[em Clasificación de los riesgos laborales de acuerdo con las aseguradoras de riesgos laborales]
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Clase de riesgo
                th Tarifa
                th Actividades
            tbody.text-center
              tr
                td I
                td 0,522 %
                td Financieras, trabajos de oficina, administrativos, centros educativos, restaurantes. 
              tr
                td II
                td 1,044 %
                td Algunos procesos manufactureros como fabricación de tapetes, tejidos, confecciones. 
              tr
                td III
                td 2,436 %
                td Procesos manufactureros como la fabricación de agujas, alcoholes y artículos de cuero. 
              tr
                td IV
                td 4,350 %
                td Fabricación de aceites, cervezas, vidrios, procesos de galvanización y transportes. 
              tr
                td V
                td 6,960 %
                td Areneras, manejo de asbesto, bomberos, manejo de explosivos, construcción y explotación petrolera. 

        p(data-aos="fade-left") En relación con la clasificación de los riesgos, de acuerdo con la normatividad vigente se tiene que existen cinco (5) clases de riesgo, dependiendo de aspectos como las materias primas con las que se trabaja, los materiales, insumos que sean utilizados, medios de producción, procesos, almacenamiento y transporte. Este aspecto es importante, pues la definición de la clase de riesgo indica la tarifa sobre la cual se hará la cotización a la Aseguradora de Riesgos Laborales (ARL). 


    separador
    #t_10_2.titulo-segundo.color-acento-contenido
      h2 10.2  Peligros

    p(data-aos="fade-left").mb-5 De acuerdo con la Guía Técnica Colombiana (GTC) 45 del Instituto Colombiano de Normas Técnicas (ICONTEC) un peligro es una fuente, situación o acto con potencial de daño en términos de enfermedad o lesión a las personas o una combinación de estos. En este mismo documento se establecen algunas orientaciones sobre los tipos de peligros a los que los trabajadores están expuestos en sus actividades diarias. Si bien es una lista extensa, no se considera como definitiva, pues cada empresa está en capacidad de identificar sus propios riesgos potenciales. 

    .row.justify-content-center.mb-5
      .col-10
        figure
          img(src="@/assets/curso/temas/tema10/3.svg")

        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 14
          span #[em Ejemplos de peligros que pueden enfrentar los trabajadores]
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Tipo de peligro
                th Descripción
            tbody.text-center
              tr
                td Biológico
                td Virus, bacterias, hongos, parásitos, mordeduras. 
              tr
                td Físico
                td Ruido, iluminación, vibración, temperatura, presión atmosférica.  
              tr
                td Químico
                td Polvos, fibras, líquidos, gases, vapores.  
              tr
                td Psicosocial
                td Estilo de mando, pago, contratación, evaluación de desempeño. 
              tr
                td Biomecánico
                td Posturas, esfuerzos, movimientos repetitivos, cargas. 
              tr
                td Condiciones de seguridad
                td Máquinas, herramientas, materiales, eléctricos, superficies. 
              tr
                td Fenómenos naturales
                td Terremoto, vendaval, inundación, derrumbe, sismo. 

        p(data-aos="fade-left").mb-5 En los entornos rurales, los trabajadores agropecuarios se enfrentan a múltiples peligros, por lo que es sumamente importante identificarlos y contrastarlos en una matriz de riesgos. De esta forma, se sentarán las bases para realizar una buena gestión de estas situaciones y construir soluciones que permitan desarrollar las actividades con total seguridad. 

    separador
    #t_10_3.titulo-segundo.color-acento-contenido
      h2 10.3  Medidas de protección

    p(data-aos="fade-left").mb-5 La identificación de los riesgos es un paso fundamental para establecer las medidas de protección y los planes de mejoramiento para los diversos procesos que se desarrollan en la empresa pecuaria. En este punto es importante analizar el ciclo PHVA (Planear, Hacer, Verificar y Actuar) ya que muchas de las recomendaciones que se dan para el ejercicio con seguridad de las funciones al interior de la unidad productiva se desprenden de este ejercicio. Para la definición de las medidas de protección frente a los peligros identificados en la unidad productiva es importante tener en cuenta la jerarquía de controles:

    .row.justify-content-center 
      .col-10
        <hr style="border:15px;">
    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema10/4.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Eliminación:] realizar una modificación profunda para eliminar un peligro: por ejemplo, adquirir un montacargas para evitar el esfuerzo físico en el transporte de materias primas. 
      .col-10
        <hr style="border:15px;">

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema10/5.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Sustitución:] por ejemplo, sustituir las guadañadoras por desbrozadoras autopropulsadas para hacer control de arvenses. 
        
      .col-10
        <hr style="border:15px;">
      
      .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema10/6.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Controles de ingeniería:] consiste en realizar modificaciones en las instalaciones para reducir los peligros a los que se expone el personal. Por ejemplo, instalar ventiladores más potentes en el galpón para evitar golpes de calor. 
      .col-10
        <hr style="border:15px;">

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema10/7.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Controles administrativos:] son medidas que se toman desde la dirección de la empresa y se incorporan con la dinámica organizacional. Por ejemplo, jornadas de capacitación en operación de equipos. 
        
      .col-10
        <hr style="border:15px;">
    
    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema10/8.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b Elementos de protección personal EPP:] dotar a los trabajadores con elementos de protección para realizar las labores cotidianas, con lo que es posible prevenir accidentes. 
      .col-10.mb-5
        <hr style="border:15px;">

    separador
    #t_10_4.titulo-segundo.color-acento-contenido
      h2 10.4  Elementos de protección personal 

    p(data-aos="fade-left").mb-5 De acuerdo con el Ministerio de Salud y Protección Social (2007):

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema10/9.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se denomina así a cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo, así como cualquier complemento o accesorio destinado a tal fin. Los EPP no evitan el accidente o el contacto con elementos agresivos, pero ayudan a que la lesión sea menos grave. 

        p.mt-5(data-aos="fade-left").mb-5 En las labores cotidianas al interior de las unidades productivas agropecuarias, el personal está expuesto a múltiples riesgos los cuales pueden ser mitigados con el uso apropiado de los equipos de protección personal. 

</template>

<script>
export default {
  name: 'Tema10',
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
