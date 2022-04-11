import { Container, Row, Col, Table, ListGroup, ListGroupItem } from 'react-bootstrap'


function Experiences() {
  return (
    <>
      <Container responsive>
        <Row >
          <Col >
            <div className="w-75 text-left mx-auto p-3 mt-2">
              <h2 className="text-center">Expériences de travail</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span class="text-white bg-dark">Septembre 2021 - Maintenant</span>
                  <br></br>
                  Maintenance du site web du Cercle Industriel
                </ListGroup.Item>

                <ListGroup.Item>
                  <span class="text-white bg-dark">Septembre 2021 - Maintenant</span>
                  <br></br>
                  Mise en place du site web de la Caracole Namuroise
                </ListGroup.Item>

                <ListGroup.Item>
                  <span class="text-white bg-dark">Septembre 2020</span>
                  <br></br>
                  Archivage et aide à l’administration • Etudiant • ARES - Bruxelles
                </ListGroup.Item>

                <ListGroup.Item>
                  <span class="text-white bg-dark">Septembre 2018</span>
                  <br></br>
                  Aide Maintenance et Jardins • Etudiant • Institut du Beauvallon - Namur
                </ListGroup.Item>

                <ListGroup.Item>
                  <span class="text-white bg-dark">Septembre 2017</span>
                  <br></br>
                  Secrétariat • Etudiant • ARES – Bruxelles
                </ListGroup.Item>

                <ListGroup.Item>
                  <span class="text-white bg-dark">2015-2017</span>
                  <br></br>
                  Multiples jobs dans le cadre des scouts : HORECA, rénovation de maisons, travaux de jardins, Restauration rapide
                </ListGroup.Item>
              </ListGroup>
            </div>

            <div className="w-75 text-left mx-auto p-3 mt-2">
              <h2 className="text-center">Langues</h2>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Français - Langue maternelle
                </ListGroup.Item>
                <ListGroup.Item>
                  Anglais - B2
                </ListGroup.Item>
                <ListGroup.Item>
                  Néerlandais - Bases
                </ListGroup.Item>

              </ListGroup>
            </div>





          </Col>
          <Col >

            <div className="w-75 text-left mx-auto p-3 mt-2">
              <h2 className="text-center">Compétences Techniques</h2>

              <ListGroup >
                <ListGroup.Item>
                  Programmation Python & Kotlin

                </ListGroup.Item>

                <ListGroup.Item>
                  Développement frontend HTML, JS et CSS
                </ListGroup.Item>

                <ListGroup.Item>
                  Utilisation de framework adaptés : React, NodeJs
                </ListGroup.Item>

                <ListGroup.Item>
                  Utilisation et développement Intersystems IRIS avec ObjectScript
                </ListGroup.Item>

                <ListGroup.Item>
                  Manipulation de données avec R
                </ListGroup.Item>

                <ListGroup.Item>
                  Développement en C - Bases
                </ListGroup.Item>

                <ListGroup.Item>
                  Administration Réseau

                </ListGroup.Item>

                <ListGroup.Item>
                  Bases de données : Bases en MySQL, utilisation de FireBase, Google Cloud
                </ListGroup.Item>
                <ListGroup.Item>
                  Organisation et gestion de stocks
                </ListGroup.Item>
              </ListGroup>
            </div>
            <br></br>



            <div className="w-75 text-left mx-auto p-3 mt-2">
              <h2 className="text-center">Savoir-être</h2>

              <ListGroup >
                <ListGroup.Item>
                  Rigueur

                </ListGroup.Item>

                <ListGroup.Item>
                  Capacité d'analyse
                </ListGroup.Item>

                <ListGroup.Item>
                  Communication & Sociabilité
                </ListGroup.Item>

                <ListGroup.Item>
                  Sens des priorités et des responsabilités
                </ListGroup.Item>

                <ListGroup.Item>
                  Sens de l'engagement

                </ListGroup.Item>
              </ListGroup>
            </div>

          </Col>

        </Row>

        <Row>
          <Col>
            

          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Experiences;
