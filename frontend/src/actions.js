export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";

export function getGOODREADSRequest() {
  return {
    type: GET_GOODREADS_REQUEST
  };
}

export function getGOODREADSSuccess(data) {
  return {
    type: GET_GOODREADS_SUCCESS,
    data
  };
}

export function getGOODREADSFailure(error) {
  return {
    type: GET_GOODREADS_FAILURE,
    error
  };
}

export function getInitialGOODREADS() {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getGOODREADSRequest());
    
    fetch("api/goodreads")
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        
        return response.json();
      })
      .then(json => {
       
        dispatch(getGOODREADSSuccess(json));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getGOODREADSFailure(error));
      });
  };
}
