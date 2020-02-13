console.log('mokaroo data with Ajax practice');


// to test jquery
$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color','blue');
  });
});


//ajax method
$.ajax({
  url:'js/mock_data.json',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    var i;
    for (i=0; i<data.length; i++){
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-6 col-lg-4 mx-5 my-5">' +
        '<div class="card" style="width: 25rem;">' +
          '<div class="card-header text-success">Full Name: ' +
            data[i].name +
          '</div>' +
          '<ul class="list-group list-group-flush">' + '</li>' +
            '<li class="list-group-item"> Gender: ' + data[i].gender +
            '<li class="list-group-item">Language: ' + data[i].language + '</li>' +
            '<li class="list-group-item">Race: ' + data[i].race + '</li>' +
            '<li class="list-group-item">Shirt Size: ' + data[i].shirt_size + '</li>' +
            '<li class="list-group-item">Favourite Color: ' + data[i].favourite_color + '</li>' +
            '<li class="list-group-item">Car Owned: ' + data[i].car_owned + '</li>' +
            '<li class="list-group-item">Favourite Movie Genres: ' + data[i].movie_genres + '</li>' +
          '</ul>' +
        '</div>' +
      '</div>';
    }
  }, //success
  error: function(){
    console.log('error!');
  } //error

}); //document.ready
