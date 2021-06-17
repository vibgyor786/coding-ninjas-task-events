import Navbar from "./Navbar";
import Tag from "./Tag";
import Poster from './Poster'
import Footer from  './footer'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Poster/>
      <Tag />
      <Footer></Footer>
    </div>
  );
}

export default App;
