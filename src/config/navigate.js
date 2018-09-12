// 定义左侧导航

const list = {
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/mhc-iView-doc/guide/install'
        },
        {
            title: '快速上手',
            titleEn: 'Quick Start',
            path: '/mhc-iView-doc/guide/start'
        }
    ],
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Color 色彩',
                    path: '/mhc-iView-doc/components/color',
                    img: 'color.png',
                    icon: 'android-color-palette'
                },
                {
                    title: 'Font 字体',
                    path: '/mhc-iView-doc/components/font',
                    img: 'font.png',
                    icon: 'at'
                },
                {
                    title: 'Button 按钮',
                    path: '/mhc-iView-doc/components/button',
                    img: 'button.png',
                    icon: 'social-youtube-outline'
                },
                {
                    title: 'Icon 图标',
                    path: '/mhc-iView-doc/components/icon',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                },
                {
                    title: 'Grid 栅格',
                    path: '/mhc-iView-doc/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: 'Layout 布局',
                    path: '/mhc-iView-doc/components/layout',
                    img: 'layout-new.png',
                    icon: 'ios-browsers-outline'
                },

      ]
    },
    {
      type: 'Components',
      title: '组件',
      list: [
        {
          title: 'JsonEditor Json编辑器',
          path: '/mhc-iView-doc/components/jsonEditor',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: 'Calendar 日历',
          path: '/mhc-iView-doc/components/calendar',
          img: 'error.png',
          icon: 'calendar'
        },
        {
          title: 'waterfall 瀑布流',
          path: '/mhc-iView-doc/components/waterfall',
          img: 'error.png',
          icon: 'android-apps'
        },
        {
          title: 'Exception 异常页',
          path: '/mhc-iView-doc/components/exception',
          img: 'error.png',
          icon: 'alert-circled'
        },
        {
          title: '轮播图 Slider',
          path: '/mhc-iView-doc/components/slider',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: '照片预览 viewImages',
          path: '/mhc-iView-doc/components/viewImages',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: '工作台 menu',
          path: '/mhc-iView-doc/components/myWorkbench',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: 'loading',
          path: '/mhc-iView-doc/components/lodding',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: '下拉刷新 pullRefresh',
          path: '/mhc-iView-doc/components/pullRefresh',
          img: 'error.png',
          icon: 'social-nodejs'
        },
        {
          title: '左右联动菜单 listview',
          path: '/mhc-iView-doc/components/listview',
          img: 'error.png',
          icon: 'social-nodejs'
        },
      ]
     }
    ]
};

export default list;
