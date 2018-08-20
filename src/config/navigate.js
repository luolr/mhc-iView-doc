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
                    icon: 'ios-color-fill-outline'
                },
                {
                    title: 'Font 字体',
                    path: '/mhc-iView-doc/components/font',
                    img: 'font.png',
                    icon: 'ios-at-outline'
                },
                {
                    title: 'Button 按钮',
                    path: '/mhc-iView-doc/components/button',
                    img: 'button.png',
                    icon: 'logo-youtube'
                },
                {
                    title: 'Icon 图标',
                    path: '/mhc-iView-doc/components/icon',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                },
                {
                    title: 'Exception 异常页',
                    path: '/mhc-iView-doc/components/exception',
                    img: 'error.png',
                    icon: 'ios-heart-outline'
                }
            ]
        },
    ]
};

export default list;
