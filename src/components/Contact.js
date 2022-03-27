import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Contact() {
  return (
    <>
      <Container responsive>
        <Row>
          <Col>

            <div className="w-75 text-left mx-auto p-3 mt-2">
              <h2>Contactez moi</h2>
              Vous pouvez me contacter via les différents canaux suivants. <br></br>
              Je répond habituellement rapidement donc si vous restez sans réponse n'hésitez pas à réessayer.

              <ListGroup variant="flush">
                <ListGroup.Item><Icon.Telephone size={25} />    Téléphone: +32 470 69 39 27</ListGroup.Item>
                <ListGroup.Item><Icon.Send size={25} />    Mail étudiant: a.bombaert@students.ephec.be</ListGroup.Item>
                <ListGroup.Item><Icon.Send size={25} />    Mail personnel: abombaert@hotmail.com</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>


    </>
  );
}

export default Contact;
