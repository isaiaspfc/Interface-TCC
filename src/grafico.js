
window.onload=function(){
  var aprendizadoContinuoEAutonomo = [
    "METODOLOGIA DA PESQUISA NA COMPUTA��O",
    "ALGORITMOS",
    "FUNDAMENTOS DE COMPUTA��O I",
    "ENGENHARIA DE SOFTWARE",
    "ARQUITETURA DE COMPUTADORES I"
    ];

  var cienciaTecnologiaEInovacao = [
    "ALGORITMOS",
    "ARQUITETURA DE COMPUTADORES I",
    "ARQUITETURA DE COMPUTADORES II",
    "PROJETO DE BANCO DE DADOS",
    "PROJETO E AN�LISE DE ALGOR�TIMOS I",
    "PROJETO E AN�LISE DE ALGOR�TMOS II",
    "COMPILADORES",
    "ENGENHARIA DE SOFTWARE",
    "FILOSOFIA, TECNOLOGIA E �TICA",
    "INTELIG�NCIA ARTIFICIAL",
    "INTERFACE HOMEM-M�QUINA",
    "GEOMETRIA ANAL�TICA E C�LCULO VETORIAL",
    "C�LCULO DIFERENCIAL E INTEGRAL I",
    "PROBABILIDADE E ESTAT�STICA",
    "REDES DE COMPUTADORES I",
    "REDES DE COMPUTADORES II",
    "SEGURAN�A DE SISTEMAS E APLICA��ES",
    "SISTEMAS DISTRIBU�DOS",
    "SISTEMAS OPERACIONAIS I",
    "SISTEMAS OPERACIONAIS II"
  ];

  var desenvolvimentoDeProjetos = [
    "ALGORITMOS",
    "FILOSOFIA, TECNOLOGIA E �TICA",
    "ENGENHARIA DE SOFTWARE",
    "ESTRUTURA DE DADOS I",
    "GER�NCIA DE PROJETOS DE SISTEMAS",
    "C�LCULO DIFERENCIAL E INTEGRAL I",
    "PROBABILIDADE E ESTAT�STICA",
    "FUNDAMENTOS DE COMPUTA��O II",
    "FUNDAMENTOS DE COMPUTA��O III",
    "ARQUITETURA DE COMPUTADORES I",
    "ARQUITETURA DE COMPUTADORES II",
    "PROJETO DE BANCO DE DADOS",
    "SISTEMAS GERENCIADORES DE BANCO DE DADOS",
    "COMPUTA��O GR�FICA",
    "CRIPTOGRAFIA APLICADA",
    "INTELIG�NCIA ARTIFICIAL",
    "INTERFACE HOMEM-M�QUINA",
    "SISTEMAS OPERACIONAIS II",
    "SISTEMAS MULTIM�DIA",
    "SISTEMAS DISTRIBU�DOS",
    "SEGURAN�A DE SISTEMAS E APLICA��ES",
    "REDES DE COMPUTADORES I",
    "LABORAT�RIO DE PROGRAMA��O",
    "GEOMETRIA ANAL�TICA E C�LCULO VETORIAL",
    "PROCESSAMENTO DIGITAL DE IMAGENS",
  ];

  var desenvolvimentoDeSistemas = [
    "ALGORITMOS",
    "PROJETO DE BANCO DE DADOS",
    "SISTEMAS GERENCIADORES DE BANCO DE DADOS",
    "INTERFACE HOMEM-M�QUINA",
    "CRIPTOGRAFIA APLICADA", 
    "ESTRUTURA DE DADOS I",
    "ESTRUTURA DE DADOS II",
    "INTELIG�NCIA ARTIFICIAL",
    "PROCESSAMENTO DIGITAL DE IMAGENS", 
    "COMPUTA��O GR�FICA",
    "SISTEMAS MULTIM�DIA",
    "ENGENHARIA DE SOFTWARE",
    "FILOSOFIA, TECNOLOGIA E �TICA",
    "REDES DE COMPUTADORES I",
    "REDES DE COMPUTADORES II",
    "SEGURAN�A DE SISTEMAS E APLICA��ES",
    "SISTEMAS OPERACIONAIS I",
    "SISTEMAS OPERACIONAIS II",
    "SISTEMAS DISTRIBU�DOS",
    "GER�NCIA DE PROJETOS DE SISTEMAS",
    "ARQUITETURA DE COMPUTADORES I",
    "ARQUITETURA DE COMPUTADORES II"
  ];
  
  var gestaoDeInfraestrutura = [
    "LABORAT�RIO DE PROGRAMA��O",
    "FILOSOFIA, TECNOLOGIA E �TICA",
    "GER�NCIA DE PROJETOS DE SISTEMAS",
    "INTERFACE HOMEM-M�QUINA",
    "PROJETO DE BANCO DE DADOS",
    "SISTEMAS GERENCIADORES DE BANCO DE DADOS",
    "CRIPTOGRAFIA APLICADA",
    "PROCESSAMENTO DIGITAL DE IMAGENS", 
    "SISTEMAS MULTIM�DIA",
    "ARQUITETURA DE COMPUTADORES I",
    "ARQUITETURA DE COMPUTADORES II",
    "REDES DE COMPUTADORES I",
    "REDES DE COMPUTADORES II",
    "SISTEMAS DISTRIBU�DOS",
    "SISTEMAS OPERACIONAIS I",
    "SISTEMAS OPERACIONAIS II",
    "SEGURAN�A DE SISTEMAS E APLICA��ES",
    "PROBABILIDADE E ESTAT�STICA",
    "PROJETO E AN�LISE DE ALGOR�TMOS I",
    "PROJETO E AN�LISE DE ALGOR�TMOS II",
    ];

    var implantacaoDeSistemas = [
      "PROJETO DE BANCO DE DADOS",
      "SISTEMAS GERENCIADORES DE BANCO DE DADOS",
      "ARQUITETURA DE COMPUTADORES I",
      "ARQUITETURA DE COMPUTADORES II",
      "FILOSOFIA, TECNOLOGIA E �TICA",
      "REDES DE COMPUTADORES I",
      "REDES DE COMPUTADORES II",
      "SEGURAN�A DE SISTEMAS E APLICA��ES",
      "SISTEMAS DISTRIBU�DOS",
      "SISTEMAS OPERACIONAIS I",
      "SISTEMAS OPERACIONAIS II",
      "PROBABILIDADE E ESTAT�STICA",
      "ENGENHARIA DE SOFTWARE",
    ];
    var resolucaoDeProblemas = [
      "ALGORITMOS",
      "C�LCULO DIFERENCIAL E INTEGRAL I",
      "GEOMETRIA ANAL�TICA E C�LCULO VETORIAL",
      "METODOLOGIA DA PESQUISA NA COMPUTA��O", 
      "PROJETO E AN�LISE DE ALGOR�TMOS I",
      "PROJETO E AN�LISE DE ALGOR�TMOS II",
      "COMPILADORES", 
      "FUNDAMENTOS DE COMPUTA��O I",
      "FUNDAMENTOS DE COMPUTA��O II",
      "FUNDAMENTOS DE COMPUTA��O III",
      "FUNDAMENTOS DE COMPUTA��O IV",
      "ESTRUTURA DE DADOS I",
      "ESTRUTURA DE DADOS II",
      "PROJETO INTEGRADO DE SOFTWARE I",
      "PROJETO INTEGRADO DE SOFTWARE II",
      "T�CNICAS DE PROGRAMA��O I",
      "T�CNICAS DE PROGRAMA��O II",
      "PROBABILIDADE E ESTAT�STICA",
      "CRIPTOGRAFIA APLICADA", 
      "FILOSOFIA, TECNOLOGIA E �TICA",
      "INTELIG�NCIA ARTIFICIAL",
      "LINGUAGENS FORMAIS E AUT�MATOS",
      "ARQUITETURA DE COMPUTADORES I",
      "ARQUITETURA DE COMPUTADORES II",
      "PROJETO DE BANCO DE DADOS",
      "REDES DE COMPUTADORES I",
      "REDES DE COMPUTADORES II",
      "SEGURAN�A DE SISTEMAS E APLICA��ES",
      "SISTEMAS OPERACIONAIS I",
      "SISTEMAS OPERACIONAIS II",
      "SISTEMAS DISTRIBU�DOS"
    ];


  document.getElementById('inputFile').addEventListener('change', function() {
    var arrayEixos = new Array;
    var vetorValoresDosEixosDeFormacao = new Array;
    var nivelAprendizadoContinuoEAutonomo = [0,0];
    var nivelCienciaTecnologiaEInovacao = [0,0];
    var nivelDesenvolvimentoDeProjetos = [0,0];
    var nivelDesenvolvimentoDeSistemas = [0,0];
    var nivelGestaoDeInfraestrutura = [0,0];
    var nivelImplantacaoDeSistemas = [0,0];
    var nivelResolucaoDeProblemas = [0,0];
    var disciplinaExiste = false;

    var disciplinas = [
      {
          nome: "ALGORITMOS",
          peso: 1
      },
      {
          nome: "FUNDAMENTOS DE COMPUTA��O I",
          peso: 1
      },     
      {
          nome: "LABORAT�RIO DE PROGRAMA��O",
          peso: 1
      },
      {
          nome: "SISTEMAS DIGITAIS PARA COMPUTA��O",
          peso: 1
      },
      {
          nome: "ENGENHARIA DE SOFTWARE",
          peso: 1
      },
      {
          nome: "ENGENHARIA DE REQUISITOS",
          peso: 2
      },
      {
          nome: "T�CNICAS DE PROGRAMA��O I",
          peso: 2
      },
      {
          nome: "FUNDAMENTOS DE COMPUTA��O II",
          peso: 2
      },
      {
          nome: "C�LCULO DIFERENCIAL E INTEGRAL I",
          peso: 2
      },
      {
          nome: "GEOMETRIA ANAL�TICA E C�LCULO VETORIAL",
          peso: 2
      },
      {
          nome: "ESTRUTURA DE DADOS I",
          peso: 3
      },
      {
          nome: "FUNDAMENTOS DE COMPUTA��O III",
          peso: 3
      },
      {
          nome: "T�CNICAS DE PROGRAMA��O II",
          peso: 3
      },
      {
          nome: "L�NGUA PORTUGUESA I",
          peso: 3
      },
      {
          nome: "ELETRICIDADE E ELETR�NICA",
          peso: 3
      },
      {
          nome: "ARQUITETURA DE COMPUTADORES I",
          peso: 4
      },
      {
          nome: "FUNDAMENTOS DE COMPUTA��O IV",
          peso: 4
      },
      {
          nome: "ESTRUTURA DE DADOS II",
          peso: 4
      },
      {
          nome: "PROJETO DE BANCO DE DADOS",
          peso: 4
      },
      {
          nome: "ARQUITETURA DE COMPUTADORES II",
          peso: 5
      },
      {
          nome: "ARQUITETURA E DESENHO DE SOFTWARE",
          peso: 5
      },
      {
          nome: "INTERFACE HOMEM-M�QUINA",
          peso: 5
      },
      {
          nome: "PROJETO E AN�LISE DE ALGOR�TIMOS I",
          peso: 5
      },
      {
          nome: "PROBABILIDADE E ESTAT�STICA",
          peso: 5
      },
      {
          nome: "PARADIGMAS DE LINGUAGENS DE PROGRAMA��O",
          peso: 6
      },
      {
          nome: "REDES DE COMPUTADORES I",
          peso: 6
      },
      {
          nome: "METODOLOGIA DA PESQUISA NA COMPUTA��O",
          peso: 6
      },
      {
          nome: "LINGUAGENS FORMAIS E AUT�MATOS",
          peso: 6
      },
      {
          nome: "SISTEMAS OPERACIONAIS I",
          peso: 6
      },
      {
          nome: "PROJETO E AN�LISE DE ALGOR�TMOS II",
          peso: 7
      },
      {
          nome: "TECNOLOGIA DE CONSTRU��O DE SOFTWARE",
          peso: 7
      },
      {
          nome: "REDES DE COMPUTADORES II",
          peso: 7
      },
      {
          nome: "SISTEMAS OPERACIONAIS II",
          peso: 7
      },
      {
          nome: "INTELIG�NCIA ARTIFICIAL",
          peso: 7
      },
      {
          nome: "COMPILADORES",
          peso: 8
      },
      {
          nome: "CRIPTOGRAFIA APLICADA",
          peso: 8
      },
      {
          nome: "GER�NCIA DE PROJETOS DE SISTEMAS",
          peso: 8
      },
      {
          nome: "SISTEMAS DISTRIBU�DOS",
          peso: 8
      },
      {
          nome: "TEOLOGIA, CI�NCIAS EXATAS E TECNOL�GICAS",
          peso: 8
      },
      {
          nome: "TRABALHO DE CONCLUS�O DE CURSO I",
          peso: 9
      },
      {
          nome: "PROCESSAMENTO DIGITAL DE IMAGENS",
          peso: 9
      }, 
      {
          nome: "EST�GIO SUPERVISIONADO",
          peso: 9
      },
      {
          nome: "COMPUTA��O GR�FICA",
          peso: 9
      },
      {
          nome: "TRABALHO DE CONCLUS�O DE CURSO II",
          peso: 10
      },
      {
          nome: "SEGURAN�A DE SISTEMAS E APLICA��ES",
          peso: 10
      },
      {
          nome: "SISTEMAS MULTIM�DIA",
          peso: 10
      },
      {
          nome: "FILOSOFIA, TECNOLOGIA E �TICA",
          peso: 10
      },
      {
          nome: "ADMINISTRA��O DE REDES",
          peso: 10
      }
     ];  
   
    var file = new FileReader();
    file.onload = () => {
      var esconderDiv = document.getElementById("esconder-div");
      esconderDiv.style.display = 'none';
        var text = file.result;

        var count = 0;
    for(var i = 0; i < disciplinas.length; i++){
  
      //BUSCA O INDICE DA DISCIPLINA
      var inicio = text.indexOf(disciplinas[i].nome); 
      var novaNota = text.indexOf('size="2"', (inicio + 1));
      var novaSituacao = text.indexOf('size="1"', novaNota + 1);

      if(text.substr(novaSituacao + 9 ,2) === "AP" ){
        count++;
        //BUSCA O NOMA DA DISCIPLINA COMPLETO
        console.log("Disciplina: " + text.substr(inicio, disciplinas[i].nome.length));
        //VERIFICA SE ESTÁ CURSANDO
      if(text.substr(novaNota + 9 ,4) === "CURS"){
        console.log("Nota:       " + "CURSANDO");  
      }
      else{
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
        arrayEixos[i] = valorEixoDeFormacao;

      }
      }else{
        if(inicio === -1){
          console.log("Disciplina não cursada");
          continue;
        }else{
          var novoInicio = text.indexOf(disciplinas[i].nome, (inicio + disciplinas[i].nome.length + 1));
          novaNota = text.indexOf('size="2"', (novoInicio + 1));
          novaSituacao = text.indexOf('size="1"', novaNota + 1);
          while(novoInicio != -1){
  
            //REPROVADO NA DISCIPLINA
            if(text.substr(novaSituacao + 9 ,2) === "AP"){
              //console.log("Novo inicio AP: " + novoInicio);
              console.log("Disciplina: " + text.substr(novoInicio, disciplinas[i].nome.length));
              text.indexOf('size="2"', (inicio + 1));
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
              arrayEixos[i] = valorEixoDeFormacao;
              count++;
              break;
            }
            else
            {
              console.log("DISCIPLINA NÃO APROVADA");
              novoInicio = text.indexOf(disciplinas[i].nome, (novoInicio + disciplinas[i].nome.length + 1));
            };
          }
        }
      }

      //DEFINE NÍVEIS DE COMPETÊNCIA PARA OS EIXOS DE FORMAÇÃO
      
      if(aprendizadoContinuoEAutonomo.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelAprendizadoContinuoEAutonomo[0] = nivelAprendizadoContinuoEAutonomo[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelAprendizadoContinuoEAutonomo[1] = nivelAprendizadoContinuoEAutonomo[1] + disciplinas[i].peso;
      }

      if(cienciaTecnologiaEInovacao.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelCienciaTecnologiaEInovacao[0] = nivelCienciaTecnologiaEInovacao[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelCienciaTecnologiaEInovacao[1] = nivelCienciaTecnologiaEInovacao[1] + disciplinas[i].peso;
        console.log("VALOR DA NOTA E NOME DA DISCIPLINA: " + disciplinas[i].nome + " : " + arrayEixos[i]);
        console.log("NOTA ****************************" + nivelCienciaTecnologiaEInovacao[0]);
        console.log("PESO ****************************" + nivelCienciaTecnologiaEInovacao[1]);

      }

      if(desenvolvimentoDeProjetos.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelDesenvolvimentoDeProjetos[0] = nivelDesenvolvimentoDeProjetos[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelDesenvolvimentoDeProjetos[1] = nivelDesenvolvimentoDeProjetos[1] + disciplinas[i].peso;
      }

      if(desenvolvimentoDeSistemas.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelDesenvolvimentoDeSistemas[0] = nivelDesenvolvimentoDeSistemas[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelDesenvolvimentoDeSistemas[1] = nivelDesenvolvimentoDeSistemas[1] + disciplinas[i].peso;
      }

      if(gestaoDeInfraestrutura.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelGestaoDeInfraestrutura[0] = nivelGestaoDeInfraestrutura[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelGestaoDeInfraestrutura[1] = nivelGestaoDeInfraestrutura[1] + disciplinas[i].peso;
      }

      if(implantacaoDeSistemas.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelImplantacaoDeSistemas[0] = nivelImplantacaoDeSistemas[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelImplantacaoDeSistemas[1] = nivelImplantacaoDeSistemas[1] + disciplinas[i].peso;
      }
      
      if(resolucaoDeProblemas.includes(disciplinas[i].nome) && text.substr(novaSituacao + 9 ,2) === "AP"){
        nivelResolucaoDeProblemas[0] = nivelResolucaoDeProblemas[0] + (disciplinas[i].peso * arrayEixos[i]);
        nivelResolucaoDeProblemas[1] = nivelResolucaoDeProblemas[1] + disciplinas[i].peso;
      }  


  }
  console.log("TODOS VALORES: " + arrayEixos);

  vetorValoresDosEixosDeFormacao[0] =  nivelResolucaoDeProblemas[0] /  nivelResolucaoDeProblemas[1];
  vetorValoresDosEixosDeFormacao[1] =  nivelDesenvolvimentoDeSistemas[0] /  nivelDesenvolvimentoDeSistemas[1];
  vetorValoresDosEixosDeFormacao[2] =  nivelDesenvolvimentoDeProjetos[0] /  nivelDesenvolvimentoDeProjetos[1];
  vetorValoresDosEixosDeFormacao[3] =  nivelImplantacaoDeSistemas[0] /  nivelImplantacaoDeSistemas[1];
  vetorValoresDosEixosDeFormacao[4] =  nivelImplantacaoDeSistemas[0] /  nivelImplantacaoDeSistemas[1];
  vetorValoresDosEixosDeFormacao[5] =  nivelAprendizadoContinuoEAutonomo[0] /  nivelAprendizadoContinuoEAutonomo[1];
  vetorValoresDosEixosDeFormacao[6] =  nivelCienciaTecnologiaEInovacao[0] /  nivelCienciaTecnologiaEInovacao[1];


  console.log("Disciplinas cursadas: " + count);
  chamarGrafico(vetorValoresDosEixosDeFormacao);
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
"nivelDeCompetencia": vetorDeEixos[0].toFixed(2)
}, {
"eixoDeFormacao": "Desenvolvimento de Sistemas",
"nivelDeCompetencia": vetorDeEixos[1].toFixed(2)
}, {
"eixoDeFormacao": "Desenvolvimento de Projetos",
"nivelDeCompetencia": vetorDeEixos[2].toFixed(2)
}, {
"eixoDeFormacao": "Implantação de Sistemas",
"nivelDeCompetencia": vetorDeEixos[3].toFixed(2)
}, {
"eixoDeFormacao": "Gestão de Infraestrutura",
"nivelDeCompetencia": vetorDeEixos[4].toFixed(2)
}, {
"eixoDeFormacao": "Aprendizado Contínuo e Autônomo",
"nivelDeCompetencia": vetorDeEixos[5].toFixed(2)
}, {
"eixoDeFormacao": "Ciência, Tecnologia e Inovação",
"nivelDeCompetencia": vetorDeEixos[6].toFixed(2)
}];
series.data.setAll(data);
xAxis.data.setAll(data);

series.appear(1000);
chart.appear(1000, 100);

  })
}
