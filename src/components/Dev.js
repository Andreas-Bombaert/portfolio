import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Dev() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Développement</h2>
                            <p>
                                Pendant mes 3 années j'ai eu l'occasion de travailler sur divers projets, mais particulièrement cette année ou j'ai pu avoir plusieurs petits projets à coté des études.
                                N'ayant pas particulièrement de besoins personnels en sites web ou applications il ne m'était jusque là pas encore arrivé d'avoir besoin d'en faire, mais cette année fut différente.

                                <br></br><br></br>
                                En effet, j'ai pu mettre mes connaissances acquises en Python pour créer un petit bot twitter pour un de mes amis, l'utilité de ce bot peut paraître futile mais il m'a permis de me raffraichir la mémoire
                                mais également d'en apprendre plus sur le fonctionnement des bots twitter ou encore des API's de grosses boites telles que Twitter, Google, etc...


                                <br></br> <br></br>
                                D'autres activités liées au développement que j'ai pu pratiquer cette année sont la maintenance et la création de sites web, en effet comme dit dans ma présentation de mon bénévolat,
                                j'ai été responsable de la maintenance du site du Cercle Industriel, ainsi que de la création du site web de la Caracole Namuroise, une association d'étudiants qui souhaitait une facade pour ses membres.
                                (J'ai d'ailleurs été aussi responsable de la parution d'une revue semestrielle pour cette dite Caracole).

                                <br></br><br></br>

                                J'ai par ailleurs développé et hébergé ce portfolio (qui je l'admet, reste simple mais concis) sur un VPS comme nous avions du le faire en Admin II, mais cette fois-ci en utilisant mes connaissances en React.

                                <br></br><br></br>
                                Ces différents points m'ont permis de me raffraichir les esprits concernant le développement de sites web vitrine, mais également de prendre en main de nouveaux outils relativement pratiques
                                comme WordPress ou les interface d'OVH.
                                <a href="/media/bot.jpg"><Image
                                    src=
                                    "/media/bot.jpg"
                                    className="w-50 text-left mx-auto p-3 mt-2"
                                    rounded
                                    
                                /></a>
                                <a href="/media/caracole.jpg">
                                <Image
                                    src=
                                    "/media/caracole.jpg"
                                    className="w-50 text-right mx-auto p-3 mt-2"
                                    rounded
                                />
                                </a>
                                

                            </p>


                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Dev;
