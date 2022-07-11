import { Link } from "react-router-dom";

export const SearchCard = ({
  id,
  publisher,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  return (
    <div className="col-12 col-lg-10 mb-4">
      <div className="card text-bg-dark animate__animated animate__fadeInRight">
        <div className="row g-0">
          <p className="card-header text-primary text-center">{publisher}</p>
          <div className="col-4 col-sm-4 col-md-4">
            <img
              src={heroImageUrl}
              className="img-fluid mx-auto d-block" //rounded-start
              alt={superhero}
            />
          </div>
          <div className="col-8 col-sm-8 col-md-8 row align-items-center">
            <div className="card-body">
              <h5 className="card-title text-info">{superhero}</h5>
              <p className="card-text ">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <small className="text-warning">{first_appearance}</small>
            <Link className="text-danger" to={`../heroe/${id}`}>
              Ver más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
