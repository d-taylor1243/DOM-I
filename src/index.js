const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};
let siteNavElements = document.getElementsByTagName('nav')[0].childNodes;
let navElemLables = Object.values(siteContent.nav);
for (let i = 0; i < navElemLables.length; i++)
 {  
  siteNavElements[i*2+1].textContent = navElemLables[i];
  siteNavElements[i*2+1].setAttribute('class', 'italic');
}

document.getElementById('logo-img').setAttribute('src', "http://localhost:9000/img/logo.png");
document.getElementById('cta-img').setAttribute('src', "http://localhost:9000/img/cta.png");
document.getElementById('middle-img').setAttribute('src', "http://localhost:9000/img/accent.png");

let ctaTextElements = document.querySelector('.cta-text').children;
let ctaTextElementLables = Object.values(siteContent.cta);
for (let i = 0; i < ctaTextElementLables.length; i++) {
  ctaTextElements[i].textContent = ctaTextElementLables[i];
}

let mainContentElems = document.querySelectorAll(".main-content .text-content") // makes [5divs], those 5 divs have children who then have the text-content I want to manipulate
mainContentElems = Array.from(mainContentElems);
let mainContentText = Object.values(siteContent["main-content"]);
let j = 0;
let k = 0;
for (let i = 0; i < mainContentText.length; i++) {
  mainContentElems[j].children[k].textContent = mainContentText[i];
  k++;
  if (k >= mainContentElems[j].children.length) {
    k = 0;
    j++;
  }
}

