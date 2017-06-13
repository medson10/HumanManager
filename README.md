# HumanManager
Repositorio destinado ao desenvolvimento do projeto da aula de Laboratorio de Engenharia de Software

### Requirements

* TO BE DEFINED

### How to run it?
Clone the repo:
`$ git clone https://github.com/medson10/HumanManager.git`

Go to the repo directory
`$ cd HumanManager`

Type
`$ npm install && bower install`
And then
`$ npm run babel`

The server will be at:
`localhost:3000`

### API Endpoints

Routes:
'/funcionarios' GET/POST  
'/funcionarios/:id' GET/DELETE  

'/funcionarios/setores/:setor_nome' GET  
Content example:  
```
[
  {
  _id: "593dfd3134e842765140c4b8",
  nome: "Dio",
  email: "mifeoiadejfofamaeo",
  cargo: "Designer Grafico",
  telefone: "432411314109013",
  setor: "C",
  __v: 0
  },
  {
  _id: "593dfefe34e842765140c4b9",
  nome: "Uedineslei",
  email: "uedineslei@mail.com",
  cargo: "Designer Grafico",
  telefone: "432411314109013",
  setor: "C",
  __v: 0
  }
]
```

'/setores' GET  
Content example:  
```
[
  {
    id: 1,
    setor: "Vendas"
  },
  {
    id: 2,
    setor: "Recursos Humanos"
  },
  {
    id: 3,
    setor: "Financeiro"
  }
]

```
