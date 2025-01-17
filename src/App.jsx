import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import ContactUS from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <About 
      name={"John Doe"} 
      description={"I am a web Developer with over 20 years of experience. I build web apps and mobiles apps all with JavaScript tools and frameworks."}/>
      <Project />
      <ContactUS 
      boxName1={'Mail'}
      boxName2={'WA'}
      boxName3={'Link'}
      boxName4={'Num'}/>
      <Footer />
    </>
  );
}

export default App;
