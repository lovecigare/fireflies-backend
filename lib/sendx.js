const SendXRestApi = require('./sendx-api/src/index');

const api = new SendXRestApi.ContactApi();

const contactDetails = new SendXRestApi.ContactRequest();


const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data.data);
  }
  // console.log("response", response);
};

const Subscribe = (api_key, team_id, email) => {
  contactDetails.email = email;
  api.contactIdentifyPost(api_key, team_id, contactDetails, callback);
};

module.exports = Subscribe;