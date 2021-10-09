
const developers = [
	{
		_id: '1q',
		name: 'Владислав',
		surname: 'Штукарев',
		age: '23',
		infoAboutMe: 'Верстальщик в университете. Adept JavaScript.',
		photo: 'Фото Владислава',
		linksToSocialNetworks: [
			{
				_id: '2q',
				name: 'Инстаграм',
				link: 'Ссылка на инстаграм'
			},
			{
				_id: '2w',
				name: 'Вконтакте',
				link: 'Ссылка на Вконтакте'
			},
			{
				_id: '2e',
				name: 'Телеграм',
				link: 'Ссылка на Телеграм'
			},
			{
				_id: '2r',
				name: 'WhatSapp',
				link: 'Телефон WhatSapp'
			}
		],
		contributionToTheDevelopment: 'Тимлид. Создавал главную страницу, Fake.api, компонент - NavBar',
		technologies: [
			{
				_id: '3q',
				name: 'HTML',
				percentageOfOwnership: '100'
			},
			{
				_id: '3w',
				name: 'CSS',
				percentageOfOwnership: '100'
			},
			{
				_id: '3e',
				name: 'JavaScript',
				percentageOfOwnership: '70'
			},
			{
				_id: '3r',
				name: 'React JS',
				percentageOfOwnership: '70'
			},
		],
		favorites: false
	},
	{
		_id: '1w',
		name: 'Булат',
		surname: 'Булат',
		age: '30',
		infoAboutMe: 'Frontend разработчик',
		photo: 'Фото Булата',
		linksToSocialNetworks: [
			{
				_id: '2q',
				name: 'Инстаграм',
				link: 'Ссылка на инстаграм'
			},
			{
				_id: '2w',
				name: 'Вконтакте',
				link: 'Ссылка на Вконтакте'
			},
			{
				_id: '2e',
				name: 'Телеграм',
				link: 'Ссылка на Телеграм'
			},
			{
				_id: '2r',
				name: 'WhatSapp',
				link: 'Телефон WhatSapp'
			}
		],
		contributionToTheDevelopment: 'Делает страницу конкретного человека. Разрабатывал компонент - Progress',
		technologies: [
			{
				_id: '3q',
				name: 'HTML',
				percentageOfOwnership: '100'
			},
			{
				_id: '3w',
				name: 'CSS',
				percentageOfOwnership: '100'
			},
			{
				_id: '3e',
				name: 'JavaScript',
				percentageOfOwnership: '70'
			},
			{
				_id: '3r',
				name: 'React JS',
				percentageOfOwnership: '70'
			},
		],
		favorites: false
	},
	{
		_id: '1e',
		name: 'Максим',
		surname: 'Онофрийчук',
		age: '30',
		infoAboutMe: 'Frontend разработчик',
		photo: 'Фото Максима',
		linksToSocialNetworks: [
			{
				_id: '2q',
				name: 'Инстаграм',
				link: 'Ссылка на инстаграм'
			},
			{
				_id: '2w',
				name: 'Вконтакте',
				link: 'Ссылка на Вконтакте'
			},
			{
				_id: '2e',
				name: 'Телеграм',
				link: 'Ссылка на Телеграм'
			},
			{
				_id: '2r',
				name: 'WhatSapp',
				link: 'Телефон WhatSapp'
			}
		],
		contributionToTheDevelopment: 'Разрабатывает страницу для Избранного. Работа с LocalStorage',
		technologies: [
			{
				_id: '3q',
				name: 'HTML',
				percentageOfOwnership: '100'
			},
			{
				_id: '3w',
				name: 'CSS',
				percentageOfOwnership: '100'
			},
			{
				_id: '3e',
				name: 'JavaScript',
				percentageOfOwnership: '70'
			},
			{
				_id: '3r',
				name: 'React JS',
				percentageOfOwnership: '70'
			},
		],
		favorites: false
	}
]


function getAllDevelopers (){
	return new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(developers)
		}, 0)
	})
}

export { getAllDevelopers }