const genSidebar = require('./getSideBar')

module.exports = [
	{
		text: 'Charles',
		collapsible: true,
		children: genSidebar('study/Base/Charles', false)
	},
	{
		text: 'Mysql',
		collapsible: true,
		children: genSidebar('study/Base/Mysql', false)
	},
	{
		text: 'Python',
		collapsible: true,
		children: genSidebar('study/Base/Python', false)
	}
]
