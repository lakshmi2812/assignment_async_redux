import React from "react";




const GoodReadContent = ({ goodread }) => {
   const people = goodread.map(person => {
    return (
      <div className="writers">
       
        <h1>{person.author}</h1>
        <p>
          <strong>{person.title}</strong>
        </p>
      </div>
    );
  });
   return (
    <div className="container">
      <div className="row">{people}</div>
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
