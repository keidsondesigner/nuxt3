interface Routes {
  nome: string;
  path: string;
}

export default () => {
  const routes: Routes[] = [
    { nome: "Home", path: "/" },
    { nome: "Videos", path: "/videos" },
    { nome: "Adicionar Videos", path: "/videos/adicionar" },
    { nome: "Favoritos", path: "/videos/favoritos" },
    { nome: "Clientes", path: "/clientes" },
  ];
  return routes;
};