import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
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
  )
}

export default TeacherItem;