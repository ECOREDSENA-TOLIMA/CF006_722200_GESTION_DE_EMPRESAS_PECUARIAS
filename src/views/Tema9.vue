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
        p En relación con el uso racional del agua, la normatividad es bastante amplia, pues este, al igual que los demás recursos naturales, es un bien de interés público que requiere especial protección de parte del Estado. Para cualquier proyecto productivo, es importante considerar la normatividad existente en relación con el acceso a este bien, desde el punto de vista jurídico. Se debe analizar la reglamentación local en cuanto al Esquema de Ordenamiento Territorial (EOT) o el Plan Básico de Ordenamiento Territorial (PBOT), con el fin de identificar la situación del predio respecto a los usos permitidos y zonas de alto riesgo. Es igualmente importante revisar la necesidad de tramitar una concesión de aguas la cual otorga el derecho de usar o aprovechar las aguas de uso público para el abastecimiento doméstico, el regadío, la industria o la acuicultura entre otros usos.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Calidad del agua")
        p El segundo aspecto que se debe tener en cuenta para el establecimiento de cualquier proyecto productivo agropecuario es el de la calidad del agua, pues en algunas ocasiones esta no es apta para el consumo humano, de los animales o para la agricultura. Los principales parámetros que se deben analizar para determinar la calidad del agua son los siguientes: sabor, color, olor, conductividad, dureza, pH, calidad físico-química y calidad microbiológica.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Demanda")
        p Buena parte del éxito de la explotación pecuaria consiste en la identificación de las necesidades de recursos del sistema, pues a partir de allí se dan todos los procesos de planificación de la unidad productiva, por lo que determinar la demanda de agua es una tarea que requiere de tiempo y a la cual se le debe invertir bastante energía. 
        p De acuerdo con el Ideam (2010) la demanda de agua de los sistemas agrícola, acuícola y pecuario ascendió en el año 2008 a 24.190 millones de metros cúbicos que equivalen al 67,4% del consumo total de agua en el país, lo cual pone de manifiesto la importancia que tiene este recurso para el desarrollo de las labores productivas. Del total del consumo de agua nacional de estos tres sectores el componente pecuario fue responsable del consumo de 2.220 millones de metros cúbicos.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Disponibilidad")
        p El cuarto elemento que se debe considerar al momento de planificar una explotación pecuaria es el de la disponibilidad del agua, pues cualquier iniciativa productiva demanda un mínimo necesario para poderla llevar a cabo. Para determinar la disponibilidad de agua, es posible realizar aforos en los cuerpos de agua de la unidad productiva, los cuales dan una idea general de la cantidad de litros por minuto de los que se dispondría para garantizar este líquido vital a los animales y al personal de la granja.
      .tarjeta(style="background-color:#DBF9BD").p-4(titulo="Protección del agua ")
        p En todo proceso productivo es necesario establecer acciones enfocadas en la protección y cuidado de las fuentes hídricas, ya que los impactos que tienen las actividades humanas sobre el entorno son cada vez más evidentes. Igualmente, en todos los procesos que tengan lugar al interior de la unidad productiva, se deben definir protocolos para hacer un uso racional de este líquido y establecer mecanismos para reducir los niveles de contaminación de las aguas servidas que se generen en el desarrollo de las actividades pecuarias.

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
