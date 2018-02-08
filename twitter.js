
//module.exports = (bot) => {
  var Twitter = require('twitter');
  require('dotenv').config()

  console.log(process.env.consumer_key)

  var twitter = new Twitter({
    consumer_key: process.env.consumer_key, 
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret,
  });

  var params = {
    q: '@trigoporres',
    count: 1,
    result_type: 'recent',
    lang: 'es'
  }
  
  // Initiate your search using the above paramaters
  twitter.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){
        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        twitter.post('favorites/create', id, function(err, response){
          console.log(response.user)
          // If the favorite fails, log the error message
          if(err){
            console.log(err[0].message);
          }
          // If the favorite is successful, log the url of the tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
      }
    } else {
      console.log(err);
    }
  })

  
//}