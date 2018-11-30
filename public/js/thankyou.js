$(function(){
    let finalThankYouArray = [];

  finalThankYouArray = initialThankYouArray.sort(() => Math.random() - 0.5);
    console.log('The "Thank-You Array" Length is:',finalThankYouArray.length);
  finalThankYouArray.forEach(function (item, index) {
      if (index === 0 || index === 4) {
          let addThankyou = `
        <div class="single-work"><img src="../images/${item.image}" alt="">
            <div class="service-overflow">
                <ul class="list-inline work-links text-center">
                    <li><a href="${item.fbook}" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a></li>
                    <li><a href="tel:${item.tel}"><i class="fa fa-phone"></i></a></li>
                    <li><a href="${item.url}" target="_blank"><i class="lnr lnr-link"></i></a></li>
                </ul>
                
            </div>
            <div class="service-name" style="display:flex;flex-direction: column; align-items:center;">
                <p style="font-size: 1.5rem;font-weight: bold; margin-top: 5px;align-content: center;">${item.name}</p>
                <p>${item.narration}</P>
            </div>
        </div>
          `;
          $(addThankyou).appendTo('#thankyouRow1');
      } else
      if (index === 1 || index === 5) {
        let addThankyou = `
      <div class="single-work"><img src="../images/${item.image}" alt="">
          <div class="service-overflow">  
        <ul class="list-inline work-links text-center">
            <li><a href="${item.fbook}" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a></li>
            <li><a href="tel:${item.tel}"><i class="fa fa-phone"></i></a></li>
            <li><a href="${item.url}" target="_blank"><i class="lnr lnr-link"></i></a></li>
        </ul>
          </div>
          <div class="service-name" style="display:flex;flex-direction: column; align-items:center;">
                <p style="font-size: 1.5rem;font-weight: bold; margin-top: 5px;align-content: center;">${item.name}</p>
                <p>${item.narration}</P>
            </div>
      </div>
        `;
        $(addThankyou).appendTo('#thankyouRow2');
    } else
    if (index === 2 || index === 6) {
        let addThankyou = `
      <div class="single-work"><img src="../images/${item.image}" alt="">
          <div class="service-overflow">
          <ul class="list-inline work-links text-center">
            <li><a href="${item.fbook}" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a></li>
            <li><a href="tel:${item.tel}"><i class="fa fa-phone"></i></a></li>
            <li><a href="${item.url}" target="_blank"><i class="lnr lnr-link"></i></a></li>
      </ul>
          </div>
          <div class="service-name" style="display:flex;flex-direction: column; align-items:center;">
                <p style="font-size: 1.5rem;font-weight: bold; margin-top: 5px;align-content: center;">${item.name}</p>
                <p>${item.narration}</P>
            </div>
      </div>
        `;
        $(addThankyou).appendTo('#thankyouRow3');
    } else
    if (index === 3 || index === 7) {
        let addThankyou = `
      <div class="single-work"><img src="../images/${item.image}" alt="">
          <div class="service-overflow">
          <ul class="list-inline work-links text-center">
            <li><a href="${item.fbook}" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="mailto:${item.email}"><i class="fa fa-envelope"></i></a></li>
            <li><a href="tel:${item.tel}"><i class="fa fa-phone"></i></a></li>
            <li><a href="${item.url}" target="_blank"><i class="lnr lnr-link"></i></a></li>
      </ul>
          </div>
          <div class="service-name" style="display:flex;flex-direction: column; align-items:center;">
                <p style="font-size: 1.5rem;font-weight: bold; margin-top: 5px;align-content: center;">${item.name}</p>
                <p>${item.narration}</P>
            </div>
      </div>
        `;
        $(addThankyou).appendTo('#thankyouRow4');
    }


});

});

