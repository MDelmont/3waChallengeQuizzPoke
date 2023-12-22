import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="not-found-page">
      <div className="wrapper">
        <h3 className="sorry">sorry</h3>

        <div className="not-found">
          <span>4</span>

          <div className="pokeball-wrapper">
            <div className="pokeball-red"></div>
            <div className="pokeball-ball__center"></div>
            <div className="pokeball-shadow"></div>
          </div>

          <span>4</span>

          <div className="not-found__shadow"></div>
        </div>

        <h3 style={{ fontWeight: 500, letterSpacing: 4 }}>page not found</h3>

        <Link to={"/"} className="btn-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
