/* Datos iniciales importados del Excel. */
const seed = {
  "week": "2026-11-23",
  "owner": "Andy",
  "blocks": [
    {
      "title": "1 · CAPACIDAD DEL EQUIPO",
      "headers": [
        "Integrante",
        "Hs. totales",
        "Hs. ocupadas",
        "Hs. libres",
        "% Utiliz.",
        "Semáforo",
        "Hs ejecutadas real semana pasada",
        "¿No llegó con algo? ¿Con qué?"
      ],
      "rows": [
        [
          "Dani",
          28.0,
          34.0,
          -6,
          1.214285714,
          "OK",
          "32,9",
          ""
        ],
        [
          "Nahue",
          28.0,
          14.0,
          14,
          0.5,
          "ATENCION",
          "30,6",
          ""
        ],
        [
          "Seba",
          28.0,
          35.0,
          -7,
          1.25,
          "OK",
          "36,8",
          ""
        ],
        [
          "Lu",
          21.0,
          32.0,
          -11,
          1.523809524,
          "OK",
          "27,2",
          ""
        ],
        [
          "Nico",
          28.0,
          35.0,
          -7,
          1.25,
          "OK",
          "28,9",
          ""
        ]
      ],
      "calc": [
        3,
        4,
        5
      ],
      "dates": [],
      "nums": [
        1,
        2,
        6
      ],
      "opts": {}
    },
    {
      "title": "2 · PROYECTOS EN CURSO",
      "headers": [
        "Cliente / Proyecto",
        "PM a cargo",
        "Go-Live planif.",
        "Go-Live real",
        "Días desvío",
        "Acción esta semana",
        "Fecha de QA Líder",
        "¿La marca tiene algun bloqueante? ¿Cúal?",
        "URL"
      ],
      "rows": [
        [
          "Nor",
          "Nahue",
          "2026-09-01",
          "2026-09-24",
          23,
          "Se están aplcando los ajustes finales, ya que la marca solicitó que les demos acceso al código del sitio, por lo que queremos dejar una versión finalizada y darles dicho acceso, teniendo en cuenta que a partir de ese momento la Garantía finaliza",
          "2026-09-22",
          "",
          "nor.com.ar"
        ],
        [
          "UB Cuarenta",
          "Nahue",
          "2026-09-07",
          "2026-09-21",
          14,
          "Se están haciendo los ajustes finales derivados del QA hecho por la marca postlanzamiento, se tiene estimado tenerlos ya implementados para mitad de esta semana",
          "2026-09-14",
          "",
          "ubcuarenta.com"
        ],
        [
          "Go Pets",
          "Dani",
          "2026-10-05",
          "2026-10-29",
          24,
          "Se les extendió la garantía para que no interfiriera con el Cyber. Restan los ajustes finales y entregarle a la marca una serie de vídeos que explican como manejar el sitio. La fecha final programada es el viernes 21/11",
          "2026-10-20",
          "",
          "gopets.com.ar"
        ],
        [
          "Basecamp",
          "Nahue",
          "2026-11-09",
          "2026-11-30",
          21,
          "Se tiene avanzada la Home y PLP, pero no tengo visibilidad total del status y por lo tanto no se hizo a tiempo el QA, ya le pedi actualizacion al Dev que es quien está con demoras",
          "2026-11-16",
          "",
          "basecamp2.mitiendanube.com"
        ],
        [
          "Ideal",
          "Dani",
          "2026-12-07",
          "2026-12-07",
          0,
          "Tenemos programado avanzar con el desarrollo de todas las pantallas para realizar el QA correspondiente el miercoles 18/11",
          "2026-11-18",
          "",
          ""
        ],
        [
          "PcArts",
          "Dani",
          "2026-12-14",
          "2026-12-14",
          0,
          "Se está avanzando con el desarrollo de pantallas esta semana, se tiene planficado para la próxima hacer el QA por parte de la marca y del equipo interno",
          "2026-11-26",
          "",
          ""
        ],
        [
          "Cyber Monday",
          "Andy",
          "2026-11-02",
          "2026-11-02",
          0,
          "Resta entregar el Reporte Final, pero estamos dependiendo de los tiempos de Nico que es quien ayudó a elaborar la versión de reporting diaria. Esta semana tendremos el entregable finalizado",
          "2026-11-18",
          "",
          ""
        ],
        [
          "Site Clinics",
          "PMs",
          "2026-08-31",
          "2026-11-30",
          91,
          "Están pendientes de ejecución los cambios al formato que ya existe para que tenga incluida una tésis clara a la que apunta conseguir el entregable, tal como lo planteó CS.\n\nSe tiene planificado tomar el feedback del proceso de CRO de SommierCenter para pulir este proceso",
          "2026-11-13",
          "",
          "-"
        ],
        [
          "Taggeo",
          "Lu",
          "2026-10-02",
          "2026-11-30",
          59,
          "Tenemos reunión planificada con CS/Paid (Mecha), para que tomen de su lado el diagnóstico de taggeo en las marcas que tengan contratado algun servicio de Paid.\n\nSe ha elaborado un aplicativo que es el objetivo al que se quiere llegar con este proceso, el mismo se va a evaluar en la llamada también",
          "2026-11-13",
          "",
          "-"
        ]
      ],
      "calc": [
        4
      ],
      "dates": [
        2,
        3,
        6
      ],
      "nums": [],
      "opts": {}
    },
    {
      "title": "3 · EVOLUTIVOS ACTIVOS",
      "headers": [
        "Cliente",
        "Tipo de evolutivo",
        "Hs. estimadas",
        "Hs. usadas",
        "% Avance",
        "Acción esta semana",
        "Cuando reviso avances"
      ],
      "rows": [
        [
          "Admit One",
          "Always On",
          20.75,
          1.5,
          0.07228915663,
          "Tiene la reimplementación para completarse este mes, usará Ipanema. Ya tiene todas las horas estimadas, asi que se cumple con el objetivo de mitad de mes",
          "2026-11-17"
        ],
        [
          "HRO",
          "Always On",
          6.5,
          4.0,
          0.6153846154,
          "Ontrack",
          "2026-11-17"
        ],
        [
          "Rio Lencería",
          "Always On",
          2.5,
          2.5,
          1,
          "A pesar de la fecha no se tienen tareas confirmadas para avanzar porque depende de que la marca dé el OK, ya le consulté nuevamente a la KAM status",
          "2026-11-17"
        ],
        [
          "BrujoSport",
          "Always On",
          8.0,
          1.5,
          0.1875,
          "Se tiene planificado avaznzar con la ejecución de horas programadas",
          "2026-11-17"
        ],
        [
          "Bourlot",
          "Always On",
          2.0,
          0.0,
          0,
          "Utilizó 8hs en Octubre para ajustes del Cyber a pedido de la marca. Las 2hs restantes se usan a partir del 18/11",
          "2026-11-20"
        ]
      ],
      "calc": [
        4
      ],
      "dates": [
        6
      ],
      "nums": [
        2,
        3
      ],
      "opts": {
        "1": [
          "Always On",
          "Último mes",
          "One Shot"
        ]
      }
    },
    {
      "title": "4 · PIPELINE DE NUEVAS OPORTUNIDADES",
      "headers": [
        "Prospecto / Lead",
        "Tipo de servicio",
        "Estado",
        "Próximo paso",
        "Responsable",
        "Cierre estimado",
        "Fecha Solicitud",
        "Fecha de Estimación",
        "Días de desfasaje"
      ],
      "rows": [
        [
          "NinayCo",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-02",
          "2026-10-07",
          5
        ],
        [
          "TecBox",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-07",
          "2026-10-08",
          1
        ],
        [
          "Bridgestone",
          "Implementación",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-07",
          "2026-10-13",
          6
        ],
        [
          "Valyria Home",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-09",
          "2026-10-14",
          5
        ],
        [
          "C&E",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-09",
          "2026-10-14",
          5
        ],
        [
          "Rheem SA",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, se han enviado múltiples consultas por status a Comercial, les he pedido feedback especifico y estoy a la espera",
          "2026-10-22",
          "2026-10-27",
          5
        ],
        [
          "Angel Baraldo",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, le he pedido feedback especifico a Comercial y estoy a la espera",
          "2026-10-23",
          "2026-11-04",
          12
        ],
        [
          "Contacto",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, le he pedido feedback especifico a Comercial y estoy a la espera",
          "2026-10-29",
          "2026-11-02",
          4
        ],
        [
          "Imprefin Corp",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, le he pedido feedback especifico a Comercial y estoy a la espera",
          "2026-11-04",
          "2026-11-04",
          0
        ],
        [
          "GFitness",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, le he pedido feedback especifico a Comercial y estoy a la espera",
          "2026-11-05",
          "2026-11-05",
          0
        ],
        [
          "Adolfo Domínguez",
          "Implementación, Tiendanube",
          "Estimado",
          "Alta/Baja de lead",
          "Comercial",
          "Estimado, le he pedido feedback especifico a Comercial y estoy a la espera",
          "2026-11-06",
          "2026-11-06",
          0
        ]
      ],
      "calc": [
        8
      ],
      "dates": [
        6,
        7
      ],
      "nums": [],
      "opts": {
        "1": [
          "Implementación",
          "Evolutivo",
          "Shopify",
          "Tiendanube"
        ],
        "2": [
          "Alta cliente",
          "Estimado",
          "Pendiente",
          "Baja"
        ],
        "3": [
          "Estimación",
          "Alta/Baja de lead",
          "KO"
        ],
        "4": [
          "Comercial",
          "Proyectos"
        ]
      }
    },
    {
      "title": "5 · REVISIÓN DE CALIDAD — SITIOS proximos a salir",
      "headers": [
        "Cliente / Sitio",
        "Deadline",
        "Errores críticos",
        "Errores menores",
        "¿Cotizado evolutivo?",
        "Observaciones",
        "Estado"
      ],
      "rows": [
        [
          "UBCuarenta",
          "2026-09-21",
          11.0,
          25.0,
          "No",
          "Sitio multimarca por lo que la propabilidad de encontrar ajustes y cosas por corregir era más alta",
          "Realizado"
        ],
        [
          "Nor",
          "2026-09-22",
          10.0,
          38.0,
          "No",
          "Al momento de realizar este QA el PM también estaba levantando ajustes para corregir, el número de errores puede ser menor si se tiene en cuenta el QA hecho en simúltaneo por el PM",
          "Realizado"
        ],
        [
          "Reform",
          "2026-09-11",
          2.0,
          22.0,
          "Si",
          "",
          "Realizado"
        ],
        [
          "Drinksfood",
          "2026-09-11",
          4.0,
          26.0,
          "No",
          "",
          "Realizado"
        ],
        [
          "GoPets",
          "2026-10-19",
          7.0,
          20.0,
          "No",
          "",
          "Realizado"
        ],
        [
          "Basecamp",
          "2026-11-16",
          "",
          "",
          "No",
          "Pendiente de que el Dev tenga avances para hacer el QA",
          "Pendiente"
        ]
      ],
      "calc": [],
      "dates": [
        1
      ],
      "nums": [
        2,
        3
      ],
      "opts": {
        "4": [
          "No",
          "Si"
        ],
        "6": [
          "Pendiente",
          "En proceso",
          "Realizado"
        ]
      }
    },
    {
      "title": "6 · ¿QUÉ DISEÑO ESTOY PERSIGUIENDO?",
      "headers": [
        "Cliente / Sitio",
        "Fecha de entrega",
        "Deadline",
        "Estado",
        "Cuando vuelvo a hacer follow up",
        "Observaciones",
        "Prioridad"
      ],
      "rows": [
        [
          "Basecamp",
          "2026-11-02",
          "2026-11-11",
          "Realizado",
          "2026-11-11",
          "Estamos a la espera de que Andre entregue los ajustes que faltan de la PDP Mobile",
          "Alta"
        ],
        [
          "Admit 2.0",
          "2026-09-21",
          "2026-11-13",
          "En proceso",
          "2026-11-10",
          "Andre ya tiene planificado avanzar una pantalla por semana, ya está con la Home y tiene planificado entregarla para continuar con la PLP",
          "Media"
        ],
        [
          "PcArts",
          "2026-11-02",
          "2026-11-13",
          "Pendiente",
          "2026-11-10",
          "Dani elaboró las primeras pantallas en stitch para que Seba las tome como referencia, y que Andre pueda tomar como punto de partida, puesto que la marca ya vio durante una llamada dicho diseño dando feedback positivo",
          "Media"
        ]
      ],
      "calc": [],
      "dates": [
        1,
        2,
        4
      ],
      "nums": [],
      "opts": {
        "3": [
          "Pendiente",
          "En proceso",
          "Realizado"
        ],
        "6": [
          "Alta",
          "Media",
          "Baja"
        ]
      }
    }
  ],
  "tasks": [
    [
      "2026-08-10",
      "Hacer seguimiento de propuesta de Diseño y fechas de entrega para Drinksfood",
      "Andy",
      "",
      "2026-08-12",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Definir avances de las asignaciones en HUB y Cuentas con los PMs",
      "Andy",
      "",
      "2026-08-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Definir cantidad de horas que tomará a Nico acompañar con Nor, esta semana y la proxima",
      "Andy",
      "",
      "2026-08-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Hablar con Rocío para entender como aprobar el Evolutivo antes de lo que está sucediendo ahora en Río",
      "Andy",
      "",
      "2026-08-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Conseguir que se estime la totalidad de horas de Evolutivos en Rio, Brujo y Mamy Blue",
      "Andy",
      "",
      "2026-08-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Hablar con Gian por alta de Basecamp para alinear alcance del proyecto",
      "Andy",
      "",
      "2026-08-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Revisar propuesta multistore UBCuarenta",
      "Andy",
      "",
      "2026-08-14",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Traer definido con que se avanza la proxima semana y que se consiguió en la actual",
      "Andy",
      "",
      "2026-08-14",
      "Cumplido",
      ""
    ],
    [
      "2026-08-10",
      "Revisar que se cumplan la ejecución de horas que se tiene planificada para esta semana en Skin, Admit y Leven",
      "Andy",
      "",
      "2026-08-14",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Acompañar a que se completen los QAs de prioridad alta para que acompañen las fechas de lanzamiento programadas\n",
      "Andy",
      "",
      "2026-08-19",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Concretar lanzamiento de Fibra Humana B2B\n",
      "Andy",
      "",
      "2026-08-19",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Ayudar a definir alcance y tiempos estimados en segunda etapa de UBCuarenta",
      "Andy",
      "",
      "2026-08-20",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Obtener status de consultas técnicas/estimaciones",
      "Andy",
      "",
      "2026-08-20",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Hacer push para que se ejecuten la mayor cantidad de horas que se deben en Admit, Bourlot, Mamy Blue y Río\n",
      "Andy",
      "",
      "2026-08-21",
      "Cumplido",
      ""
    ],
    [
      "2026-08-17",
      "Organizar al equipo para que preparen y lleven propuesta de Evolutivo de Septiembre en la ultima semana de Agosto a cada marca",
      "Andy",
      "",
      "2026-08-21",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Acompañar preparativos y lanzamiento de Reform",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Supervisar que se cumplan los tiempos planificados para Nor, independientemente de que se haya pospuesto el lanzamiento",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Hacer seguimiento a detalle de los avances de UB40 para que se cumpla el calendario planificado",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Acompañar los avances de Diseño en Drinksfood",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Concretar una fecha exacta para la Reimplementación de Admit",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Redistribuir horas de QA",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Rectificar status de Site Clinics pendientes",
      "Andy",
      "",
      "2026-08-26",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Conseguir que se estimen al menos un 50% de los Evolutivos de Septiembre",
      "Andy",
      "",
      "2026-08-28",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Perseguir porque se cumplan las horas planificadas del Evolutivo de Admit",
      "Andy",
      "",
      "2026-08-28",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Estar atento a que se completen las horas faltantes de Bourlot como se tiene programado",
      "Andy",
      "",
      "2026-08-28",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Preparar plan de trabajo para seguimiento hs vendidas vs consumidas",
      "Andy",
      "",
      "2026-08-28",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Gestionar la priorización del equipo para cumplir con la entrega de Nor",
      "Andy",
      "",
      "2026-09-04",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Acompañar al equipo para cumplir con las fechas de avances de UB",
      "Andy",
      "",
      "2026-09-04",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Liderar para que se estime al menos el 50% de las horas de los Evolutivos",
      "Andy",
      "",
      "2026-09-04",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Solicitar status de QAs y Site Clinics pendientes",
      "Andy",
      "",
      "2026-09-04",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Definir si es necesario mover las fechas de Desarrollo de Go Pets",
      "Andy",
      "",
      "2026-09-08",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Hacer un seguimiento a detalle de la propuesta estética para Drinks previo al QA",
      "Andy",
      "",
      "2026-09-09",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Realizar un QA post lanzamiento de Reform para llevar al Evolutivo",
      "Andy",
      "",
      "2026-09-10",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Hacer QA de Reform para detectar oportunidades de mejora que sumen valor al sitio y puedan aplicarse en Garantía y/o Evolutivo",
      "Andy",
      "",
      "2026-09-10",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Revisar el Figma de Go Pets para cumplir con el cronograma",
      "Andy",
      "",
      "2026-09-10",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Solicitar en Líderes/Directorio las cuentas para hacer Site Clinics y Taggeo",
      "Andy",
      "",
      "2026-09-10",
      "Cumplido",
      ""
    ],
    [
      "2026-09-09",
      "Revisar con Nor cuando van a tener las imágenes para hacer un QA más real",
      "Andy",
      "",
      "2026-09-10",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Supervisar el lanzamiento de Fibra B2B y la Garantía posterior",
      "Andy",
      "",
      "2026-09-14",
      "Cumplido",
      ""
    ],
    [
      "2026-08-31",
      "Acompañar el lanzamiento de Reform y la Garantía posterior",
      "Andy",
      "",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Acompañar los avances en UB Cuarenta para llegar a la fecha pactada de revisión",
      "Andy",
      "Nahue",
      "2026-09-22",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Hacer un QA de Fibra B2B para entregar el sitio en el mejor estado posible al finalizar la Garantía",
      "Andy",
      "Rebe",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Concretar instancia de rediseño para llevar una propuesta mejoradora a la reimplementación de Admit",
      "Andy",
      "Dani",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Analizar los avances de Drinksfood para detectar cualquier oportunidad de mejora que se pueda sumar previo al lanzamiento",
      "Andy",
      "Dani",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Revisar los Site Clinics entregados para dar feedback, que los ajusten y entregarlos con alta prioridad",
      "Andy",
      "-",
      "2026-09-28",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Armar mesa de trabajo junto con CS para definir necesidades y alcance de servicio de Taggeo",
      "Andy",
      "Mecha / Pili",
      "2026-10-13",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Detectar los desvíos y mejoras en el proceso de QA",
      "Andy",
      "PMs",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Supervisar que la etapa de Solicitudes en Basecamp se cumpla para no retrasar el calendario",
      "Andy",
      "Nahue",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Hacer que se estime el 50% como mínimo de los Evolutivos",
      "Andy",
      "PMs",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Buscar que se completen los QAs faltantes",
      "Andy",
      "PMs",
      "2026-09-11",
      "Cumplido",
      ""
    ],
    [
      "2026-09-08",
      "Revisar el plan de Capacidades frente a Conteo de horas",
      "Andy",
      "-",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Acompañar preparativos para hacer el KO de Evolutivo de Reform en la fecha acordada (14/09)",
      "Andy",
      "Dani",
      "2026-09-16",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Seguir de cerca el avance de Nor para cumplir el calendario",
      "Andy",
      "Nahue",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-07",
      "Revisar la posibilidad de generar un espacio quincenal con Comercial para corregir desvíos y status de leads",
      "Andy",
      "Gian",
      "2026-09-30",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Revisar cantidad de horas que se ejecutaron en Admit semana 07/09",
      "Andy",
      "Dani",
      "2026-09-14",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Acompañar que se hayan ejecutado el 50% de todos los Evolutivos",
      "Andy",
      "PMs",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Relevar status de pendientes en Nor",
      "Andy",
      "Nahue",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Armado de Pronóstico de Octubre",
      "Andy",
      "-",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Revisar con Lu status de carga de horas",
      "Andy",
      "Lu",
      "2026-09-21",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Hacer QA de Nor para que no retrase la fecha de salida",
      "Andy",
      "Nahue",
      "2026-09-21",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Organizar a Dani para que notifique a Redes el lanzamiento de Drinksfood",
      "Andy",
      "Dani",
      "2026-09-18",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Avisar a Gian para que revisen con Admin el estado de las cotizaciones posterior al lanzamiento de Drinks",
      "Andy",
      "Gian",
      "2026-10-02",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Volver a llevar a mesa de Líderes los Site Clinics",
      "Andy",
      "Líderes",
      "2026-09-23",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Entregar Site Clinics como máximo el 21/09 para ir a la proxima reu de Lideres (23/09)",
      "Andy",
      "-",
      "2026-09-21",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Pedir a Gian el listado de potenciales leads a los que podriamos hacerles SC para poderlos cerrar",
      "Andy",
      "Gian",
      "2026-10-02",
      "Cumplido",
      ""
    ],
    [
      "2026-09-14",
      "Cerrar Site Clinics que ya tienen deadline asignado",
      "Andy",
      "-",
      "2026-09-25",
      "Cumplido",
      ""
    ],
    [
      "2026-09-21",
      "Organizar con Irene una reunión presencial de 'Cierre de Proyecto' por Nor, podemos sumar a Gian",
      "Andy",
      "Nahue / Gian",
      "2026-10-09",
      "Cumplido",
      ""
    ],
    [
      "2026-09-21",
      "Notificar a Alan disponibilidad de Nico para Célula IA",
      "Andy",
      "Alan",
      "2026-09-21",
      "Cumplido",
      ""
    ],
    [
      "2026-09-21",
      "Acompañar a Dani para que se estimen 5hs de Evolutivo de Reform que les daremos solo po este mes",
      "Andy",
      "Dani",
      "2026-09-22",
      "Cumplido",
      ""
    ],
    [
      "2026-09-21",
      "Organizar reunión presencial con Drinks para cerrar el lanzamiento y ver la posibilidad de vender mas servicios",
      "Andy",
      "Dani / Gian",
      "2026-10-07",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Tener una versión lista para mostrar a los demás líderes de los Site Clinics de Admit y Nathan",
      "Andy",
      "Juan / Marian / Anto / Dolo",
      "2026-09-23",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Acompañar a que se complete la Garantía de UB y Nor para que no quede ningún ajuste pendiente",
      "Andy",
      "Nahue / Seba",
      "2026-10-14",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Preparar entrega de Site Clinic para lead potencial de Comercial",
      "Andy",
      "Rebe",
      "2026-09-28",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Proponer Niveles de Servicio para Implementación y Proyectos",
      "Andy",
      "-",
      "2026-09-28",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Completar matriz de habilidades blandas del equipo",
      "Andy",
      "-",
      "2026-10-19",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Hablar con Chris para determinar como trabajaremos en adelante el Diseño UX entre áreas",
      "Andy",
      "Chris",
      "2026-10-02",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Incluir a Marketing, Comercial y Alan en la visita del local a Nor",
      "Andy",
      "Romi",
      "2026-10-02",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Ajustar la ponderación de las habilidades blandas",
      "Andy",
      "-",
      "2026-10-19",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Preparar y entregar a Alan el Catálogo de funcionalidades para proponer para el CyberMonday",
      "Andy",
      "Dani / Lu",
      "2026-10-02",
      "Cumplido",
      ""
    ],
    [
      "2026-10-12",
      "Armar ppt instructivo de Agrupado de variantes con etiquetas para Melocoton",
      "Andy",
      "-",
      "2026-10-19",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Investigar el alcance que se puede dar como servicio de CRO a SommierCenter (Magento)",
      "Andy",
      "-",
      "2026-10-16",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Generar un espacio con los demás líderes para determinar las cuentas clave que no tienen servicios de Proyectos contratado, pero que vale la pena dar un apoyo con ajustes",
      "Andy",
      "Juan / Marian / Tomi / Gasti",
      "2026-10-14",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Llamar a Fernanda de Go Pets por definiciones del hosting",
      "Andy",
      "Fernanda",
      "2026-10-22",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Revisar las primeras pantallas diseñadas para Basecamp",
      "Andy",
      "Nahue / Andre",
      "2026-10-14",
      "Cumplido",
      ""
    ],
    [
      "2026-10-19",
      "Volver a consultar status de pago de UB junto con Gabi",
      "Andy",
      "",
      "2026-11-06",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Definir si se mueve la fecha de lanzamiento de Pets",
      "Andy",
      "Dani",
      "2026-10-09",
      "Cumplido",
      ""
    ],
    [
      "2026-10-14",
      "Definir formato y alcance de reporting que daremos durante Cyber",
      "Andy",
      "",
      "2026-11-13",
      "Cumplido",
      ""
    ],
    [
      "2026-11-09",
      "Hablar del status de Sebas",
      "Andy",
      "Dolo",
      "2026-11-24",
      "Pendiente",
      ""
    ],
    [
      "2026-11-09",
      "Preparar Plan de Trabajo para revisión de perfomance de Seba",
      "Andy",
      "",
      "2026-11-24",
      "En curso",
      ""
    ],
    [
      "2026-10-05",
      "Realizar cierre presencial de Nor y Drinksfood",
      "Andy",
      "Nahue / Dani",
      "2026-10-21",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Fijarse de que se haga el cierre correspondiente al Evolutivo de Reform",
      "Andy",
      "Dani",
      "2026-10-23",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Consultar a Comercial por status pendiente de estimaciones ya hechas",
      "Andy",
      "Gian",
      "2026-10-09",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Preparar un plan de trabajo claro para la dinámica con Diseño para verlo con esa área",
      "Andy",
      "Andre",
      "2026-11-20",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Supervisar el seguimiento de puntos críticos que puedan demorar el lanzamiento de Pets",
      "Andy",
      "Dani",
      "2026-10-22",
      "Cumplido",
      ""
    ],
    [
      "2026-10-12",
      "Armar ppt con indicaciones de como diagnosticar el Taggeo de un sitio para compartir con Paid",
      "Andy",
      "-",
      "2026-11-17",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Conseguir en el pre KO definiciones de alcance del servicio que quiere contratar PcArts",
      "Andy",
      "-",
      "2026-10-06",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Organizar KO para arrancar con Implementación de Ideal",
      "Andy",
      "Dani",
      "2026-10-07",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Revisar si es posible sumar el servicio de Diseño a la Implementacion de Complot",
      "Andy",
      "Gian",
      "2026-10-07",
      "Cumplido",
      ""
    ],
    [
      "2026-10-05",
      "Acompañar a PMs para que la estimación de horas del mes sea del 100% y la ejecución de minimo el 50%",
      "Andy",
      "Dani / Nahue / Mai",
      "2026-10-23",
      "Cumplido",
      ""
    ],
    [
      "2026-11-09",
      "Definir cambio de Dev para PcArts",
      "Andy",
      "",
      "2026-11-24",
      "Pendiente",
      ""
    ],
    [
      "2026-10-05",
      "Seguir la ejecución de horas y rediseño de Admit, la mayor cantidad de horas posibles deben ejecutarse y deben definirse pantallas en fecha para cumplir el programa",
      "Andy",
      "Dani / Andre",
      "2026-11-06",
      "Cumplido",
      ""
    ],
    [
      "2026-11-09",
      "Armar instructivo de manejo de FTP para clientes",
      "Andy",
      "",
      "2026-11-24",
      "Pendiente",
      ""
    ],
    [
      "2026-09-28",
      "Elaborar un primer boceto de encuesta NPS para entregar a las marcas una vez finaliza el servicio",
      "Andy",
      "Anto",
      "2026-10-23",
      "Cumplido",
      ""
    ],
    [
      "2026-10-12",
      "Armar ppt de ajustes realizados para Melocoton",
      "Andy",
      "-",
      "2026-10-16",
      "Cumplido",
      ""
    ],
    [
      "2026-11-02",
      "Implementar versión mejorada de Reporting (v1.2)",
      "Andy",
      "Dani + Nico + Maite",
      "2026-11-25",
      "En curso",
      ""
    ],
    [
      "2026-10-19",
      "Elaborar propuestas para plantear como Objetivos del área (Headless, LT, MURPH)",
      "Andy",
      "",
      "2026-10-26",
      "Cumplido",
      ""
    ],
    [
      "2026-10-13",
      "Armar ppt de plan de trabajo/Objetivos de Noviembre",
      "Andy",
      "",
      "2026-11-13",
      "Cumplido",
      ""
    ],
    [
      "2026-10-12",
      "Actualizar objetivos teniendo en cuenta lo hablado con Alan y Cata",
      "Andy",
      "",
      "2026-10-27",
      "Cumplido",
      ""
    ],
    [
      "2026-08-24",
      "Establecer plan de acción para que Dani tome cuentas Tier 1",
      "Andy",
      "Dani",
      "2026-10-30",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Generar un espacio de revisión con los demás líderes para completar el circuito de los Site Clinics",
      "Andy",
      "Juan / Marian / Anto / Dolo",
      "2026-10-30",
      "Cumplido",
      ""
    ],
    [
      "2026-11-02",
      "Revisar v1.2 de Reporting para que se pueda entregar en Black Friday",
      "Andy",
      "",
      "2026-11-25",
      "En curso",
      ""
    ],
    [
      "2026-10-06",
      "Supervisar implementación de Dashboard en MURPH",
      "Andy",
      "Nico",
      "2026-11-27",
      "Pendiente",
      ""
    ],
    [
      "2026-10-17",
      "Establecer plan de trabajo para CRO de SommierCenter",
      "Andy",
      "",
      "2026-11-27",
      "Pendiente",
      ""
    ],
    [
      "2026-10-15",
      "Establecer protocolo de Lanzamientos bloqueados cuando hay demoras del cliente",
      "Andy",
      "",
      "2026-11-30",
      "En curso",
      ""
    ],
    [
      "2026-10-16",
      "Armar protocolo de gestión de tickets de soporte",
      "Andy",
      "",
      "2026-11-30",
      "En curso",
      ""
    ],
    [
      "2026-11-02",
      "Organizar armado de Reporting Final para cuando termine el Cyber",
      "Andy",
      "Dani",
      "2026-11-17",
      "Cumplido",
      ""
    ],
    [
      "2026-09-28",
      "Revisar propuesta de agenda para Líder de Proyectos",
      "Andy",
      "-",
      "2026-11-30",
      "Pendiente",
      ""
    ],
    [
      "2026-10-05",
      "Armar roadmap y plan de trabajo para el Site Clinic que se trabaja junto con CS",
      "Andy",
      "Dani",
      "2026-11-30",
      "Pendiente",
      ""
    ],
    [
      "2026-10-06",
      "Verificar cumplimiento de objetivo de automatización en el conteo de horas del equipo",
      "Andy",
      "Proyectos",
      "2026-11-30",
      "En curso",
      ""
    ],
    [
      "2026-11-09",
      "Generar un listado de preguntas que permitan recibir feedback de Comercial por estimaciones. Etiquetar a Alan y/o Dolo",
      "Andy",
      "",
      "2026-11-16",
      "Cumplido",
      ""
    ],
    [
      "2026-10-26",
      "Replantear alcance y propósito de reunión de Cierre de proyecto teniendo en cuenta el feedback de las dos primeras (Nor y Drinks)",
      "Andy",
      "",
      "2026-11-30",
      "Pendiente",
      ""
    ],
    [
      "2026-10-26",
      "Armar segunda parte de Estimaciones Automatizadas para que podamos dejar definido que condiciones debe cumplir una marca para iniciar el servicio",
      "Andy",
      "",
      "2026-11-30",
      "En curso",
      ""
    ],
    [
      "2026-11-09",
      "Audar a organizar agenda de Nico para que no se quede de mas",
      "Andy",
      "Dolo + Cata",
      "2026-11-30",
      "Pendiente",
      ""
    ],
    [
      "2026-10-05",
      "Revisar con CS que se ajusta del NPS para Migraciones",
      "Andy",
      "Anto",
      "2026-12-28",
      "Pendiente",
      ""
    ]
  ],
  "hist": [
    [
      "2026-08-10",
      0.43,
      0.46,
      0.34,
      0.43,
      0.74,
      0.46,
      "🟡",
      1.0,
      0.0
    ],
    [
      "2026-08-17",
      0.91,
      0.74,
      0.77,
      0.63,
      0.83,
      0.75,
      "🟢",
      1.0,
      0.0
    ],
    [
      "2026-08-24",
      0.91,
      0.74,
      0.86,
      0.8,
      0.83,
      0.81,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-08-31",
      0.8571428571428571,
      0.7142857142857143,
      0.8857142857142857,
      0.6571428571428571,
      1.0,
      0.8333333333333334,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-09-07",
      0.9142857142857143,
      0.9142857142857143,
      1.0,
      0.8,
      0.7142857142857143,
      0.8904761904761904,
      "🟢",
      0.0,
      3.0
    ],
    [
      "2026-09-14",
      1.0,
      0.9428571428571428,
      0.8857142857142857,
      1.0,
      0.9142857142857143,
      0.9428571428571428,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-09-21",
      1.0,
      1.0,
      0.8857142857142857,
      0.9142857142857143,
      1.0,
      0.9523809523809523,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-09-28",
      1.0,
      0.8571428571428571,
      1.0,
      1.0,
      1.0,
      0.9619047619047619,
      "🟢",
      3.0,
      2.0
    ],
    [
      "2026-10-05",
      0.9428571428571428,
      0.9428571428571428,
      1.0,
      0.9428571428571428,
      1.0,
      0.9657142857142857,
      "🟢",
      3.0,
      0.0
    ],
    [
      "2026-10-12",
      0.9428571428571428,
      0.9428571428571428,
      0.9142857142857143,
      0.9428571428571428,
      1.0,
      0.9485714285714286,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-10-19",
      0.9428571428571428,
      0.9428571428571428,
      1.0,
      0.8571428571428571,
      1.0,
      0.9485714285714286,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-10-26",
      0.9428571428571428,
      0.9428571428571428,
      1.0,
      0.8571428571428571,
      1.0,
      0.9485714285714286,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-11-02",
      1.0,
      0.9428571428571428,
      0.9428571428571428,
      0.9142857142857143,
      1.0,
      0.96,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-11-09",
      1.0,
      0.0,
      0.9523809523809523,
      0.9523809523809523,
      1.0,
      0.9761904761904762,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-11-16",
      0.9714285714285714,
      1.0,
      1.0,
      0.9142857142857143,
      1.0,
      0.974025974025974,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-11-23",
      1.214285714,
      0.5,
      1.25,
      1.523809524,
      1.25,
      1.127819549,
      "🟢",
      0.0,
      0.0
    ],
    [
      "2026-11-30",
      "",
      "",
      "",
      "",
      "",
      "",
      "—",
      0.0,
      0.0
    ],
    [
      "2026-12-07",
      "",
      "",
      "",
      "",
      "",
      "",
      "—",
      0.0,
      0.0
    ],
    [
      "2026-12-14",
      "",
      "",
      "",
      "",
      "",
      "",
      "—",
      0.0,
      0.0
    ],
    [
      "2026-12-21",
      "",
      "",
      "",
      "",
      "",
      "",
      "—",
      0.0,
      0.0
    ],
    [
      "2026-12-28",
      "",
      "",
      "",
      "",
      "",
      "",
      "—",
      0.0,
      0.0
    ]
  ],
  "escalation": "",
  "archives": {}
};
