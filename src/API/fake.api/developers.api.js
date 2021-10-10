const developers = [
  {
    _id: "1q",
    name: "Владислав",
    surname: "Штукарев",
    age: "23",
    infoAboutMe:
      "Работаю Frontend разработчиком в московском университете. Adept JavaScript. Обожаю все, что связано с веб технологиями. Также бегаю марафоны в свободное от программирования время.",
    photo: "vladislav.jpg",
    linksToSocialNetworks: [
      {
        _id: "2q",
        name: "instagram",
        link: "https://www.instagram.com/vladislav.sergeevich1/",
      },
      {
        _id: "2w",
        name: "facebook",
        link: "https://www.facebook.com/vladislav.shtukarev.9/",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "whatsapp",
        link: "Телефон WhatSapp",
      },
    ],
    contributionToTheDevelopment:
      "Тимлид. Создавал главную страницу; Fake.api; компоненты - NavBar, CartDeveloper, button, badge, progress; Интеграция и сборка проекта.",
    technologies: [
      {
        _id: "3q",
        name: "HTML",
        percentageOfOwnership: "100",
				color: 'info'
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "100",
				color: 'success'
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "70",
				color: 'warning'
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "70",
				color: 'danger'
      },
    ],
    favorites: false,
  },
  {
    _id: "1w",
    name: "Ильин",
    surname: "Булат",
    age: "30",
    infoAboutMe:
      "Frontend разработчик. Быстро решаю любую поставленную задачу. Находчивый, душа компании.",
    photo: "bulat.png",
    linksToSocialNetworks: [
      {
        _id: "2q",
        name: "instagram",
        link: "Ссылка на инстаграм",
      },
      {
        _id: "2w",
        name: "facebook",
        link: "Ссылка на Вконтакте",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "whatsapp",
        link: "Телефон WhatSapp",
      },
    ],
    contributionToTheDevelopment:
      "Делает страницу конкретного человека.",
    technologies: [
      {
        _id: "3q",
        name: "HTML",
        percentageOfOwnership: "90",
				color: 'info'
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "90",
				color: 'success'
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "65",
				color: 'warning'
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "55",
				color: 'danger'
      },
    ],
    favorites: false,
  },
  {
    _id: "1e",
    name: "Максим",
    surname: "Онофрийчук",
    age: "30",
    infoAboutMe:
      "Frontend разработчик. Мастер своего дела. Командный игрок. Разбираюсь в технологии от А до Я.",
    photo: "maksim.jpg",
    linksToSocialNetworks: [
      {
        _id: "2q",
        name: "instagram",
        link: "Ссылка на инстаграм",
      },
      {
        _id: "2w",
        name: "facebook",
        link: "Ссылка на Вконтакте",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "whatsapp",
        link: "Телефон WhatSapp",
      },
    ],
    contributionToTheDevelopment:
      "Разрабатывает страницу для Избранного. Работа с LocalStorage",
    technologies: [
      {
        _id: "3q",
        name: "HTML",
        percentageOfOwnership: "100",
				color: 'info'
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "45",
				color: 'success'
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "91",
				color: 'warning'
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "83",
				color: 'danger'
      },
    ],
    favorites: false,
  },
];

function getAllDevelopers() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(developers)
    }, 0)
  })
}

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(developers.find((user) => user._id === id))
    }, 1000)
  })

export { getAllDevelopers, getById }
