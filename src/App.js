import './App.css';
import Nav from './components/Navbar';
import WeatherCard from './components/WeatherCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col} from 'react-bootstrap';


function App() {
  return (
  <Container>
    <Row>
      <Col>
        <Nav />
      </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    <Row className="justify-content-md-center">
      <Col>
        <WeatherCard/>
      </Col>
    </Row>
  </Container>
    
  );
}

export default App;
