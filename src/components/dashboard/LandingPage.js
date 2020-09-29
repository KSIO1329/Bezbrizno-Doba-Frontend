import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="center landing-page">
            <div className="row">
                <div className="col l6 hide-on-small-only">
                    <img src={require('../../img/pexels-matthias-zomer-339620.jpg')} className="img-1" alt=""/>
                </div>
                <div className="col l6 s12">
                    <p style={{marginTop: '0px'}}>Značajan porast starijeg stanovništva u odnosu na ukupan broj stanovnika u Srbiji, kao jedne od socijalno ranjivih grupa, povećava potrebe za socijalnim uslugama o kojima zavisi kvalitet života starijih. Korisnicima naših usluga možemo osigurati pomoć i negu u kući, kojima se zadovoljavaju svakodnevne životne potrebe koje im, zbog današnjeg savremenog načina života, nisu u mogućnosti pružiti članovi njihove porodice.</p>
                </div>
            </div>
            <div className="row">
                <div className="col l8 s12">
                    <p>U udobnosti svoga doma, svakom korisniku naši zaposleni pristupaju individualno, poštujući njegove potrebe, sa puno pažnje i profesionalnosti. Svakodnevno radimo na poboljšanju kvaliteta života naših korisnika, a uz našu pomoć, Vaši najmiliji moći će svoje treće doba provoditi <b><i>BEZBRIŽNO</i></b>.</p>
                    <p>Bilo da se radi o brizi oko lične higijene, šetnji ili druženju, čišćenju ili nabavci namirnica, mi smo uvek tu da na vreme i po dogovoru pružimo podršku i sigurnost.</p>
                    <p><b>Pomoć u kući na teritoriji Niša pružaju stručne osobe – gerontodomaćice, negovateljice i higijeničarke sa potrebnim iskustvom i edukacijom.</b></p>
                </div>   
                <div className="col l4 s12">           
                    <img src={require('../../img/pexels-edu-carvalho-2050991.jpg')} className="img-1" alt=""/>
                </div> 
            </div>
        </div>
    )
}
