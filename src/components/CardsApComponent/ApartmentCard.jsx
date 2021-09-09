import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteListing } from 'services/apiManager';


const ApartmentCard = ({listing}) => {
  const history = useHistory();
  const id = Cookies.get('id_cookie')
  const dispatch = useDispatch()

  function truncate (str) {
    return str.length > 10 ? str.substring(0, 50) + "..." : str;
  }

  const handleDelete = (e,listing_id) => {
    e.preventDefault();
    dispatch(deleteListing(listing_id));
    setTimeout(() => {
    window.location.reload();      
    },100)
  }

  return (
    <>
      <div
        className="mx-4 "
      >
        <div className="row">
          <div
            className="col-sm-10 card listing-card"
            style={{ width: "17rem" }}
          >
            <div className='img-box'>
              <img
                className="card-img-top"
                src={listing.photo}
                alt="annonce illustrée"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{listing.title}</h5>
              <p className="card-text">{listing.price} €/semaine</p>
              <p className="card-text">{listing.category}</p>
              <p
                className="btn btn-primary stretched-link"
                onClick={() => history.push(`/listing/${listing.id}`)}
              >
                Je fonce
              </p>
              {
                listing.user_id == id &&
                <p
                  className='btn delete-btn'
                  onClick={(e) => handleDelete(e,listing.id) }
                >Supprimer</p>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentCard;