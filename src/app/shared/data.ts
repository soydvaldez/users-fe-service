const db = {
  users: [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@domain.com',
      createdAt: '2024-09-20T18:21:00.082648+00:00',
      updatedAt: '2024-09-20T18:21:00.082648+00:00',
      isActive: true,
      roleId: 1,
      departmentId: 2,
    },
    {
      id: 2,
      firstname: 'Joe',
      lastname: 'Smith',
      email: 'joesmith@domain.com',
      createdAt: '2024-07-20T18:27:59.622356+00:00',
      updatedAt: '2024-07-20T18:27:59.622356+00:00',
      isActive: true,
      roleId: 1,
      departmentId: 2,
    },
    {
      id: 3,
      firstname: 'Brie',
      lastname: 'Anderson',
      email: 'brieanderson@domain.com',
      createdAt: '2024-07-18T18:28:22.978314+00:00',
      updatedAt: '2024-07-19T15:10:01.978314+00:00',
      isActive: true,
      roleId: 1,
      departmentId: 2,
    },
    {
      id: 4,
      firstname: 'Bob',
      lastname: 'Smith',
      email: 'bobsmith@domain.com',
      createdAt: '2024-11-15T18:28:47.569343+00:00',
      updatedAt: '2024-11-15T18:28:47.569343+00:00',
      isActive: true,
      roleId: 2,
      departmentId: 2,
    },
    {
      id: 5,
      firstname: 'Carol',
      lastname: 'Dominguez',
      email: 'caroldominguez@domain.com',
      createdAt: '2024-10-10T18:29:25.740259+00:00',
      updatedAt: '2024-10-10T18:29:25.740259+00:00',
      isActive: true,
      roleId: 3,
      departmentId: 2,
    },
    {
      id: 6,
      firstname: 'David',
      lastname: 'Cameron',
      email: 'davidcameron@domain.com',
      createdAt: '2024-11-10T18:29:25.740259+00:00',
      updatedAt: '2024-11-10T18:29:25.740259+00:00',
      isActive: true,
      roleId: 4,
      departmentId: 2,
    },
    {
      id: 7,
      firstname: 'Evelin',
      lastname: 'Verne',
      email: 'evelinverne@domain.com',
      createdAt: '2024-11-10T18:29:25.740259+00:00',
      updatedAt: '2024-11-10T18:29:25.740259+00:00',
      isActive: true,
      roleId: 5,
      departmentId: 2,
    },
    {
      id: 8,
      firstname: 'Irene',
      lastname: 'Cabrera',
      email: 'icabrera@domain1.com',
      createdAt: '2024-11-25T03:45:05.577905+00:00',
      updatedAt: '2024-11-25T03:45:05.577905+00:00',
      isActive: true,
      roleId: 5,
      departmentId: 2,
    },
    {
      id: 9,
      firstname: 'James',
      lastname: 'Smith',
      email: 'jamessm@domain.com',
      createdAt: '2024-12-02T20:01:49.847974+00:00',
      updatedAt: '2024-12-02T20:01:49.847974+00:00',
      isActive: true,
      roleId: 3,
      departmentId: 2,
    },
    {
      id: 10,
      firstname: 'testname',
      lastname: 'testlastname',
      email: 'test@domain.com',
      createdAt: '2024-12-11T18:16:05.730441+00:00',
      updatedAt: '2024-12-11T18:16:05.730441+00:00',
      isActive: true,
      roleId: 6,
      departmentId: 1,
    },
  ],

  departamento_TI: {
    areas: [
      {
        id: 1,
        nombre: 'Soporte Técnico',
        descripcion:
          'Se encarga de proporcionar soporte a los usuarios finales, resolver problemas técnicos y mantener los sistemas operativos y software en buen funcionamiento.',
        funciones: [
          'Asistencia en la resolución de problemas de hardware y software.',
          'Instalación y configuración de sistemas operativos y aplicaciones.',
          'Mantenimiento de equipos y periféricos.',
        ],
      },
      {
        id: 2,
        nombre: 'Infraestructura',
        descripcion:
          'Gestiona la infraestructura tecnológica, incluyendo redes, servidores y sistemas de almacenamiento, asegurando su operatividad y rendimiento.',
        funciones: [
          'Mantenimiento y administración de servidores.',
          'Gestión de redes y conectividad.',
          'Seguridad en la infraestructura tecnológica.',
        ],
      },
      {
        id: 3,
        nombre: 'Desarrollo de Software',
        descripcion:
          'Encargado de desarrollar, mantener y mejorar aplicaciones y sistemas internos o externos de la empresa.',
        funciones: [
          'Desarrollo de aplicaciones y sistemas web y móviles.',
          'Mantenimiento y actualización de software existente.',
          'Pruebas y aseguramiento de calidad del software.',
        ],
      },
      {
        id: 4,
        nombre: 'Seguridad Informática',
        descripcion:
          'Responsable de proteger los sistemas y datos de la empresa frente a amenazas cibernéticas y ataques de seguridad.',
        funciones: [
          'Implementación de políticas de seguridad.',
          'Monitoreo y gestión de vulnerabilidades.',
          'Gestión de firewalls, antivirus y herramientas de protección.',
        ],
      },
      {
        id: 5,
        nombre: 'Gestión de Bases de Datos',
        descripcion:
          'Gestiona y mantiene las bases de datos de la empresa, asegurando su disponibilidad, integridad y seguridad.',
        funciones: [
          'Administración y optimización de bases de datos.',
          'Copia de seguridad y recuperación de bases de datos.',
          'Monitoreo y rendimiento de bases de datos.',
        ],
      },
      {
        id: 6,
        nombre: 'Proyectos y Gestión de TI',
        descripcion:
          'Gestiona los proyectos tecnológicos y coordina el desarrollo de nuevos sistemas y mejoras en la infraestructura tecnológica.',
        funciones: [
          'Planificación y ejecución de proyectos de TI.',
          'Gestión de recursos y presupuestos de TI.',
          'Coordinación de equipos interfuncionales.',
        ],
      },
      {
        id: 7,
        nombre: 'Arquitectura de TI',
        descripcion:
          'Diseña y mantiene la arquitectura tecnológica de la empresa, incluyendo la integración de sistemas y la elección de plataformas tecnológicas.',
        funciones: [
          'Diseño de soluciones tecnológicas integradas.',
          'Evaluación y selección de plataformas y herramientas.',
          'Aseguramiento de la escalabilidad y flexibilidad de los sistemas.',
        ],
      },
      {
        id: 8,
        nombre: 'Análisis de Datos y Business Intelligence',
        descripcion:
          'Encargado de analizar grandes volúmenes de datos, generar informes y proporcionar insights valiosos para la toma de decisiones.',
        funciones: [
          'Recolección y análisis de datos.',
          'Creación de dashboards e informes de BI.',
          'Identificación de oportunidades a través de datos.',
        ],
      },
      {
        id: 9,
        nombre: 'Compliance y Gestión de Riesgos',
        descripcion:
          'Asegura que las operaciones de TI cumplan con las normativas legales y de seguridad, y gestiona los riesgos tecnológicos.',
        funciones: [
          'Cumplimiento de regulaciones de seguridad y privacidad.',
          'Evaluación y mitigación de riesgos tecnológicos.',
          'Auditorías y control de acceso.',
        ],
      },
    ],
    roles: [
      {
        id: 1,
        nombre: 'Director de TI',
        descripcion:
          'Responsable de liderar el departamento de TI y garantizar que la tecnología soporte los objetivos estratégicos de la empresa.',
        responsabilidades: [
          'Definir la estrategia tecnológica a largo plazo.',
          'Gestionar el presupuesto de TI.',
          'Coordinar con otros departamentos para alinear las iniciativas tecnológicas con los objetivos del negocio.',
        ],
      },
      {
        id: 2,
        nombre: 'Administrador de Sistemas',
        descripcion:
          'Se encarga de la gestión de servidores, redes y sistemas operativos, garantizando la estabilidad y disponibilidad de la infraestructura de TI.',
        responsabilidades: [
          'Instalar, configurar y mantener servidores y sistemas operativos.',
          'Monitorear el rendimiento de la infraestructura tecnológica.',
          'Gestionar copias de seguridad y recuperación de datos.',
        ],
      },
      {
        id: 3,
        nombre: 'Desarrollador de Software',
        descripcion:
          'Encargado de crear, mantener y mejorar aplicaciones y sistemas de software según las necesidades de la empresa.',
        responsabilidades: [
          'Escribir código eficiente y bien documentado.',
          'Realizar pruebas unitarias y de integración.',
          'Desarrollar nuevas funcionalidades y corregir errores en el software.',
        ],
      },
      {
        id: 4,
        nombre: 'Analista de Seguridad',
        descripcion:
          'Encargado de identificar y gestionar riesgos de seguridad en los sistemas de la organización, protegiendo los datos y recursos tecnológicos.',
        responsabilidades: [
          'Realizar auditorías de seguridad periódicas.',
          'Implementar y mantener políticas de seguridad informática.',
          'Gestionar los accesos y permisos a los sistemas.',
        ],
      },
      {
        id: 5,
        nombre: 'Administrador de Bases de Datos',
        descripcion:
          'Responsable de la gestión de bases de datos, asegurando su disponibilidad, rendimiento y seguridad.',
        responsabilidades: [
          'Administrar la instalación, configuración y mantenimiento de bases de datos.',
          'Optimizar consultas y realizar tuning de base de datos.',
          'Realizar backups y asegurar la integridad de los datos.',
        ],
      },
      {
        id: 6,
        nombre: 'Ingeniero de Redes',
        descripcion:
          'Gestiona la infraestructura de redes, incluyendo la configuración, seguridad y optimización de la conectividad interna y externa.',
        responsabilidades: [
          'Configurar y mantener routers, switches y otros dispositivos de red.',
          'Monitorear el tráfico de la red y solucionar problemas de conectividad.',
          'Asegurar la seguridad de las redes mediante firewalls y otras herramientas.',
        ],
      },
      {
        id: 7,
        nombre: 'Gestor de Proyectos de TI',
        descripcion:
          'Coordina y gestiona proyectos tecnológicos, asegurando que se cumplan los plazos, presupuestos y requisitos establecidos.',
        responsabilidades: [
          'Planificar, ejecutar y supervisar proyectos de TI.',
          'Gestionar los recursos humanos y financieros asignados a los proyectos.',
          'Comunicar el progreso del proyecto a los stakeholders.',
        ],
      },
      {
        id: 8,
        nombre: 'Arquitecto de Soluciones',
        descripcion:
          'Diseña y define las soluciones tecnológicas que mejor se adapten a las necesidades de la empresa, incluyendo la integración de sistemas.',
        responsabilidades: [
          'Crear la arquitectura tecnológica para nuevas soluciones.',
          'Evaluar herramientas y plataformas tecnológicas.',
          'Asegurar la escalabilidad y la seguridad de las soluciones propuestas.',
        ],
      },
      {
        id: 9,
        nombre: 'Especialista en Cloud',
        descripcion:
          'Gestiona los recursos y servicios basados en la nube, incluyendo la configuración y administración de infraestructuras en plataformas como AWS, Azure o Google Cloud.',
        responsabilidades: [
          'Configurar y gestionar entornos de nube.',
          'Optimizar el uso de recursos en la nube para reducir costos.',
          'Gestionar la seguridad y el acceso a los recursos en la nube.',
        ],
      },
      {
        id: 10,
        nombre: 'Soporte Técnico',
        descripcion:
          'Brinda soporte directo a los usuarios finales, resolviendo problemas técnicos de hardware, software y redes.',
        responsabilidades: [
          'Atender solicitudes y problemas técnicos de los usuarios.',
          'Instalar y configurar software y hardware.',
          'Proporcionar soluciones a problemas comunes de tecnología.',
        ],
      },
      {
        id: 11,
        nombre: 'Business Analyst (Analista de Negocios de TI)',
        descripcion:
          'Trabaja en la interfaz entre el departamento de TI y los departamentos de negocio para identificar y documentar los requisitos tecnológicos.',
        responsabilidades: [
          'Recopilar y analizar los requisitos de los usuarios.',
          'Elaborar especificaciones de funcionalidad para proyectos de TI.',
          'Garantizar que las soluciones tecnológicas cumplan con las necesidades del negocio.',
        ],
      },
    ],
  },
};

export const { users, departamento_TI } = db;
