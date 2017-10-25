export default [
  {
    path: "/",
    name: "Index",
    icon: "home",
    component: (resolve) => require(["@pages/Index"], resolve)
  },
  {
    path: "/login",
    name: "Login",
    icon: "home",
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
  }
]
