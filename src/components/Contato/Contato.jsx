import React from "react";
import "./Contato.css";

function Contato() {
return(
    <main>

    <h1>Contato</h1>
    <div className="conteudo"/>
    <div className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d613.1561301963399!2d-34.91211822328613!3d-8.108855824145744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ef8d31b72c5%3A0x75196a189ef3895a!2sImbiribeira%2C%20Recife%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1678252540327!5m2!1spt-BR!2sbr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="form">
        <form onsubmit="event.preventDefault()">
            <input id="form-nome" type="name" placeholder="Nome"/>
            <input id="form-email"type="email" placeholder="Email"/>
            <input id="form-mensagem"className="mensagem" type="text" placeholder="Mensagem"/>
            <input id="form-botao" type="submit" value="Enviar" onclick="enviarFormulario()"/>
        </form>
    </div>            
    

</main>
)
}
export default Contato;