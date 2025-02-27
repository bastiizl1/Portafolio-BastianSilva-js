/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle)
{
  navToggle.addEventListener('click', () =>
  {
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if (navClose)
{
  navClose.addEventListener('click', () =>
  {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>
{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>
{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('blur-header')
    : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>
{
  e.preventDefault()
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_c9ei5v', 'template_wcbl9k7', '#contact-form', 'ojhHEA9z_hF-55nUh')
    .then(() =>
    {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      // Remove message after five seconds
      setTimeout(() =>
      {
        contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()

    }, () =>
    {
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)
