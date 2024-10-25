const language = {
  lang: {
    en: {
      hello: 'Hello! <br /> I’m Pedro',
      introd: "I'm a beginner developer looking for my first opportunity.",
      workTo: 'Let’s work together',
      goal: "As an aspiring developer, my goal is to gain practical knowledge, software development experience and best practices. I'm committed looking for my first job opportunity to apply my skills skills and contribute to the development of innovative solutions, while time that I continue to improve my technical and collaborative skills.",
      title_goal: 'My goal:',
      title_tech: 'My technologies:',
      title_projects: 'Some projects:',
      title_project_name_space: 'Made with Bootstrap <br /> & Sass.',
      title_project_name_shop: 'Made with React & JSX.',
      title_project_name_news: 'Made with HTML & CSS.',
      btns_code: 'Code',
      btns_view: 'View',
      contact: 'Contact:'
    },
    pt_br: {
      hello: 'Olá! <br /> Eu sou Pedro',
      introd:
        'Sou um desenvolvedor iniciante em busca da minha primeira oportunidade.',
      workTo: 'Vamos trabalhar juntos',
      goal: 'Como aspirante a desenvolvedor, meu objetivo é adquirir conhecimento prático experiência e práticas recomendadas de desenvolvimento de software. Estou empenhado em procurar minha primeira oportunidade de emprego para aplicar as minhas competências e contribuir para o desenvolvimento de soluções inovadoras, ao mesmo tempo que continuo a melhorar as minhas competências técnicas e colaborativas.',
      title_goal: 'Meu objetivo:',
      title_tech: 'Minhas tecnologias:',
      title_projects: 'Alguns projetos:',
      title_project_name_space: 'Feito em Bootstrap <br/> & Sass.',
      title_project_name_shop: 'Feito em React & JSX.',
      title_project_name_news: 'Feito em HTML e CSS.',
      btns_code: 'Código',
      btns_view: 'Ver',
      contact: 'Contatos:'
    }
  }
}

let $intro = document.querySelector('.intro-text')
let $workTo = document.querySelector('.text')
let $goal = document.querySelector('.goal')
let $hello = document.querySelector('.hello')
let $title_goal = document.querySelector('.title-goal')
let $title_tech = document.querySelector('.techTitle')
let $title_project = document.querySelector('.someProjectsTitle')
let $projectNews = document.querySelector('.description-1')
let $projectSpace = document.querySelector('.description-2')
let $projectShop = document.querySelector('.description-3')
let $selectLang = document.getElementById('languages')
let $btn_codes = document.querySelectorAll('.code')
let $btn_views = document.querySelectorAll('.view')
let $contact = document.querySelector('.contact')

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
    $title_tech.innerHTML = language.lang.en.title_tech
    $title_project.innerHTML = language.lang.en.title_projects
    $projectNews.innerHTML = language.lang.en.title_project_name_news
    $projectSpace.innerHTML = language.lang.en.title_project_name_space
    $projectShop.innerHTML = language.lang.en.title_project_name_shop
    $contact.innerHTML = language.lang.en.contact
    $btn_views.forEach(a => (a.innerHTML = language.lang.en.btns_view))
    $btn_codes.forEach(a => (a.innerHTML = language.lang.en.btns_code))
  } else if (text == 'pt-br') {
    $intro.innerHTML = language.lang.pt_br.introd
    $hello.innerHTML = language.lang.pt_br.hello
    $workTo.innerHTML = language.lang.pt_br.workTo
    $goal.innerHTML = language.lang.pt_br.goal
    $title_goal.innerHTML = language.lang.pt_br.title_goal
    $title_tech.innerHTML = language.lang.pt_br.title_tech
    $title_project.innerHTML = language.lang.pt_br.title_projects
    $projectNews.innerHTML = language.lang.pt_br.title_project_name_news
    $projectSpace.innerHTML = language.lang.pt_br.title_project_name_space
    $projectShop.innerHTML = language.lang.pt_br.title_project_name_shop
    $contact.innerHTML = language.lang.pt_br.contact
    $btn_codes.forEach(a => (a.innerHTML = language.lang.pt_br.btns_code))
    $btn_views.forEach(a => (a.innerHTML = language.lang.pt_br.btns_view))
  }
}
