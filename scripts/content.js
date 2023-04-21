// // document.addEventListener('DOMContentLoaded', () => {
// //     console.log('hello');
// // const image=document.createElement('img');
// // image.setAttribute('src','Will.png');
// // document.querySelector('body').appendChild(image);
// // image.style.position='sticky';
// // image.style.top='0';
// // })
// console.log('hello');
// // const image=document.createElement('img');
// // image.setAttribute('src','Will.png');
// // document.querySelector('body').appendChild(image);
// // image.style.position='sticky';
// // image.style.top='0';
// chrome.browserAction.onload.addListener(function(tab) {

//     chrome.tabs.executeScript({

// code:`console.log('hello'); const image=document.createElement('img');
// image.setAttribute('src','images/Will.png');
// document.querySelector('body').appendChild(image);

// image.style.top='0';`

//     });
//     window.addEventListener('mousewheel',myHandler,{passive:true});
//   });

//   function myHandler(event) {
//     if (event.deltaY > 0) {
//       // User is scrolling down, update body's scrollTop property
//       document.body.scrollTop += 50;
//     } else {
//       // User is scrolling up, update body's scrollTop property
//       document.body.scrollTop -= 50;
//     }
//   }
// const img = document.createElement('img');
// img.src = chrome.runtime.getURL('images/Will.png');
// img.style.position = 'fixed';
// img.style.right = '0';
// img.style.top = '0';
// img.style.zIndex = '9999';

// document.body.appendChild(img);
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: `
            const image=document.createElement('img');
            image.setAttribute('src','images/Will.png');
            document.querySelector('body').appendChild(image);
            image.style.position = 'fixed';
            image.style.top = '0';
            image.style.right = '0';
        `
    });

    window.addEventListener('mousewheel', myHandler, { passive: true });
    window.addEventListener('touchstart', myHandler, { passive: true });
});

function myHandler(event) {
    if (event.deltaY > 0) {
        // User is scrolling down, update body's scrollTop property
        document.body.scrollTop += 50;
    } else {
        // User is scrolling up, update body's scrollTop property
        document.body.scrollTop -= 50;
    }
}