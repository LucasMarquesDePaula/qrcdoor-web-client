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
    name: "Pessoas",
    icon: "people",
    component: (resolve) => require(["@pages/cadastro/pessoa"], resolve)
  },
  {
    path: "/cadastro/funcao",
    name: "Funções",
    icon: "settings",
    component: (resolve) => require(["@pages/cadastro/funcao"], resolve)
  },
  {
    path: "/cadastro/cofre",
    name: "Cofres",
    icon: "lock",
    component: (resolve) => require(["@pages/cadastro/cofre"], resolve)
  },
  {
    path: "/cadastro/ambiente",
    name: "Ambientes",
    icon: "lock",
    component: (resolve) => require(["@pages/cadastro/ambiente"], resolve)
  }
]
