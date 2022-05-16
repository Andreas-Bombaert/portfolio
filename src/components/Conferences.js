import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Conferences() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Conferences</h2>
                            <p>
                                Concernant les conférences et meetings, j'ai malheureusement perdu les preuves et je n'essaierai donc pas de faire valider des heures dessus, cependant je tenais tout de même à parler de l'install party du Louvain-Linux
                                ainsi que de la conférence sur l'entreprenariat à laquelle j'ai pu assister.
                                <br></br><br></br>
                                Tout d'abord, j'ai donc été à l'activité de l'install party du Louvain-linux lors de ma première année à l'Ephec, dans l'objectif de me faire assister pour l'installation d'un dual boot sur mon pc de l'époque.
                                N'ayant jamais fait ça moi-même je préférais donc être assisté par des gens habitués à cette pratique, je ne fut pas déçu car sans eux je n'aurais plus eu accès à mon pc!

                                <br></br><br></br>
                                Pour la conférence sur l'entreprenariat, j'y ai d'abord été parce que c'est un monde qui m'est totalement inconnu et qui aux premiers abords ne m'intéressait pas, mais pourquoi pas.
                                J'y ai appris beaucoup par l'intervention de 3 personnes qui nous ont fait part de leurs histoires, et j'ai fini par m'y retrouver et à me dire "pourquoi pas?", je garderai donc cette piste
                                pour plus tard si je sens que la vie en entreprise ne me convient pas et que j'ai besoin de voler de mes propres ailes.

                                <br></br><br></br>
                                

                                <br></br><br></br>

                            </p>


                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Conferences;
