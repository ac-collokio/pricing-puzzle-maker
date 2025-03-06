
export const packages = [
  {
    id: "basic",
    name: "Básico",
    price: 90,
    description: "Ideal para empresas pequeñas",
    includes: {
      video_interviews: 20,
      ai_evaluations: 20,
      users: "1-3"
    },
    tool_prices: {
      ai_evaluations: 8,
      video_interviews: 4
    }
  },
  {
    id: "professional",
    name: "Profesional",
    price: 170,
    description: "Para empresas en crecimiento",
    includes: {
      video_interviews: 50,
      ai_evaluations: 50,
      users: "4-10",
      priority_support: true
    },
    tool_prices: {
      ai_evaluations: 5,
      video_interviews: 2.5
    }
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 300,
    description: "Solución empresarial completa",
    includes: {
      video_interviews: 100,
      ai_evaluations: 100,
      users: "10+",
      priority_support: true,
      custom_reports: true
    },
    tool_prices: {
      ai_evaluations: 2.5,
      video_interviews: 1
    }
  }
];

export const tools = [
  { 
    id: "ai_evaluations", 
    name: "Evaluaciones con Inteligencia Artificial", 
    type: "counter",
    increment: 5,
    description: "Precio por evaluación" 
  },
  { 
    id: "video_interviews", 
    name: "Videoentrevistas", 
    type: "counter",
    increment: 5,
    description: "Precio por entrevista" 
  }
];
