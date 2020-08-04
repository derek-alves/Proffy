import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import "./styles.css";

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
       <PageHeader title="Estes são os proffys disponíveis.">
         <form  id="search-teachers">
            <div className="input-block">
                <label htmlFor="subject">Matéria</label>
                <input type="text" id="subject"/>
            </div>


            <div className="input-block">
                <label htmlFor="week_day">Dia da semana</label>
                <input type="text" id="week_day"/>
            </div>


            <div className="input-block">
                <label htmlFor="time">Horas</label>
                <input type="text" id="time"/>
            </div>
         </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/59737946?s=460&u=3be486fd32e1d1a1a9dae23a33d9a3c17b06b230&v=4" alt="Avatar"/>
              <div>
                <strong>Derek Enrique</strong>
                <span>Quimica</span>
              </div>
            </header>
            
            <p>
              Entusiasta das melhores tecnologias de química avançada
              <br/><br/>
              Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
              <p>
                Preço/hora
                <strong>R$ 20,00</strong>
              </p>
              <button type='button'>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;