import CreatePropertyForm from 'components/CreatePropertyForm/CreatePropertyForm';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

const CreateProperty = () => {
  return (
    <main className="create-property">
      <Navbar />
      <div className="create-property-content">
        <div className="create-property-left">
          <h1>Déposez votre annonce</h1>
        </div>
        <div className="create-property-right">
          <CreatePropertyForm/>
        </div>
      </div>
    </main>
  );
};

export default CreateProperty;