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
