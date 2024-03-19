const genSidebar = require('./getSideBar')

module.exports = [
	{
		text: '测试工作',
		collapsible: true,
		children: genSidebar('work/project/test', false)
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
