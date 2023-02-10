import './App.css';
import { SimpleSlider } from './components/SimpleSlider';
import {Header} from './components/Header';
import { BloodTable } from './components/BloodTable';
import { TextSlider } from './components/TextSlider';
import { Footer } from './components/Footer';
import {Cards} from './components/Cards'

function App() {
  return (
    <div className="App">
      <Header/>
      <SimpleSlider/>
      <NavigateSec/>
      <BloodTable/>
      <TextSlider/>
      <Footer/>
    </div>
  );
}

export default App;
