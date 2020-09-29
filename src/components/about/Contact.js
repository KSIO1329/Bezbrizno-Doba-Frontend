import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="container contact-page">
            <h5 className="page-title">Kontaktirajte nas</h5>
            <ul>
                <li><a href="https://www.facebook.com/bezbriznodoba/"><i className="fa fa-facebook"/><p className="hr-link-text">Facebook</p></a></li>
                <li><button><i className="material-icons-outlined fa">mail</i><p className="hr-link-text">office@bezbriznodoba.com</p></button></li>
                <li><button><i className="material-icons-outlined fa">mail</i><p className="hr-link-text">olivera.markovic@bezbriznodoba.com</p></button></li>
                <li><button><i className="material-icons-outlined fa">phone</i><p className="hr-link-text">063/520-066</p></button></li>
                <li><button><i className="fa fa-map-marker"/><p className="hr-link-text">Mokranjčeva 96/19, 18000 Niš</p></button></li>
            </ul>
        </div>
    )
}
