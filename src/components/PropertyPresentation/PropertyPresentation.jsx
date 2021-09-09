import React from 'react';

const PropertyPresentation = ({category, location, price, description}) => {
  return (
    <div className="property-presentation">
      <div className="property-data">
        <h2 className="title-properties-responsive">Détails</h2>
        <div className="properties properties-responsive d-flex flex-column">
          <p><strong>Type de logement :</strong> {category}</p>
          <p><strong>Lieu :</strong> {location}</p>
          <p><strong>Prix :</strong> {price} €/semaine</p>
        </div>
        <hr />
      </div>
      <div className="apartment-description-section">
        <section className="section-responsive">
          <h2>Description</h2>
            {description}
        </section>
        <hr />
      </div>
    </div>
  );
};

export default PropertyPresentation;