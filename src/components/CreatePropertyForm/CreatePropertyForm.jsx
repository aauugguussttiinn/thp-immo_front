import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createListing } from 'services/apiManager';
import { locationsFetch } from 'services/apiManager';
import { categoriesFetch } from 'services/apiManager';

const CreatePropertyForm = () => {
  const [title,setTitle] = useState()
  const [photo,setPhoto] = useState()
  const [locationId,setLocationId] = useState()
  const [categoryId,setCategoryId] = useState()
  const [price,setPrice] = useState()
  const [description, setDescription] = useState()
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.categories)
  const locations = useSelector(state => state.locations.locations)
  const listing = useSelector(state => state.listings)
  const history = useHistory()

  const postProperty = (e) => {
    e.preventDefault()
    let data =
    {
      property: {
        title: title,
        photo: photo,
        location_id: locationId,
        category_id: categoryId,
        price: price,
        description:description
      }
    }
    dispatch(createListing(data))
  }
  console.log(listing.error.title);

  useEffect(() => {
    dispatch(categoriesFetch());
    dispatch(locationsFetch());
  }, [])

  useEffect(() => {
    listing.listing && history.push('/')
  },[listing])

  return (
    <form className="create-property-form" onSubmit={postProperty}>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        onChange={(e) => setTitle(e.target.value)}
      />
      {listing.error.title &&
        listing.error.title.map((error) => {
          return <p className="create-listing-error">{error}</p>;
        })}
      <input
        type="text"
        name="photo"
        placeholder="Image URL"
        onChange={(e) => setPhoto(e.target.value)}
      />
      {listing.error.photo && listing.error.photo.map((error) => {
        return <p className="create-listing-error">{error}</p>;
      })}
      <select
        type="selection"
        name="location"
        placeholder="Ville"
        onChange={(e) => setLocationId(e.target.value)}
      >
        <option>-- Ville --</option>
        {locations &&
          locations.map((location) => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            );
          })}
      </select>
      {listing.error.location &&
        listing.error.location.map((error) => {
          return <p className="create-listing-error">{error}</p>;
        })}
      <select
        type="selection"
        name="category"
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option>-- Catégorie --</option>
        {categories &&
          categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
      </select>
      {listing.error.category &&
        listing.error.category.map((error) => {
          return <p className="create-listing-error">{error}</p>;
        })}
      <input
        type="number"
        name="price"
        placeholder="Prix/mois"
        min="100"
        max="2000"
        onChange={(e) => setPrice(e.target.value)}
      />
      {listing.error.price &&
        listing.error.price.map((error) => {
          return <p className="create-listing-error">{error}</p>;
        })}
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      {listing.error.description &&
        listing.error.description.map((error) => {
          return <p className="create-listing-error">{error}</p>;
        })}
      <input type="submit" value="Créer" name="submit-btn" />
    </form>
  );
};

export default CreatePropertyForm;