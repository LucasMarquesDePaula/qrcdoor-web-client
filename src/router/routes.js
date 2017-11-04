export default [
  {
    path: "*",
    hidden: true,
    component: (resolve) => require(["@pages/Error404"], resolve)
  },
  {
    path: "/",
    hidden: true,
    component: (resolve) => require(["@pages/Index"], resolve)
  },
  {
    path: "/login",
    hidden: true,
    component: (resolve) => require(["@pages/Login"], resolve)
  },
  {
    path: "/cadastro/pessoa",
    name: "Cadastro de Pessoas",
    icon: "home",
    component: (resolve) => require(["@pages/cadastro/pessoa"], resolve)
  },
  {
    path: "/cadastro/funcao",
    name: "Cadastro de Funções",
    icon: "home",
    component: (resolve) => require(["@pages/cadastro/funcao"], resolve)
  },
  {
    path: "/cadastro/estrutura",
    name: "Cadastro de Estrutura",
    icon: "home",
    component: (resolve) => require(["@pages/cadastro/estrutura"], resolve)
  }
]
