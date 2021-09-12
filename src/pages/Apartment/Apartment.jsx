import ContactCard from 'components/ContactCard/ContactCard';
import PropertyPresentation from 'components/PropertyPresentation/PropertyPresentation';
import Loading from 'components/Loading/Loading';
import HousingList from 'components/HousingList/HousingList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listingsFetch, locationsFetch, categoriesFetch, usersFetch } from 'services/apiManager';
import { useParams } from 'react-router-dom';

const ApartmentsProfile = () => {
  const slug = useParams();
  const id = slug.slug;

  const dispatch = useDispatch()
  const listings = useSelector(state => state.listings)
  const locations = useSelector(state => state.locations)
  const categories = useSelector(state => state.categories)
  const users = useSelector(state => state.users)


  const getListings = () => {
    dispatch(listingsFetch())
  }

  const getLocations = () => {
    dispatch(locationsFetch())
  }

  const getCategories = () => {
    dispatch(categoriesFetch())
  }

  const getUsers = () => {
    dispatch(usersFetch())
  }

  useEffect(() => {
    getListings();
    getLocations();
    getCategories();
    getUsers();
  },[]);

  const listing = listings.listings[id];

  let fourListings = [];
  fourListings.push(listings.listings[0], listings.listings[1], listings.listings[2], listings.listings[3])


  return (
    <div>
      {
        listing ? 

          <div className="container infoAp-location-price border">
            <div className="row d-flex top-content-location-price-responsive">
              <div className="row title-plus-location d-block mt-3">
                <div className="col-sm title-responsive">
                  <h5>{listing.title}</h5>
                </div>
              </div>
            </div>
            <div className="container p-0 mt-2 content-carousel-contact-responsive">
              <div className="row d-flex">
                <div className="col-9 carousel-box border">
                  <img className="d-block w-100" src={listing.photo} alt="property img" />
                </div>
                { listing && users.user ?
                  <ContactCard email={users.user[listing.user_id - 1].email} /> : 'loading'
                }
                
              </div>
            </div>
            { listing && categories.categories && locations.locations ?
              <PropertyPresentation category={categories.categories[listing.category_id - 1].name} location={locations.locations[listing.location_id - 1].name} price={listing.price} description={listing.description}/> : "loading"
            }

            
            <div className="container main-card-list-profileAp">
              {
                listings.listings ? <HousingList data={fourListings} /> : <Loading />
              }
            </div>
          </div>

        : <Loading /> 
      }
    </div>
  )
}

export default ApartmentsProfile;