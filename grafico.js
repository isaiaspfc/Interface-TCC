
window.onload=function(){  
  document.getElementById('inputFile').addEventListener('change', function() {
    var arrayEixos = new Array;
    var disciplinas = [
        "ALGORITMOS",
        "FUNDAMENTOS DE COMPUTA��O I",
        "LABORAT�RIO DE PROGRAMA��O",
        "SISTEMAS DIGITAIS PARA COMPUTA��O",
        "ENGENHARIA DE SOFTWARE",
        "ENGENHARIA DE REQUISITOS",
        "T�CNICAS DE PROGRAMA��O I",
        "FUNDAMENTOS DE COMPUTA��O II",
        "C�LCULO DIFERENCIAL E INTEGRAL I",
        "GEOMETRIA ANAL�TICA E C�LCULO VETORIAL",
        "ESTRUTURA DE DADOS I",
        "FUNDAMENTOS DE COMPUTA��O III",
        "T�CNICAS DE PROGRAMA��O II",
        "L�NGUA PORTUGUESA I",
        "ELETRICIDADE E ELETR�NICA",
        "ARQUITETURA DE COMPUTADORES I",
        "FUNDAMENTOS DE COMPUTA��O IV",
        "ESTRUTURA DE DADOS II",
        "PROJETO DE BANCO DE DADOS",
        "ARQUITETURA DE COMPUTADORES II",
        "ARQUITETURA E DESENHO DE SOFTWARE", 
        "INTERFACE HOMEM-M�QUINA",
        "PROJETO E AN�LISE DE ALGOR�TIMOS I",
        "PROBABILIDADE E ESTAT�STICA",
        "PARADIGMAS DE LINGUAGENS DE PROGRAMA��O",
        "REDES DE COMPUTADORES I",
        "METODOLOGIA DA PESQUISA NA COMPUTA��O", 
        "LINGUAGENS FORMAIS E AUT�MATOS",
        "SISTEMAS OPERACIONAIS I",
        "PROJETO E AN�LISE DE ALGOR�TMOS II",
        "TECNOLOGIA DE CONSTRU��O DE SOFTWARE", 
        "REDES DE COMPUTADORES II",
        "SISTEMAS OPERACIONAIS II",
        "INTELIG�NCIA ARTIFICIAL",
        "COMPILADORES", 
        "CRIPTOGRAFIA APLICADA", 
        "GER�NCIA DE PROJETOS DE SISTEMAS",
        "SISTEMAS DISTRIBU�DOS",
        "TEOLOGIA, CI�NCIAS EXATAS E TECNOL�GICAS", 
        "TRABALHO DE CONCLUS�O DE CURSO I", 
        "PROCESSAMENTO DIGITAL DE IMAGENS", 
        "EST�GIO SUPERVISIONADO",
        "COMPUTA��O GR�FICA",
        "TRABALHO DE CONCLUS�O DE CURSO II",
        "SEGURAN�A DE SISTEMAS E APLICA��ES",
        "FILOSOFIA, TECNOLOGIA E �TICA",
        "ADMINISTRA��O DE REDES",
        "CONSTRU��O DE APLICA��ES M�VEIS",
        "GEOMETRIA COMPUTACIONAL",
        "GOVERNAN�A DE TECNOLOGIA DA INFORMA��O",
        "LIBRAS INSTRUMENTAL",
        "MICROCONTROLADORES E MICROPROCESSADORES",
        "PROJETO INTEGRADO DE SOFTWARE I",
        "PROJETO INTEGRADO DE SOFTWARE II",
        "QUALIDADE DE SOFTWARE",
        "REALIDADE VIRTUAL",
        "REDES SEM FIO",
        "SISTEMAS GERENCIADOS DE BANCO DE DADOS",
        "VIS�O POR COMPUTADORES"
    ];  
    var file = new FileReader();
    file.onload = () => {
      var esconderDiv = document.getElementById("esconder-div");
      esconderDiv.style.display = 'none';
        var text = file.result;

        var count = 0;
    for(var i = 0; i < disciplinas.length; i++){
  
      //BUSCA O INDICE DA DISCIPLINA
      var inicio = text.indexOf(disciplinas[i]); 
      var novaNota = text.indexOf('size="2"', (inicio + 1));
      //console.log("NOVA NOTA: " + text.substr(novaNota + 9 ,4));
      var novaSituacao = text.indexOf('size="1"', novaNota + 1);
      //console.log("NOVA SITUAÇÃO: " + text.substr(novaSituacao + 9 ,2));

      if(text.substr(novaSituacao + 9 ,2) === "AP" ){
        count++;
        //BUSCA O NOMA DA DISCIPLINA COMPLETO
        console.log("Disciplina: " + text.substr(inicio, disciplinas[i].length));
        //VERIFICA SE ESTÁ CURSANDO
      if(text.substr(novaNota + 9 ,4) === "CURS"){
        console.log("Nota:       " + "CURSANDO");
        
      }else{
        //BUSCA A NOTA DA DISCINPLINA
        console.log("Nota:       " + text.substr(novaNota + 9 ,4));
        var parteInteira = text.substr(novaNota + 9 ,2);
        var parteFracionaria = text.substr(novaNota + 12 ,1);

        if(parteInteira[0] == 0){
          parteInteira = parteInteira[1];
        }else{
          parteInteira = 10;
          parteFracionaria = 0;
        }
        valorEixoDeFormacao = (parteInteira + parteFracionaria)/10;
        arrayEixos.push(valorEixoDeFormacao);
      }
      }else{
        if(inicio === -1){
          console.log("Disciplina não cursada");
          continue;
        }else{
          var novoInicio = text.indexOf(disciplinas[i], (inicio + disciplinas[i].length + 1));
          novaNota = text.indexOf('size="2"', (novoInicio + 1));
          //console.log("NOVA NOTA: " + text.substr(novaNota + 9 ,4));
          novaSituacao = text.indexOf('size="1"', novaNota + 1);
          //console.log("NOVA SITUAÇÃO: " + text.substr(novaSituacao + 9 ,2));
          while(novoInicio != -1){
            //console.log("A DISCIPLINA EXISTE NA POSIÇÃO: " + novoInicio);
  
            //REPROVADO NA DISCIPLINA
            if(text.substr(novaSituacao + 9 ,2) === "AP"){
              //console.log("Novo inicio AP: " + novoInicio);
              console.log("Disciplina: " + text.substr(novoInicio, disciplinas[i].length));
              text.indexOf('size="2"', (inicio + 1));
              console.log("Nota:       " + text.indexOf('size="2"', (novoInicio + 1)));
              count++;
              break;
            }
            else
            {
              console.log("DISCIPLINA NÃO APROVADA");
              novoInicio = text.indexOf(disciplinas[i], (novoInicio + disciplinas[i].length + 1));
            };
            
          }
        }
      }
     
  }
  console.log("Disciplinas cursadas: " + count);
  chamarGrafico(arrayEixos);
    }
    file.readAsText(this.files[0]);
   
  });

}

function chamarGrafico(vetorDeEixos){
  am5.ready(function() { 
        // Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("grafico");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(am5radar.RadarChart.new(root, {
panX: false,
panY: false,
wheelX: "panX"

}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {

}));

cursor.lineY.set("visible", false);


// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {});
xRenderer.labels.template.setAll({
radius: 10
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
maxDeviation: 0,
categoryField: "eixoDeFormacao",
renderer: xRenderer}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
min: 0,
max: 10,
renderer: am5radar.AxisRendererRadial.new(root, {})
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series = chart.series.push(am5radar.RadarLineSeries.new(root, {
name: "Series",
xAxis: xAxis,
yAxis: yAxis,
valueYField: "nivelDeCompetencia",
categoryXField: "eixoDeFormacao",
tooltip:am5.Tooltip.new(root, {
labelText:"{valueY}"
})
}));

var legend = chart.children.push(am5.Legend.new(root, {}));
legend.data.setAll(chart.series.values);

//chart.set("cursor", am5radar.RadarCursor.new(root, {}));

series.strokes.template.setAll({
strokeWidth: 2
});

series.bullets.push(function () {
return am5.Bullet.new(root, {
sprite: am5.Circle.new(root, {
radius: 5,
fill: series.get("fill")
})
});
});
// Set data
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data

var data = [{
"eixoDeFormacao": "Resolução de Problemas",
"nivelDeCompetencia": vetorDeEixos[0]
}, {
"eixoDeFormacao": "Desenvolvimento de Sistemas",
"nivelDeCompetencia": vetorDeEixos[1]
}, {
"eixoDeFormacao": "Desenvolvimento de Projetos",
"nivelDeCompetencia": vetorDeEixos[2]
}, {
"eixoDeFormacao": "Implantação de Sistemas",
"nivelDeCompetencia": vetorDeEixos[3]
}, {
"eixoDeFormacao": "Gestão de Infraestrutura",
"nivelDeCompetencia": vetorDeEixos[4]
}, {
"eixoDeFormacao": "Aprendizado Contínuo e Autônomo",
"nivelDeCompetencia": vetorDeEixos[5]
}, {
"eixoDeFormacao": "Ciência, Tecnologia e Inovação",
"nivelDeCompetencia": vetorDeEixos[6]
}];
series.data.setAll(data);
xAxis.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);

  })
}
