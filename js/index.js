const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Header and nav sections
const navItems = document.querySelectorAll('a');

const navItem1 = navItems[0].textContent = siteContent["nav"]["nav-item-1"];
const navItem2 = navItems[1].textContent = siteContent["nav"]["nav-item-2"];
const navItem3 = navItems[2].textContent = siteContent["nav"]["nav-item-3"];
const navItem4 = navItems[3].textContent = siteContent["nav"]["nav-item-4"];
const navItem5 = navItems[4].textContent = siteContent["nav"]["nav-item-5"];
const navItem6 = navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// CTA section
const ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('button').textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector('#cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// Main content

// Top content
const featHeading = document.querySelector('h4');
featHeading.textContent = siteContent["main-content"]["features-h4"];

const featContent = document.querySelector('p');
featContent.textContent = siteContent["main-content"]["features-content"];

const h4Elements = document.querySelectorAll('h4');
const pElements = document.querySelectorAll('p');

const aboutHeading = h4Elements[1];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = pElements[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Middle image
const midImg = document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

// Bottom content
const servicesHeading = h4Elements[2];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = pElements[2];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productHeading = h4Elements[3];
productHeading.textContent = siteContent["main-content"]["product-h4"];

const productContent = pElements[3];
productContent.textContent = siteContent["main-content"]["product-content"];

const visionHeading = h4Elements[4];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = pElements[4];
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contactHeading = h4Elements[5];
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = pElements[5];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = pElements[6];
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = pElements[7];
contactEmail.textContent = siteContent["contact"]["email"];

const footer = pElements[8];
footer.textContent = siteContent["footer"]["copyright"];