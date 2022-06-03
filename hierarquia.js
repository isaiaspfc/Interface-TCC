am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("hierarquia");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);


    // Create wrapper container
    var container = root.container.children.push(am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout
    }));


    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "eixoDeFormacao",
        nameField: "nameEixos",
        idField: "name",
        childDataField: "children",
        centerStrength: 0.5,
        tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "up"
        })
    }));
    //DEFINE TAMANHO DAS LABEL
    series.labels.template.setAll({
        fontSize: 16,
        fill: am5.color(0xFFFFFF),
        text: "{id}",
    });

    series.nodes.template.setAll({
        toggleKey: "none",
        cursorOverStyle: "default"
      });

    //DEFINE ESPESSURA DAS LINHAS
    series.links.template.setAll({
        strokeWidth: 3,
        strokeOpacity: 0.5
    });

    //CRIA TITULO PARA AS LEGENDAS
    var title = container.children.push(am5.Label.new(root, {
        text: "Eixos de Formação",
        fontSize: 20,
        fontWeight: 500,
        x: am5.percent(50),
        centerX: am5.percent(50)
    }));

    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    var maxLevels = 2;
    var maxNodes = 7;
    var maxValue = 100;

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

    //seta o nome dos eixos de formação
    var competenciasGeraisDosEixosDeFormacao = [
        "Competência geral: Resolver problemas que tenham solução algorítmica, considerando os limites da computação, o que inclui: identificar os problemas, selecionar ou criar algoritmos e implementar a solução.",
        "Competência geral: Desenvolver sistemas computacionais que atendam qualidade de processo e de produto, considerando princípios e boas práticas de engenharia de sistemas e engenharia de software.",
        "Competência geral: Desenvolver projetos de qualquer natureza em equipes multidisciplinares, compreendendo: aplicar conceitos,  métodos e ferramentas de gerenciamento de projetos, interagir com pessoas, realizar ações empreendedoras e adequar-se rapidamente às mudanças.",
        "Competência geral: Implantar sistemas computacionais, considerando: planejando e implementando o processo de implantação, provendo capacitação e garantindo consistência da implantação.",
        "Competência geral: Gerenciar infraestrutura computacional em sua plenitude, incluindo projeto, implantação e manutenção, assim definidos: projetar uma infraestrutura computacional, implantar a infraestrutura computacional e manter a infraestrutura computacional.",
        "Competência geral: Aprender contínua e autonomamente sobre métodos, instrumentos, tecnologias de infraestrutura e domínios de aplicação da computação.",
        "Competência geral: Desenvolver estudos avançados visando o desenvolvimento científico e tecnológico da computação e a criação de soluções computacionais inovadoras para problemas em qualquer domínio de conhecimento."
    ];
    var competencia1 = "Possuam sólida formação em Ciência da Computação e Matemática que os capacitem a construir aplicativos de propósito geral, ferramentas e infraestrutura de software de sistemas de computação e de sistemas embarcados, gerar conhecimento científico e inovação e que os incentivem a estender suas competências à medida que a área se desenvolva.";
    var competencia2 = "Possuam visão global e interdisciplinar de sistemas e entendam que esta visão transcende os detalhes de implementação dos vários componentes e os conhecimentos dos domínios de aplicação.";
    var competencia3 = "Conheçam a estrutura dos sistemas de computação e os processos envolvidos na sua construção e análise."
    var competencia4 = "Conheçam os fundamentos teóricos da área de Computação e como ele influenciam a prática profissional."
    var competencia5 = "Sejam capazes de agir de forma reflexiva na construção de sistemas de computação por entender que eles atingem direta ou indiretamente as pessoas e a sociedade."
    var competencia6 = "Sejam capazes de criar soluções, individualmente ou em equipe, para problemas complexos caracterizados por relações entre domínios de conhecimento e de aplicação."
    var competencia7 = "Reconheçam que é fundamental a inovação e a criatividade e entendam as perspectivas de negócios e oportunidades relevantes."


    //************************************************************************************ */


    // Get the modal
    var modalPerfilDoEgresso = document.getElementById("myModalPerfilDoEgresso");
    var modalEixoDeFormacao = document.getElementById("myModalEixoDeFormacao");

    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("btn-close")[0];
    series.circles.template.events.on("pointerover", function(ev) {
        ev.target.addEventListener('mouseover',() => {
            document.getElementById("competencia-geral").style.cursor = 'pointer';
          });
        document.getElementById("competencia-geral").addEventListener('mouseover',() => {
            ev.target.style.cursor = 'pointer';
          });

    });

    series.circles.template.events.on("click", function(ev) {
        //console.log("Clicked on a column", ev.target.dataItem.dataContext.nomeDaHierarquia);
        
        if(ev.target.dataItem.dataContext.nomeDaHierarquia == "Perfil do Egresso"){
            //console.log(ev.target);

            document.getElementById("title-modal-perfil-do-egresso").innerText = ev.target.dataItem.dataContext.eixoDeFormacao;
            document.getElementById("competencia1").innerText = ev.target.dataItem.dataContext.competencia1;
            document.getElementById("competencia2").innerText = ev.target.dataItem.dataContext.competencia2;
            document.getElementById("competencia3").innerText = ev.target.dataItem.dataContext.competencia3;
            document.getElementById("competencia4").innerText = ev.target.dataItem.dataContext.competencia4;
            document.getElementById("competencia5").innerText = ev.target.dataItem.dataContext.competencia5;
            document.getElementById("competencia6").innerText = ev.target.dataItem.dataContext.competencia6;
            document.getElementById("competencia7").innerText = ev.target.dataItem.dataContext.competencia7;
            modalPerfilDoEgresso.style.display = "block";
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modalPerfilDoEgresso) {
                    modalPerfilDoEgresso.style.display = "none";
                }
            }
        }else{
            document.getElementById("competencia-geral").innerText = ev.target.dataItem.dataContext.competenciaGeral;
            document.getElementById("title-modal-eixo-de-formacao").innerText = ev.target.dataItem.dataContext.eixoDeFormacao;
            modalEixoDeFormacao.style.display = "block";
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modalEixoDeFormacao) {
                    modalEixoDeFormacao.style.display = "none";
                }
            }
        }
      });
    



    //************************************************************************************ */

    series.nodes.template.set("tooltipText", "[bold]{nomeDaHierarquia}:[/] {eixoDeFormacao}");

    series.circles.template.setAll({
        shadowColor: am5.color(0x000000),
        shadowBlur: 5,
        shadowOffsetX: 4,
        shadowOffsetY: 4
    });

    var nomeDeixoDeFormacao = "Eixo de Formação";
    var data = {
        name: "Perfil do Egresso",
        nomeDaHierarquia: "Perfil do Egresso",
        eixoDeFormacao: "Competências gerais esperadas pelos alunos de Ciência da Computação",
        value: 700,
        competenciaGeral: competencia1 + competencia2 + competencia3 + competencia4 + competencia5 + competencia6 + competencia7,
        competencia1: competencia1,
        competencia2: competencia2,
        competencia3: competencia3,
        competencia4: competencia4,
        competencia5: competencia5,
        competencia6: competencia6,
        competencia7: competencia7,
        children: []
    }

    generateLevel(data, "", 0);

    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    function generateLevel(data, name, level) {
        for (var i = 0; i < maxNodes; i++) {
            var nodeName = "  Eixo de\nFormação"
            var child;
            if (level == 0) { //ESTÁ NA RAIZ
                child = {
                    eixoDeFormacao: nomeDosEixosDeFormacao[i],
                    competenciaGeral: competenciasGeraisDosEixosDeFormacao[i],
                    name: nodeName,
                    nomeDaHierarquia: "Eixo de Formação"
                }
                child.children = [];
                generateLevel(child, nodeName + i, level + 1)

            } else if (level == 1) { //NÃO ESTÁ NA RAIZ
                child = {
                    name: "folha",
                    value: 30
                }
            }
            data.children.push(child);
        }

        level++;
        return data;
    }
    // Make stuff animate on load
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