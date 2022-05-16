import { Table, Row, Carousel, Button } from 'react-bootstrap';
import React, { useState } from 'react';

function Portfolio() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Row >
                <div className="w-75 text-center mx-auto p-3 mt-2">
                    <Table responsive striped="true" size="s" >
                        <thead>
                            <tr>
                                <th>Thème</th>
                                <th>Activité</th>
                                <th>Dates</th>
                                <th>Heures valorisées</th>
                                <th>Heures réelles</th>
                                <th>Détails</th>
                                <th>Preuve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Animation - Soft skills</th>
                                <td>Scoutisme</td>
                                <td>Années 2007-2022</td>
                                <td>10h</td>
                                <td>+900h</td>
                                <td>
                                    <Button variant="secondary" href="/scoutisme">Détails</Button>
                                </td>
                                <td>3 ans @ <a href="https://www.scoutssalzinnes.be">scoutssalzinnes.be</a></td>
                            </tr>

                            <tr>
                                <th>Bénévolat - Soft skills</th>
                                <td>Organisation d'événements @ Cercle industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>+200h</td>
                                <td><Button variant="secondary" href="/benevolatci">Détails</Button></td>
                                <td>1 an @ <a href="https://www.cercle-industriel.be/comite.html"> Cercle Industriel</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Rédaction d'un hebdomadaire étudiant @ Cercle industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>50h</td>
                                <td></td>
                                <td><a href="https://www.cercle-industriel.be/comite.html"> Cercle Industriel</a></td>
                            </tr>
                            <tr>
                                <th>Echange international</th>
                                <td>Semaine internationale</td>
                                <td>1-5 mars 2021</td>
                                <td>10h</td>
                                <td>30h</td>
                                <td><Button variant="secondary" href="/semaineinter">Détails</Button></td>
                                <td><a href="/media/cardiff.jpg"> Certificat</a></td>
                            </tr>
                            <tr>
                                <th>Développement</th>
                                <td>Projets personnels</td>
                                <td>Année 2021-2022</td>
                                <td>10h</td>
                                <td>40h</td>
                                <td><Button variant="secondary" href="/dev">Détails</Button></td>
                                <td><a href="https://github.com/Andreas-Bombaert/longneaux-bot">Repo GitHub</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Maintenance du site web @ Cercle Industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td></td>
                                <td><a href="https://www.cercle-industriel.be"> Site du cercle</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td></td>
                                <td><a href="https://www.caracole-namuroise.be">Site de la Caracole Namuroise</a></td>
                            </tr>
                            <tr>
                                <th>Formations en ligne</th>
                                <td>Gérez votre projet avec une équipe Scrum</td>
                                <td>Avril</td>
                                <td>8h</td>
                                <td>8h</td>
                                <td><Button variant="secondary" href="/formations">Détails</Button></td>
                                <td><a href="/media/openclassrooms.png">Preuve OpenClassrooms</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Initiation à Linux</td>
                                <td>Avril 2022</td>
                                <td>8h</td>
                                <td>8h</td>
                                <td></td>
                                <td><a href="/media/openclassrooms.png">Preuve OpenClassrooms</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Initiation au langage Ruby</td>
                                <td>Mai 2022</td>
                                <td>10h</td>
                                <td>10h</td>
                                <td></td>
                                <td><a href="/media/ruby.png">Preuve CodeAcademy</a></td>
                            </tr>
                            <tr>
                                <th>Conférences & Meetings</th>
                                <td>Linux install party du Louvain-Linux</td>
                                <td>Octobre 2019</td>
                                <td>0h</td>
                                <td>1h</td>
                                <td><Button variant="secondary" href="/conferences">Détails</Button></td>
                                <td>Photo de l'évenement perdue</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Conférence Entreprenariat CCII</td>
                                <td>Mars 2022</td>
                                <td>0h</td>
                                <td>1h</td>
                                <td></td>
                                <td>Photo de l'événement perdue</td>
                            </tr>
                            <tr>
                                <th>Hardware et Electronique</th>
                                <td>Montage de PC</td>
                                <td>Novembre et Décembre 2020</td>
                                <td>10h</td>
                                <td>10h</td>
                                <td><Button variant="secondary" href="/hardware">Détails</Button></td>
                                <td><a href="/media/montage_pc.png">Photo des ordinateurs</a></td>
                            </tr>


                        </tbody>
                        <thead>
                            <tr>
                                <th>Total</th>
                                <td></td>
                                <td></td>
                                <th>66h</th>
                                <th>+1250h</th>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Row>


            <Row>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                    <Carousel.Item>
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/scouts.jpg"
                            alt="3 ans d'animation aux scouts"
                        />
                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">3 ans d'animation aux scouts de Salzinnes</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/halloween_ci.jpg"
                            alt="Organisation d'événements et animation au Cercle Industriel"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Organisation d'évenements et animation @Cercle industriel</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/bot.jpg"
                            alt="Bot twitter - projet personnel"
                        />

                        <Carousel.Caption>
                            <h3 class="text-dark bg-white">Bot twitter - projet personnel</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/caracole.jpg"
                            alt="Site de la Caracole Namuroise"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Site web de l'Ordre de la Caracole Namuroise</h3>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/openclassrooms.png"
                            alt="Formations sur openclassrooms"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Formations sur OpenClassrooms</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/cardiff.jpg"
                            alt="Semaine Internationale"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Semaine Internationale</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/ruby.png"
                            alt="Formation Ruby"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Formation Ruby</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className=" d-block w-75 mx-auto p-3 mt-2"
                            src="/media/montage_pc.png"
                            alt="Montage d'ordinateurs fixes"
                        />

                        <Carousel.Caption>
                            <h3 class="text-white bg-dark">Montage d'ordinateurs</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </>

    );
}

export default Portfolio;