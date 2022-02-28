import React, {useState} from 'react';
import './style.css';
import { Input, TextArea } from './style.js';
import { PhoneIcon, EmailIcon, InstaIcon, LinkedinIcon } from './style.js';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  const ValidateEmail = ({target}) => {
   const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(target.value.match(mailformat)) {
    return setWrongEmail(false);
  } else {
    return setWrongEmail(true);
  }
  }

  const validateForm = () => {
    if (email.length === 0
      || phone.length === 0
      || message.length === 0) {
        setEmptyMessage(true);
      } else {
        setEmptyMessage(false);
      }
  }

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'email' :
        setEmail(target.value);
      break;
      case 'phone' :
        setPhone(target.value);
      break;
      case 'message' :
        setMessage(target.value);
      break;
      default :
      return null;
    }
  }

  const maskInputs = (mask, e) => {
    const i = e.target.value.length;
    const output = mask.substring(0,1);
    const text = mask.substring(i);

    if(text.substring(0,1) !== output) {
      e.target.value += text.substring(0,1);
    }
  }

  return (
    <section className="form-container">
      <div className="image-form-container">
        <div className="contact-infos-container">
          <ul>
            <li>
              <PhoneIcon />
              <span>0800 777-8888</span>
            </li>
            <li>
              <EmailIcon />
              <span>test@email.com</span>
            </li>
            <li>
              <InstaIcon />
              <span>instagram.com/profile</span>
            </li>
            <li>
              <LinkedinIcon />
              <span>linkedin.com/profile</span>
            </li>
          </ul>
        </div>
      </div>
      <form>
        <div>
          <h3>Fale Conosco</h3>
          <Input
            type="email"
            placeholder="e-mail"
            name="email"
            onChange={ (e) => {
              handleChange(e);
              ValidateEmail(e);
            } }
          />
          {
            wrongEmail && <p style={{color: 'red'}}>e-mail inválido</p>
          }
          <Input
            placeholder="cel"
            onKeyPress={ (e) => maskInputs('##-#-####-####', e)}
            maxLength="16"
            name="phone"
            onChange={ handleChange }
          />
          <TextArea
            name="message"
            onChange={ handleChange }
          />
          {
            emptyMessage && <p style={{color: 'red'}}>existe campos vazios</p>
          }
        <button
          onClick={ (e) => {
            e.preventDefault();
            validateForm();
          } }
        >
          Enviar
        </button>
        </div>  
    </form>
    </section>
  );
}

export default ContactForm;