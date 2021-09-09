import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, } from 'react-router-dom';

const ContactCard = ({email}) => {
  return (
  <div className="col-3 contact-box border">
    <div className="d-flex flex-column mt-4">
      <h4>Contacter le propriétaire</h4>
      <p><strong>Email : </strong>{email}</p>
    </div>
    <div>
    </div>
  </div>
  );
};

export default ContactCard;