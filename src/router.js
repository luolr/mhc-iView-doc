/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        redirect: '/mhc-iView-doc/guide/install',
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/guide/install',
        meta: {
            title: '安装'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/guide/start',
        meta: {
            title: '快速上手'
        },
        component: (resolve) => require(['./views/guide/start.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: (resolve) => require(['./views/components/color.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/font',
        meta: {
            title: '字体 Font'
        },
        component: (resolve) => require(['./views/components/font.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/button',
        meta: {
            title: '按钮 Button'
        },
        component: (resolve) => require(['./views/components/button.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/icon',
        meta: {
            title: '图标 Icon'
        },
        component: (resolve) => require(['./views/components/icon.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/grid',
        meta: {
            title: '栅格 Grid'
        },
        component: (resolve) => require(['./views/components/grid.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/layout',
        meta: {
            title: '布局 Layout'
        },
        component: (resolve) => require(['./views/components/layout.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/jsonEditor',
        meta: {
            title: 'jsonEditor json编辑器'
        },
        component: (resolve) => require(['./views/components/jsonEditor.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/calendar',
        meta: {
            title: 'calendar 日历'
        },
        component: (resolve) => require(['./views/components/calendar.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/waterfall',
        meta: {
            title: 'waterfall 瀑布流'
        },
        component: (resolve) => require(['./views/components/waterfall.vue'], resolve)
    },
    {
        path: '/mhc-iView-doc/components/exception',
        meta: {
            title: '异常页 Exception'
        },
        component: (resolve) => require(['./views/components/exception.vue'], resolve)
    },{
        path: '/mhc-iView-doc/components/splitPanel',
        meta: {
            title: '分割面板 splitPanel'
        },
        component: (resolve) => require(['./views/components/splitPanel.vue'], resolve)
    },
  {
    path: '/mhc-iView-doc/components/slider',
    meta: {
      title: '轮播图 Slider'
    },
    component: (resolve) => require(['./views/components/slider.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/viewImages',
    meta: {
      title: '照片预览 viewImages'
    },
    component: (resolve) => require(['./views/components/viewImages.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/myWorkbench',
    meta: {
      title: '工作台 menu'
    },
    component: (resolve) => require(['./views/components/myWorkbench.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/loading',
    meta: {
      title: 'loading'
    },
    component: (resolve) => require(['./views/components/loading.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/pullRefresh',
    meta: {
      title: 'pullRefresh'
    },
    component: (resolve) => require(['./views/components/pullRefresh.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/listview',
    meta: {
      title: 'listview'
    },
    component: (resolve) => require(['./views/components/listview.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/BlockHeader',
    meta: {
        title: '模块标题 BlockHeader'
    },
    component: (resolve) => require(['./views/components/BlockHeader.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/CityLinkage',
    meta: {
        title: '省市区联动 CityLinkage'
    },
    component: (resolve) => require(['./views/components/CityLinkage.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/CountDown',
    meta: {
        title: '倒计时 CountDown'
    },
    component: (resolve) => require(['./views/components/CountDown.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/ClampLines',
    meta: {
        title: '文本裁剪 ClampLines'
    },
    component: (resolve) => require(['./views/components/ClampLines.vue'], resolve)
  },
  {
    path: '/mhc-iView-doc/components/TextCopy',
    meta: {
        title: '文本复制 TextCopy'
    },
    component: (resolve) => require(['./views/components/TextCopy.vue'], resolve)
  },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
