export function verificarDiaDaSemana() {
  const hoje = new Date();
  return hoje.getDay() === 1; // 1 é segunda-feira.
}

export function montarCorpoEmail() {
  return `Prezado cliente, confira os últimos lançamentos e os veículos mais vendidos. Não perca as ofertas especiais da semana na CarStore!`;
}
