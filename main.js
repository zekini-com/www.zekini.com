
const titles = document.querySelectorAll('.container-arti .title');
const links = document.querySelectorAll('#links a');

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        const id = `#${item.target.id}`;
        history.pushState({}, item.target.innetText, id);

        links.forEach((link) => {
          link.classList.remove('active');

          const href = link.attributes.href.nodeValue;
          if (href === id) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px',
  }
);

titles.forEach((title) => {
  observer.observe(title);
});


(function() {

    "use strict";
  
    window.onload = function() {
  
      var images = document.querySelectorAll(".media-images.media-images--config-dynamic .media-images__image");
  
      function adjustImageWidth(image) {
        var widthBase   = 70;
        var scaleFactor = 0.525;
        var imageRatio  = image.naturalWidth / image.naturalHeight;
  
        image.width = Math.pow(imageRatio, scaleFactor) * widthBase;
      }
  
      images.forEach(adjustImageWidth);
  
    };
  
  }());

  //typing
  $(function () {
    $(".text").typed({
      strings:["What service can we offer you.","Web Development", "App Development", "Upgrading Laravel" , "Database Administration ", "API Integration", "CMS Systems", "E-Commerce"],
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 1500,
      showCursor: true,
      loop: true
    });
  });
     
//portfolio
  $(function () {
    var filterList = {
      init: function () {
        // MixItUp plugin
        // http://mixitup.io
        $('.portfolio-grid').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter'	
          },
          load: {
            filter: 'all' // show app tab on first load
          }     
        });								
      }
    };
    // Run the show!
    filterList.init();
  });	

  // career

$(".career").click(function () {
	$(".pop_up").addClass("open");
});
$(".pop_up .close").click(function () {
	$(".pop_up").removeClass("open");
});

$('.form').submit(function(event) {
  event.preventDefault();
  $('.form').addClass('visibility-os');
  $('.success').addClass('success-v');

});



// small text copy

function copy() {
  var copyText = document.getElementById("copyClipboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copy1() {
  var copyText = document.getElementById("copyClipboard1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copy2() {
  var copyText = document.getElementById("copyClipboard2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copy3() {
  var copyText = document.getElementById("copyClipboard3");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copy4() {
  var copyText = document.getElementById("copyClipboard4");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copy5() {
  var copyText = document.getElementById("copyClipboard5");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}

function copycode() {
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(800);
}


const processResponse = val => {
  if (val && val.fulfillment) {
    let output = '';
    let messagesLength = val.fulfillment.messages.length;

    for (let i = 0; i < messagesLength; i++) {if (window.CP.shouldStopExecution(0)) break;
      let message = val.fulfillment.messages[i];
      let type = message.type;

      switch (type) {
        // 0 fulfillment is text
        case 0:
          let parsedText = linkify(message.speech);
          output += `<p>${parsedText}</p>`;
          break;

        // 1 fulfillment is card
        case 1:
          let imageUrl = message.imageUrl;
          let imageTitle = message.title;
          let imageSubtitle = message.subtitle;
          let button = message.buttons[0];

          if (!imageUrl && !button && !imageTitle && !imageSubtitle) break;

          output += `
            <a class='card' href='${button.postback}' target='_blank'>
              <img src='${imageUrl}' alt='${imageTitle}' />
            <div class='card-content'>
              <h4 class='card-title'>${imageTitle}</h4>
              <p class='card-title'>${imageSubtitle}</p>
              <span class='card-button'>${button.text}</span>
            </div>
            </a>
          `;
          break;

        // 2 fulfillment is a quick reply with multi-choice buttons
        case 2:
          let title = message.title;
          let replies = message.replies;
          let repliesLength = replies.length;
          output += `<p>${title}</p>`;

          for (let i = 0; i < repliesLength; i++) {if (window.CP.shouldStopExecution(1)) break;
            let reply = replies[i];
            let encodedText = reply.replace(/'/g, 'zzz');
            output += `<button onclick='multiChoiceAnswer("${encodedText}")'>${reply}</button>`;
          }window.CP.exitedLoop(1);
          break;}

    }window.CP.exitedLoop(0);

    removeLoader();
    return output;
  }

  removeLoader();
  return `<p>${errorMessage}</p>`;
};

const setResponse = (val, delay = 0) => {
  setTimeout(() => {
    aiMessage(processResponse(val));
  }, delay);
};

const resetInputField = () => {
  $chatbotInput.value = '';
};

const scrollDown = () => {
  const distanceToScroll =
  $chatbotMessageWindow.scrollHeight - (
  $chatbotMessages.lastChild.offsetHeight + 60);
  $chatbotMessageWindow.scrollTop = distanceToScroll;
  return false;
};

const send = (text = '') => {
  fetch(`${baseUrl}&query=${text}&lang=en&sessionId=${sessionId}`, {
    method: 'GET',
    dataType: 'json',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json; charset=utf-8' } }).


  then(response => response.json()).
  then(res => {
    if (res.status < 200 || res.status >= 300) {
      let error = new Error(res.statusText);
      throw error;
    }
    return res;
  }).
  then(res => {
    setResponse(res.result, botLoadingDelay + botReplyDelay);
  }).
  catch(error => {
    setResponse(errorMessage, botLoadingDelay + botReplyDelay);
    resetInputField();
    console.log(error);
  });

  aiMessage(loader, true, botLoadingDelay);
};


// preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(550).css({'overflow':'visible'});
})


// HTML BOx JS Code
let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");

HTMLButton.onclick = function() {
  HTMLBox.select();
  document.execCommand("copy");
  HTMLButton.innerHTML = '<i class="fa fa-copy"></i>'
};

// CSS Box Js Code
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSButton");

CSSButton.onclick = function() {
  CSSBox.select();
  document.execCommand("copy");
  CSSButton.innerHTML = '<i class="fa fa-copy"></i>'
};
// JavaScript BOx JS Code
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSButton");

JSButton.onclick = function() {
  JSBox.select();
  document.execCommand("copy");
  JSButton.innerHTML = '<i class="fa fa-copy"></i>'
};