import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Scoutisme() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Le Scoutisme</h2>
                            <p>Depuis mon plus jeune âge j'ai toujours fait partie de l'unité scoute de Salzinnes dans laquelle je suis resté jusqu'à aujourd'hui. La bas j'ai pu y découvrir les joies des camps dans la nature
                                mais également y apprendre énormément, aussi bien techniquement qu'humainement.
                                <br></br><br></br>

                                Après avoir été animé pendant 12 belles années j'ai pu passer de l'autre coté et durant 3 années j'ai pu animer des adolescents de 12 à 16 ans lors de réunions hebdomadaires, ainsi que pendant des hikes ou les grands camps d'été.
                                Ce fut une expérience plus qu'enrichissante où j'ai pu développer des compétences en animation, en organisation d'événements mais aussi en gestion de stock et de matériel.
                                <br></br><br></br>
                                En plus de ces capacités de gestions avec lesquelles je me suis familiarisé, j'y ai fait marcher ma créativité pour pouvoir créer des animations le plus innovantes possible pour faire passer le meilleur moment possible
                                aux animés.

                                <br></br><br></br>
                                On peut aussi dire que j'y ai développé un certain sens de la communication, là ou cela n'était absolument pas mon fort, car j'ai été amené à gérer le staff pendant une année et cela n'était pas toujours facile de coordonner toutes nos activités.
                                <Image
                                src=
                                "/media/scouts.jpg"
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

export default Scoutisme;
