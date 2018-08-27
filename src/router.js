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
        path: '/mhc-iView-doc/components/exception',
        meta: {
            title: '异常页 Exception'
        },
        component: (resolve) => require(['./views/components/exception.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
