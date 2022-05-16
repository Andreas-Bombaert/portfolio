import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'


function About() {
    return (
        <>
            <Container responsive>
                <Row >
                    <Col md={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="w-75 text-center mx-auto p-3 mt-2">
                            <a href="/media/moiplusoumcorpo.jpg">
                            <Image
                                src=
                                "/media/moiplusoumcorpo.jpg"
                                
                                width="384"
                                height="455"
                                rounded
                            />
                            </a>
                        </div>

                    </Col>
                    <Col md={8} style={{ paddingLeft: 100, paddingRight: 0 }}>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h1>ANDREAS BOMBAERT</h1>
                            Je me présente, Andréas Bombaert, 22 ans. <br></br>
                            Depuis l'adolescence j'ai toujours été passionné par tout ce qui touchait à la technologie
                            et c'est donc naturellement que je me suis dirigé vers des études d'informatique. <br></br>
                            Après une première en sciences informatiques à l'EPL je me rendu compte que (au moins) dans un premier temps j'avais besoin d'études plus pratiques et l'EPHEC se trouvait être parfait
                            pour cela.
                        </div>
                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2>Informations générales</h2>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Nationalité : Belge, né le 17 décembre 1999</ListGroup.Item>
                                <ListGroup.Item>Mail : abombaert@hotmail.com</ListGroup.Item>
                                <ListGroup.Item>Téléphone : +32 470 69 39 27</ListGroup.Item>
                                <ListGroup.Item>Adresse : Rue de la prévoyance, 5000 Namur</ListGroup.Item>
                            </ListGroup>
                        </div>


                    </Col>

                </Row>
                <Row>
                    <Col md={4}>
                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h3>Hobbies</h3>
                            Scoutisme, Organisation d’événements estudiantins, rédaction d’un
                            hebdomadaire estudiantin, vélo, jeux-vidéos, Musique (batterie)
                        </div>
                    </Col>
                    <Col md={8} style={{ paddingLeft: 100, paddingRight: 0 }}>
                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h3>Formation</h3>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <span class="text-white bg-dark">2019 - Aujourd'hui </span> <br></br>
                                    EPHEC Louvain-La-Neuve - Bachelier en Technologie de l'informatique
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <span class="text-white bg-dark">2011 - 2017 </span> <br></br>
                                    Sainte-Marie Namur - CESS
                                </ListGroup.Item>

                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>


        </>

    );
}

export default About;
