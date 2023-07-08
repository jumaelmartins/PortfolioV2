import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Inicio from "./pages/Inicio";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

const App = () => {
  return (
    <>
      <Header/>
      <Inicio />
      <Sobre />
      <Projetos />
      <Footer/>
    </>
  );
};

export default App;
