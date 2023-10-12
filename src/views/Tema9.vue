<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Agua

    .row.mb-5.align-content-center
      .col-md-8(data-aos="fade-right")
        p En las explotaciones pecuarias, como en cualquier actividad humana, el recurso hídrico es fundamental para el desarrollo de todo tipo de actividades, desde la limpieza y la desinfección de equipos e instalaciones hasta el consumo de los animales y el personal que labora al interior de la empresa, como se aprecia a continuación:
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema9/1.svg' alt='')      

    TabsA.color-acento-botones
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Normatividad")
        p En relación con el uso racional del agua, la normatividad es bastante amplia, pues este, al igual que los demás recursos naturales, es un bien de interés público que requiere especial protección de parte del Estado. Para cualquier proyecto productivo, es importante considerar la normatividad existente en relación con el acceso a este bien, desde el punto de vista jurídico. Se debe analizar la reglamentación local en cuanto al Esquema de Ordenamiento Territorial (EOT) o el Plan Básico de Ordenamiento Territorial (PBOT), con el fin de identificar la situación del predio respecto a los usos permitidos y zonas de alto riesgo. Es igualmente importante revisar la necesidad de tramitar una concesión de aguas, la cual otorga el derecho de usar o aprovechar las aguas de uso público para el abastecimiento doméstico, el regadío, la industria o la acuicultura, entre otros usos.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Calidad del agua")
        p El segundo aspecto que se debe tener en cuenta para el establecimiento de cualquier proyecto productivo agropecuario es el de la calidad del agua, pues en algunas ocasiones esta no es apta para el consumo humano, de los animales o para la agricultura. Los principales parámetros que se deben analizar para determinar la calidad del agua son los siguientes: sabor, color, olor, conductividad, dureza, pH, calidad físico-química y calidad microbiológica.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Demanda")
        p Buena parte del éxito de la explotación pecuaria consiste en la identificación de las necesidades de recursos del sistema, pues a partir de allí se dan todos los procesos de planificación de la unidad productiva, por lo que determinar la demanda de agua es una tarea que requiere de tiempo y a la cual se le debe invertir bastante energía. 
        p De acuerdo con el Ideam (2010) la demanda de agua de los sistemas agrícola, acuícola y pecuario ascendió en el año 2008 a 24.190 millones de metros cúbicos que equivalen al 67,4 % del consumo total de agua en el país, lo cual pone de manifiesto la importancia que tiene este recurso para el desarrollo de las labores productivas. Del total del consumo de agua nacional de estos tres sectores, el componente pecuario fue responsable del consumo de 2.220 millones de metros cúbicos.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Disponibilidad")
        p El cuarto elemento que se debe considerar al momento de planificar una explotación pecuaria es el de la disponibilidad del agua, pues cualquier iniciativa productiva demanda un mínimo necesario para poderla llevar a cabo. Para determinar la disponibilidad de agua, es posible realizar aforos en los cuerpos de agua de la unidad productiva, los cuales dan una idea general de la cantidad de litros por minuto de los que se dispondría para garantizar este líquido vital a los animales y al personal de la granja.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Protección del agua ")
        p En todo proceso productivo es necesario establecer acciones enfocadas en la protección y cuidado de las fuentes hídricas, ya que los impactos que tienen las actividades humanas sobre el entorno son cada vez más evidentes. Igualmente, en todos los procesos que tengan lugar al interior de la unidad productiva, se deben definir protocolos para hacer un uso racional de este líquido y establecer mecanismos para reducir los niveles de contaminación de las aguas servidas que se generen en el desarrollo de las actividades pecuarias.

    p(data-aos="fade-left").mb-5 Respecto a las características del agua para consumo humano según la Resolución 2115 de 2007 los parámetros recomendados son los siguientes:

    .row.justify-content-center.mb-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10
          span #[em Características del agua para consumo humano]
        .tabla-b.mb-5 
          table
            caption Nota. Tomada del Ministerio de la Protección Social (2007).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Características físicas
                th Valor máximo aceptable
            tbody.text-center
              tr
                td Color aparente
                td 15
              tr
                td Olor y sabor
                td Aceptable
              tr
                td Turbiedad 
                td 2
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Características químicas
                th Valor máximo aceptable
            tbody.text-center
              tr
                td Cloro residual
                td 0,3 – 2,0
              tr
                td pH
                td 6,5 – 9,0
              tr
                td Carbono orgánico total 
                td 5,0
              tr
                td Nitritos
                td 0,1
              tr
                td Nitratos
                td 10
              tr
                td Alcalinidad total
                td 200
              tr
                td Cloruros
                td 250
              tr
                td Aluminio 
                td 0,2
              tr
                td Dureza total
                td 300
              tr
                td Hierro total
                td 0,3
              tr
                td Manganeso
                td 0,1
              tr
                td Sulfatos
                td 250
              tr
                td Mercurio
                td 0,001
              tr
                td Cianuro libre y disociable
                td 0,05
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Características químicas
                th Valor máximo aceptable
            tbody.text-center
              tr
                td Coliformes totales
                td 0 UFC/100 cm³
              tr
                td Coliformes fecales
                td 0 UFC/100 cm³
              tr
                td #[em Escherichia coli]
                td 0
              tr
                td Mesófilos
                td ≤ 100

    p(data-aos="fade-left").mb-5 El Ideam (2010), determina que el consumo de agua de los principales sistemas pecuarios, en las fases de cría y levante, es el siguiente:

    .row.justify-content-center.mb-5
      .col-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11
          span #[em Consumo de agua promedio de las principales especies pecuarias]
        .tabla-b.mb-5 
          table
            caption Nota. Tomada de Ideam (2010).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th Especie
                th Litros
                th Referencia
            tbody.text-center
              tr(style="background-color:#DBF9BD")
                td Pollos y gallina
                td 240
                td(rowspan="4") Litros/ 100 animales
              tr(style="background-color:#DBF9BD")
                td Patos
                td 370
              tr(style="background-color:#DBF9BD")
                td Pavos
                td 650
              tr(style="background-color:#DBF9BD")
                td Codornices
                td 58
              tr(style="background-color:#F6F6F6")
                td Cerdas madres
                td 18
                td(rowspan="9") Litros/ día/animal
              tr(style="background-color:#F6F6F6")
                td Cerdas reposición
                td 18
              tr(style="background-color:#F6F6F6")
                td Cerdos ceba
                td 8
              tr(style="background-color:#F6F6F6")
                td Cerdos levante
                td 5
              tr(style="background-color:#F6F6F6")
                td Reproductores
                td 16
              tr(style="background-color:#F6F6F6")
                td Bovinos 0-12 meses
                td 20-30
              tr(style="background-color:#F6F6F6")
                td Bovinos 12-24 meses
                td 45
              tr(style="background-color:#F6F6F6")
                td Bovinos 24-36 meses
                td 80-110
              tr(style="background-color:#F6F6F6")
                td Mayores a 36 meses
                td 80-115

    p(data-aos="fade-left") Con base en los parámetros descritos anteriormente, es posible establecer la demanda de agua aproximada para el proyecto productivo que se desee implementar, con lo cual es posible analizar su viabilidad y las adecuaciones necesarias para asegurar la disponibilidad permanente de este importante recurso. 
    p(data-aos="fade-left").mb-5 Para analizar la disponibilidad de agua se recomienda lo siguiente: 

    .row.justify-content-center.mb-5 
      .col
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0")
          .row.justify-content-center
            .col-3
              img(src='@/assets/curso/temas/tema9/2.svg')
            .col-9
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Revisar la distribución de las precipitaciones en la región, los cuales se pueden consultar fácilmente en la página del Ideam u otras páginas especializadas en el tema. 
                li 
                  i.lista-ul__vineta
                  | Visitar la unidad productiva en diferentes épocas del año para determinar una media de la disponibilidad de agua y de los caudales de fuentes superficiales. 
                li 
                  i.lista-ul__vineta
                  | Inspeccionar la disponibilidad de fuentes de agua adicionales como reservorios, acueductos, pozos o aljibes. Referente a las instalaciones de almacenamiento de agua, es importante tomar las medidas de capacidad y realizar un inventario de su estado, para identificar si hay lugar a reparaciones locativas.
                li 
                  i.lista-ul__vineta
                  | Verificar pendientes, accidentes geográficos, distancias entre las instalaciones y las fuentes de agua y estado de tuberías de conducción para identificar si es necesario implementar sistemas de bombeo o si es posible utilizar la gravedad. 
                li 
                  i.lista-ul__vineta
                  | En lo posible, tomar una muestra de agua para realizar un análisis completo de agua para identificar sus propiedades físico-químicas y microbiológicas. 

</template>

<script>
export default {
  name: 'Tema9',
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
