const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
   localStorage.getItem('color-theme') === 'dark' ||
   (!('color-theme' in localStorage) &&
   window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
   //show light icon
   themeToggleLightIcon.classList.remove('hidden')
} else {
   themeToggleDarkIcon.classList.remove('hidden')
}

function themeChange() {
   themeToggleDarkIcon.classList.toggle('hidden')
   themeToggleLightIcon.classList.toggle('hidden')

   //If is set in localstorage
   if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light'){
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')

      } else {
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')
         
      }
   } else {
      if (document.documentElement.classList.contains('dark')){
         document.documentElement.classList.remove('dark')
         localStorage.setItem('color-theme', 'light')

      } else {
         document.documentElement.classList.add('dark')
         localStorage.setItem('color-theme', 'dark')

      }
   }
}


themeToggleBtn.addEventListener('click', themeChange);