const genSidebar = require('./getSideBar')

module.exports = [
	{
		text: 'Charles',
		collapsible: true,
		children: genSidebar('study/Charles', false)
	}
]
