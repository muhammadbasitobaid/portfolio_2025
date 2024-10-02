import "src/index.css";
import Container from "src/components/shared/Container";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer"

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar/>
      <Container/>
      <Footer/>
    </div>
  );
};

export default App;
