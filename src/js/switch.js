let $switch_button = document.querySelector('.switch_button')
let $body = document.querySelector('body')

$switch_button.addEventListener('change', () => {
  if ($switch_button.checked) {
    $body.dataset.theme = 'white'
    document.documentElement.style.setProperty(
      '--background-primary-color',
      '#ffffff'
    )
    document.documentElement.style.setProperty(
      '--primary-text-color',
      '#000000'
    )
    document.documentElement.style.setProperty(
      '--primary-border-color',
      '#000000'
    )
    document.documentElement.style.setProperty('--card-color', '#363636')
  } else {
    $body.dataset.theme = 'dark'
    document.documentElement.style.setProperty(
      '--background-primary-color',
      '#363636'
    )
    document.documentElement.style.setProperty(
      '--primary-text-color',
      '#ffffff'
    )
    document.documentElement.style.setProperty(
      '--primary-border-color',
      '#ffffff'
    )
    document.documentElement.style.setProperty('--card-color', '#000000')
  }
})
