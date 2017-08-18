export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
	{
		path: '/add/',
		component: require('./pages/add.vue')
	},
	{
		path: '/driver/',
		component: require('./pages/driver.vue')
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
		path: '/bidding/',
		component: require('./pages/bidding.vue')
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
      path: '/test123/',
      component: require('./pages/test123.vue')
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