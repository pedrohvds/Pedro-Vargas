export function calcularDano(min: number, max: number, tipo: "leve" | "pesado" | "especial"): number {
  const random = Math.random();
  if (tipo === "leve") {
    return random < 0.7 ? min + Math.random() * (max - min) * 0.5 : min + Math.random() * (max - min);
  } else if (tipo === "pesado") {
    return min + Math.random() * (max - min);
  } else {
    return random < 0.7 ? max - Math.random() * (max - min) * 0.3 : max;
  }
}
