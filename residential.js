$(document).ready(function() {
  setTimeout((function(){
    $('#residential1').fadeIn();
    $('#residential1').fadeIn('slow');
  }),1000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part1a').fadeIn();
  }),3000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential1Description').fadeIn();
  }),5000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential2').fadeIn();
    $('#residential2').fadeIn('slow');
  }),7000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part2a').fadeIn();
  }),9000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential2Description').fadeIn();
  }),11000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential3').fadeIn();
    $('#residential3').fadeIn('slow');
  }),13000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part3a').fadeIn();
  }),15000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential3Description').fadeIn();
  }),17000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential4').fadeIn();
    $('#residential4').fadeIn('slow');
  }),19000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part4a').fadeIn();
  }),21000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential4Description').fadeIn();
  }),23000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential5').fadeIn();
    $('#residential5').fadeIn('slow');
  }),25000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part5a').fadeIn();
  }),27000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential5Description').fadeIn();
  }),29000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential6').fadeIn();
    $('#residential6').fadeIn('slow');
  }),31000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part6a').fadeIn();
  }),33000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential6Description').fadeIn();
  }),35000)
})
$(document).ready(function() {
  setTimeout((function(){
    $('#residential7').fadeIn();
    $('#residential7').fadeIn('slow');
  }),37000)
});
$(document).ready(function(){
  setTimeout((function(){
    $('#part7a').fadeIn();
  }),39000)
})
$(document).ready(function(){
  setTimeout((function(){
    $('.residential7Description').fadeIn();
  }),41000)
})


let choiceofPrice = document.getElementById('0M-50M').value;
$('#container1').click(function(){
  function checkPrice(){
    if(choiceofPrice === (document.getElementById('0M-50M').value)){
      $('#residential5').show();
    }else {
      $('#residential1,#residential2,#residential3,#residential4,#residential6,#residential7').hide();
    }
  }
})


const residential = document.getElementById("residential_icon")

residential.addEventListener("Click", function() {
    im
})