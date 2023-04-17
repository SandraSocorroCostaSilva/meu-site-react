import React from "react";
import "./Portfolio.css";
import Foto from "../assets/Foto.jpg";
import Foto1 from "../assets/1.jpeg";
import Foto2 from "../assets/2.jpeg";



function Portifolio() {
 return (
    <main>

        <h1>Portfolio</h1>
        <div className="portfolio-conteudo">
            <section className="conteudo">
                <h4>Título</h4>
                <img src={Foto} alt="Foto"></img>
                <a>LINK</a>
            </section>
            <section className="conteudo">
                <h4>Título</h4>
                <img src={Foto1} alt="Foto"></img>
                <a>LINK</a>
            </section>
            <section className="conteudo">
                <h4>Título</h4>
                <img src={Foto2} alt="Foto"></img>
                <a>LINK</a>
            </section>
        </div>
    </main>
 )
}
export default Portifolio;