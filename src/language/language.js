const language = {
  lang: {
    en: {
      hello: 'Hello! <br /> I’m Pedro',
      introd: "I'm a beginner developer looking for my first opportunity.",
      workTo: 'Let’s work together',
      goal: "As an aspiring developer, my goal is to gain practical knowledge, software development experience and best practices. I'm committed looking for my first job opportunity to apply my skills skills and contribute to the development of innovative solutions, while time that I continue to improve my technical and collaborative skills.",
      title_goal: 'My goal:'
    },
    pt_br: {
      hello: 'Olá! <br /> Eu sou Pedro',
      introd:
        'Sou um desenvolvedor iniciante em busca da minha primeira oportunidade.',
      workTo: 'Vamos trabalhar juntos',
      goal: 'Como aspirante a desenvolvedor, meu objetivo é adquirir conhecimento prático experiência e práticas recomendadas de desenvolvimento de software. Estou empenhado em procurar minha primeira oportunidade de emprego para aplicar as minhas competências e contribuir para o desenvolvimento de soluções inovadoras, ao mesmo tempo que continuo a melhorar as minhas competências técnicas e colaborativas.',
      title_goal: 'Meu objetivo:'
    }
  }
}

let $intro = document.querySelector('.intro-text')
let $workTo = document.querySelector('.text')
let $goal = document.querySelector('.goal')
let $hello = document.querySelector('.hello')
let $title_goal = document.querySelector('.title-goal')

let $selectLang = document.getElementById('languages')

$selectLang.addEventListener('change', text => {
  setLanguage(text.target.value)
})

const setLanguage = text => {
  if (text == 'en') {
    $intro.innerHTML = language.lang.en.introd
    $hello.innerHTML = language.lang.en.hello
    $workTo.innerHTML = language.lang.en.workTo
    $goal.innerHTML = language.lang.en.goal
    $title_goal.innerHTML = language.lang.en.title_goal
  } else if (text == 'pt-br') {
    $intro.innerHTML = language.lang.pt_br.introd
    $hello.innerHTML = language.lang.pt_br.hello
    $workTo.innerHTML = language.lang.pt_br.workTo
    $goal.innerHTML = language.lang.pt_br.goal
    $title_goal.innerHTML = language.lang.pt_br.title_goal
  }
}
