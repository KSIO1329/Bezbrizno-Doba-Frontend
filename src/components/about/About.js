import React from 'react'
import './About.css'

export default function About() {
    return (
        <div className="container about-page">
            <h5 className="page-title">O nama</h5>
            <div className="row">
                <div className="col l8 s12">
                    <p>Agencija za pomoć u kući Bezbrižno doba osnovana je zbog sve veće potrebe za brigom o našim najstarijim sugrađanima. 
                    U današnje vreme, usled savremenog načina života, sve češće odsutnosti i udaljenosti srodnika koji bi mogli brinuti o svojim bližnjima, sve je više onih kojima je
                    naša usluga neophodna. Prednost ove vrste usluge je što se pruža u odobnosti doma korisnika, u njima poznatom i sigurnom prostoru. Pored starijih lica, naši korisnici
                    i korisnice mogu biti i lica sa hroničnim oboljenjima, lica sa invaliditetom ili lica koja su teže pokretna bez obzira na starosnu granicu.
                    </p>
                    <p>Usluge pomoći i podrške našim korisnicima pružaju profesionlane i edukovane gerontodomaćice i negovateljice, po individulanim planovima usluge za svakog 
                    korisnika, prema njihovim specifičnim potrebama, koje u saradnji sa samim korisnicima i srodnicima sačinjava licencirani stručni radnik u Agenciji.
                    </p>
                </div>
                <div className="col l4 hide-on-small-only">
                    <img src={require('../../img/pexels-brett-sayles-3733929.jpg')} className="img-1" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col l4 hide-on-small-only">
                    <img src={require('../../img/pexels-marcus-aurelius-4063918532536436453647.jpg')} className="img-1" alt=""/>
                </div>
                <div className="col l8 s12">
                    <ul className="about-list"><b>Naše usluge obuhvataju:</b>
                        <li className="about-list">Pomoć u održavanju higijene doma učiniće vaš životni prostor čistim, svežim i udobnim za život (čišćenje životnog prostora, pospremanje, 
                            pranje i peglanje odeće, pranje posuđa i dr.)</li>
                        <li className="about-list">Pomoć u održavanju lične  higijene što uključuje kupanje, tuširanje, pranje kose, pomoć pri oblačenju</li>
                        <li className="about-list">Priprema obroka ili dostava gotovih obroka</li>
                        <li className="about-list">Obavljanje raznih administrativnih poslova kao što su pratnja prilikom odlaska kod lekara podizanje recepata i lekova, plaćanje računa i sl.</li>
                        <li className="about-list">Nabavka namirnica</li>
                        <li className="about-list">Pomoć u zadovoljavanju socijalni potreba, šetnja, druženje, društvene igre i sl.</li>
                    </ul>
                </div>
            </div>
            <h4 className="center">SVE USLUGE SE PRUŽAJU U UDOBNOSTI VAŠEG DOMA</h4>
            <img src={require('../../img/panorama.jpg')} className="img-2" alt=""/>
        </div>
    )
}
