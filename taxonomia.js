am5.ready(function() {
 /**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("taxonomiaDeBloom");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/
var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
  layout: root.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
var series = chart.series.push(am5percent.PyramidSeries.new(root, {
  orientation: "vertical",
  valueField: "value",
  categoryField: "category",
  competenciaBloom: "competencia"
}));

series.get("colors").set("colors", [
  am5.color(0xF1B541),
  am5.color(0xEB804A),
  am5.color(0xC3429E),
  am5.color(0x7E54A8),
  am5.color(0x3F9EC6),
  am5.color(0x9DCA59),
]);

series.labels.template.setAll({
  fontSize: 20,
  fill: am5.color(0x000000),
  text: "{category}"
});

  // Get the modal
  var modalBloom = document.getElementById("modalBloom");

  var nomesTaxonomiaDeBloom = [
    "Lembrar",
    "Entender",
    "Aplicar",
    "Analisar",
    "Avaliar",
    "Criar"
  ]
  
  var arrayTaxonomiaDeBloom = [
    "Relacionado a reconhecer e reproduzir ideias e conteúdos. Reconhecer requer distinguir e selecionar uma determinada informação e reproduzir ou recordar está mais relacionado à busca por uma informação relevante memorizada. Representado pelos seguintes verbos no gerúndio: Reconhecendo e Reproduzindo.",
    "Relacionado a estabelecer uma conexão entre o novo e o conhecimento previamente adquirido. A informação é entendida quando o aprendiz consegue reproduzi-la com suas “próprias palavras”. Representado pelos seguintes verbos no gerúndio: Interpretando, Exemplificando, Classificando, Resumindo, Inferindo, Comparando e Explicando.",
    "Relacionado a executar ou usar um procedimento numa situação específica e pode também abordar a aplicação de um conhecimento numa situação nova. Representado pelos seguintes verbos no gerúndio: Executando e Implementando.",
    "Relacionado a dividir a informação em partes relevantes e irrelevantes, importantes e menos importantes e entender a inter-relação existente entre as partes. Representado pelos seguintes verbos no gerúndio: Diferenciando, Organizando, Atribuindo e Concluindo.",
    "Relacionado a realizar julgamentos baseados em critérios e padrões qualitativos e quantitativos ou de eficiência e eficácia. Representado pelos seguintes verbos no gerúndio: Checando e Criticando.",
    "Significa colocar elementos junto com o objetivo de criar uma nova visão, uma nova solução, estrutura ou modelo utilizando conhecimentos e habilidades previamente adquiridos. Envolve o desenvolvimento de ideias novas e originais, produtos e métodos por meio da percepção da interdisciplinaridade e da interdependência de conceitos. Representado pelos seguintes verbos no gerúndio: Generalizando, Planejando e Produzindo."
  ]

series.slices.template.events.on("click", function(ev) {
  console.log(ev.target.dataItem.dataContext);
  document.getElementById("modalBloomTitulo").innerText = ev.target.dataItem.dataContext.category;
  document.getElementById("taxonomia-de-bloom").innerText = ev.target.dataItem.dataContext.competencia;

  modalBloom.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modalBloom) {
      modalBloom.style.display = "none";
    }
}

})

//DICA DE FERRAMENTA
series.slices.template.set("tooltipText", "[bold]{category}[/bold]");

series.data.setAll([
  { value: 10, category: nomesTaxonomiaDeBloom[0] , competencia: arrayTaxonomiaDeBloom[0]},
  { value: 9, category: nomesTaxonomiaDeBloom[1] , competencia: arrayTaxonomiaDeBloom[1] },
  { value: 6, category: nomesTaxonomiaDeBloom[2] , competencia: arrayTaxonomiaDeBloom[2] },
  { value: 5, category: nomesTaxonomiaDeBloom[3] , competencia: arrayTaxonomiaDeBloom[3] },
  { value: 4, category: nomesTaxonomiaDeBloom[4] , competencia: arrayTaxonomiaDeBloom[4] },
  { value: 2, category: nomesTaxonomiaDeBloom[5] , competencia: arrayTaxonomiaDeBloom[5] },
].reverse());

series.appear();

var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15
}));

legend.data.setAll(am5.array.copy(series.dataItems).reverse());

legend.labels.template.setAll({
  fontSize: 16,
  fontWeight: "300"
});


legend.valueLabels.template.setAll({
  fontSize: 0,
  fontWeight: "0"
});


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);
}); // end am5.ready()