import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-10 col-sm-12 col-lg-11">
        <div className="card text-bg-dark">
          <div className="row g-0">
            <h1 className="card-header text-primary text-center">
              {superhero}
            </h1>
            <div className="col-12 col-sm-3">
              <img src={heroImageUrl} alt={superhero} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-9 row align-items-center">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-white border-primary">
                    <b className="text-info">Alter Ego: </b>
                    {alter_ego}
                  </li>
                  <li className="list-group-item bg-dark text-white border-primary">
                    <b className="text-info">Publisher: </b>
                    {publisher}
                  </li>
                  <li className="list-group-item bg-dark text-white border-primary">
                    <b className="text-info">Appearance: </b>
                    {first_appearance}
                  </li>
                  <li className="list-group-item bg-dark text-white border-primary">
                    <b className="text-info">Characters:</b> {characters}
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-footer  text-center">
              <button
                type="button"
                className="btn btn-danger btn-lg mb-2"
                onClick={handleReturn}
              >
                RETURN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
