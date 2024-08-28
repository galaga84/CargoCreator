const column0 = ["Gran", "Supremo", "Honorable", "Excelso", "Ilustre","Distinguido","Majestuoso","Preeminente","Noble", "Digno","Magnífico" ];

const column1 = [
  "coordinador", "gerente", "director", "consultor", "jefe", 
  "especialista", "supervisor", "administrador", "delegado", "orquestador",
  "asesor", "facilitador", "líder", "encargado", "gestor",
  "mediador", "promotor", "arquitecto", "estratega", "agente",
  "innovador", "analista", "diseñador", "desarrollador", "moderador"
];

const column2 = [
  "disruptivo", "innovador", "sinérgico", "estratégico", "transformacional", 
  "adaptativo", "proactivo", "colaborativo", "escalable", "resiliente",
  "visionario", "eficiente", "dinámico", "flexible", "integrado",
  "ágil", "revolucionario", "sostenible", "empático", "optimizado",
  "creativo", "holístico", "interactivo", "futurista", "modular"
];

const column3 = [
  "de negocios", "de salud", "de tecnología", "de integración", "de resonancia", 
  "de comunidad", "de relacionamiento", "de innovación", "de calidad", "de ideación",
  "de proyectos", "de procesos", "de desarrollo", "de recursos", "de estrategias",
  "de operaciones", "de ventas", "de adquisición", "de crecimiento", "de transformación",
  "de datos", "de automatización", "de experiencia", "de comunicación", "de analítica"
];

const column4 = [
  "en logística", "en marketing", "en operaciones", "en ventas", "en compras", 
  "en innovación", "en calidad", "en producción", "en relaciones públicas", "en desarrollo de negocios",
  "en finanzas", "en recursos humanos", "en tecnología de la información", "en planificación estratégica", 
  "en sostenibilidad", "en gestión de proyectos", "en auditoría", "en comunicación", "en servicio al cliente", 
  "en gestión de cambio", "en inteligencia artificial", "en experiencia del usuario", "en automatización",
  "en ciencia de datos", "en ingeniería de procesos"
];

document.getElementById('generate').addEventListener('click', function() {
  const part0 = column0[Math.floor(Math.random() * column0.length)];
  const part1 = column1[Math.floor(Math.random() * column1.length)];
  const part2 = column2[Math.floor(Math.random() * column2.length)];
  const part3 = column3[Math.floor(Math.random() * column3.length)];
  const part4 = column4[Math.floor(Math.random() * column4.length)];

  const result = `"${part0} ${part1} ${part2} ${part3} ${part4}"`;
  document.getElementById('result').innerText = result;
});