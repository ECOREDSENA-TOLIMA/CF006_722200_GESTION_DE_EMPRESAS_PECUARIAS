export default {
  global: {
    componenteFormativo: 'Medidas de bioseguridad en la producción pecuaria',
    descripcionCurso:
      'Mantener las condiciones de bioseguridad protege la salud de los animales y del personal que labora en las unidades pecuarias y garantiza a los consumidores finales un producto de calidad. El conocimiento de los procesos y procedimientos necesarios para mantener la sanidad al interior de la granja es una pieza fundamental para lograr los niveles de productividad y rentabilidad esperados',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Especie animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Bienestar',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Programa, protocolos y procedimientos ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Buenas prácticas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instalaciones y aplicación de medidas de bioseguridad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de producción ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Ficha técnica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Protocolo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Equipos y utensilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Manual de operación ',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Higienización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Productos, concentraciones y preparación',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos, frecuencia y periodicidad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Fichas técnicas, responsables',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Cronograma de actividades higienización',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Control de plagas y vectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Medidas de prevención',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Métodos de control',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Periodicidad de aplicación',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Filtros sanitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Clases y características',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Equipos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Protocolos',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Normativa seguridad y salud en el Trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Clases de riesgo',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Peligros',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Medidas de protección',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Elementos de protección personal',
            hash: 't_10_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_006_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '7.2. Métodos de control.',
      referencia: 'Fenavi. (2020). Manejo integrado de plagas en avicultura.',
      tipo: 'Cartilla web',
      link:
        'https://fenavi.org/wp-content/uploads/2020/06/Cartilla_Manejo_Integrado_plagas_Mosca_Junio2020.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acondicionador de suelos',
      significado:
        'Material de origen orgánico o inorgánico que tienen la propiedad de mejorar las propiedades físicas del suelo.',
    },
    {
      termino: 'Biocontrolador',
      significado:
        'Insecto que se alimenta de otros insectos usualmente empleado para ejercer control de poblaciones de plagas en cultivos y unidades pecuarias.',
    },
    {
      termino: 'Desasosiego',
      significado: 'Intranquilidad, angustia.',
    },
    {
      termino: 'Etológico',
      significado:
        'Se refiere a todo lo concerniente al comportamiento animal.',
    },
    {
      termino: 'Patógeno',
      significado:
        'Cualquier organismo, bien sea virus, hongos o bacterias capaces de enfermar a otro ser vivo.',
    },
    {
      termino: 'Viricida',
      significado: 'Producto empleado para controlar virus.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agriavi (2018). Termonebulizador H600. Manual de instrucción. Agriavi. ',
      link: 'http://www.agriavi.com/pdf/Termo%20H600%20Manual%20Esp.pdf',
    },
    {
      referencia:
        'Caterpillar. (2007). Manual de operación y mantenimiento manipulador telescópico TH580B. Caterpillar. ',
      link:
        'https://csapps.jlg.com/CAGDocuments/MenuDocuments/8C56BD70-FCC4-4391-AFE3-5CECD20379CCSPANISH_TH580B_31200322-C_OMM.pdf',
    },
    {
      referencia:
        'Fenavi. (2020). Manejo integrado de plagas en avicultura. Fenavi. ',
      link:
        'https://fenavi.org/wp-content/uploads/2020/06/Cartilla_Manejo_Integrado_plagas_Mosca_Junio2020.pdf',
    },
    {
      referencia: 'Ideam. (2010). Estimación de la demanda de agua. Ideam. ',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/021888/CAP5.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2014). Resolución del ICA 3651 del 13-09-2014. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2014). Resolución del ICA 3652 de 2014. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/124802ad-c49c-470d-809e-a9ce5ad3db76/2014R3652.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). Resolución del ICA 30292 de 2017. ICA. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/04/RESOLUCION-30292-DE-2017.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución número 136 de 2020. “Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción en el sector Agropecuario para las especies équidas, porcinas, ovinas y caprinas”. Ministerio de Agricultura y Desarrollo Rural. ',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No.%20000136%20de%202020.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución número 253 de 2020. “Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción en el sector agropecuario; bovina, bufalina, aves de corral y animales acuáticos”. Ministerio de Agricultura y Desarrollo Rural. ',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución número 0253. ',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2007). Resolución 2115 de 2007. Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_2115_de_2007.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo. (2016). Sistema de gestión de la Seguridad y Salud en el Trabajo (SG-SST) Guía técnica de implementación para Mipymes. Ministerio de Trabajo. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
    {
      referencia:
        'Organismo Internacional Regional de Sanidad Agropecuaria – Oirsa. (2013). Buenas prácticas de uso de medicamentos veterinarios y productos afines. Oirsa.',
      link: '',
    },
    {
      referencia:
        'Porkcolombia. (2013). La desinfección en el transporte, factor clave para el control de la diarrea epidémica porcina PEDv. Porkcolombia ',
      link:
        'https://porkcolombia.co/wp-content/uploads/2018/05/4.-Bolet%C3%ADn-PED-III-Desinfectantes.pdf',
    },
    {
      referencia:
        'Swingtec GmbH. (2019). Manual de instrucciones. Swingtec GmbH. ',
      link:
        'https://www.swingtec.de/wp-content/uploads/2019/03/SN_spanisch.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
