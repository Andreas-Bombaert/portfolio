import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import FigureImage from 'react-bootstrap/FigureImage'
import Image from 'react-bootstrap/Image'
import * as Icon from 'react-bootstrap-icons';

function Formations() {
    return (
        <>
            <Container responsive>
                <Row>
                    <Col>

                        <div className="w-75 text-left mx-auto p-3 mt-2">
                            <h2 className="text-center">Formations en ligne</h2>
                            <p>
                                Afin de m'améliorer dans certaines matières dont j'ai pu me rendre compte que j'avais des lacunes cette année, j'ai entrepris des formations en ligne dans ces matières.

                                <br></br><br></br>
                                J'ai tout d'abord choisi une initiation à Linux étant donné que j'avais eu l'occasion de l'utiliser à de multiples reprises sans pour autant maitriser très bien les bases. Cette formation était donc une occasion
                                de toute reprendre depuis le début en m'assurant d'utiliser les bonnes pratiques.
                                <br></br> <br></br>
                                Ma deuxième formation fut la gestion de projet avec des équipes Scrum. Nous avons eu des cours à l'EPHEC concernant celle-ci mais n'ayant pas eu de pratiques scrum très assidues durant mes projets,
                                cette formation me fit le plus grand bien, cela me permit encore une fois de me raffraichir la mémoire et de me préparer pour la vie active encore un peu plus.
                                <br></br><br></br>
                                Mon choix de la troisième formation s'effectua après une discussion avec un employé de chez Belighted, une entreprise offrant des solutions SaaS à ses clients, qui m'expliqua qu'ils avaient régulièrement des 
                                demandes de clients dont l'application avait besoin d'être mise à niveau, et que bien souvent ces applications se trouvaient être développées en Ruby. <br></br>J'ai donc compris que la maitrise de Ruby
                                pouvait être un avantage pour certaines boites lorsque je chercherai à être embauché, c'est pourquoi j'ai effectué une introduction à Ruby, langage haut niveau au même titre que Python, mais dont la maitrise se
                                fait tout de même plus rare.

                                <br></br><br></br>
                                
                                <a href="/media/openclassrooms.png"><Image
                                    src=
                                    "/media/openclassrooms.png"
                                    className="w-50 text-left mx-auto p-3 mt-2"
                                    rounded
                                    
                                /></a>
                                <a href="/media/ruby.png">
                                <Image
                                    src=
                                    "/media/ruby.png"
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

export default Formations;
