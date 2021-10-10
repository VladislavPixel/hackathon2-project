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
        name: "telegram",
        link: "Ссылка на инстаграм",
      },
      {
        _id: "2w",
        name: "vkontakte",
        link: "Ссылка на Вконтакте",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "WhatSapp",
        link: "Телефон WhatSapp",
      },
    ],
    contributionToTheDevelopment:
      "Тимлид. Создавал главную страницу; Fake.api; компонент - NavBar, CartDeveloper, button, budge;",
    technologies: [
      {
        _id: "3q",
        name: "HTML",
        percentageOfOwnership: "100",
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "100",
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "70",
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "70",
      },
    ],
  },
  {
    _id: "1w",
    name: "Ильин",
    surname: "Булат",
    age: "30",
    infoAboutMe:
      "Frontend разработчик. Быстро решаю любую поставленную задачу. Находчивый, душа компани.",
    photo: "bulat.png",
    linksToSocialNetworks: [
      {
        _id: "2q",
        name: "intagram",
        link: "Ссылка на инстаграм",
      },
      {
        _id: "2w",
        name: "vkontakte",
        link: "Ссылка на Вконтакте",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "WhatSapp",
        link: "Телефон WhatSapp",
      },
    ],
    contributionToTheDevelopment:
      "Делает страницу конкретного человека. Разрабатывал компонент - Progress",
    technologies: [
      {
        _id: "3q",
        name: "HTML",
        percentageOfOwnership: "100",
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "100",
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "70",
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "70",
      },
    ],
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
        name: "vkontakte",
        link: "Ссылка на Вконтакте",
      },
      {
        _id: "2e",
        name: "telegram",
        link: "Ссылка на Телеграм",
      },
      {
        _id: "2r",
        name: "WhatSapp",
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
      },
      {
        _id: "3w",
        name: "CSS",
        percentageOfOwnership: "100",
      },
      {
        _id: "3e",
        name: "JavaScript",
        percentageOfOwnership: "70",
      },
      {
        _id: "3r",
        name: "React JS",
        percentageOfOwnership: "70",
      },
    ],
  },
];

function getAllDevelopers() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(developers);
    }, 0);
  });
}

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(developers.find((user) => user._id === id));
    }, 1000);
  });

export { getAllDevelopers, getById };
