import { Table, Tab, Row, Carousel } from 'react-bootstrap';
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
                                <th>Heures valorisées</th>
                                <th>Heures réelles</th>
                                <th>Preuve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Animation</th>
                                <td>Scoutisme</td>
                                <td>10h</td>
                                <td>+900h</td>
                                <td>3 ans @ www.scoutssalzinnes.be</td>
                            </tr>
                            <tr>
                                <th>Cours de langue</th>
                                <td>Cours de suédois</td>
                                <td>xh</td>
                                <td>xh</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Bénévolat</th>
                                <td>Organisation d'événements @ Cercle industriel</td>
                                <td>10h</td>
                                <td>+200h</td>
                                <td>www.cercle-industriel.be/comites</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Rédaction d'un hebdomadaire étudiant @ Cercle industriel</td>
                                <td>0h</td>
                                <td>50h</td>
                                <td>www.cercle-industriel.be</td>
                            </tr>
                            <tr>
                                <th>Développement</th>
                                <td>Projets personnels</td>
                                <td>10h</td>
                                <td>40h</td>
                                <td>https://github.com/Andreas-Bombaert</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Maintenance du site web @ Cercle Industriel</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td>www.cercle-industriel.be</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Mise en place du site de la Caracole Namuroise</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td>www.caracole-namuroise.be</td>
                            </tr>
                            <tr>
                                <th>Conférences & Meetings</th>
                                <td>Linux install party du Louvain-Linux</td>
                                <td>1h</td>
                                <td>1h</td>
                                <td></td>
                            </tr>
                        </tbody>
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
                </Carousel>
            </Row>
        </>

    );
}

export default Portfolio;