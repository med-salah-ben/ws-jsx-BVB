import { Navbar,Container,Nav,Dropdown , Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
  <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    <div style={{display:"flex"}}> 
      <div className='mainVideo'>
      <iframe id="bvb" width="745" height="444" src="https://www.youtube.com/embed/iPky4WHt9FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic">
    Comments 
 </Dropdown.Toggle>

  <Dropdown.Menu className="comments" >
    <Dropdown.Item className="comment">Aziz :  Ballspielverein Borussia 09 e. V. Dortmund, commonly. </Dropdown.Item>
    <Dropdown.Item className="comment">Ameni : BVB means Ballspiel-Verein Borussia (Borussia club for ball games). The correct club.</Dropdown.Item>
    <Dropdown.Item className="comment">Malek : The Bundesliga, sometimes referred to as the "Fußball-Bundesliga" is the top .</Dropdown.Item>
    <Dropdown.Item className="comment">Mustafa : Find the latest Borussia Dortmund news, transfers, .</Dropdown.Item> 
  </Dropdown.Menu>
</Dropdown>
      </div>
      <div style={{backgroundColor:"black", width:"30%",height:"100vh"}}>
      <Card style={{ width: '15rem' , height:"13rem" ,margin:"10px 26%"}}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png" />
  <Card.Body className="body">
    <Card.Title className="title">BvB</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height:"13rem" ,margin:"30px 26%"}}>
  <Card.Img variant="top" src="https://pbs.twimg.com/media/EourUKzXEAAQaD1.jpg" />
  <Card.Body className="body">
    <Card.Title className="title">Team BvB</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' , height:"13rem" ,margin:"30px 26%"}}>
  <Card.Img variant="top" src="https://pbs.twimg.com/media/DZ9RQUhVoAApDXU.jpg" />
  <Card.Body className="body">
    <Card.Title className="title">Next Game</Card.Title>
  </Card.Body>
</Card>
      </div>
    </div>
    </div>
  );
}

export default App;
