import "./App.css";
import Nav from "./components/Navbar";
import WeatherCard from "./components/WeatherCards";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";

function App() {
	return (
		<Container fluid>
			<Row className='justify-content-md-center'>
				<Col md='auto'>
					<Nav />
				</Col>
			</Row>
			<br></br>
			<br></br>
			<br></br>
			<Row className='justify-content-md-center'>
				<Col md='auto'>
					<div>this is </div>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
