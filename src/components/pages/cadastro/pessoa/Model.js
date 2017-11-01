export default {
  idPessoa: 948,
  nome: "John Doe",
  situacao: true,
  documento: "020.591.016-27",
  fisicaJuridica: "F",
  foto: require("@images/avatar.png"),
  telefoneFixo: "3027-6612",
  telefoneCelular: "(41) 99822-6163",
  login: "john12",
  senha: "john12",
  administrador: false,
  funcoes: [
    {
      idFuncao: 1,
      descricao: "Morador",
      dataInicio: "01/01/2017",
      dataFim: ""
    },
    {
      idFuncao: 2,
      descricao: "Síndico",
      dataInicio: "26/08/2017",
      dataFim: "26/08/2018"
    }
  ],
  chaves: [
    {
      idChave: 1,
      descricao: "Chave Principal",
      tipo: "Smartphone",
      assinatura: "1055d3e698d289f2af8663725127bd4b"
    },
    {
      idChave: 2,
      descricao: "Chave Reserva",
      tipo: "Smartphone",
      assinatura: "d41d8cd98f00b204e9800998ocf8427e"
    }
  ],
  permissoesPessoa: [
    {
      idPermissao: 1,
      estrutura: {
        idEstrutura: 1,
        descricao: "Apartamento 213C"
      },
      dataInicio: "01/01/2017",
      dataFim: "01/01/2020"
    }
  ],
  permissoesFuncoes: [
    {
      idPermissao: 1,
      estrutura: {
        idEstrutura: 1,
        descricao: "Registro do Gás"
      },
      funcao: {
        idFuncao: 2,
        descricao: "Síndico"
      },
      dataInicio: "01/01/2017",
      dataFim: ""
    }
  ]
}
