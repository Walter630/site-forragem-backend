export function montarDadosGrafico(dados: { mes: string; valor: number }[]): { labels: string[]; values: number[] } {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const dadosMap = new Map<string, number>();
  dados.forEach(({ mes, valor }) => {
    dadosMap.set(mes, valor);
  });

  const labels = meses;
  const values = meses.map(mes => dadosMap.get(mes) ?? 0);

  return { labels, values };
}
