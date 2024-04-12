type Routes = {
  name: string;
  path: string;
}

export default () => {
  const routes: Routes[] = [
    { name: "Home", path: "/" },
    { name: "Videos", path: "/videos" },
    { name: "Favoritos", path: "/videos/favoritos" },
    { name: "Adicionar Videos", path: "/videos/adicionar" },
  ];
  return routes;
};