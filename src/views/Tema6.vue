<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Higienización

    .row.justify-content-center.mt-5.mb-5 
      .col
        .row.justify-content-center
          .col.lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/1.svg', alt='Texto que describa la imagen')
          .col-8
            p(data-aos="fade-left") La base fundamental de los protocolos de bioseguridad es la correcta higiene de las instalaciones, del personal, de los equipos, utensilios y herramientas con que se cuenta al interior de la unidad productiva, pues en condiciones de poca higiene y suciedad es más probable que proliferen organismos patógenos que pueden afectar la salud de los animales. En los procesos de higienización que se deben dar al interior de la unidad productiva intervienen una serie de elementos los cuales se presentan a continuación.

    


    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Productos, concentraciones y preparación

    p(data-aos="fade-left") Para realizar las labores de higienización en las unidades pecuarias, actualmente en el mercado existen múltiples alternativas las cuales son empleadas para controlar diversos agentes patógenos.
    p(data-aos="fade-left").mb-5 La clasificación general que recoge buena parte de los productos empleados para la desinfección en unidades productivas pecuarias es la siguiente:

    

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span #[em Principales grupos de productos desinfectantes en la industria pecuaria]
        .tabla-a.mb-5 
          table
            caption Nota. Adaptada de ICA (2017).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Grupo desinfectante
                th Código
                th Producto
                th Presentación
            tbody.text-center
              tr
                td Jabones y detergentes
                td 1
                td Jabón y detergente comercial.
                td Sólida o líquida
              tr
                td(rowspan=3)  Agentes oxidantes
                td 2a
                td Hipoclorito de sodio NaOCl.
                td Líquida
              tr
                td 2b
                td Hipoclorito de calcio Ca(OCl)2.
                td Sólida
              tr
                td 2c
                td Virkon® Bis (peroximonosulfato) bis (sulfato) de pentapotasio.
                td Polvo
              tr
                td(rowspan=3)  Álcalis
                td 3a
                td Hidróxido de sodio (soda cáustica).
                td Pellets
              tr
                td(rowspan=2)  3b
                td Carbonato de sodio Na2CO3.
                td Polvo
              tr
                td Carbonato de sodio decahidratado Na2CO3.10H2O.
                td Cristales
              tr
                td(rowspan=2)  Ácidos
                td 4a
                td Ácido clorhídrico.
                td Concentración ácida
              tr
                td 4b
                td Ácido cítrico.
                td Polvo
              tr
                td(rowspan=3)  Aldehídos
                td 5a
                td Glutaraldehído.
                td Concentración en la solución
              tr
                td 5b
                td Formalina.
                td 40 % formaldehído
              tr
                td 5c
                td Gas formaldehído.
                td Se requiere generación específica

        AcordionA(tipo="a" clase-tarjeta="tarjeta")(style="background-color: #DBF9BD").mb-5
          .row(titulo="Agentes oxidantes")
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema6/2.svg', alt='Texto que describa la imagen')
            .col-md-11.mb-4.mb-md-0
              p Son altamente recomendados en la mayoría de los procesos de desinfección, aunque su eficacia disminuye notablemente en la presencia de materia orgánica. Estos compuestos no son químicamente estables pues se degradan a medida que se alcanzan temperaturas por encima de los 15 °C.
          
          .row(titulo="Álcalis")
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema6/3.svg', alt='Texto que describa la imagen')
            .col-md-11.mb-4.mb-md-0
              p Son desinfectantes que están disponibles en grandes cantidades y a bajo costo además que funcionan muy bien en presencia de materia orgánica, por lo que son ideales para descontaminar alojamientos, pisos y drenajes.
          
          .row(titulo="Ácidos")
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema6/4.svg', alt='Texto que describa la imagen')
            .col-md-11.mb-4.mb-md-0
              p Tienen diversidad de aplicaciones con una alta acción viricida, por lo que dependiendo del tipo de elemento y de la concentración pueden ser empleados incluso para la desinfección del personal y la ropa de una manera segura.
          
          .row(titulo="Aldehídos")
            .col-md-1
              figure
                img(src='@/assets/curso/temas/tema6/5.svg', alt='Texto que describa la imagen')
            .col-md-11.mb-4.mb-md-0
              p Son compuestos altamente eficaces frente a distintas clases de microorganismos, por lo que son muy utilizados en concentraciones del 1 al 2 %. Son químicamente estables en presencia de materia orgánica y ligeramente corrosivos para los metales.
          
        p(data-aos="fade-left").mb-5 Es importante recordar que la utilización de estos elementos requiere de la utilización de equipos de protección personal por lo que es importante consultar las fichas técnicas de seguridad. Otros productos empleados en labores de limpieza y desinfección en unidades pecuarias son la cal (carbonato de calcio CaCO3) y los productos a base de amonio cuaternario.

        .tarjeta--container.row.mb-5
          .col-md.tarjeta(style="background-color: #DBF9BD").p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema6/6.svg', alt='Texto que describa la imagen')
              
            h2.text-center Cal viva
            p Es un desinfectante de bajo costo que resulta útil para la oxidación de los agentes orgánicos causantes de enfermedades. Esta se puede emplear directamente sobre las superficies teniendo cuidado de agregar agua posteriormente para lograr su hidratación.
          .col-md.tarjeta(style="background-color:#FFFAD0").p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema6/7.svg', alt='Texto que describa la imagen')
              
            h2.text-center Amonio cuaternario
            p Este es un producto ampliamente empleado para la desinfección de equipos y superficies, seguro y que no genera olor. Estos compuestos inciden directamente sobre la estructura de la membrana citoplasmática de las bacterias y la membrana plasmática de las levaduras y otros microorganismos.
    .row.justify-content-center
      .col-8
        p(data-aos="fade-left").text-center.mb-5 De acuerdo con sus características, estos desinfectantes pueden tener los siguientes usos:

        .titulo-sexto.color-acento-contenido
          h5 Tabla 5
          span #[em Usos recomendados para las sustancias desinfectantes]
        .tabla-b.mb-5 
          table
            caption Nota. Adaptada de ICA (2017).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th(colspan=2) Elemento para desinfectar
                th(colspan=2) Desinfectante de elección
              
            tbody.text-center
              tr
                td(colspan=2) Alojamiento de animales 
                td(colspan=2) 1, 2a, 2b, 2c, 3
              tr
                td(colspan=2) Equipos
                td(colspan=2) 1, 2a, 2b, 2c, 3
              tr
                td(colspan=2) Seres humanos
                td(colspan=2) 1
              tr
                td(colspan=2) Equipo eléctrico
                td(colspan=2) 5c
              tr
                td(colspan=2) Vivienda humana
                td(colspan=2) 1, 2a, 2b, 2c
              tr
                td(colspan=2) Maquinaria y vehículos
                td(colspan=2) 1, 3
              tr
                td(colspan=2) Ropa
                td(colspan=2) 1. 2a, 2b, 2c, 3
              tr
                td(colspan=2) Instalaciones
                td(colspan=2) 1, 2c
               
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Concentraciones 

    p(data-aos="fade-left") En lo relacionado con las concentraciones de estos elementos desinfectantes vale la pena mencionar que estas se dan de acuerdo con el uso que se le vaya a dar y el tipo de explotación. En explotaciones avícolas, por ejemplo, este tipo de elementos se utilizan a menudo para la desinfección de galpones, previamente al ingreso de los animales.
    p(data-aos="fade-left").mb-5 De acuerdo con el Instituto Colombiano Agropecuario, en su Resolución 30292 de 2017 en la cual se establecen medidas sanitarias para el control y erradicación de la enfermedad de Newcastle las concentraciones de algunos productos para la desinfección son las siguientes:

    .row.justify-content-center
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6
          span #[em Concentraciones recomendadas para los principales agentes desinfectantes]
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th(rowspan=2) Producto
                th(colspan=2) Concentración recomendada
                th(rowspan=2) Tiempo de contacto en minutos
              tr.text-center 
                th Concentración inicial
                th Concentración final
              
            tbody.text-center
              tr
                td Jabón y detergente comercial
                td De acuerdo con la necesidad
                td --
                td 10
              tr
                td Hipoclorito de sodio NaOCl
                td 1:5
                td 2 – 3 % de cloro disponible
                td 10-30
              tr
                td Hipoclorito de calcio Ca(OCl)2.
                td 30 g/ litro
                td --
                td 10-30
              tr
                td Virkon® Bis (peroximonosulfato) bis (sulfato) de pentapotasio
                td 20 g/ litro 
                td 2 – 3 % de cloro disponible
                td 10 
              tr
                td Hidróxido de sodio (soda cáustica)
                td 20 g/ litro
                td 2 % peso/volumen
                td 10
              tr
                td Carbonato de sodio Na2CO3
                td 40 g/ litro 
                td 4 % peso/volumen
                td 10
              tr
                td Carbonato de sodio decahidratado Na2CO3.10H2O
                td 100 g/ litro
                td 10 % peso/volumen
                td 30
              tr
                td Ácido clorhídrico
                td 1:50
                td 2 % peso/volumen
                td 10
              tr
                td Ácido cítrico
                td 2 g/ litro
                td 0.2 % peso/volumen
                td 30
              tr
                td Glutaraldehído
                td Como sea apropiado 
                td 2 % peso/volumen
                td 10-30
              tr
                td Formalina
                td 1:12
                td 8 % peso/volumen
                td 10-20
              tr
                td Gas formaldehído
                td --
                td --
                td 15-24 horas

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
