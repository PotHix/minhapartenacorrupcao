var queries = [{
  id: 0,
  text: "Minha parte na corrupção?",
  subhead: "Será que a corrupção já está conosco também? Será que a moral já foi corrompida nos cidadãos que hoje lutam contra ela? Agora é hora de testar e refletir se temos uma parte da moral corrompida também",
  answers: [{
    text: "Vamos ver!",
    target: 1
  }]
}, {
  id: 1,
  text: "Você tem sinal de TV fechada ilegal na sua casa?",
  subhead: 'Possíveis desculpas: "É só televisão, eu divido com o meu vizinho", "Todo mundo faz isso onde eu moro"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 3
  }]
}, {
  id: 2,
  text: 'Você também já foi corrompido. :(',
  subhead: 'Mas não precisa ser assim para sempre! O importante é pensar sobre isso para que seja possível responder "Não". Volte e tente com o "Não", primeiro no teste e depois na prática.',
  answers: []
}, {
  id: 3,
  text: "Você possui uma empresa e cadastra ela com uma faixa de impostos diferente da que você se enquadra para pagar menos impostos?",
  subhead: 'Possíveis desculpas: "Com esses impostos não dá, muito caro."',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 4
  }]
}, {
  id: 4,
  text: "Você vê que uma máquina de venda de produtos está com preço equivocado e ao invés de reportar compra todos os produtos com preço errado?",
  subhead: 'Possíveis desculpas: "Ah, não é problema meu, vou aproveitar"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 5
  }]
}, {
  id: 5,
  text: "Você vê que um caminhão de uma transportadora sofre um acidente e parte da carga fica exposta. Você pega parte dessa carga?",
  subhead: 'Possíveis desculpas: "Se deixar lá vai estragar de qualquer jeito."',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 6
  }]
}, {
  id: 6,
  text: "Você recebe um abaixo assinado para algo benéfico para os moradores do seu bairro e pede para pessoas de vários outros bairros e cidades assinarem com seu endereço?",
  subhead: 'Possíveis desculpas: "Mas é para uma boa causa"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 7
  }]
}, {
  id: 7,
  text: "Você compra/baixa jogos piratas?",
  subhead: 'Possíveis desculpas: "Os jogos estão muito caros", "Não ligo para o online, quero é jogar vários jogos!"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 8
  }]
}, {
  id: 8,
  text: "Você baixa música pirata da internet e não remunera o músico de outra forma?",
  subhead: 'Possíveis desculpas: "Esses caras já estão ricos mesmo", "Eles ganham com show. (mas nunca vai no show...)"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 9
  }]
}, {
  id: 9,
  text: "Você baixa livros piratas da internet e não remunera o escritor de outra forma?",
  subhead: 'Possíveis desculpas: "Eu leio muitos livros, ia gastar muito dinheiro"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 10
  }]
}, {
  id: 10,
  text: "Você mora em um estado e registra seu veículo em outro porque o valor dos impostos é mais barato?",
  subhead: 'Possíveis desculpas: "Aqui não vou conseguir passar na fiscalização"',
  answers: [{
    text: "Sim",
    target: 2
  }, {
    text: "Não",
    target: 11
  }]
}, {
  id: 11,
  text: "Parabéns, você não tem parte na corrupção!",
  subhead: 'Responder "Não" a todas essas perguntas não é fácil, mas é importante sempre olharmos para o que é certo e começar a luta de dentro para fora! Se você teve alguma resposta "Sim", você já tem alguns próximos passos para ajudar na luta contra a corrupção.',
  answers: []
}];


function QueryViewModel() {
  var self = this;

  self.querySet    = ko.observable();
  self.currentStep = ko.observable();
  self.queryData   = ko.observable();
  self.navHistory  = ko.observableArray();

  // Operations
  self.goToTarget = function(obj) {
    self.navHistory.push(self.currentStep())
    self.currentStep(obj.target);
    self.queryData(self.querySet()[obj.target]);
  }

  self.startOver = function() {
    self.goToTarget({target: 0});
  }

  self.stepBack=function() {
    var lastStep = self.navHistory().length > 1 ? self.navHistory.pop() : 0;
    self.currentStep(lastStep);
    self.queryData(self.querySet()[lastStep]);
  }

  self.querySet(queries);
  self.goToTarget({target: 0});
}

ko.applyBindings(new QueryViewModel());
