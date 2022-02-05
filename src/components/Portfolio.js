import { Table, Tab } from 'react-bootstrap';

function Portfolio() {
    return (
        <>
            <div className="w-75 text-center mx-auto p-3 mt-2">
                <Table responsive striped="true" size="s" >
                    <thead>
                        <tr>
                            <th>Thème</th>
                            <th>Activité</th>
                            <th>Heures valorisées</th>
                            <th>Vraies heures</th>
                            <th>Preuve</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Animation</th>
                            <td>Scoutisme</td>
                            <td>10h</td>
                            <td>+900h</td>
                            <td>3 ans @ scoutssalzinnes.be</td>
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
                            <td>Mise en place du site de la Cararcole Namuroise</td>
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
        </>

    );
}

export default Portfolio;