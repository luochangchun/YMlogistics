export default [
	{
		path: '/index/',
		component: require('./app.vue')
	},
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
	{
		path: '/register/',
		component: require('./pages/register.vue')
	},
	{
		path: '/often/',
		component: require('./pages/often.vue')
	},
	{
		path: '/addPhoto/',
		component: require('./pages/addPhoto.vue')
	},
	{
		path: '/history/',
		component: require('./pages/history.vue')
	},
	{
		path: '/setting/',
		component: require('./pages/setting.vue')
	},
	{
		path: '/pwd/',
		component: require('./pages/pwd.vue')
	},
	{
		path: '/vehicleInformation/',
		component: require('./pages/vehicleInformation.vue')
	},
	{
		path: '/audit/',
		component: require('./pages/audit.vue')
	},
	{
		path: '/offer/',
		component: require('./pages/offer.vue')
	},
	{
		path: '/city/',
		component: require('./pages/city.vue')
	},
	{
		path: '/oftenAdd/',
		component: require('./pages/oftenAdd.vue')
	},
	{
		path: '/carNum/',
		component: require('./pages/carNum.vue')
	},
	{
		path: '/receipt/',
		component: require('./pages/receipt.vue')
	},

	{
		path: '/photograph/',
		component: require('./pages/photograph.vue')
	},
	{
		path: '/carInformation/',
		component: require('./pages/carInformation.vue')
	},
	{
		path: '/add/',
		component: require('./pages/add.vue')
	},
	{
		path: '/login/',
		component: require('./pages/login.vue')
	},
	{
		path: '/driver/',
		component: require('./pages/driver.vue')
	},
	{
		path: '/competing/',
		component: require('./pages/competing.vue')
	},
	{
		path: '/work/',
		component: require('./pages/work.vue')
	},
	{
		path: '/sure/',
		component: require('./pages/sure.vue')
	},
	{
		path: '/bankRecord/',
		component: require('./pages/bankRecord.vue')
	},
	{
		path: '/oilRecord/',
		component: require('./pages/oilRecord.vue')
	},
	{
		path: '/oil/',
		component: require('./pages/oil.vue')
	},
	{
		path: '/app1/',
		component: require('./pages/app1.vue')
	},
	{
		path: '/abnormal/',
		component: require('./pages/abnormal.vue')
	},
	{
		path: '/bankAccount/',
		component: require('./pages/bankAccount.vue')
	},
  {
      path: '/enjoy/',
      component: require('./pages/enjoy.vue')
  },
  {
  	  path: '/vault/',
  	  component: require('./pages/vault.vue')
  },
  {
  	  path: '/mine/',
  	  component: require('./pages/mine.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]