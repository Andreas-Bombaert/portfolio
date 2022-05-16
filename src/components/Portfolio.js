import { Table, Tab, Row, Carousel, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import React, { useState } from 'react';

function Portfolio() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const pop_scoutisme = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Scoutisme</Popover.Header>
            <Popover.Body>
                Durant 3 années j'ai pu animer des adolescents de 12 à 16 ans lors de réunions hebdomadaires, ainsi que pendant des hike ou les grands camps d'été.
                Ce fut une expérience plus qu'enrichissante ou j'ai pu développer des compétences en animation, en organisation d'événements mais également en gestion de stock et de matériel.
            </Popover.Body>
        </Popover>
    );
    
    const pop_ci = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Cercle Industriel</Popover.Header>
            <Popover.Body>
                Cette année je me suis investi dans mon cercle étudiant ou j'ai pu aider à l'organisation d'événements de plusieurs centaines de personnes, de participer à la vie
                active d'une ASBL. J'ai également co-rédigé un journal étudiant hebdomadaire distribué physiquement et sur les réseaux sociaux.
            </Popover.Body>
        </Popover>
    );

    const pop_semaine_inter = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Semaine Internationale</Popover.Header>
            <Popover.Body>
                Lors de notre seconde année à l'EPHEC nous n'avons malheureusement pas pu aller en semaine internationale à l'étranger, mais cela n'empêche que nous avons monté un projet durant une semaine
                avec des étrangers tout autour du monde, cette expérience fut enrichissante et malgré le fait que nous n'avons pas été dépaysés nous avons tout de même pu en apprendre sur d'autres cultures (Pays de Galle, autres pays participants, etc...)
            </Popover.Body>
        </Popover>
    );

    const pop_projet_perso = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Projets personnels</Popover.Header>
            <Popover.Body>
                Pendant cette année je me suis adonné à certains projets en Python, par example un bot twitter qui m'a prit quelques dizaines d'heure.
            </Popover.Body>
        </Popover>
    );

    const pop_maintenance_ci = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Maintenance Cercle Industriel</Popover.Header>
            <Popover.Body>
                Pendant mon année d'investissement au cercle j'ai effectué la maintenance du site en rajoutant de nouveaux éléments chaque semaine, ainsi qu'en m'assurant que tout se passait bien avec le serveur.
            </Popover.Body>
        </Popover>
    );

    const pop_caracole = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Caracole Namuroise</Popover.Header>
            <Popover.Body>
                A coté de la maintenance du site du Cercle Industriel j'ai monté un site Wordpress pour l'association de l'Ordre de la Caracole Namuroise, un ordre estudiantin qui souhaitait
                avoir une vitrine et un accès à des informations en interne pour ses membres.
                En plus du site j'ai également rédigé une revue semestrielle pour cette association d'étudiants.
            </Popover.Body>
        </Popover>
    );

    const pop_openclassrooms = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">OpenClassrooms</Popover.Header>
            <Popover.Body>
                Afin de faciliter ma compréhension pour certaines matières et m'assurer de les avoir bien assimilées, j'ai effectué une formation à Linux et une en Scrum sur le site d'Open Classrooms
            </Popover.Body>
        </Popover>
    );

    const pop_codeacademy = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">CodeAcademy</Popover.Header>
            <Popover.Body>
                Après avoir discuté avec une personne travaillant chez BeLighted, j'ai appris que Ruby On Rails était un langage très demandé dans le monde des SaaS, j'ai donc décidé d'apprendre les bases
                de ce langage sur CodeAcademy afin de me rendre plus vendeur le jour ou je chercherai du travail.
            </Popover.Body>
        </Popover>
    );

    const pop_conferences = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Conférences</Popover.Header>
            <Popover.Body>
                Lors de ma première année à l'Ephec j'ai participé à l'install party du Louvain-Linux afin d'avoir une distribution Unix en dual boot sur mon pc pour certains cours, 
                j'ai malheureusement perdu ma preuve mais Linux fut bien installé sur mon pc!
                J'ai également assisté à une conférence sur l'entreprenariat ou j'ai pu découvrir que ce n'était pas un milieu aussi fermé que je le croyais.
            </Popover.Body>
        </Popover>
    );

    const pop_montage_pc = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Montage d'ordinateurs</Popover.Header>
            <Popover.Body>
                L'année dernière j'ai eu l'occasion de monter le pc d'un ami proche, ainsi que le mien, me permettant de me mettre à jour en ce qui concerne le montage de pc, le dernier que j'ai pu monter avant cela étant en 2016
            </Popover.Body>
        </Popover>
    );

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
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_scoutisme}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td>3 ans @ <a href="https://www.scoutssalzinnes.be">scoutssalzinnes.be</a></td>
                            </tr>

                            <tr>
                                <th>Bénévolat - Soft skills</th>
                                <td>Organisation d'événements @ Cercle industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>+200h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_ci}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td>1 an @ <a href="https://www.cercle-industriel.be/comite.html"> Cercle Industriel</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Rédaction d'un hebdomadaire étudiant @ Cercle industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>50h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_ci}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="https://www.cercle-industriel.be/comite.html"> Cercle Industriel</a></td>
                            </tr>
                            <tr>
                                <th>Echange international</th>
                                <td>Semaine internationale</td>
                                <td>1-5 mars 2021</td>
                                <td>10h</td>
                                <td>30h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_semaine_inter}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="/media/cardiff.jpg"> Certificat</a></td>
                            </tr>
                            <tr>
                                <th>Développement</th>
                                <td>Projets personnels</td>
                                <td>Année 2021-2022</td>
                                <td>10h</td>
                                <td>40h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_projet_perso}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="https://github.com/Andreas-Bombaert/longneaux-bot">Repo GitHub</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Maintenance du site web @ Cercle Industriel</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_maintenance_ci}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="https://www.cercle-industriel.be"> Site du cercle</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                                <td>Année 2021-2022</td>
                                <td>0h</td>
                                <td>20h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_caracole}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="https://www.caracole-namuroise.be">Site de la Caracole Namuroise</a></td>
                            </tr>
                            <tr>
                                <th>Formations en ligne</th>
                                <td>Gérez votre projet avec une équipe Scrum</td>
                                <td>Avril</td>
                                <td>8h</td>
                                <td>8h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_openclassrooms}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="/media/openclassrooms.png">Preuve OpenClassrooms</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Initiation à Linux</td>
                                <td>Avril 2022</td>
                                <td>8h</td>
                                <td>8h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_openclassrooms}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="/media/openclassrooms.png">Preuve OpenClassrooms</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Initiation au langage Ruby</td>
                                <td>Mai 2022</td>
                                <td>10h</td>
                                <td>10h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_codeacademy}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td><a href="/media/ruby.png">Preuve CodeAcademy</a></td>
                            </tr>
                            <tr>
                                <th>Conférences & Meetings</th>
                                <td>Linux install party du Louvain-Linux</td>
                                <td>Octobre 2019</td>
                                <td>0h</td>
                                <td>1h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_conferences}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td>Photo de l'évenement perdue</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>Conférence Entreprenariat CCII</td>
                                <td>Mars 2022</td>
                                <td>0h</td>
                                <td>1h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_conferences}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
                                <td>Photo de l'événement perdue</td>
                            </tr>
                            <tr>
                                <th>Hardware et Electronique</th>
                                <td>Montage de PC</td>
                                <td>Novembre et Décembre 2020</td>
                                <td>10h</td>
                                <td>10h</td>
                                <td><OverlayTrigger trigger="focus" placement="left" overlay={pop_montage_pc}>
                                    <Button variant="secondary">Détails</Button>
                                </OverlayTrigger></td>
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