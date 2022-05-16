import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Hardware() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Hardware</h2>
                            <p>
                                Depuis tout jeune j'ai comme passion tout ce qui touche à l'informatique, et dès que mon jeune moi fut en possession de l'argent nécessaire pour acheter un nouveau pc, je le fit
                                mais en gardant la solution économique qui consiste à acheter les pièces détachées et à le monter soi-même. Le soucis c'est que je n'ai pu le faire qu'une seule fois avant l'année dernière ou j'ai pu
                                monter le pc d'un ami à moi et donc pratiquer à nouveau la manipulation de composants d'ordinateur.

                                <br></br><br></br>
                                Cette expérience fut renouvelée avec l'achat de mon propre ordinateur, j'ai donc acquis des compétences en montage pc après avoir fais quelques erreurs (réglées après quelques heures de recherche à chaque fois).
                                Le fait de le faire deux fois en quelques semaines, mais également d'avoir recherché les meilleures compatibilités entre composants pour avoir la configuration la plus optimale me donna les connaissances pour ensuite conseiller
                                d'autres amis dans la construction de leur propre pc.
                               
                                <br></br> <br></br>
                                Ces différents montages m'ont certes donné la confiance de toucher au hardware sans angoisser de casser quelque chose, mais ils m'ont surtout permis d'avoir plus confiance en ma capacité à trouver le problème
                                quand il vient d'un problème physique du pc.
                                <br></br><br></br>
                                
                                
                                <a href="/media/montage_pc.png"><Image
                                    src=
                                    "/media/montage_pc.png"
                                    className="w-10 text-left mx-auto p-3 mt-2"
                                    rounded
                                    
                                /></a>

                                

                            </p>


                        </div>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default Hardware;
