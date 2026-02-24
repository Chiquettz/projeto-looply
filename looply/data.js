// ─── CONSTANTS ──────────────────────────────────────────────────────
const DIFFS = ["Fácil","Médio","Difícil","Difícil","Expert"];
const DCLS  = ["easy","med","hard","hard","expert"];
const LEVELS = [
  {n:"Semente",xp:0}, {n:"Broto",xp:100}, {n:"Muda",xp:250}, {n:"Arbusto",xp:500},
  {n:"Árvore",xp:900}, {n:"Bosque",xp:1400}, {n:"Floresta",xp:2000},
  {n:"Oceano",xp:2800}, {n:"Terra",xp:3800}, {n:"Guardião do Planeta",xp:5000}
];
const LV_EM = ["🌱","🌿","🪴","🌾","🌳","🎋","🪵","🌊","🌎","🌟"];

function getLv(xp){let l=0;for(let i=0;i<LEVELS.length;i++)if(xp>=LEVELS[i].xp)l=i;return l;}

// ─── TRAIL DATA ──────────────────────────────────────────────────────
const trails = [
{id:"reciclagem",tag:"Reciclagem",icon:"♻️",title:"Reciclagem Básica",
 desc:"Entenda o que pode ser reciclado, como separar resíduos e o impacto da reciclagem no planeta.",totalXP:350,
  content: {
     text: "A reciclagem transforma resíduos em novos recursos, reduzindo a extração de matéria-prima e a poluição dos solos. Aprenda a separar corretamente o lixo e a importância de cada material para o meio ambiente.",
     video: "https://www.youtube.com/embed/ITur0JNJZos?si=xiVU7WvT42P77A9F"
   },
 activities:[
  {title:"O que é Reciclagem?",icon:"♻️",xp:40,desc:"Aprenda o conceito de reciclagem e sua importância para preservação ambiental.",
   questions:[
    {q:"O que é reciclagem?",opts:["Queimar lixo ao ar livre","Transformar materiais usados em novos produtos","Enterrar resíduos","Jogar no rio"],c:1},
    {q:"Qual símbolo representa reciclagem mundialmente?",opts:["Folha verde","Setas em triângulo (Möbius)","Gota d'água","Sol amarelo"],c:1},
    {q:"O processo de reciclagem beneficia o meio ambiente principalmente por:",opts:["Aumentar o consumo","Reduzir extração de recursos naturais e diminuir resíduos","Criar mais lixo","Poluir menos rios"],c:1}]},
  {title:"Coleta Seletiva",icon:"🗑️",xp:50,desc:"Descubra como funciona a coleta seletiva e o significado das cores das lixeiras.",
   questions:[
    {q:"Qual a cor da lixeira para vidros na coleta seletiva brasileira?",opts:["Azul","Amarelo","Verde","Vermelho"],c:2},
    {q:"A lixeira AMARELA da coleta seletiva é destinada para:",opts:["Papel e papelão","Plástico","Metal (latas, alumínio)","Vidro"],c:2},
    {q:"Na coleta seletiva, qual cor representa papel e papelão?",opts:["Verde","Amarelo","Azul","Vermelho"],c:2}]},
  {title:"Materiais Recicláveis",icon:"📦",xp:50,desc:"Saiba quais materiais podem ou não ser reciclados e como prepará-los corretamente.",
   questions:[
    {q:"Qual item NÃO pode ser reciclado na maioria dos sistemas de coleta seletiva?",opts:["Papelão","Garrafa PET","Caixa de pizza gordurosa","Lata de alumínio"],c:2},
    {q:"Para reciclar embalagens, o correto é:",opts:["Jogá-las sujas","Amassá-las e jogá-las","Lavar e secar antes de descartar","Deixar com restos de alimento"],c:2},
    {q:"Espelhos podem ser reciclados junto com vidro comum?",opts:["Sim, são idênticos","Não — têm composição diferente com revestimento metálico","Apenas se limpos","Depende do tamanho"],c:1}]},
  {title:"Impacto Ambiental",icon:"🌍",xp:60,desc:"Entenda como a reciclagem reduz poluição, economiza energia e preserva recursos naturais.",
   questions:[
    {q:"Reciclar 1 tonelada de papel salva aproximadamente quantas árvores adultas?",opts:["5","10","17","50"],c:2},
    {q:"Quanto tempo leva para uma garrafa PET se decompor na natureza?",opts:["10 anos","50 anos","400 anos","5.000 anos"],c:2},
    {q:"Reciclar alumínio economiza quanto de energia em relação à produção primária?",opts:["10%","40%","75%","Cerca de 95%"],c:3}]},
  {title:"Economia Circular",icon:"🔄",xp:50,desc:"Conheça o conceito de economia circular e como ele vai além da reciclagem tradicional.",
   questions:[
    {q:"A economia circular é um modelo que:",opts:["Maximiza produção e descarte","Elimina desperdícios mantendo materiais em uso o máximo possível","Prioriza o lucro sobre o ambiente","Usa apenas energia solar"],c:1},
    {q:"O conceito 'do berço ao berço' (Cradle to Cradle) significa:",opts:["Produtos descartáveis de uso único","Materiais que se tornam nutrientes para novos produtos ao fim da vida","Reciclagem básica de plásticos","Produção local apenas"],c:1},
    {q:"Qual dos R's NÃO faz parte da hierarquia de resíduos da economia circular?",opts:["Reduzir","Reutilizar","Reciclar","Rejeitar (gerar mais resíduos)"],c:3}]}
 ]},
{id:"energia",tag:"Energia Limpa",icon:"☀️",title:"Energia Limpa",
 desc:"Explore fontes de energia renovável, eficiência energética e o futuro sustentável.",totalXP:350,
 content: {
     text: "A transição energética para fontes renováveis é fundamental para reduzir a emissão de gases de efeito estufa. Conheça as principais fontes de energia limpa, seus benefícios e desafios para um futuro sustentável.",
     video: "https://www.youtube.com/embed/rs-kBJKCABA?si=L11vfmhN5BXhrxHd"
  },
 activities:[
  {title:"Fontes de Energia",icon:"⚡",xp:40,desc:"Conheça as diferentes fontes de energia e a diferença entre renováveis e não-renováveis.",
   questions:[
    {q:"Qual é uma fonte de energia RENOVÁVEL?",opts:["Carvão mineral","Energia solar","Petróleo","Gás natural"],c:1},
    {q:"Por que o petróleo é chamado de combustível fóssil?",opts:["Por ser encontrado em fósseis","Por ser formado de matéria orgânica de milhões de anos","Por ser sólido como rocha","Por poluir o ar"],c:1},
    {q:"Qual fonte de energia NÃO emite CO2 durante a geração de eletricidade?",opts:["Gás natural","Carvão","Energia eólica","Óleo combustível"],c:2}]},
  {title:"Energia Solar",icon:"☀️",xp:50,desc:"Como funcionam os painéis solares, sua eficiência e expansão no Brasil.",
   questions:[
    {q:"Como os painéis solares fotovoltaicos geram eletricidade?",opts:["Aquecendo vapor d'água","Convertendo luz solar em corrente elétrica via efeito fotovoltaico","Captando calor do solo","Criando vento artificial"],c:1},
    {q:"Qual é a eficiência típica dos painéis solares comerciais modernos?",opts:["5-10%","20-23%","50-60%","90-95%"],c:1},
    {q:"O efeito fotovoltaico foi explicado por Albert Einstein. Ele ocorre quando:",opts:["Fótons do sol movem elétrons no material semicondutor gerando corrente","O calor esquenta um fluido que move turbinas","A luz reflete em espelhos concentradores","O vento gira células especiais"],c:0}]},
  {title:"Energia Eólica",icon:"💨",xp:50,desc:"O poder do vento: turbinas eólicas e o potencial do Brasil no setor.",
   questions:[
    {q:"Qual região do Brasil possui maior potencial para energia eólica?",opts:["Sul","Norte","Nordeste","Centro-Oeste"],c:2},
    {q:"A energia eólica onshore representa quantos % da matriz elétrica brasileira?",opts:["Menos de 1%","Cerca de 12-14%","50%","30%"],c:1},
    {q:"O fator de capacidade de uma turbina eólica mede:",opts:["A altura máxima da turbina","A proporção do tempo que opera na potência máxima","O custo por MW instalado","O impacto visual no ambiente"],c:1}]},
  {title:"Eficiência Energética",icon:"💡",xp:60,desc:"Como reduzir o consumo de energia com mudanças de hábitos e tecnologia.",
   questions:[
    {q:"Lâmpadas LED consomem até quanto MENOS que incandescentes para o mesmo brilho?",opts:["20% menos","50% menos","75-80% menos","95% menos"],c:2},
    {q:"O 'Efeito Rebote' na eficiência energética afirma que:",opts:["Eficiência sempre reduz consumo","Melhorias de eficiência podem aumentar o consumo total por estimular mais uso","Energia renovável é sempre mais eficiente","Consumidores preferem produtos ineficientes"],c:1},
    {q:"Um 'edifício de energia zero' (Net Zero Energy Building) significa que:",opts:["O prédio não usa eletricidade","O prédio gera tanta energia quanto consome ao longo do ano","O prédio é 100% solar","O prédio foi construído sem energia fóssil"],c:1}]},
  {title:"Transição Energética",icon:"🌱",xp:50,desc:"O caminho do mundo para uma matriz energética 100% limpa.",
   questions:[
    {q:"O que é transição energética?",opts:["Mudar de fornecedor de energia","Substituição gradual de combustíveis fósseis por fontes renováveis","Novo tipo de petróleo sintético","Redução de consumo individual"],c:1},
    {q:"Qual país tem a maior capacidade instalada de energia solar do mundo?",opts:["EUA","Alemanha","China","Índia"],c:2},
    {q:"O Acordo de Paris para limitar aquecimento a 1,5°C exige emissões líquidas zero globais até:",opts:["2030","2050","2070","2100"],c:1}]}
 ]},
{id:"agua",tag:"Água",icon:"💧",title:"Água & Oceanos",
 desc:"Mergulhe no mundo dos recursos hídricos, oceanos e preservação da água.",totalXP:350,
  content: {
     text: "Embora a Terra seja o 'planeta azul', apenas uma fração mínima da água é doce e acessível para o consumo humano. A gestão sustentável dos recursos hídricos é crucial para a sobrevivência humana e a saúde dos ecossistemas. Descubra os desafios e soluções para proteger nossos rios, lagos e oceanos.",
     video: "https://www.youtube.com/embed/-UmOPQRpRIE?si=yATXUVp1pUcWT_p8"
  },
 activities:[
  {title:"Ciclo da Água",icon:"💧",xp:40,desc:"Como a água se move pela Terra e sua importância para todos os ecossistemas.",
   questions:[
    {q:"Qual percentual da água da Terra é potável e acessível para consumo humano?",opts:["50%","30%","10%","Menos de 1%"],c:3},
    {q:"Qual processo transforma água líquida em vapor na atmosfera?",opts:["Precipitação","Infiltração","Evapotranspiração","Condensação"],c:2},
    {q:"O aquífero Guarani, dos maiores reservatórios subterrâneos do mundo, abrange principalmente:",opts:["Amazônia brasileira","América Central","Centro-sul da América do Sul","Europa Central"],c:2}]},
  {title:"Poluição da Água",icon:"🚫",xp:50,desc:"Principais causas da poluição de rios, lagos e oceanos e suas consequências.",
   questions:[
    {q:"Qual é a principal fonte de poluição plástica que chega aos oceanos?",opts:["Embarcações e navios industriais","Descarte inadequado em cidades e via rios","Atividade vulcânica submarina","Tempestades e tsunamis"],c:1},
    {q:"O que é eutrofização de corpos d'água?",opts:["Seca total do ecossistema","Proliferação de algas por excesso de nutrientes que depleta o oxigênio","Aumento de temperatura da água","Invasão por espécies exóticas"],c:1},
    {q:"A principal fonte de contaminação oceânica por microplásticos são:",opts:["Apenas sacolas plásticas","Garrafas PET inteiras","Fragmentação de plásticos maiores e fibras de roupas sintéticas","Apenas resíduos industriais"],c:2}]},
  {title:"Economia de Água",icon:"🚿",xp:50,desc:"Práticas e tecnologias para reduzir o desperdício hídrico no dia a dia.",
   questions:[
    {q:"Um vazamento de 1 gota por segundo desperdiça aproximadamente quantos litros por mês?",opts:["5L","50L","1.400L","10.000L"],c:2},
    {q:"Qual setor é o maior consumidor de água doce no mundo?",opts:["Uso doméstico","Indústria","Agropecuária e irrigação (~70%)","Geração de energia"],c:2},
    {q:"A 'pegada hídrica' de 1kg de carne bovina é de aproximadamente:",opts:["200 litros","1.000 litros","15.000 litros","50.000 litros"],c:2}]},
  {title:"Biodiversidade Marinha",icon:"🐠",xp:60,desc:"A riqueza dos oceanos, impactos humanos e ameaças às espécies marinhas.",
   questions:[
    {q:"O branqueamento dos corais é causado principalmente por:",opts:["Excesso de plâncton","Aumento de temperatura e acidificação dos oceanos por CO2","Falta de luz solar","Presença de baleias e mamíferos"],c:1},
    {q:"Os oceanos absorvem aproximadamente que percentagem do CO2 emitido por humanos?",opts:["5%","25-30%","60%","90%"],c:1},
    {q:"A acidificação dos oceanos ameaça organismos calcários porque:",opts:["Aumenta o pH tornando-o básico demais","Diminui o pH dissolvendo carbonato de cálcio de suas estruturas","Reduz a salinidade","Aumenta a temperatura local"],c:1}]},
  {title:"Escassez Hídrica",icon:"🌊",xp:50,desc:"O desafio global da escassez de água e soluções tecnológicas e políticas.",
   questions:[
    {q:"Quantas pessoas vivem em condições de escassez hídrica severa pelo menos 1 mês por ano?",opts:["100 milhões","500 milhões","Mais de 4 bilhões","7 bilhões"],c:2},
    {q:"A dessalinização da água do mar é limitada principalmente por:",opts:["Sabor ruim da água produzida","Alto consumo energético e custo por m³","Impossibilidade técnica em larga escala","Falta de água do mar"],c:1},
    {q:"O termo 'Day Zero' ficou conhecido pela crise hídrica da Cidade do Cabo (2018). Refere-se ao:",opts:["Dia mundial da água","Dia em que torneiras seriam desligadas por esgotamento dos reservatórios","Festival ambiental anual","Meta de emissão zero de poluentes hídricos"],c:1}]}
 ]},
{id:"biodiversidade",tag:"Biodiversidade",icon:"🌿",title:"Biodiversidade",
 desc:"Explore a diversidade de vida, extinção em massa e estratégias de conservação.",totalXP:350,
   content: {
     text: "A perda acelerada de espécies ameaça a estabilidade dos ecossistemas e a sobrevivência humana. Descubra a importância da biodiversidade, as causas da extinção e como podemos proteger a vida em nosso planeta.",
     video: "https://www.youtube.com/embed/F7JYu1CUocY?si=5ZRq48gnGUBUS4T4"
  },
 activities:[
  {title:"O que é Biodiversidade?",icon:"🌿",xp:40,desc:"Entenda o conceito de biodiversidade e por que ela é o alicerce da vida na Terra.",
   questions:[
    {q:"O Brasil abriga qual percentagem estimada da biodiversidade global?",opts:["5%","10%","Mais de 20%","50%"],c:2},
    {q:"Biodiversidade engloba quais níveis de organização?",opts:["Apenas espécies animais","Apenas plantas e fungos","Genes, espécies e ecossistemas","Somente animais vertebrados"],c:2},
    {q:"Quantos países são reconhecidos como 'megadiversos' pela UNEP?",opts:["5","17","50","100"],c:1}]},
  {title:"Biomas Brasileiros",icon:"🌳",xp:50,desc:"Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal em profundidade.",
   questions:[
    {q:"Qual bioma brasileiro é considerado o maior repositório de biodiversidade do mundo?",opts:["Cerrado","Mata Atlântica","Caatinga","Amazônia"],c:3},
    {q:"O Cerrado é chamado de 'berço das águas'. Por quê?",opts:["Tem muitas chuvas","Origina 8 das 12 principais bacias hidrográficas do Brasil","É o bioma mais úmido","Tem o maior aquífero"],c:1},
    {q:"Que porcentagem da Mata Atlântica original ainda existe hoje?",opts:["70%","50%","30%","Apenas 12-15%"],c:3}]},
  {title:"Extinção de Espécies",icon:"🦁",xp:50,desc:"A 6ª extinção em massa: causas, velocidade e consequências para os ecossistemas.",
   questions:[
    {q:"A taxa atual de extinção é estimada quantas vezes maior que a taxa natural?",opts:["2-3x","10x","100x","100-1.000x ou mais"],c:3},
    {q:"Qual é a causa PRIMÁRIA de extinção de espécies na atualidade?",opts:["Caça ilegal","Poluição da água","Perda e fragmentação de habitat","Espécies invasoras"],c:2},
    {q:"O que é uma 'espécie-chave' (keystone species) e por que sua extinção é grave?",opts:["Espécie rara mas não essencial","Espécie cuja perda causa colapso desproporcional do ecossistema","Espécie muito abundante","Espécie protegida por lei"],c:1}]},
  {title:"Serviços Ecossistêmicos",icon:"🌺",xp:60,desc:"Como a natureza nos sustenta: serviços gratuitos e inestimáveis dos ecossistemas.",
   questions:[
    {q:"O valor econômico global estimado dos serviços ecossistêmicos por ano supera:",opts:["US$ 100 bilhões","US$ 1 trilhão","US$ 50 trilhões","US$ 125-145 trilhões"],c:3},
    {q:"O serviço de 'regulação climática' das florestas ocorre porque:",opts:["As árvores refletem o sol","As florestas sequestram carbono e regulam o ciclo hidrológico","As raízes esfriam o solo","As folhas liberam oxigênio apenas"],c:1},
    {q:"O declínio de polinizadores (abelhas, borboletas) ameaça diretamente:",opts:["Apenas flores ornamentais","Cerca de 75% das espécies de plantas cultivadas e a segurança alimentar global","Somente plantas silvestres","Apenas mel e cera"],c:1}]},
  {title:"Conservação",icon:"🦋",xp:50,desc:"Estratégias modernas de conservação: corredores ecológicos, legislação e ciência cidadã.",
   questions:[
    {q:"O que são 'corredores ecológicos' e por que são cruciais?",opts:["Estradas sem carros","Áreas que conectam fragmentos de habitats permitindo fluxo gênico e migração","Reservas isoladas","Zonas de plantio"],c:1},
    {q:"O Código Florestal Brasileiro exige que imóveis rurais na Amazônia mantenham que % de Reserva Legal?",opts:["20%","50%","80%","100%"],c:2},
    {q:"A 'biologia de populações mínimas viáveis' determina o tamanho mínimo de uma população para:",opts:["Ser caçada legalmente","Sobreviver a longo prazo com baixo risco de extinção","Ser considerada espécie","Receber proteção legal"],c:1}]}
 ]},
{id:"consumo",tag:"Consumo",icon:"🛍️",title:"Consumo Consciente",
 desc:"Repense hábitos de consumo: pegada ecológica, fast fashion e desperdício alimentar.",totalXP:350,
   content: {
     text: "Consumir consciente é entender que cada compra tem um impacto ambiental e social por trás. Aprenda a reduzir seu impacto e apoiar práticas mais sustentáveis.",
     video: "https://www.youtube.com/embed/lBuJHl-PTYc?si=MKx0tRELmirU1d_s"
  },
 activities:[
  {title:"Pegada Ecológica",icon:"👣",xp:40,desc:"O que é a pegada ecológica e como calcular o impacto real do seu estilo de vida.",
   questions:[
    {q:"O que mede a pegada ecológica?",opts:["Seus passos por dia","Área de terra/água necessária para sustentar seu estilo de vida","Poluição industrial","Emissões de fábricas"],c:1},
    {q:"Se todos vivessem como um americano médio, seriam necessários quantos planetas Terra?",opts:["1","1.5","3","5"],c:3},
    {q:"Qual ação individual tem o maior impacto comprovado na redução da pegada de carbono?",opts:["Usar sacola retornável","Desligar luzes","Não ter carro, voar menos e comer menos carne","Reciclar plástico"],c:2}]},
  {title:"Fast Fashion",icon:"👗",xp:50,desc:"A moda ultrarrápida é uma das indústrias mais poluentes. Descubra por quê.",
   questions:[
    {q:"A indústria da moda é responsável por qual percentagem das emissões globais de CO2?",opts:["1%","4%","Cerca de 8-10%","20%"],c:2},
    {q:"Quantas roupas novas são produzidas anualmente no mundo?",opts:["1 bilhão","10 bilhões","Mais de 100 bilhões","1 trilhão"],c:2},
    {q:"Uma calça jeans padrão consome durante sua produção:",opts:["50 litros de água","500 litros","7.500 litros","25.000 litros"],c:2}]},
  {title:"Desperdício Alimentar",icon:"🍽️",xp:50,desc:"1/3 dos alimentos produzidos são desperdiçados. Causas e como reduzir.",
   questions:[
    {q:"Que porcentagem da produção global de alimentos é desperdiçada anualmente?",opts:["5%","15%","Cerca de 33%","50%"],c:2},
    {q:"Em países desenvolvidos, a maior parte do desperdício alimentar ocorre em qual etapa?",opts:["Produção agrícola","Transporte e logística","Consumo doméstico e varejo","Processamento industrial"],c:2},
    {q:"O desperdício alimentar contribui com que percentagem das emissões globais de GEE?",opts:["1%","4-5%","8-10%","20%"],c:2}]},
  {title:"Selos e Greenwashing",icon:"🌱",xp:60,desc:"Como identificar produtos realmente sustentáveis e reconhecer marketing enganoso.",
   questions:[
    {q:"O que é 'greenwashing'?",opts:["Lavagem de roupas com menos água","Prática de marketing que faz parecer eco-friendly algo que não é","Pintura ecológica de paredes","Processo industrial de filtragem verde"],c:1},
    {q:"O selo FSC em produtos de madeira garante que:",opts:["A madeira é 100% reciclada","A floresta de origem é manejada de forma responsável social e ambientalmente","O produto é livre de carbono","Foi produzido localmente"],c:1},
    {q:"A 'Responsabilidade Estendida do Produtor' obriga quem a recolher e dar destino correto a embalagens pós-consumo?",opts:["O consumidor final","O governo municipal","Os fabricantes e importadores","As ONGs ambientais"],c:2}]},
  {title:"Economia Regenerativa",icon:"✨",xp:50,desc:"Além do sustentável: modelos de negócio que regeneram o ambiente.",
   questions:[
    {q:"Uma empresa 'carbon negative' (carbono negativo) significa que:",opts:["Não emite CO2","Emite menos que concorrentes","Remove mais CO2 da atmosfera do que emite","Usa apenas energia solar"],c:2},
    {q:"O modelo 'Produto como Serviço' incentiva sustentabilidade porque:",opts:["Vende mais produtos descartáveis","Fabricantes continuam donos e são incentivados a criar produtos duráveis e reparáveis","Reduz o preço ao consumidor","Gera mais empregos industriais"],c:1},
    {q:"A 'agricultura regenerativa' se diferencia da orgânica por buscar ativamente:",opts:["Apenas eliminar pesticidas","Restaurar a saúde do solo, aumentar biodiversidade e sequestrar carbono","Maior produtividade","Reduzir uso de água"],c:1}]}
 ]},
{id:"clima",tag:"Clima",icon:"🌡️",title:"Mudanças Climáticas",
 desc:"Do efeito estufa ao Acordo de Paris: compreenda e enfrente a crise climática.",totalXP:350,
   content: {
     text: "Descubra as evidências científicas, os impactos já observados e as soluções para diminuir e adaptar-se a um clima em transformação.",
     video: "https://www.youtube.com/embed/2_uCHB2bCbE?si=vvHTUu5upyWUN5ju"
  }, 
 activities:[
  {title:"Efeito Estufa",icon:"🌡️",xp:40,desc:"Como funciona o efeito estufa e quais gases aceleram o aquecimento global.",
   questions:[
    {q:"Qual é o principal gás de efeito estufa de origem humana?",opts:["Oxigênio","Nitrogênio","CO2","Hélio"],c:2},
    {q:"O metano (CH4) tem potencial de aquecimento global em 100 anos de:",opts:["2x o CO2","Igual ao CO2","Cerca de 28-80x o CO2","1.000x o CO2"],c:2},
    {q:"Qual setor é o maior emissor global de gases de efeito estufa?",opts:["Transporte","Energia (geração de eletricidade e calor)","Agropecuária","Resíduos sólidos"],c:1}]},
  {title:"Aquecimento Global",icon:"🔥",xp:50,desc:"Evidências científicas, impactos observados e projeções do aquecimento global.",
   questions:[
    {q:"A meta mais ambiciosa do Acordo de Paris é limitar o aquecimento a:",opts:["0,5°C","1°C","1,5°C","2°C"],c:2},
    {q:"Quanto a temperatura média global já subiu desde a era pré-industrial?",opts:["0,2°C","0,5°C","Cerca de 1,1-1,3°C","2°C"],c:2},
    {q:"O derretimento do permafrost ártico é especialmente preocupante porque:",opts:["Eleva o mar diretamente","Libera metano e CO2 acumulados por milênios criando retroalimentação positiva","Destrói a fauna ártica imediatamente","Interrompe correntes oceânicas"],c:1}]},
  {title:"Eventos Extremos",icon:"🌪️",xp:50,desc:"Como o aquecimento intensifica e torna mais frequentes eventos climáticos extremos.",
   questions:[
    {q:"O IPCC concluiu que eventos extremos como ondas de calor estão:",opts:["Sem relação com mudanças climáticas","Se tornando menos frequentes","Se tornando mais frequentes, intensos e duradouros","Inalterados em frequência"],c:2},
    {q:"O fenômeno El Niño intensificado pelo aquecimento global causa no Brasil:",opts:["Sem impacto significativo","Seca severa no Norte/Nordeste e chuvas intensas no Sul","Apenas seca no Nordeste","Apenas inundações no Sul"],c:1},
    {q:"O que são 'tipping points' (pontos de inflexão) climáticos?",opts:["Pontos onde a temperatura para de subir","Limiares onde mudanças se tornam autorreforçantes e potencialmente irreversíveis","Metas do Acordo de Paris","Pontos de máxima eficiência energética"],c:1}]},
  {title:"Soluções Climáticas",icon:"🌿",xp:60,desc:"Tecnologias, políticas e estratégias para mitigar e adaptar às mudanças climáticas.",
   questions:[
    {q:"O que é Captura e Armazenamento de Carbono (CCS)?",opts:["Taxar empresas poluidoras","Tecnologia que captura CO2 de fontes pontuais e o armazena geologicamente","Plantar florestas para absorver CO2","Usar apenas carros elétricos"],c:1},
    {q:"O mecanismo REDD+ incentiva países em desenvolvimento a:",opts:["Instalar energia solar em larga escala","Reduzir desmatamento e degradação florestal recebendo créditos de carbono","Desenvolver veículos elétricos","Construir usinas nucleares"],c:1},
    {q:"A 'precificação de carbono' funciona como instrumento econômico porque:",opts:["Proíbe emissões de CO2","Torna emissões financeiramente custosas incentivando tecnologias limpas","Subsidia combustíveis fósseis","Isenta empresas de metas climáticas"],c:1}]},
  {title:"Ação & Justiça Climática",icon:"✊",xp:50,desc:"Responsabilidades individuais, coletivas e o conceito de justiça climática.",
   questions:[
    {q:"O conceito de 'Justiça Climática' afirma que:",opts:["Todos os países emitem proporcionalmente igual","Países mais pobres e vulneráveis sofrem mais apesar de terem contribuído menos","A crise climática afeta todos igualmente","Apenas países ricos têm responsabilidade"],c:1},
    {q:"O 'desinvestimento fóssil' é quando fundos e universidades:",opts:["Reduzem consumo de combustível","Retiram investimentos financeiros de empresas de combustíveis fósseis","Proíbem perfuração de petróleo","Taxam combustíveis"],c:1},
    {q:"Segundo estudo da Oxfam, os 1% mais ricos do mundo emitem tanto CO2 quanto:",opts:["Os 10% mais pobres","Os 50% mais pobres da humanidade","Os países em desenvolvimento","Os países da Europa"],c:1}]}
 ]},
  {id:"ods",tag:"Ação Global",icon:"🎯",title:"Intervenção ODS", premium: true,
   desc:"Conheça os Objetivos de Desenvolvimento Sustentável da ONU e proponha soluções reais.",totalXP:400,
   content: {
     text: "Os Objetivos de Desenvolvimento Sustentável (ODS) são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima. Veja como a intervenção local gera impacto global.",
     video: "https://www.youtube.com/embed/xa63pRkV2dQ?si=wrf8EnbPP2dN4fGP"
   },
   activities:[
    {title:"A Agenda 2030",icon:"📚",xp:60,desc:"O que são os ODS e como foram criados.",
     questions:[
      {q:"Quantos são os Objetivos de Desenvolvimento Sustentável da ONU?",opts:["10","15","17","20"],c:2},
      {q:"Em que ano a Agenda 2030 foi adotada pelos países membros da ONU?",opts:["2000","2010","2015","2020"],c:2},
      {q:"Qual o lema central da Agenda 2030?",opts:["Lucro acima de tudo","Não deixar ninguém para trás","Crescimento industrial rápido","Tecnologia para todos"],c:1}]},
    {title:"Fome e Pobreza",icon:"🤝",xp:60,desc:"A interligação entre meio ambiente e vulnerabilidade social (ODS 1 e 2).",
     questions:[
      {q:"Qual a relação direta entre mudanças climáticas e pobreza?",opts:["Nenhuma","Populações vulneráveis perdem colheitas e casas com extremos climáticos","Ricos poluem menos","O clima afeta apenas a economia urbana"],c:1},
      {q:"A agricultura sustentável (ODS 2) visa:",opts:["Aumentar uso de agrotóxicos","Garantir segurança alimentar protegendo os ecossistemas","Desmatar para plantar mais","Focar apenas em exportação"],c:1},
      {q:"Uma proposta de intervenção local para o ODS 2 é:",opts:["Comprar importados","Apoiar agricultura familiar e criar hortas comunitárias","Desperdiçar comida","Doar plásticos"],c:1}]},
    {title:"Água e Saneamento",icon:"💧",xp:60,desc:"Garantir disponibilidade e manejo sustentável da água (ODS 6).",
     questions:[
      {q:"A falta de saneamento básico afeta principalmente:",opts:["A saúde pública e a qualidade dos rios locais","Apenas a estética urbana","O trânsito","A internet"],c:0},
      {q:"Uma proposta de intervenção efetiva para preservação hídrica urbana é:",opts:["Lavar calçadas com mangueira","Implementar sistemas de captação de água da chuva em condomínios","Canalizar rios","Aumentar tarifas para todos"],c:1},
      {q:"O desmatamento das matas ciliares impacta os rios causando:",opts:["Mais peixes","Assoreamento e seca das nascentes","Água mais limpa","Nenhum efeito"],c:1}]},
    {title:"Consumo Responsável",icon:"♻️",xp:60,desc:"Padrões de produção e consumo (ODS 12).",
     questions:[
      {q:"A meta principal do ODS 12 é:",opts:["Produzir mais lixo","Fazer mais com menos e melhor, desvinculando crescimento de degradação","Aumentar o fast fashion","Extrair mais minérios"],c:1},
      {q:"O que é a logística reversa?",opts:["Dirigir de ré","Obrigação de fabricantes recolherem e reciclarem seus produtos pós-consumo","Devolver compras online","Exportar lixo"],c:1},
      {q:"Uma intervenção prática contra o desperdício é:",opts:["Comprar sempre coisas novas","Promover feiras de troca, conserto de eletrônicos e compostagem","Jogar comida no lixo comum","Queimar resíduos"],c:1}]},
    {title:"Ação Climática Local",icon:"🌍",xp:60,desc:"Tomar medidas urgentes contra a mudança do clima (ODS 13).",
     questions:[
      {q:"Qual intervenção urbana ajuda a combater ilhas de calor?",opts:["Mais asfalto","Plantio massivo de árvores e criação de parques urbanos","Construir prédios espelhados","Remover praças"],c:1},
      {q:"Como escolas podem intervir no ODS 13?",opts:["Ignorando o tema","Implementando educação ambiental prática e painéis solares","Aumentando uso de papel","Usando ar condicionado no máximo"],c:1},
      {q:"O engajamento comunitário no ODS 13 envolve:",opts:["Esperar o governo agir","Pressionar líderes locais por políticas públicas de transição energética","Negar a ciência","Apenas reciclar plástico"],c:1}]}
   ]},
  {id:"circular",tag:"Economia",icon:"🔄",title:"Economia Circular", premium: true,
   desc:"Vá além da reciclagem: repense o design e o ciclo de vida absoluto dos produtos.",totalXP:400,
   content: {
     text: "A Economia Circular propõe um sistema onde os recursos são regenerados e o desperdício é zero. Descubra como o design inteligente e novos modelos de negócio podem transformar nossa relação com os recursos.",
     video: "https://www.youtube.com/embed/oHcoG0fX4PQ?si=YuqjBjGb2V44nJn0"
   },
   activities:[
    {title:"Do Berço ao Berço",icon:"🌱",xp:60,desc:"O modelo linear vs o modelo circular.",
     questions:[
      {q:"A economia linear é baseada no conceito de:",opts:["Reduzir e reutilizar","Extrair, produzir, consumir e descartar","Regenerar a natureza","Alugar produtos"],c:1},
      {q:"O design 'Cradle to Cradle' (Berço ao Berço) garante que:",opts:["O produto dure 1 ano","Os materiais voltem com segurança para a biosfera ou tecnosfera ao fim da vida","Tudo vá para o aterro","Os produtos sejam baratos"],c:1},
      {q:"Na economia circular, o 'lixo' é considerado:",opts:["Um problema sem solução","Um erro de design e um recurso desperdiçado","Inegociável","Combustível apenas"],c:1}]},
    {title:"Design Regenerativo",icon:"📐",xp:60,desc:"Criando produtos para não descartar.",
     questions:[
      {q:"O que é obsolescência programada?",opts:["Produtos feitos para durar para sempre","Estratégia onde produtos são desenhados para quebrar ou ficarem obsoletos rapidamente","Programa de reciclagem","Tecnologia sustentável"],c:1},
      {q:"Um produto desenhado circularmente deve ser, acima de tudo:",opts:["Feito de um material só","Fácil de desmontar, reparar e atualizar","Totalmente colado","Descartável"],c:1},
      {q:"Modularidade em eletrônicos permite:",opts:["Quebrem mais rápido","Trocar apenas a peça defeituosa em vez do aparelho todo","Gastar mais energia","Não poder consertar"],c:1}]},
    {title:"Produto como Serviço",icon:"🤝",xp:60,desc:"Alugar o uso ao invés de comprar o objeto.",
     questions:[
      {q:"Qual a vantagem do modelo 'Produto como Serviço' (ex: alugar ferramentas)?",opts:["Gasta-se mais dinheiro","Reduz a extração de matérias-primas e a ociosidade do produto","A ferramenta quebra mais rápido","Fabricante lucra menos"],c:1},
      {q:"Quando o fabricante mantém a posse do produto (aluguel), ele é incentivado a:",opts:["Fazer produtos frágeis","Fazer produtos duráveis, eficientes e recicláveis","Ignorar a manutenção","Usar materiais tóxicos"],c:1},
      {q:"Um exemplo clássico de 'Produto como Serviço' é:",opts:["Comprar uma caneta de plástico","Serviços de compartilhamento de bicicletas ou carros","Comprar legumes","Jogar fora roupas velhas"],c:1}]},
    {title:"Upcycling",icon:"✨",xp:60,desc:"Dar um propósito novo e de maior valor a um resíduo.",
     questions:[
      {q:"Qual a diferença entre Reciclagem e Upcycling?",opts:["Nenhuma","A reciclagem quebra o material; o upcycling reutiliza o material dando-lhe maior valor ou qualidade","Upcycling é queimar o lixo","Reciclagem é mais barata"],c:1},
      {q:"Transformar uma lona velha de caminhão em uma bolsa de grife é um exemplo de:",opts:["Downcycling","Logística reversa","Upcycling","Compostagem"],c:2},
      {q:"O Downcycling ocorre quando:",opts:["O material perde qualidade no processo de reciclagem (ex: papel reciclado)","O produto fica mais caro","Transforma-se em energia","Aumenta a durabilidade"],c:0}]},
    {title:"Modelos de Negócio",icon:"💼",xp:60,desc:"Como as empresas ganham dinheiro sendo circulares.",
     questions:[
      {q:"Plataformas de compartilhamento (ex: brechós online) promovem a economia circular porque:",opts:["Estimulam o consumo rápido","Aumentam a vida útil do produto passando-o para novos usuários","Criam lixo digital","Cobram taxas altas"],c:1},
      {q:"A 'simbiose industrial' é quando:",opts:["Indústrias competem","O resíduo de uma indústria se torna matéria-prima para outra","Fecham-se fábricas","Nega-se a tecnologia"],c:1},
      {q:"Marcas que oferecem garantia vitalícia e reparo grátis estão focadas em:",opts:["Fidelizar clientes reduzindo o descarte e o consumo de novos recursos","Perder dinheiro","Fazer greenwashing","Aumentar suas emissões"],c:0}]}
   ]},
  {id:"cidades",tag:"Cidades",icon:"🏙️",title:"Cidades Inteligentes", premium: true,
   desc:"Como o planejamento urbano e a tecnologia podem salvar os centros urbanos.",totalXP:400,
   content: {
     text: "Mais da metade da humanidade vive em cidades. Transformá-las em centros verdes, inteligentes e resilientes é vital para o futuro.",
     video: "https://www.youtube.com/embed/am2WOYu4iFc?si=IeAItOyY0HZsbD9i"
   },
   activities:[
    {title:"Mobilidade Urbana Limpa",icon:"🚲",xp:60,desc:"Repensando o trânsito e o espaço público.",
     questions:[
      {q:"Qual o modal de transporte que menos emite GEE por passageiro?",opts:["Carro particular","Avião","Bicicleta/Caminhada (Transporte Ativo)","Motocicleta"],c:2},
      {q:"O conceito de 'Cidade de 15 Minutos' propõe:",opts:["Trens muito rápidos","Que todas as necessidades diárias estejam a 15 minutos de caminhada ou bicicleta de casa","Dirigir 15 minutos até o trabalho","Cidades muito pequenas"],c:1},
      {q:"O que é o 'Traffic Evaporation' (Evaporação do Tráfego)?",opts:["Carros sumindo no calor","Quando ruas são fechadas para carros e o trânsito diminui, pois as pessoas mudam seus hábitos e rotas","Aumentar pistas para reduzir engarrafamento","Fumaça dos carros"],c:1}]},
    {title:"Infraestrutura Verde",icon:"🌿",xp:60,desc:"Natureza no topo dos prédios e nas calçadas.",
     questions:[
      {q:"Qual a principal função ambiental de um telhado verde?",opts:["Enfeite estético","Reduzir ilhas de calor, isolar o prédio e reter água da chuva","Atrair insetos nocivos","Aumentar o gasto de energia"],c:1},
      {q:"O que são 'Jardins de Chuva' (Biovaletas)?",opts:["Jardins regados à chuva","Depressões vegetadas projetadas para absorver e filtrar o escoamento da água das ruas, evitando enchentes","Jardins fechados em estufas","Hortas verticais"],c:1},
      {q:"O efeito 'Ilha de Calor Urbana' ocorre porque:",opts:["O sol bate mais forte","Asfalto e concreto absorvem muito calor e há pouca vegetação","Há muito vidro nas janelas","Tem muita gente respirando"],c:1}]},
    {title:"Construções Sustentáveis",icon:"🏢",xp:60,desc:"Arquitetura bioclimática e eficiência.",
     questions:[
      {q:"A 'Arquitetura Bioclimática' consiste em:",opts:["Projetar edifícios aproveitando o clima local (sol, vento) para conforto térmico com mínimo gasto de energia","Construir redomas de vidro","Usar apenas ar condicionado forte","Pintar os prédios de verde"],c:0},
      {q:"O que um edifício 'Net Zero' faz?",opts:["Não tem janelas","Gera tanta energia renovável quanto consome anualmente","Não consome energia nenhuma","Fica no subsolo"],c:1},
      {q:"O selo LEED em um edifício certifica que ele:",opts:["É o mais alto da cidade","Segue padrões rígidos de sustentabilidade, eficiência de água e energia","É feito só de madeira","Tem energia nuclear"],c:1}]},
    {title:"Gestão Inteligente",icon:"💡",xp:60,desc:"O uso de dados (IoT) para o meio ambiente.",
     questions:[
      {q:"Como sensores inteligentes nas lixeiras de uma cidade ajudam o meio ambiente?",opts:["Limpam o lixo sozinhos","Otimizam a rota dos caminhões de coleta, economizando combustível e reduzindo emissões","Multam os cidadãos","Avisam quando chove"],c:1},
      {q:"A iluminação pública inteligente (Smart Grids) funciona:",opts:["Ficando ligada de dia","Ajustando a intensidade do LED conforme o movimento nas ruas, poupando energia","Usando lâmpadas antigas incandescentes","Apenas com painéis solares gigantes"],c:1},
      {q:"Medidores de água inteligentes ajudam a:",opts:["Aumentar a pressão da água","Detectar vazamentos invisíveis em tempo real na rede da cidade","Mudar a cor da água","Cobrar tarifas em dobro"],c:1}]},
    {title:"Cidadania Ativa",icon:"🙋",xp:60,desc:"O papel do morador na transformação da cidade.",
     questions:[
      {q:"O urbanismo tático envolve:",opts:["Intervenções rápidas, de baixo custo, feitas pelos cidadãos para testar melhorias no espaço público (ex: pintar ruas para pedestres)","Construir pontes gigantes","Apenas reclamar na prefeitura","Esconder ruas no mapa"],c:0},
      {q:"Orçamentos participativos permitem que:",opts:["A prefeitura guarde o dinheiro","Moradores votem e decidam onde investir parte da verba pública (ex: em praças sustentáveis)","Bancos comandem as obras","Não se pague impostos"],c:1},
      {q:"Hortas urbanas comunitárias oferecem quais benefícios?",opts:["Nenhum","Apenas comida mais cara","Redução de ilhas de calor, segurança alimentar, coesão social e educação ambiental","Apenas estética"],c:2}]}
   ]},
];
