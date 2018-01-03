import React from "react";

const GoodReadContent = ({ goodreads }) => (
  <div className="ApodContent">
    <h2>{goodreads}</h2>
  </div>
);

const GoodReads = ({ goodreads, isFetching }) => {
  return (
    <div className="GoodReads">
      <h1>Your Results</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <GoodReadContent goodread={goodreads} />
      )}
    </div>
  );
};

export default GoodReads;
