import { Fragment } from "react";
export const App = () => {
  return (
    <Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </Fragment>

  );
};

const NetflixSeries = () => {
  return (
    <div>
      <h1>Queen of tears</h1>
      <img src="image.png" alt="Queen of tears" width="40%" height="40%" />
      <h2>name:Queen of tears</h2>
      <h3>Rating :8.2</h3>
      <p>
        summary:baek Hyun-woo and hong hae-in navigate a tense relationship,
        both at home and at work.
      </p>
    </div>
  );
};
