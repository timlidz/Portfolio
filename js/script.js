const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')
const star = document.getElementById('star');
const flower = document.getElementById('flower');

if (
   localStorage.getItem('color-theme') === 'dark' ||
   (!('color-theme' in localStorage) &&
   window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
   //show light icon
   themeToggleLightIcon.classList.remove('hidden')
   star.classList.remove('hidden')
} else {
   themeToggleDarkIcon.classList.remove('hidden')
   flower.classList.remove('hidden')
}

function themeChange() {
   themeToggleDarkIcon.classList.toggle('hidden')
   themeToggleLightIcon.classList.toggle('hidden')

   //If is set in localstorage
   if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light'){
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')
         star.classList.remove('hidden')
         star.classList.add('inline-block')
         flower.classList.add('hidden')
         flower.classList.remove('inline-block')

      } else {
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
         star.classList.add('hidden')
         star.classList.remove('inline-block')
         flower.classList.remove('hidden')
         flower.classList.add('inline-block')
         
      }
   } else {
      if (document.documentElement.classList.contains('dark')){
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
         star.classList.add('hidden')
         star.classList.remove('inline-block')
         flower.classList.remove('hidden')
         flower.classList.add('inline-block')
      } else {
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')
         star.classList.remove('hidden')
         star.classList.add('inline-block')
         flower.classList.add('hidden')
         flower.classList.remove('inline-block')
      }
   }
}


themeToggleBtn.addEventListener('click', themeChange);
