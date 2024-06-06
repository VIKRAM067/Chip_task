import ChipAutoComplete from './ChipAutoComplete';
import Hero from './Hero';
import './App.css';
import { Content } from './Content';

function App() {
  return (
    <div className=" justify-center items-center h-screen bg-white-100 maxWidth">
      <Hero/>

      <div>
        <ChipAutoComplete />
      </div>
      <Content/>
      <content/>
    </div>
  );
}

export default App;
