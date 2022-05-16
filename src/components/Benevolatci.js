import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Benevolatci() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Implication dans le cercle-industriel</h2>
                            <p>
                                Avant d'aller à l'Ephec j'avais commencé des études de Sciences Informatiques à l'EPL, cette année là je m'étais investi un peu dans le Cercle Industriel. 
                                Après une année et demi de covid, mon moral étant relativement bas je me suis investi dans mon cercle où j'ai pu aider à l'organisation d'événements de plusieurs centaines de personnes et participer à la vie
                                active d'une ASBL. J'ai également co-rédigé un journal étudiant hebdomadaire distribué physiquement et sur les réseaux sociaux.
                                <br></br><br></br>
                                De cette année d'investissement je retiens un gain en responsabilité, le fait de devoir gérer des budgets, des ressources et de devoir (et pouvoir!) compter sur les autres
                                fut très enrichissant. J'ai aussi pu observer comment fonctionne une ASBL, quelque soit sa taille, et les responsabilités auquelles les membres de celle-ci sont tenus.
                                <br></br><br></br>
                                Durant cette année j'ai également effectué la maintenance du site en rajoutant de nouveaux éléments chaque semaine, ainsi qu'en m'assurant que tout se passait bien avec l'hébergeur.
                                J'y ai d'ailleurs pu appliquer quelques notions des cours d'administration réseaux et systèmes.
                                <br></br><br></br>
                                Les preuves de mon implication se trouvent sur le <a href="https://www.cercle-industriel.be">site du cercle</a>, et ci-dessous.
                                <Image
                                    src=
                                    "/media/halloween_ci.jpg"
                                    className="w-100 text-left mx-auto p-3 mt-2"
                                    rounded
                                />
                            </p>


                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Benevolatci;
