/*
  Please add all Javascript code to this file.
  GA SF-SF-8 David Clarke
*/

  // When the application first loads, it should display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API, the app should hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure. 
  'use strict';
  $('#main').hide();

  var apiLink = 'https://content.guardianapis.com/search?api-key=';
  var apiKey = '595be04b-739c-47bc-9992-63b401c2fb97';
 
  
  fetch(apiLink + apiKey).then(function(response) {
    if (response.ok) {
      $('#main').show();
      // If our request was successful, we get a value of true for the ok property of our response object
      // This is where we update our UI based on the response data
      return response.json();
    } else {
      console.log(response);
    }
  }).then(function(data) {
    dat = JSON.parse(data);
    console.log(data);
    console.log(data.results)
    console.log(data.results.webUrl); 
  });

// When the user selects an article's title, the app should show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop up. 


// Change the link of the "Read more from source" button to that of the respective article.

// When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success. 


//Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

