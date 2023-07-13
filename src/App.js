import "./App.css";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="w-100">
      <NavBar />
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <AddTask />
        </Col>
      </Row>
      <TaskList />
    </Container>
  );
}

export default App;
