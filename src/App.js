
import './App.css';
import Nav  from './components/Nav';
import  Headers  from './components/Headers';
import  Row  from './components/Row';
import  Requests  from './components/Requests';




function App() {
  return (
    <div className="App">
      <Nav/>
      <Headers/>
      <Row title="NetflixOriginals" fetchData = {Requests.fetchNetflixOriginals} isLarge/> 
      <Row title="ComedyMovies" fetchData = {Requests.fetchComedyMovies}/> 
      <Row title="HorrorMovies" fetchData = {Requests.fetchHorrorMovies}/> 
      <Row title="RomanceMovies" fetchData = {Requests.fetchRomanceMovies}/> 
      <Row title="Documentaries" fetchData = {Requests.fetchDocumentaries}/> 
      <Row title="Trending" fetchData = {Requests.fetchTrending}/> 


    </div>
  );
}

export default App;
