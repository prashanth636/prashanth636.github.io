import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';

const nextbtnStyle = {
  background: 'white',
  height: '100%',
  color: 'grey',
  backgroundColor: 'white',
  borderColor: 'white',
  fontSize: '2rem'
}
const footerStyle = {
  background: 'white',
  border: 'none',
  color: 'grey',
  fontSize: '.8rem'
}

class LogoMenuBar extends React.Component{
  render(){
    return(
      <div style={{background: 'white'}}>
      <div className='child' ><img src="" alt="Logo" /></div>
      <div className='child' style={{textAlign: 'right'}}><Button style={{background: 'white', borderColor: 'white'}}>
        <img src="https://img.icons8.com/ios/50/000000/menu--v1.png" alt='menu' />Menu
        </Button>
      </div>
      </div>
    );
  }
}

class CardPanelFoot extends React.Component{
  render(){
    return(
      <Col>
        <Card style={{border: 'none', boxShadow: 'none'}}>
          <Card.Body>
            <Card.Title style={{fontSize: '.8rem'}}>{this.props.name}</Card.Title>
            <Card.Text style={{fontSize: '1rem', color:'#00955e'}}><b>{"$"}{this.props.value}</b></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

class CardPanel extends React.Component{
  render(){
    return(
      <Card style={{width: '90%', margin: 'auto', marginTop:'12px'}}>
        <Card.Body>
          <Card.Title style={{fontSize: '1.5rem', textAlign:'left'}}>{this.props.name}</Card.Title>
          <Card.Text>
            <b><span style={{fontSize: '2rem', color:'#00955e'}}>{"$"}{this.props.value}</span></b>
            <p><b>Earned this month</b></p>
          </Card.Text>
          <Card.Footer style={footerStyle}>{this.props.feet}</Card.Footer>
        </Card.Body>
        <Row xs={3}>
          <CardPanelFoot name="COMMISSION" value="0" className='cpf'/>
          <CardPanelFoot name="TO CLIENT" value="0" className='cpf'/>
          <CardPanelFoot name="DONATION" value="0" className='cpf'/>
        </Row>
      </Card>
    );
  }
}

class Layout1 extends React.Component{
  render(){
    return(
      <div>
        <LogoMenuBar />
        <CardPanel name="Payout" value="0.00" feet="Next payout on Jun. 01"/>
      </div>
    );
  }
}

class Columns extends React.Component{
  render(){
    return(
          <Col style={{paddingTop:'15px',paddingBottom: '15px'}}>
            <Card style={{height:'220px', width: '200px', margin: 'auto'}}>
              <Card.Body>
                <Row>
                  <Col><Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                      {this.props.value}
                    </Card.Text>
                    <Card.Footer style={footerStyle}>{this.props.feet}</Card.Footer></Col>
                  <Col style={{padding: '0px', width: '15%'}}><Button style={nextbtnStyle}>&#8250;</Button></Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
    );
  }
}

class Layout2 extends React.Component{
  render(){
    return(
      <Container>
        <Row xs={2} sm={2} md={2}>
          <Columns name="Client Enrolled" value="0" feet="" />
          <Columns name="Client Reviews" value="4.3" feet="BASESD ON 3 MOVES" />
          <Columns name="Network Providers" value="7" feet="VIEW OR ADD" />
          <Columns name="Client Activity" value="21" feet="PENDING, BOOKING, ETC." />
        </Row>
      </Container>
    );
  }
}

class Layout extends React.Component{
  render(){
    return(
      <div style={{width:"480px",background:'#ededed'}}>
        <Layout1 />
        <Button style={{margin:'30px 12px 12px 12px', width: '85%', backgroundColor: '#00955e'}}>INVITE YOUR CLIENTS</Button>
        <Layout2 />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
