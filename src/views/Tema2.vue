<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bioseguridad

    .row.mb-5.align-content-center
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/1.svg' alt='')
      .col-md-8(data-aos="fade-right")
        p.mb-3 De acuerdo con la Resolución del ICA 3651 (ICA, 2014) la bioseguridad es el conjunto de medidas, acciones y procedimientos que se deben tomar para evitar, evaluar, prevenir, mitigar, manejar y/o controlar los posibles riesgos sanitarios y sus efectos directos o indirectos en la salud humana, el medio ambiente, la biodiversidad, la productividad y producción agropecuaria.
        .tarjeta.p-3(style="border-radius: 0; background-color:#DBF9BD")
          p Es así como dentro de la implementación de los planes de bioseguridad existen requisitos de tipo documental y de infraestructura que se deben cumplir para que la unidad productiva obtenga el certificado de biosegura, aunque esto depende en gran medida del tipo de explotación y de la especie animal.
        
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Programa, protocolos y procedimientos 

    p(data-aos="fade-left").mb-5 Para conseguir que una explotación sea considerada biosegura, es necesario que al interior de la explotación pecuaria se construya y ejecute un programa sanitario, en el cual se incluyan todos los elementos para que el sistema funcione correctamente. En términos generales, de acuerdo con la Guía técnica para la elaboración de programas sanitarios (Invima, 2020) estos programas deben incluir los siguientes elementos:

    .row.justify-content-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span #[em Programas sanitarios]

    .row.justify-content-center.mb-5
      .col-10
        .row.mb-5
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#D7DDD2")
                .p-4
                  h2.text-center Alcance
                  p.text-center Ámbito de aplicación del programa, responsables y destinatarios. 
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#D7DDD2")
                .p-4
                  h2.text-center Objeto
                  p.text-center Finalidad de la implementación del programa.  
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#D7DDD2")
                .p-4
                  h2.text-center Consideraciones y definiciones
                  p.text-center Aspectos de interés para la implementación del programa. Incluir términos que ayuden a comprender el contenido del programa. 
          .col-md-3.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/5.svg' alt='AvatarTop').p-4
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta(style="width:100%; background-color:#D7DDD2")
                .p-4
                  h2.text-center Desarrollo
                  p.text-center Actividades, lineamientos y orientaciones para implementar el programa. 

    p(data-aos="fade-left").mb-5 Una vez se establece el programa sanitario, es necesario definir los protocolos, que son documentos donde se especifican el conjunto de procedimientos necesarios para la atención de alguna situación en particular o el desarrollo de alguna actividad. Dentro de las explotaciones pecuarias, los protocolos generalmente se relacionan con los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-10
        .row.justify-content-center
          .col-4
            img(src='@/assets/curso/temas/tema2/6.svg' alt='')
          .col-8
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Ingreso de personas, objetos y vehículos a la unidad productiva.
              li 
                i.lista-ul__vineta
                | Sistemas de tratamiento de agua. 
              li 
                i.lista-ul__vineta
                | Limpieza y desinfección de instalaciones, equipos y utensilios.  
              li 
                i.lista-ul__vineta
                | Control integrado de plagas. 
              li 
                i.lista-ul__vineta
                | Manejo y eliminación de residuos sólidos.
              li 
                i.lista-ul__vineta
                | Programa sanitario.
              li 
                i.lista-ul__vineta
                | Programas de capacitación.
              li 
                i.lista-ul__vineta
                | Mantenimiento de instalaciones y equipos.

    p(data-aos="fade-left").mb-5 Según el Instituto Colombiano Agropecuario (ICA) en las explotaciones avícolas, por ejemplo, todas las granjas deben cumplir con lo establecido en los Procedimientos Operativos Estandarizados (POE) que consisten en la descripción operativa y detallada de los procesos que tienen lugar en la unidad productiva. Allí se consigna la manera como se llevará a cabo el procedimiento, los responsables, la periodicidad con la que se debe realizar y los productos, elementos o herramientas para realizar la labor. Cada una de estas actividades debe registrarse en formatos que faciliten su consulta y verificación. Además de lo anterior, también es importante tener en cuenta:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/7.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/7-m.svg', alt='')


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Buenas prácticas 

    .row.mb-5.align-content-center
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/8.svg' alt='')
      .col-md-8(data-aos="fade-right")
        p.mb-3 Las buenas prácticas incluyen una serie de principios, normas y recomendaciones técnicas que se deben llevar a cabo en las explotaciones pecuarias con el fin de conseguir la inocuidad alimentaria. Además de los aspectos relacionados con la seguridad alimentaria, también se incluyen elementos como la protección del ambiente, la salud de las personas, la seguridad y el bienestar de los trabajadores y el bienestar animal (Oirsa, 2016). 
        .tarjeta.p-3(style="border-radius: 0; background-color:#DBF9BD")
          p Las Buenas Prácticas Pecuarias (BPP) se han constituido en una herramienta fundamental para el fortalecimiento de la actividad productiva desde el punto de vista de la sanidad animal, pues a través de ellas se dan recomendaciones para el manejo de los peligros biológicos que pueden llegar a causar problemas de salud en animales y personas. En las BPP se dan pautas para reducir los riesgos de introducción y diseminación de agentes patógenos tanto en la unidad productiva como en las explotaciones circundantes. 

    p(data-aos="fade-left").mb-5 Los aspectos centrales en los que se basan las buenas prácticas pecuarias son los siguientes:

    .titulo-sexto.color-acento-contenido
      h5 Figura 8
      span #[em Aspectos centrales de las buenas practicas pecuarias]

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/9.svg', alt='Figura 8  Aspectos centrales de las buenas prácticas pecuarias En la figura se observa buen estado y mantenimiento de instalaciones; correcta alimentación y protección del medio ambiente; sanidad animal y bioseguridad; uso correcto de medicamentos con registro ICA; saneamiento básico, calidad del agua; cuidados en el transporte de los animales; registro y documentación de actividades; manejo integrado de plagas; almacenamiento correcto de insumos; trazabilidad de todos los procesos; bienestar de los trabajadores y seguridad en el trabajo.') 

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/9-m.svg', alt='Figura 8  Aspectos centrales de las buenas prácticas pecuarias En la figura se observa buen estado y mantenimiento de instalaciones; correcta alimentación y protección del medio ambiente; sanidad animal y bioseguridad; uso correcto de medicamentos con registro ICA; saneamiento básico, calidad del agua; cuidados en el transporte de los animales; registro y documentación de actividades; manejo integrado de plagas; almacenamiento correcto de insumos; trazabilidad de todos los procesos; bienestar de los trabajadores y seguridad en el trabajo.') 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Instalaciones y aplicación de medidas de bioseguridad

    p(data-aos="fade-left").mb-5 Uno de los principales aspectos que tiene relación directa con la bioseguridad de la unidad productiva es el de las instalaciones, pues de su estado y mantenimiento depende en gran medida el estado sanitario de los animales alojados y los riesgos sanitarios. Por ejemplo, la evaluación de los componentes de bioseguridad en relación con las instalaciones de unidades productivas porcinas se enfoca en dos áreas principales; puntos de bioseguridad externa y puntos de bioseguridad interna, tal como se presenta a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 9
          span #[em Verificación de bioseguridad ]

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/10.svg', alt='Figura 9 Verificación de bioseguridad Bioseguridad Externa Cerco perimetral. Cuarentena. Vehículos. Filtro sanitario. Manejo de residuos. Control de plagas. Oficinas. Bodegas. Área social.') 

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema2/10-m.svg', alt='Figura 9 Verificación de bioseguridad Bioseguridad Externa Cerco perimetral. Cuarentena. Vehículos. Filtro sanitario. Manejo de residuos. Control de plagas. Oficinas. Bodegas. Área social.') 

    p(data-aos="fade-left").mb-5 Las prácticas para garantizar la bioseguridad en las explotaciones pecuarias difieren entre sistemas productivos, pero poseen elementos comunes como las distancias mínimas entre las diferentes áreas e instalaciones, la presencia de un cerco perimetral, poseer protocolos de limpieza y desinfección de instalaciones, la señalización de áreas de proceso, las áreas para el manejo de los residuos y los espacios para el almacenar insumos, herramientas y equipos. De acuerdo con la Resolución del ICA 3652 de 2014, los requisitos de bioseguridad e infraestructura avícola se basan en los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .tabla-b.mb-5 
          table
            caption Nota. Con base en ICA (2014).
            thead.text-white(style="background-color:#3B5620")(data-aos="flip-up") 
              tr.text-center
                th(colspan=4) Recomendaciones generales de bioseguridad en granjas avícolas
            tbody.text-center
              tr
                td 1
                td(colspan=3) La distancia entre galpones debe corresponder como mínimo al ancho de cada galpón. 
              tr
                td 2
                td(colspan=3) La distancia entre el galpón y el cerco perimetral debe ser de por lo menos 50 metros. 
              tr
                td 3 
                td(colspan=3) La distancia del cerco perimetral al cerco perimetral de otras granjas de aves de postura, levante o engorde debe ser de por lo menos 500 metros. 
              tr
                td 4
                td(colspan=3) La distancia del cerco perimetral al cerco perimetral de otras granjas de material genético o incubación debe ser de por lo menos 1.000 metros. 
              tr
                td 5
                td(colspan=3) La distancia del cerco perimetral al lindero de basureros u otras explotaciones que generen contaminación o aumenten factores de riesgo será de por lo menos 3.000 metros.
              tr
                td 6
                td(colspan=3) La distancia del cerco perimetral al cerco perimetral de granjas porcícolas será de por lo menos 500 metros.
              tr
                td 7
                td(colspan=3)  Mantener un cerco perimetral que controle el tráfico de personas, animales y vehículos ajenos a la granja. 
              tr
                td 8
                td(colspan=3) Cada área de la granja debe estar señalizada y tener un sistema de desinfección acorde con la capacidad instalada de la granja.
              tr
                td 9
                td(colspan=3) Contar con un área destinada para el manejo de la mortalidad. 
              tr
                td 10
                td(colspan=3) Contar con áreas delimitadas para el almacenamiento del alimento de las aves. 
              tr
                td 11
                td(colspan=3) Cumplir y contar con los Procedimientos Operativos Estandarizados (POE). 
              tr
                td 12
                td(colspan=3) Mantener registros actualizados de los POE.
              tr
                td 13
                td(colspan=3) Contar con una unidad sanitaria. 
              tr
                td 14
                td(colspan=3) Áreas delimitadas: bodega de insumos veterinarios y equipos; almacenamiento de agua, área de disposición de desechos, cabina de desinfección. 
</template>

<script>
export default {
  name: 'Tema2',
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
