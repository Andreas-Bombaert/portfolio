import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function SemaineInter() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Semaine Internationale</h2>
                            <p>
                                Pendant la deuxième année de cursus à l'EPHEC est organisée la fameuse semaine internationale. Notre 2ème année ayant malheureusement été frappée par le covid, 
                                je n'ai pas pu partir comme prévu à Eindhoven ou nous devions travailler sur des robots, mais par contre j'ai pu participer à une semaine en ligne avec l'université de Cardiff.

                                <br></br><br></br>

                                Au début j'étais perplexe quant à l'organisation de cette semaine en ligne mais je fut surpris de découvrir tout de même des facettes de la culture du Pays de Galles, que ce soit la langue ou leurs traditions.
                                J'ai également pu rencontrer des gens de l'autre bout du monde (d'Inde par exemple), et par leur biais découvrir leur culture.

                                Cet échange m'a donc malgré tout permis de me rendre compte des différences et des points communs dans le milieu de l'IT parmis nos différents pays et je suis reconnaissant d'avoir pu vivre ça malgré la crise.
                                <br></br> <br></br>
                                Ce projet m'a évidemment permis de pratiquer mon anglais parlé pendant toute une semaine, mais aussi de travailler en groupe avec des esprits créatifs totalement différents de ceux que je cotoie habituellement, me permettant donc d'aborder 
                                le milieu actif de l'IT avec une vue plus globale.

                                <Image
                                    src=
                                    "/media/cardiff.jpg"
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

export default SemaineInter;
