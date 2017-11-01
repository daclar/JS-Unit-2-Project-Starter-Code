/*
  Please add all Javascript code to this file.
  GA JS-SF-8 David Clarke
*/

  // When the application first loads, it should display the loading container (see below on instructions to toggle this). When you successfully retrieve information from the default API, the app should hide the loader and replace the content of the #main container with that of the API. The DOM structure of each article must adhere to the .article structure. 
  'use strict';
  $('#main').hide();

  var apiLink = 'https://content.guardianapis.com/search?api-key=';
  var apiKey = '595be04b-739c-47bc-9992-63b401c2fb97';
  var link;
  let arrayTitle = [];
  let arrayLink = [];
  let arraySection = [];
  
  fetch(apiLink + apiKey).then(function(response) {
    if (response.ok) {
      $('#main').show();
      // If our request was successful, we get a value of true for the ok property of our response object
      // This is where we update our UI based on the response data
      return response.json();
    } else {
      console.log("this is the else" + response);
    }
  }).then(function(data) {
    console.log(data);
    console.log(data.response);
    console.log(data.response.results);
    console.log(data.response.results[0]);
    console.log(data.response.results[0].webTitle);
    console.log(data.response.results[0].sectionName);
    console.log(data.response.results[0].webUrl);
    //create(data);
    replace(data);
    createArray(data);
  });

  function replace(data) { 
    for (let j = 0; j <= 3; j++) {
    $("h3").eq(j).text(data.response.results[j].webTitle);
    $("h6").eq(j).text(data.response.results[j].sectionName);
    }

    $('a').on('click', function(data) {
      $('#popUp').show().removeClass('loader hidden');
      $("#popUp h1").text(arrayTitle[0]);
      $("#popUp p").text(arraySection[0]);
    });
  
    $('.closePopUp').on('click', function(data) {
      $('#popUp').hide().addClass('loader hidden');
    });
  };

  function createArray(data) {
    for (let i = 0; i <= 3; i++) {
      //let arrayTitle = [];
      arrayTitle.push(data.response.results[i].webTitle);
      arrayLink.push(data.response.results[i].webUrl);
      arraySection.push(data.response.results[i].sectionName);
    }
    console.log("array title =" + arrayTitle);
    console.log("arrayLink =" + arrayLink);
    console.log("array Section =" + arraySection);
  }
  function create(data) {
    let newArticle = $(`
    <article class="article">
        <section class="featuredImage">
            <img src="images/article_placeholder_2.jpg" alt="" />
        </section>
        <section class="articleContent">
            <a href="#"><h3>${data.response.results[i].webTitle}</h3></a>
            <h6>${data.response.results[i].sectionName}</h6>
        </section>
        <!-- <section class="impressions">
            526
        </section> -->
        <div class="clearfix"></div>
    </article>
    `);

  }



  


// When the user selects an article's title, the app should show the #popUp overlay. The content of the article must be inserted in the .container class inside #popUp. Make sure you remove the .loader class when toggling the article information in the pop up. 


// Change the link of the "Read more from source" button to that of the respective article.

// When the user selects a source from the dropdown menu on the header, replace the content of the page with articles from the newly selected source. Display the loading pop up when the user first selects the new source, and hide it on success. 


//Add an error message (either alert or a notification on the page) if the app cannot load from the selected feed.

