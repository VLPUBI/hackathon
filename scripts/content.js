
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

document.body.appendChild(img);
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: `
        console.log(document.getElementById("pages-list").childElementCount);
            const image=document.createElement('img');
            image.setAttribute('src','images/Will.png');
            document.querySelector('body').appendChild(image);
            image.style.position = 'fixed';
            image.style.top = '0';
            image.style.right = '0';
        `
    });

    chrome.tabs.query({},function(tabs){
        let tabcount=tabs.length;
        console.log('number of tabs:'+tabs.length);
        if(tabcount>5){
            chrome.tabs.executeScript({
                code:`
                const oldImg = document.querySelector('img[src="images/Will.png"]');
                if (oldImg) {
                    oldImg.remove();
                }
                const newimg=document.createElement('img');
                newimg.setAttribute('src','images/newWill.jpg');
                document.querySelector('body').appendChild(newimg);
                newimg.style.position = 'fixed';
                newimg.style.top = '0';
                newimg.style.right = '0'; `            }, function(result) {
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError);
                    }
            })
        }
        })

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

