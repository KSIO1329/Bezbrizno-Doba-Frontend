import React from 'react';
import './Footer.css';
 


const Footer = (props) =>{
    return(
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Bezbrižno doba</h5>
                        <p className="grey-text text-lighten-4">Uvek tu za Vas da Vaš život bude BEZBRIŽAN.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Kontaktirajte nas</h5>
                        <ul className="footer-links">
                            <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/bezbriznodoba/"><i className="fa fa-facebook"></i><p className="hr-link-text">Facebook</p></a></li>
                            <li><button className="grey-text text-lighten-3" href="#!"><i className="material-icons-outlined fa">mail</i><p className="hr-link-text">office@bezbriznodoba.com</p></button></li>
                            <li><button className="grey-text text-lighten-3" href="#!"><i className="material-icons-outlined fa">phone</i><p className="hr-link-text">063/520-066</p></button></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col l6 s12 author footer-links">
                        <p>Made by Uroš Stojanović.</p>
                        <a className="grey-text text-lighten-3 github" href="https://github.com/KSIO1329"><i className="fa fa-github"></i></a>
                        <div className="tooltip">
                        <button className="grey-text text-lighten-3 author-email"><span className="tooltiptext">1.uros.stojanovic@gmail.com</span><i className="material-icons-outlined fa">mail</i></button>
                        </div>
                        <a className="grey-text text-lighten-3" href="https://instagram.com/urkee_sto"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Copyright © 2020 Bezbrižno doba. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;