import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bonds from "./layout/Bonds/Bond.js"
import LatestNews from "./layout/LatestNews/News"
import Summary from "./layout/Summaary/Summary"
import Farm from "./layout/Farms/Farm"

function App() {
  return (
    <>
    <Container>
      <Summary />
      <Row>
        <Col xl={6} >
          <Farm />

        </Col>
        <Col xl={6} >
          <LatestNews />

          
        </Col>
      </Row>
      <Bonds />


    </Container>
    </>
  );
}

export default App;
