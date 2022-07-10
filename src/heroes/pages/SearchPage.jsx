import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers";
import { SearchCard } from "../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroesFilter = getHeroesByName(q);
  const { searchText, handleInput } = useForm({
    searchText: q,
  });
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroesFilter.length === 0;

  const handleSearch = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-md-5 col-lg-5 mt-4">
          <h4 className="text-center mb-4">Search Form</h4>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInput}
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn mt-3 btn-block btn-lg btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-12 col-md-7 col-lg-7 mt-4 row justify-content-center">
          <h4 className="text-center">Results</h4>

          <div
            className="alert alert-info mb-5"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a Hero
          </div>

          <div
            className="alert alert-danger mb-5"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with {q}
          </div>

          {heroesFilter.map((hero) => (
            <SearchCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
