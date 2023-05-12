// Constructor to create an XHR object
function coreHTTP() {
  // this.http = new XMLHttpRequest();
}

/* <<< HTTP GET request >>> */
coreHTTP.prototype.get = function(url) {
  const theRequest = new Promise((resolve,reject) => {
    const requestOptions = {
      method: "GET",
      headers: {"content-type": "application/json"}
    };
    fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status);
      }
    })
    .then(responseData => resolve(responseData))
    .catch(err => reject(err))
  });

  return (theRequest);
}

/* <<< HTTP POST request >>> */
coreHTTP.prototype.post = function(url, data) {
  const theRequest = new Promise((resolve,reject) => {
    const requestOptions = {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    };
    fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status);
      }
    })
    .then(responseData => resolve(responseData))
    .catch(err => reject(err))
  });

  return (theRequest);
}

/* <<< HTTP PUT request >>> */
coreHTTP.prototype.put = function(url, data) {
  const theRequest = new Promise((resolve,reject) => {
    const requestOptions = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    };
    fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status);
      }
    })
    .then(responseData => resolve(responseData))
    .catch(err => reject(err))
  });

  return (theRequest);
}

/* <<< HTTP DELETE request >>> */
coreHTTP.prototype.delete = function(url) {
  const theRequest = new Promise((resolve,reject) => {
    const requestOptions = {
      method: "DELETE",
      headers: {"content-type": "application/json"}
    };
    fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status);
      }
    })
    .then(() => resolve({id: "-01", name: "Delete successful"}))
    .catch(err => reject(err))
  });

  return (theRequest);
}