
import './App.css';
import Card from './components/Card/Card';
import CardRev from './components/Card/CardRev';
import Experiance from './components/Comp-1-hand/Experiance';
import Header from './components/header/Header';
import HeroSection from './components/Herosection/HeroSection';
import ImageCard from './components/Image-card/ImageCard';
import Ourservice from './components/Our-service/Ourservice';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <div className='flex-flow'><Card/>
      <Card/>
      <Card/></div>
      
      <Ourservice/>
      <ImageCard/>
      <CardRev/>
      <Experiance/>
      <Subscribe/>
    </div>
  );
}

export default App;
