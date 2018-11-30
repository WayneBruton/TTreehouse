$(document).ready(function () {

  $(".scroll").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $("body").click(function (event) {
    // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
    if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

  $('#subscribeBtn').click(function (e) {
    e.preventDefault();
    let subscribeInfo = {
      email: $('#subscribeEmail').val(),
      FNAME: $('#subscribeFirstName').val(),
      LNAME: $('#subscribeLastName').val()
    }

    console.log(subscribeInfo);
    let url = '/subscribe';
    $.ajax({
      type: 'POST',
      url: url,
      data: {
        subscribeInfo
      },

      dataType: 'json'
    }).done(function (response) {
      console.log(response);
      $('#mailingSuccess').css('display', 'block').fadeIn(750);
      $('#subscribeEmail').val('');
      $('#subscribeFirstName').val('');
      $('#subscribeLastName').val('');
      $(this).focus(function () {
        this.blur();
      })
      setTimeout(function () {
        $('#mailingSuccess').css('display', 'none').fadeOut(750);
      }, 1500);

    }).fail(function (response) {
      console.log(response);
      $('#mailingFailure').css('display', 'block').fadeIn(750);
      $('#mailingSuccess').css('display', 'block').fadeIn(750);
      $('#subscribeEmail').val('');
      $('#subscribeFirstName').val('');
      $('#subscribeLastName').val('');
      $(this).blur()
      setTimeout(function () {
        $('#mailingFailure').css('display', '').fadeOut(750);
      }, 1500);

    });
  })

  // $("body").click(function (event) {
  //   // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called 
  //   if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible")) {
  //     $('.navbar-collapse').collapse('toggle');
  //   }
  // });

  $('#contactBtn').click(function (e) {
    e.preventDefault();
    let subscribeInfo = {
      Cemail: $('#contactEmail').val(),
      Cname: $('#contactName').val(),
      Cphone: $('#contactPhone').val(),
      Cmessage: $('#contactMessage').val()
    }

    console.log(subscribeInfo);
    let url = '/send-email';
    $.ajax({
      type: 'POST',
      url: url,
      data: {
        subscribeInfo
      },

      dataType: 'json'
    }).done(function (response) {
      console.log(response);
      $('#contactSuccess').css('display', 'block').fadeIn(750);
      $('#contactEmail').val('');
      $('#contactName').val('');
      $('#contactPhone').val('');
      $('#contactMessage').val('');
      $(this).focus(function () {
        this.blur();
      })
      setTimeout(function () {
        $('#contactSuccess').css('display', 'none').fadeOut(750);
      }, 1500);

    }).fail(function (response) {
      console.log(response);
      // $('#mailingFailure').css('display', 'block').fadeIn(750);
      $('#contactFailure').css('display', 'block').fadeIn(750);
      $('#contactEmail').val('');
      $('#contactName').val('');
      $('#contactPhone').val('');
      $('#contactMessage').val('');
      $(this).blur()
      setTimeout(function () {
        $('#contactFailure').css('display', '').fadeOut(750);
      }, 1500);

    });
  })


});