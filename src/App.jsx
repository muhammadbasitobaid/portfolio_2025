// original layout:
import "src/index.css";
import Container from "src/components/shared/Container";
import Navbar from "src/components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col items-center">
  <Navbar/>
    <Container/>
    </div>
  );
};

export default App;
