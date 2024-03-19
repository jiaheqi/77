const genSidebar = require('./getSideBar')

module.exports = [
	{
		text: '测试工作',
		collapsible: true,
		children: genSidebar('work/project/test', false)
	}
]
