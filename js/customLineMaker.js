$(document).ready(function () {
    [].slice.call(document.querySelectorAll('.slide')).forEach(function (el, pos) {
      (function () {
        var lineMaker = new LineMaker({
          parent: {
            element: el,
            position: 'prepend'
          },
          lines: [{
              top: 0,
              left: '10%',
              width: 1,
              height: '100vh',
              color: '#000',
              hidden: true,
              animation: {
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: 0,
                direction: 'TopBottom'
              }
            },
            {
              top: 0,
              left: '30%',
              width: 1,
              height: '100vh',
              color: '#000',
              hidden: true,
              animation: {
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: 0,
                direction: 'TopBottom'
              }
            },
            {
              top: 0,
              left: '50%',
              width: 1,
              height: '100vh',
              color: '#000',
              hidden: true,
              animation: {
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: 0,
                direction: 'TopBottom'
              }
            },
            {
              top: 0,
              left: '70%',
              width: 1,
              height: '100vh',
              color: '#000',
              hidden: true,
              animation: {
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: 0,
                direction: 'TopBottom'
              }
            },
            {
              top: 0,
              left: '90%',
              width: 1,
              height: '100vh',
              color: '#000',
              hidden: true,
              animation: {
                duration: 2000,
                easing: 'easeInOutExpo',
                delay: 0,
                direction: 'TopBottom'
              }
            },
          ]
        });
        setTimeout(function () {
          lineMaker.animateLinesIn();
        },1500);
      })();
    });
  });