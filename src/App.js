import "./App.css";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Row } from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documnetaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
