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

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
    layout: root.verticalLayout
  })
);

var series = container.children.push(
  am5hierarchy.ForceDirected.new(root, {
    downDepth: 1,
    initialDepth: 3,
    valueField: "value",
    categoryField: "eixoDeFormacao",
    idField: "name",
    childDataField: "children",
    linkWithField: "link",
    minRadius: 20,
    maxRadius: am5.percent(12)
  })
);

series.labels.template.setAll({
  text: "{id}",
  fontSize: 14
});


series.labels.template.set({
  text: "  Eixo de\nFormação",
  fontSize: 14
});

//seta o nome dos eixos de formação
var nomeDosEixosDeFormacao = [
  "Resolução de Problemas",
  "Desenvolvimento de Sistemas",
  "Desenvolvimento de Projetos",
  "Implantação de Sistemas",
  "Gestão de Infraestrutura",
  "Aprendizado Contínuo e Autônomo",
  "Ciência, Tecnologia e Inovação"

];
  //CRIA TITULO PARA AS LEGENDAS
  var title = container.children.push(am5.Label.new(root, {
    text: "Eixos de Formação",
    fontSize: 20,
    fontWeight: 500,
    x: am5.percent(50),
    centerX: am5.percent(50)
}));
  
series.nodes.template.set("tooltipText", "[bold]{nomeDaHierarquia}:[/] {eixoDeFormacao}");


series.circles.template.setAll({
  shadowColor: am5.color(0x000000),
  shadowBlur: 5,
  shadowOffsetX: 4,
  shadowOffsetY: 4
});

series.data.setAll([{
  "name": "Perfil do Egresso",
  "nomeDaHierarquia": "Perfil do Egresso",
  "eixoDeFormacao": "Competências gerais esperadas pelos alunos de Ciência da Computação",
  
  "children": [{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[0],
     children:[{
      "name": "CD1", "value": 5,
    },{
      "name": "CD2", "value": 5,
    },{
      "name": "CD3", "value": 5,
    },{
      "name": "CD4", "value": 5,
    },{
      "name": "CD5", "value": 5,
    },{
      "name": "CD6", "value": 5,
    },{
      "name": "CD7", "value": 5,
    }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
     "nomeDaHierarquia": "Eixo de Formação",
     "eixoDeFormacao": nomeDosEixosDeFormacao[1],
     children:[{
      "name": "CD1", "value": 5,
    },{
      "name": "CD2", "value": 5,
    },{
      "name": "CD3", "value": 5,
    },{
      "name": "CD4", "value": 5,
    },{
      "name": "CD5", "value": 5,
    },{
      "name": "CD6", "value": 5,
    },{
      "name": "CD7", "value": 5,
    }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[2],
    children:[{
     "name": "CD1", "value": 5,
   },{
     "name": "CD2", "value": 5,
   },{
     "name": "CD3", "value": 5,
   },{
     "name": "CD4", "value": 5,
   },{
     "name": "CD5", "value": 5,
   },{
     "name": "CD6", "value": 5,
   },{
     "name": "CD7", "value": 5,
   }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[3],
    children:[{
     "name": "CD1", "value": 5,
   },{
     "name": "CD2", "value": 5,
   },{
     "name": "CD3", "value": 5,
   },{
     "name": "CD4", "value": 5,
   },{
     "name": "CD5", "value": 5,
   },{
     "name": "CD6", "value": 5,
   },{
     "name": "CD7", "value": 5,
   }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[4],
    children:[{
     "name": "CD1", "value": 5,
   },{
     "name": "CD2", "value": 5,
   },{
     "name": "CD3", "value": 5,
   },{
     "name": "CD4", "value": 5,
   },{
     "name": "CD5", "value": 5,
   },{
     "name": "CD6", "value": 5,
   },{
     "name": "CD7", "value": 5,
   }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[5],
    children:[{
     "name": "CD1", "value": 5,
   },{
     "name": "CD2", "value": 5,
   },{
     "name": "CD3", "value": 5,
   },{
     "name": "CD4", "value": 5,
   },{
     "name": "CD5", "value": 5,
   },{
     "name": "CD6", "value": 5,
   },{
     "name": "CD7", "value": 5,
   }]
  },{
    "name": " Eixo de\nFormação", "value": 30,
    "nomeDaHierarquia": "Eixo de Formação",
    "eixoDeFormacao": nomeDosEixosDeFormacao[6],
    children:[{
     "name": "CD1", "value": 5,
   },{
     "name": "CD2", "value": 5,
   },{
     "name": "CD3", "value": 5,
   },{
     "name": "CD4", "value": 5,
   },{
     "name": "CD5", "value": 5,
   },{
     "name": "CD6", "value": 5,
   },{
     "name": "CD7", "value": 5,
   }]
  }]
}]);
series.set("selectedDataItem", series.dataItems[0]);

series.appear(1000, 100);
    //CRIA AS LEGENDAS PARA GRÁFICO
    var legend = container.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        layout: root.horizontalLayout,
        layout: am5.GridLayout.new(root, {
            maxColumns: 4,
            fixedWidthGrid: true
        })
    }));

    //DEIXA A LEGENDA REDONDA
    legend.markerRectangles.template.setAll({
        cornerRadiusTL: 10,
        cornerRadiusTR: 10,
        cornerRadiusBL: 10,
        cornerRadiusBR: 10,
    });

    legend.labels.template.setAll({
        fontSize: 14,
        fontWeight: "500"
    });

    legend.valueLabels.template.setAll({
        fontSize: 0,
        fontWeight: "0"
    });

    legend.markers.template.setAll({
        width: 24,
        height: 24
    });

    legend.data.setAll(series.dataItems[0].get("children"))

    }); // end am5.ready()