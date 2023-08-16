import "./App.css";
import { Navbar } from "./Sections/Hero/Navbar";
import { Content } from "./Sections/Hero/Content";
import { Intro } from "./Sections/Intro";
import { Skill } from "./Sections/Skills";
import { Work } from "./Sections/Work";
import { Footer } from "./Sections/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Content />
      </div>
      <div>
        <Intro />
      </div>

      <div>
        <Skill />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
