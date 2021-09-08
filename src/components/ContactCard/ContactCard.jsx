import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, } from 'react-router-dom';
import Cookies from "js-cookie";

const ContactCard = ({email}) => {
  const user_id = parseInt(Cookies.get('id_cookie'));

  return (
  <div className="col-3 contact-box border">
    <div className="d-flex flex-column mt-4">
      <h4>Contacter le propriétaire</h4>
      <p>
        <strong>Email : </strong>
        { user_id ? 
          email : "Veuillez-vous connecter pour accéder aux coordonnées du propriétaire"
        }
      </p>
    </div>
    <div>
    </div>
  </div>
  );
};

export default ContactCard;