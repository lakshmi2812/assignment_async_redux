

import React from 'react'

const GoodReadContent = ({goodreads}) => (
  <div className="ApodContent">
    <h3>{goodreads.author}</h3>
  
    <p>{goodreads.title}</p>
  </div>
)




const GoodReads = ({goodreads, isFetching}) => {
  return (
    <div className="GoodReads">
      <h1>Your Results</h1>
      {isFetching ? <p>Loading...</p> : <GoodReadContent goodread={goodreads} />}
    </div>
  )
}








export default GoodReads