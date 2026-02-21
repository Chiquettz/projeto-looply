// ─── CONSTANTS ──────────────────────────────────────────────────────
const DIFFS = ["Fácil","Médio","Difícil","Difícil","Expert"];
const DCLS  = ["easy","med","hard","hard","expert"];
const LEVELS = [
  {n:"Semente",xp:0},{n:"Broto",xp:100},{n:"Muda",xp:250},{n:"Arbusto",xp:500},
  {n:"Árvore",xp:900},{n:"Floresta",xp:1400},{n:"Guardião",xp:2000}
];
const LV_EM = ["🌱","🌿","🌳","🦋","🌺","🦅","🌍"];
function getLv(xp){let l=0;for(let i=0;i<LEVELS.length;i++)if(xp>=LEVELS[i].xp)l=i;return l;}

// ─── TRAIL DATA ──────────────────────────────────────────────────────
const trails = [
{id:"reciclagem",tag:"Reciclagem",icon:"♻️",title:"Reciclagem Básica",
 desc:"Entenda o que pode ser reciclado, como separar resíduos e o impacto da reciclagem no planeta.",totalXP:250,
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
 desc:"Explore fontes de energia renovável, eficiência energética e o futuro sustentável.",totalXP:250,
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
 desc:"Mergulhe no mundo dos recursos hídricos, oceanos e preservação da água.",totalXP:250,
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
 desc:"Explore a diversidade de vida, extinção em massa e estratégias de conservação.",totalXP:250,
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
 desc:"Repense hábitos de consumo: pegada ecológica, fast fashion e desperdício alimentar.",totalXP:250,
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
 desc:"Do efeito estufa ao Acordo de Paris: compreenda e enfrente a crise climática.",totalXP:250,
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
];
