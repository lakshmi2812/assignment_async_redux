import React from "react";

const GoodReadContent = ({ goodread }) => {
  const books = goodread.map(book => {
    return (
      <div className="writers" key={book.author}>
        <h1>{book.author}</h1>
        <p>
          <strong>{book.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{books}</div>
    </div>
  );
};

const GoodReads = ({ goodreads, isFetching }) => {
  return (
    <div className="Goodreads">
      <h1>Your Results!</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <GoodReadContent goodread={goodreads} />
      )}
    </div>
  );
};

export default GoodReads;
