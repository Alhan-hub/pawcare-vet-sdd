export interface VetService {
  id: string;
  name: string;
  category: 'Preventiva' | 'Especialidad' | 'Diagnóstico' | 'Urgencias';
  description: string;
  duration: string;
  price: string;
  icon: string;
  badge?: string;
}

export interface CareTip {
  id: string;
  title: string;
  category: 'Nutrición' | 'Prevención' | 'Primeros Auxilios' | 'Comportamiento';
  petType: 'Perros' | 'Gatos' | 'Ambos';
  summary: string;
  actionSteps: string[];
  readTime: string;
}

export const VET_SERVICES: VetService[] = [
  {
    id: 'consulta-general',
    name: 'Consulta Médica General',
    category: 'Preventiva',
    description: 'Evaluación física completa de signos vitales, control de peso, revisión dental, auditiva y plan de salud personalizado.',
    duration: '30 min',
    price: '$65.000 COP',
    icon: '🩺',
    badge: 'Más solicitado'
  },
  {
    id: 'vacunacion-desparasitacion',
    name: 'Esquema de Vacunación y Control',
    category: 'Preventiva',
    description: 'Aplicación de biológicos certificados (Séxtuple, Rabia, Triple Felina, Leucemia) y desparasitación interna/externa.',
    duration: '20 min',
    price: '$55.000 COP',
    icon: '💉'
  },
  {
    id: 'odontologia-profilaxis',
    name: 'Profilaxis Dental por Ultrasonido',
    category: 'Especialidad',
    description: 'Eliminación de sarro dental, pulido de esmalte y prevención de enfermedad periodontal bajo monitoreo seguro.',
    duration: '60 min',
    price: '$180.000 COP',
    icon: '🦷'
  },
  {
    id: 'imagenologia-ecografia',
    name: 'Ecografía y Radiología Digital',
    category: 'Diagnóstico',
    description: 'Diagnóstico por imagen de alta resolución abdominal y torácico con entrega de informe inmediato.',
    duration: '45 min',
    price: '$120.000 COP',
    icon: '🩻'
  },
  {
    id: 'laboratorio-clinico',
    name: 'Perfil Bioquímico y Hemograma',
    category: 'Diagnóstico',
    description: 'Toma de muestras y procesamiento en laboratorio propio para evaluación renal, hepática y hemoparásitos.',
    duration: '25 min',
    price: '$95.000 COP',
    icon: '🔬'
  },
  {
    id: 'triage-prioritario',
    name: 'Valoración Prioritaria / Triage',
    category: 'Urgencias',
    description: 'Atención inmediata para decaimiento agudo, intoxicaciones, heridas o dificultades respiratorias.',
    duration: '40 min',
    price: '$90.000 COP',
    icon: '🚑',
    badge: 'Prioritario'
  }
];

export const CARE_TIPS: CareTip[] = [
  {
    id: 'tip-1',
    title: 'Alimentos tóxicos que jamás debes darle a tu mascota',
    category: 'Nutrición',
    petType: 'Ambos',
    summary: 'El chocolate, las uvas, la cebolla, el ajo y el xilitol pueden causar fallos renales o hepáticos severos en pocas horas.',
    actionSteps: [
      'Mantén el chocolate oscuro y productos de panadería fuera de su alcance.',
      'No compartas restos de comida condimentada con cebolla o ajo.',
      'Si ingiere uvas o pasas, acude a urgencias antes de que pasen 2 horas.'
    ],
    readTime: '3 min'
  },
  {
    id: 'tip-2',
    title: '¿Cómo identificar un golpe de calor a tiempo?',
    category: 'Primeros Auxilios',
    petType: 'Perros',
    summary: 'En días soleados o caminatas intensas, los perros regulan su temperatura jadeando. El exceso de calor puede ser crítico.',
    actionSteps: [
      'Observa si hay jadeo excesivo, encías rojo brillante o salivación espesa.',
      'Humedecer almohadillas, abdomen e ingles con agua fresca (nunca helada).',
      'Evita paseos entre las 11:00 a.m. y las 3:30 p.m. sobre asfalto caliente.'
    ],
    readTime: '4 min'
  },
  {
    id: 'tip-3',
    title: 'Prevención de problemas urinarios en gatos indoor',
    category: 'Prevención',
    petType: 'Gatos',
    summary: 'Los felinos suelen tomar poca agua por naturaleza, lo que incrementa el riesgo de cristales y obstrucciones urinarias.',
    actionSteps: [
      'Utiliza fuentes de agua corriente para estimular su hidratación diaria.',
      'Combina alimento seco de calidad con alimento húmedo (dieta mixta).',
      'Mantén siempre una caja de arena adicional al número total de gatos en casa.'
    ],
    readTime: '3 min'
  },
  {
    id: 'tip-4',
    title: 'Calendario anual de desparasitación interna y externa',
    category: 'Prevención',
    petType: 'Ambos',
    summary: 'Pulgas, garrapatas y parásitos gastrointestinales transmiten enfermedades hemáticas incluso en mascotas que salen poco.',
    actionSteps: [
      'Realiza desparasitación interna cada 3 a 4 meses según el peso exacto.',
      'Usa comprimidos masticables o pipetas mensuales contra pulgas y garrapatas.',
      'Realiza un examen coprológico de control una vez al año.'
    ],
    readTime: '2 min'
  },
  {
    id: 'tip-5',
    title: 'Enriquecimiento ambiental para reducir la ansiedad por separación',
    category: 'Comportamiento',
    petType: 'Perros',
    summary: 'El estrés cuando quedas fuera de casa puede manifestarse en ladridos continuos o conductas destructivas.',
    actionSteps: [
      'Utiliza juguetes interactivos tipo Kong rellenos de alimento húmedo congelado.',
      'Realiza un paseo de olfateo de 20 minutos antes de salir de casa.',
      'No hagas despedidas dramáticas; normaliza tus salidas y regresos.'
    ],
    readTime: '5 min'
  },
  {
    id: 'tip-6',
    title: 'Señales silenciosas de dolor en felinos',
    category: 'Primeros Auxilios',
    petType: 'Gatos',
    summary: 'Los gatos son expertos ocultando el malestar físico. Detectar cambios sutiles en su postura y rutina salva vidas.',
    actionSteps: [
      'Presta atención si deja de acicalarse o se esconde en lugares inusuales.',
      'Evalúa la postura encorvada, ojos entrecerrados y orejas hacia los lados.',
      'Jamás administres analgésicos humanos (el acetaminofén es letal en gatos).'
    ],
    readTime: '4 min'
  }
];

export const AVAILABLE_HOURS: string[] = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM'
];