webpackJsonp([8],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2250fff5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2250fff5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2250fff5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(596)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2250fff5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2250fff5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_grid_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/components/grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2250fff5", Component.options)
  } else {
    hotAPI.reload("data-v-2250fff5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var list = {
    beforeComponents: [{
        title: '安装',
        titleEn: 'Installation',
        path: '/mhc-iView-doc/guide/install'
    }, {
        title: '快速上手',
        titleEn: 'Quick Start',
        path: '/mhc-iView-doc/guide/start'
    }],
    components: [{
        type: 'Basic',
        title: '基础',
        list: [{
            title: 'Color 色彩',
            path: '/mhc-iView-doc/components/color',
            img: 'color.png',
            icon: 'android-color-palette'
        }, {
            title: 'Font 字体',
            path: '/mhc-iView-doc/components/font',
            img: 'font.png',
            icon: 'at'
        }, {
            title: 'Button 按钮',
            path: '/mhc-iView-doc/components/button',
            img: 'button.png',
            icon: 'social-youtube-outline'
        }, {
            title: 'Icon 图标',
            path: '/mhc-iView-doc/components/icon',
            img: 'icon.png',
            icon: 'ios-heart-outline'
        }, {
            title: 'Grid 栅格',
            path: '/mhc-iView-doc/components/grid',
            img: 'grid.png',
            icon: 'ios-grid-view-outline'
        }, {
            title: 'Layout 布局',
            path: '/mhc-iView-doc/components/layout',
            img: 'layout-new.png',
            icon: 'ios-browsers-outline'
        }]
    }, {
        type: 'Components',
        title: '组件',
        list: [{
            title: 'JsonEditor Json编辑器',
            path: '/mhc-iView-doc/components/jsonEditor',
            img: 'error.png',
            icon: 'social-nodejs'
        }, {
            title: 'Calendar 日历',
            path: '/mhc-iView-doc/components/calendar',
            img: 'error.png',
            icon: 'calendar'
        }, {
            title: 'waterfall 瀑布流',
            path: '/mhc-iView-doc/components/waterfall',
            img: 'error.png',
            icon: 'android-apps'
        }, {
            title: 'Exception 异常页',
            path: '/mhc-iView-doc/components/exception',
            img: 'error.png',
            icon: 'alert-circled'
        }]
    }]
};

exports.default = list;

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        handleClick: function handleClick() {
            _bus2.default.$emit('on-donate-show');
        }
    }
};

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(501);

var _pinyinUtil2 = _interopRequireDefault(_pinyinUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        title: String,
        h1: Boolean,
        h2: Boolean,
        h3: Boolean,
        h4: Boolean,
        h5: Boolean,
        h6: Boolean
    },
    computed: {
        title_link: function title_link() {
            var title = _pinyinUtil2.default.getFirstLetter(this.title);
            return title.replace(/\s/g, '_');
        }
    }
};

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    methods: {
        handleChange: function handleChange(name) {
            if (name === 'iview') {
                window.location.href = 'https://www.iviewui.com';
            } else if (name === 'iview-weapp') {
                _hmt.push(['_trackEvent', 'menu-weapp', 'click']);
                window.location.href = 'https://weapp.iviewui.com?from=iview';
            } else if (name === 'inmap') {
                _hmt.push(['_trackEvent', 'menu-inmap', 'click']);
                window.location.href = 'http://inmap.talkingdata.com?from=iview';
            }
        }
    }
};

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(530);

var _navigate2 = _interopRequireDefault(_navigate);

var _navigate3 = __webpack_require__(492);

var _navigate4 = _interopRequireDefault(_navigate3);

var _menu = __webpack_require__(529);

var _menu2 = _interopRequireDefault(_menu);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    inject: ['app'],
    components: {
        Navigate: _navigate2.default,
        navMenu: _menu2.default
    },
    data: function data() {
        return {
            list: [],
            need_api: false,
            donate: false,
            ask: false,
            activeKey: '',
            lang: this.$lang,
            adCarousel: 0,
            ad_index: this.app.ad_index
        };
    },

    methods: {
        handleModalClose: function handleModalClose() {
            this.donate = false;
        },
        handleAskClose: function handleAskClose() {
            this.ask = false;
        },
        updateActiveNav: function updateActiveNav() {
            var componentList = ['/docs/guide/install', '/docs/guide/install-en', '/docs/guide/start', '/docs/guide/start-en', '/docs/guide/i18n', '/docs/guide/i18n-en', '/docs/guide/theme', '/docs/guide/theme-en', '/docs/guide/iview-loader', '/docs/guide/iview-loader-en', '/overview', '/overview-en', '/docs/guide/update', '/docs/guide/update-en', '/docs/guide/global', '/docs/guide/global-en'];

            var route = this.$route.path;
            if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                this.activeKey = 'component';
            } else if (route.indexOf('practice') > -1) {
                this.activeKey = 'practice';
            } else if (route.indexOf('live') > -1) {
                this.activeKey = 'live';
            } else {
                this.activeKey = 'guide';
            }
        },
        handleNavMenuChange: function handleNavMenuChange(val) {
            this.activeKey = val;
        },
        handleClickLink: function handleClickLink(id) {
            var top = document.getElementById(id).offsetTop;
            window.location.hash = id;
            var scroll_top = top + 15;
            if (id === 'API') scroll_top -= 150;
            window.scrollTo(0, scroll_top);
        },
        handleAsideAd: function handleAsideAd(name) {
            var isQQGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            _hmt.push(['_trackEvent', name, 'click']);
            if (isQQGroup) {
                this.ask = true;
            }
        }
    },
    created: function created() {
        this.lang = this.$lang;
    },
    mounted: function mounted() {
        var _this = this;

        this.updateActiveNav();

        var examples = this.$slots.default[0].elm.querySelectorAll('.example');

        if (examples.length) {
            this.need_api = true;
            for (var i = 0; i < examples.length; i++) {
                var path = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                var title = examples[i].querySelectorAll('header span a')[0].getAttribute('data-title').replace('#', '');
                this.list.push({
                    title: title,
                    path: path
                });
            }
        } else {
            this.need_api = false;
            var headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
            for (var _i = 0; _i < headers.length; _i++) {
                var _title = headers[_i].querySelectorAll('h2')[0];
                if (_title) {
                    var title_name = _title.innerHTML;
                    var _path = headers[_i].querySelectorAll('h2')[0].getAttribute('id');
                    this.list.push({
                        title: title_name,
                        path: _path
                    });
                }
            }
        }

        _bus2.default.$on('on-donate-show', function () {
            _this.donate = true;
        });
    }
};

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(198);

var _keys2 = _interopRequireDefault(_keys);

var _hljs = __webpack_require__(135);

var _hljs2 = _interopRequireDefault(_hljs);

var _clipboard = __webpack_require__(133);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _tagMap = __webpack_require__(510);

var _tagMap2 = _interopRequireDefault(_tagMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function replaceTag(source, tagMap) {
    (0, _keys2.default)(tagMap).forEach(function (i) {
        source = source.replace(new RegExp('<' + i + '(\\W+)', 'g'), '<' + tagMap[i] + '$1').replace(new RegExp('</' + i + '>', 'g'), '</' + tagMap[i] + '>');
    });
    return source;
}

exports.default = {
    props: {
        lang: {
            type: String,
            default: 'javascript'
        },
        bg: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            openScale: false,
            code: '',
            copied: false,
            docLang: this.$lang,
            title: 'Code'
        };
    },

    computed: {
        language: function language() {
            if (this.lang == 'auto') {
                return '';
            } else {
                return this.lang;
            }
        }
    },
    mounted: function mounted() {
        this.code = this.$refs.code.innerHTML.replace(/\n/, '');
        this.$refs.code.innerHTML = this.code;
        _hljs2.default.highlightBlock(this.$refs.code);

        this.$refs.code2.innerHTML = this.code;
        _hljs2.default.highlightBlock(this.$refs.code2);

        var Demo = this.$parent.$parent.$parent;
        if (Demo.$options.name === 'Demo') {
            this.title = Demo.title;
        }
    },

    methods: {
        clip: function clip() {
            var _this = this;

            var code = this.code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
            var clipboard = new _clipboard2.default('.copy', {
                text: function text() {
                    return code;
                }
            });

            clipboard.on('success', function (e) {
                e.clearSelection();
                clipboard.destroy();
                _this.copied = true;
                if (_this.docLang === 'zh-CN') {
                    _this.$Message.success('代码已复制到剪贴板');
                } else {
                    _this.$Message.success('Code copied');
                }
                setTimeout(function () {
                    _this.copied = false;
                }, 2000);
            });
        },
        scale: function scale() {
            this.openScale = true;
        },
        getSource: function getSource(source, type) {
            var regex = new RegExp('<' + type + '[^>]*>');
            var openingTag = source.match(regex);

            if (!openingTag) return '';else openingTag = openingTag[0];

            return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf('</' + type + '>'));
        },
        openFiddle: function openFiddle() {
            var source = this.$refs.code.textContent;

            var script = this.getSource(source, 'script').replace(/export default/, 'var Main =');
            var style = this.getSource(source, 'style');
            var template = '<div id="app">' + replaceTag(this.getSource(source, 'template'), _tagMap2.default) + '</div>';

            var html = ['<script src="//unpkg.com/vue/dist/vue.js"></scr' + 'ipt>', '<script src="//unpkg.com/iview/dist/iview.min.js"></scr' + 'ipt>', template].join('\n');

            var css = '@import url("//unpkg.com/iview/dist/styles/iview.css");\n#app{padding: 32px;}' + style;
            var js = script + '\nvar Component = Vue.extend(Main)\nnew Component().$mount(\'#app\')';

            var data = {
                js: js,
                css: css,
                html: html,
                panel_css: 1,
                panel_js: 3
            };

            var formAttributes = {
                method: 'post',
                action: 'https://jsfiddle.net/api/post/library/pure/',
                target: '_blank',
                id: 'fiddle-form',
                style: 'display: none;'
            };

            var node = document.createElement('textarea');
            var form = document.createElement('form');
            for (var attr in formAttributes) {
                form.setAttribute(attr, formAttributes[attr]);
            }

            for (var name in data) {
                node.name = name;
                node.value = data[name].toString();
                form.appendChild(node.cloneNode());
            }

            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        }
    }
};

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(492);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(500);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _applications = __webpack_require__(526);

var _applications2 = _interopRequireDefault(_applications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    inject: ['app'],
    components: { ApplicationMenu: _applications2.default },
    props: {
        activeKey: String
    },
    data: function data() {
        return {
            search: '',
            navigateList: [],
            liveDot: false,
            currentActiveKey: this.activeKey,
            searchText: this.$t('index.search'),
            notFoundText: this.$t('index.notFound'),
            lang: this.$lang
        };
    },

    watch: {
        activeKey: function activeKey(val) {
            this.currentActiveKey = val;
        },
        currentActiveKey: function currentActiveKey(val) {
            this.$emit('on-change', val);
        }
    },
    methods: {
        handleSearch: function handleSearch(path) {
            var _this = this;

            if (this.lang === 'en-US') path += '-en';
            this.search = '';
            this.$refs.select.setQuery('');
            this.$nextTick(function () {
                setTimeout(function () {
                    _this.$router.push(path);
                }, 300);
            });
        },
        handleSelect: function handleSelect(type) {
            var _this2 = this;

            if (type === 'dev') return;
            var pathSuffix = this.lang === 'zh-CN' ? '' : '-en';

            if (type === 'donate') {
                _bus2.default.$emit('on-donate-show');
            } else if (type === 'github') {
                window.open('https://github.com/iview/iview');
            } else if (type === 'guide') {
                this.$router.push(_navigate2.default.guide[0].path + pathSuffix);
            } else if (type === 'component') {
                this.$router.push(_navigate2.default.beforeComponents[0].path + pathSuffix);
            } else if (type === 'practice') {
                this.$router.push(_navigate2.default.practice[0].path + pathSuffix);
            } else if (type === 'cli') {
                this.$router.push('/cli' + pathSuffix);
            } else if (type === 'live') {
                this.$router.push('/live');
            } else if (type === 'iview-loader') {
                this.$router.push('/docs/guide/iview-loader' + pathSuffix);
            } else if (type === 'iview-admin') {
                window.open('https://github.com/iview/iview-admin');
            } else if (type === 'iview-area') {
                window.open('https://github.com/iview/iview-area');
            } else if (type === 'iview-editor') {
                window.open('https://github.com/iview/iview-editor');
            }
            this.$nextTick(function () {
                _this2.updateActiveNav();
            });
        },
        updateActiveNav: function updateActiveNav() {
            var componentList = ['/mhc-iView-doc/guide/install', '/mhc-iView-doc/guide/start', '/mhc-iView-doc/guide/i18n', '/mhc-iView-doc/guide/theme', '/mhc-iView-doc/guide/iview-loader', '/mhc-iView-doc/overview', '/mhc-iView-doc/guide/update'];

            var route = this.$route.path;
            if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                this.currentActiveKey = 'component';
            } else if (route.indexOf('practice') > -1) {
                this.currentActiveKey = 'practice';
            } else if (route.indexOf('live') > -1) {
                this.currentActiveKey = 'live';
            } else {
                this.currentActiveKey = 'guide';
            }
        },
        handleVersion: function handleVersion(v) {
            if (v == 1) {
                window.location.href = 'http://v1.iviewui.com';
            }
            if (v == 2) {
                window.location.href = 'http://v2.iviewui.com';
            }
        },
        handleGoToGitHub: function handleGoToGitHub() {
            _hmt.push(['_trackEvent', 'menu-go-github', 'click']);
            window.open('https://github.com/luolr/mhc-iView-doc');
        },
        handleGoToTwitter: function handleGoToTwitter() {
            _hmt.push(['_trackEvent', 'menu-go-twitter', 'click']);
            window.open('https://twitter.com/iViewUI');
        },
        handleGoToMenu: function handleGoToMenu(name) {
            if (this.lang === 'zh-CN') {
                return name;
            } else {
                return name + '-en';
            }
        },
        handleToggleSetting: function handleToggleSetting() {
            this.app.handleOpenSetting();
        }
    },
    created: function created() {
        this.lang = this.$lang;
        var list = [];
        for (var i = 0; i < _navigate2.default.components.length; i++) {
            for (var j = 0; j < _navigate2.default.components[i].list.length; j++) {
                list.push(_navigate2.default.components[i].list[j]);
            }
        }
        this.navigateList = list;

        var liveDotVersion = window.localStorage.getItem('liveVersion');
        if (liveDotVersion) {
            this.liveDot = liveDotVersion < _config2.default.liveVersion;
        } else {
            this.liveDot = true;
        }
    }
};

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(492);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(500);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _adSend = __webpack_require__(524);

var _adSend2 = _interopRequireDefault(_adSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { adSend: _adSend2.default },
    props: {
        type: {
            type: [String, Number]
        }
    },
    data: function data() {
        return {
            navigate: _navigate2.default,
            showDot: false,
            activeKey: this.$route.path,
            lang: this.$lang,
            showAd: false
        };
    },

    methods: {
        handleDonate: function handleDonate() {
            _bus2.default.$emit('on-donate-show');
        },
        handleSelect: function handleSelect(path) {
            var _this = this;

            if (this.lang === 'en-US') path += '-en';
            this.$nextTick(function () {
                _this.$router.push(path);
            });
        },
        handleAd: function handleAd() {
            _hmt.push(['_trackEvent', 'vue-juejin', 'click']);

            window.open('https://juejin.im/welcome/frontend?utm_source=iview&utm_medium=banner&utm_content=huoyue&utm_campaign=q4_website');
        },
        handleAdBmqb: function handleAdBmqb() {
            _hmt.push(['_trackEvent', 'vue-bmqb', 'click']);
            window.open('https://www.bmqb.com/a/jobs?from=iview');
        },
        handleBuy: function handleBuy(type) {
            if (type === 'taobao') {
                window.open('https://detail.tmall.com/item.htm?id=559480603657');
            } else if (type === 'jd') {
                window.open('https://item.jd.com/12215519.html');
            } else if (type === 'video') {
                window.open('https://segmentfault.com/ls/1650000011074057');
            } else if (type === 'dangdang') {
                window.open('http://product.dangdang.com/25180286.html');
            }
        },
        handleGoToMenu: function handleGoToMenu(name) {
            if (this.lang === 'zh-CN') {
                return name;
            } else {
                return name + '-en';
            }
        }
    },
    created: function created() {
        this.lang = this.$lang;
        var path = this.lang === 'zh-CN' ? this.$route.path : this.$route.path.split('-en')[0];
        this.activeKey = path;
    },
    mounted: function mounted() {
        var dotVersion = window.localStorage.getItem('version');
        if (dotVersion) {
            this.showDot = dotVersion < _config2.default.version;
        } else {
            this.showDot = true;
        }
    }
};

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _env = __webpack_require__(134);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    env: _env2.default,
    filePath: 'https://file.iviewui.com/file/',
    version: 50,
    liveVersion: 1
};

if (config.env === 'development') {
    config.filePath = 'http://127.0.0.1:9800/overview/';
}

exports.default = config;

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(89);

var _typeof3 = _interopRequireDefault(_typeof2);

var _pinyin_dict_firstletter = __webpack_require__(511);

var _pinyin_dict_firstletter2 = _interopRequireDefault(_pinyin_dict_firstletter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toneMap = {
    "ā": "a1",
    "á": "a2",
    "ǎ": "a3",
    "à": "a4",
    "ō": "o1",
    "ó": "o2",
    "ǒ": "o3",
    "ò": "o4",
    "ē": "e1",
    "é": "e2",
    "ě": "e3",
    "è": "e4",
    "ī": "i1",
    "í": "i2",
    "ǐ": "i3",
    "ì": "i4",
    "ū": "u1",
    "ú": "u2",
    "ǔ": "u3",
    "ù": "u4",
    "ü": "v0",
    "ǖ": "v1",
    "ǘ": "v2",
    "ǚ": "v3",
    "ǜ": "v4",
    "ń": "n2",
    "ň": "n3",
    "": "m2"
};

var dict = {};
var pinyinUtil = {
    parseDict: function parseDict() {
        if (_pinyin_dict_firstletter2.default) {
            dict.firstletter = _pinyin_dict_firstletter2.default;
        }

        if (window.pinyin_dict_notone) {
            dict.notone = {};
            dict.py2hz = pinyin_dict_notone;
            for (var i in pinyin_dict_notone) {
                var temp = pinyin_dict_notone[i];
                for (var j = 0, len = temp.length; j < len; j++) {
                    if (!dict.notone[temp[j]]) dict.notone[temp[j]] = i;
                }
            }
        }

        if (window.pinyin_dict_withtone) {
            dict.withtone = {};
            var temp = pinyin_dict_withtone.split(',');
            for (var i = 0, len = temp.length; i < len; i++) {
                dict.withtone[String.fromCharCode(i + 19968)] = temp[i];
            }

            if (window.pinyin_dict_notone) {
                dict.py2hz = pinyin_dict_notone;
            } else {
                var notone = pinyinUtil.removeTone(pinyin_dict_withtone).split(',');
                var py2hz = {},
                    py,
                    hz;
                for (var i = 0, len = notone.length; i < len; i++) {
                    hz = String.fromCharCode(i + 19968);
                    py = notone[i].split(' ');
                    for (var j = 0; j < py.length; j++) {
                        py2hz[py[j]] = (py2hz[py[j]] || '') + hz;
                    }
                }
                dict.py2hz = py2hz;
            }
        }
    },

    getPinyin: function getPinyin(chinese, splitter, withtone, polyphone) {
        if (!chinese || /^ +$/g.test(chinese)) return '';
        splitter = splitter == undefined ? ' ' : splitter;
        withtone = withtone == undefined ? true : withtone;
        polyphone = polyphone == undefined ? false : polyphone;
        var result = [];
        if (dict.withtone) {
                var noChinese = '';
                for (var i = 0, len = chinese.length; i < len; i++) {
                    var pinyin = dict.withtone[chinese[i]];
                    if (pinyin) {
                        if (!polyphone) pinyin = pinyin.replace(/ .*$/g, '');
                        if (!withtone) pinyin = this.removeTone(pinyin);
                        noChinese && (result.push(noChinese), noChinese = '');
                        result.push(pinyin);
                    } else if (!chinese[i] || /^ +$/g.test(chinese[i])) {
                        noChinese && (result.push(noChinese), noChinese = '');
                    } else {
                        noChinese += chinese[i];
                    }
                }
                if (noChinese) {
                    result.push(noChinese);
                    noChinese = '';
                }
            } else if (dict.notone) {
                if (withtone) console.warn('pinyin_dict_notone 字典文件不支持声调！');
                if (polyphone) console.warn('pinyin_dict_notone 字典文件不支持多音字！');
                var noChinese = '';
                for (var i = 0, len = chinese.length; i < len; i++) {
                    var temp = chinese.charAt(i),
                        pinyin = dict.notone[temp];
                    if (pinyin) {
                        noChinese && (result.push(noChinese), noChinese = '');
                        result.push(pinyin);
                    } else if (!temp || /^ +$/g.test(temp)) {
                        noChinese && (result.push(noChinese), noChinese = '');
                    } else {
                        noChinese += temp;
                    }
                }

                if (noChinese) {
                    result.push(noChinese);
                    noChinese = '';
                }
            } else {
            throw '抱歉，未找到合适的拼音字典文件！';
        }
        if (!polyphone) return result.join(splitter);else {
            if (window.pinyin_dict_polyphone) return parsePolyphone(chinese, result, splitter, withtone);else return handlePolyphone(result, ' ', splitter);
        }
    },

    getFirstLetter: function getFirstLetter(str, polyphone) {
        polyphone = polyphone == undefined ? false : polyphone;
        if (!str || /^ +$/g.test(str)) return '';
        if (dict.firstletter) {
                var result = [];
                for (var i = 0; i < str.length; i++) {
                    var unicode = str.charCodeAt(i);
                    var ch = str.charAt(i);
                    if (unicode >= 19968 && unicode <= 40869) {
                        ch = dict.firstletter.all.charAt(unicode - 19968);
                        if (polyphone) ch = dict.firstletter.polyphone[unicode] || ch;
                    }
                    result.push(ch);
                }
                if (!polyphone) return result.join('');else return handlePolyphone(result, '', '');
            } else {
            var py = this.getPinyin(str, ' ', false, polyphone);
            py = py instanceof Array ? py : [py];
            var result = [];
            for (var i = 0; i < py.length; i++) {
                result.push(py[i].replace(/(^| )(\w)\w*/g, function (m, $1, $2) {
                    return $2.toUpperCase();
                }));
            }
            if (!polyphone) return result[0];else return simpleUnique(result);
        }
    },

    getHanzi: function getHanzi(pinyin) {
        if (!dict.py2hz) {
            throw '抱歉，未找到合适的拼音字典文件！';
        }
        return dict.py2hz[this.removeTone(pinyin)] || '';
    },

    getSameVoiceWord: function getSameVoiceWord(hz, sameTone) {
        sameTone = sameTone || false;
        return this.getHanzi(this.getPinyin(hz, ' ', false));
    },

    removeTone: function removeTone(pinyin) {
        return pinyin.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜńň]/g, function (m) {
            return toneMap[m][0];
        });
    },

    getTone: function getTone(pinyinWithoutTone) {
        var newToneMap = {};
        for (var i in toneMap) {
            newToneMap[toneMap[i]] = i;
        }return (pinyinWithoutTone || '').replace(/[a-z]\d/g, function (m) {
            return newToneMap[m] || m;
        });
    }
};

function handlePolyphone(array, splitter, joinChar) {
    splitter = splitter || '';
    var result = [''],
        temp = [];
    for (var i = 0; i < array.length; i++) {
        temp = [];
        var t = array[i].split(splitter);
        for (var j = 0; j < t.length; j++) {
            for (var k = 0; k < result.length; k++) {
                temp.push(result[k] + (result[k] ? joinChar : '') + t[j]);
            }
        }
        result = temp;
    }
    return simpleUnique(result);
}

function parsePolyphone(chinese, result, splitter, withtone) {
    var poly = window.pinyin_dict_polyphone;
    var max = 7;
    var temp = poly[chinese];
    if (temp) {
            temp = temp.split(' ');
            for (var i = 0; i < temp.length; i++) {
                result[i] = temp[i] || result[i];
                if (!withtone) result[i] = pinyinUtil.removeTone(result[i]);
            }
            return result.join(splitter);
        }
    for (var i = 0; i < chinese.length; i++) {
        temp = '';
        for (var j = 0; j < max && i + j < chinese.length; j++) {
            if (!/^[\u2E80-\u9FFF]+$/.test(chinese[i + j])) break;
            temp += chinese[i + j];
            var res = poly[temp];
            if (res) {
                    res = res.split(' ');
                    for (var k = 0; k <= j; k++) {
                        if (res[k]) result[i + k] = withtone ? res[k] : pinyinUtil.removeTone(res[k]);
                    }
                    break;
                }
        }
    }

    for (var i = 0; i < result.length; i++) {
        result[i] = result[i].replace(/ .*$/g, '');
    }
    return result.join(splitter);
}

function simpleUnique(array) {
    var result = [];
    var hash = {};
    for (var i = 0; i < array.length; i++) {
        var key = (0, _typeof3.default)(array[i]) + array[i];
        if (!hash[key]) {
            result.push(array[i]);
            hash[key] = true;
        }
    }
    return result;
}

pinyinUtil.parseDict();
pinyinUtil.dict = dict;

exports.default = pinyinUtil;

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(501);

var _pinyinUtil2 = _interopRequireDefault(_pinyinUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'Demo',
    inject: ['app'],
    props: {
        title: {
            type: String,
            default: ''
        },
        vertical: {
            type: Boolean,
            default: false
        },
        hideCode: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showCode: false,
            showMore: true,
            demo_height: 0,
            code_height: 0,
            ready: false,
            lang: this.$lang
        };
    },

    computed: {
        isCodeHide: function isCodeHide() {
            if (this.hideCode) {
                return true;
            } else {
                return this.app.settingData.code == '1' ? false : true;
            }
        },
        isVertical: function isVertical() {
            if (this.vertical) {
                return true;
            } else {
                return this.app.settingData.code == '1' ? false : true;
            }
        },
        settingCode: function settingCode() {
            return this.app.settingData.code;
        },
        codeHeight: function codeHeight() {
            var style = {};

            if (this.ready) {
                if (this.showCode) {
                    style.height = this.code_height + 'px';
                } else {
                    style.height = this.demo_height + 'px';
                }
            }

            return style;
        },
        style: function style() {
            var style = {
                opacity: 1
            };
            if (this.isCodeHide && !this.showCode) {
                style.opacity = 0;
            }
            return style;
        },
        title_link: function title_link() {
            var title = _pinyinUtil2.default.getFirstLetter(this.title);
            return title.replace(/\s/g, '_');
        }
    },
    mounted: function mounted() {
        this.init();
    },

    methods: {
        init: function init() {
            var _this = this;

            this.$nextTick(function () {
                var demo_height = _this.$children[0].$children[0].$el.clientHeight;
                var code_height = _this.$children[0].$children[1].$el.clientHeight + 20;

                _this.code_height = code_height;

                if (code_height <= demo_height && !_this.isCodeHide) {
                    _this.showMore = false;
                }

                _this.demo_height = _this.isCodeHide ? 30 : demo_height;
                _this.ready = true;
            });
        }
    },
    watch: {
        settingCode: function settingCode() {
            this.showCode = false;
            this.showMore = true;
            this.ready = false;
            this.init();
        }
    }
};

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "anchor" }, [_vm.h1 ? _c("h1", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.h2 ? _c("h2", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.h3 ? _c("h3", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.h4 ? _c("h4", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.h5 ? _c("h5", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm.h6 ? _c("h6", { attrs: { id: _vm.title_link } }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c("a", { attrs: { href: "#" + _vm.title_link } }, [_vm._v("#")])], 2);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-27dd2a45", esExports);
  }
}

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "navigate" }, [_vm.lang === "zh-CN" ? _c("div", { staticClass: "asd asd-mb", on: { click: _vm.handleAd } }, [_vm._m(0)]) : _c("div", { staticClass: "asd-car" }, [_c("iframe", {
    attrs: {
      src: "http://file.iviewui.com/ad5.html",
      frameborder: "0",
      width: "100%",
      height: "100%"
    }
  })]), _vm._v(" "), _vm.type === "component" || _vm.type === "guide" ? _c("Menu", {
    attrs: { width: "auto", "active-name": _vm.activeKey },
    on: { "on-select": _vm.handleSelect }
  }, [_vm._l(_vm.navigate.beforeComponents, function (item) {
    return _c("Menu-item", {
      key: item.path,
      attrs: {
        name: item.path,
        to: _vm.handleGoToMenu(item.path)
      }
    }, [item.title !== "更新日志" ? [_vm.lang === "zh-CN" ? [_vm._v(_vm._s(item.title))] : [_vm._v(_vm._s(item.titleEn))]] : _vm._e(), _vm._v(" "), item.title === "更新日志" ? [_c("Badge", { attrs: { dot: _vm.showDot } }, [_vm.lang === "zh-CN" ? [_vm._v(_vm._s(item.title))] : [_vm._v(_vm._s(item.titleEn))]], 2)] : _vm._e()], 2);
  }), _vm._v(" "), _c("div", { staticClass: "navigate-group" }, [_vm._v(_vm._s(_vm.$t("index.component")))]), _vm._v(" "), _vm._l(_vm.navigate.components, function (item) {
    return _c("Menu-group", {
      key: item.type,
      attrs: {
        title: _vm.lang === "zh-CN" ? item.title : item.type
      }
    }, _vm._l(item.list, function (component) {
      return _c("Menu-item", {
        key: component.path,
        attrs: {
          name: component.path,
          to: _vm.handleGoToMenu(component.path)
        }
      }, [_c("i", {
        staticClass: "ivu-icon",
        class: "ivu-icon-" + component.icon
      }), _vm._v(" "), _vm.lang === "zh-CN" ? [_vm._v("\n                    " + _vm._s(component.title.split(" ")[0]) + "\n                    "), _c("span", { staticClass: "navigate-group-span" }, [_vm._v(_vm._s(component.title.split(" ")[1]))])] : [_vm._v(_vm._s(component.title.split(" ")[0]))]], 2);
    }));
  })], 2) : _vm._e(), _vm._v(" "), _vm.type === "practice" ? _c("Menu", {
    attrs: { width: "auto", "active-name": _vm.activeKey },
    on: { "on-select": _vm.handleSelect }
  }, _vm._l(_vm.navigate.practice, function (item) {
    return _c("Menu-item", {
      key: item.path,
      attrs: { name: item.path, to: _vm.handleGoToMenu(item.path) }
    }, [_vm.lang === "zh-CN" ? [_vm._v(_vm._s(item.title))] : [_vm._v(_vm._s(item.titleEn))]], 2);
  })) : _vm._e(), _vm._v(" "), _vm.type === "live" ? _c("Menu", {
    attrs: { width: "auto", "active-name": _vm.activeKey },
    on: { "on-select": _vm.handleSelect }
  }, _vm._l(_vm.navigate.live, function (item) {
    return _c("Menu-item", {
      key: item.path,
      attrs: { name: item.path, to: _vm.handleGoToMenu(item.path) }
    }, [_vm.lang === "zh-CN" ? [_vm._v(_vm._s(item.title))] : [_vm._v(_vm._s(item.titleEn))]], 2);
  })) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "asd-main" }, [_c("img", {
    staticStyle: { "border-radius": "6px" },
    attrs: { src: __webpack_require__(520) }
  })]);
}];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-39279dfe", esExports);
  }
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { staticClass: "wrapper" }, [_c("div", { staticClass: "wrapper-header" }, [_c("nav-menu", {
    attrs: { "active-key": _vm.activeKey },
    on: { "on-change": _vm.handleNavMenuChange }
  })], 1), _vm._v(" "), _c("div", { staticClass: "wrapper-container" }, [_c("Row", [_c("i-col", { staticClass: "wrapper-navigate", attrs: { span: "4" } }, [_c("Navigate", { attrs: { type: _vm.activeKey } })], 1), _vm._v(" "), _c("i-col", { attrs: { span: "17" } }, [_c("div", { staticClass: "wrapper-content ivu-article" }, [_vm._t("default")], 2)]), _vm._v(" "), _c("i-col", { attrs: { span: "3" } }, [_c("Affix", { attrs: { "offset-top": 75 } }, [_vm.list.length ? _c("div", { staticClass: "catalogue" }) : _vm._e(), _vm._v(" "), _vm.lang === "zh-CN" ? [_c("div", { staticStyle: { "margin-top": "20px" } })] : _vm._e()], 2)], 1)], 1)], 1)]), _vm._v(" "), _c("div", { staticClass: "footer" }, [_c("div", { staticClass: "footer-main" }, [_c("Row", [_c("i-col", { attrs: { span: "5" } }, [_c("h4", [_c("Icon", { attrs: { type: "logo-github" } }), _vm._v("\n                        GitHub\n                    ")], 1), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview",
      target: "_blank"
    }
  }, [_vm._v("iView")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview-cli",
      target: "_blank"
    }
  }, [_vm._v("iView Cli")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview-admin",
      target: "_blank"
    }
  }, [_vm._v("iView Admin")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview-doc",
      target: "_blank"
    }
  }, [_vm._v("iView Doc")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview-project",
      target: "_blank"
    }
  }, [_vm._v("iView Project")])])])]), _vm._v(" "), _c("i-col", { attrs: { span: "5" } }, [_c("h4", [_c("Icon", { attrs: { type: "ios-link" } }), _vm._v("\n                        " + _vm._s(_vm.$t("index.links")) + "\n                    ")], 1), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "https://www.talkingdata.com/",
      target: "_blank"
    }
  }, [_vm._v("TalkingData")]), _vm._v(" - " + _vm._s(_vm.$t("index.td")) + "\n                        ")]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "http://mi.talkingdata.com/",
      target: "_blank"
    }
  }, [_vm._v("Marketing Intelligence")]), _vm._v(" - " + _vm._s(_vm.$t("index.td_mi")) + "\n                        ")]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/TalkingData/inmap/",
      target: "_blank"
    }
  }, [_vm._v("inMap")]), _vm._v(" - " + _vm._s(_vm.$t("index.inmap")) + "\n                        ")]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/TalkingData/Fregata",
      target: "_blank"
    }
  }, [_vm._v("Fregata")]), _vm._v(" - " + _vm._s(_vm.$t("index.Fregata")) + "\n                        ")]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/TalkingData/Myna",
      target: "_blank"
    }
  }, [_vm._v("Myna")]), _vm._v(" - " + _vm._s(_vm.$t("index.Myna")) + "\n                        ")]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/TalkingData/owl",
      target: "_blank"
    }
  }, [_vm._v("OWL")]), _vm._v(" - " + _vm._s(_vm.$t("index.OWL")) + "\n                        ")])])]), _vm._v(" "), _c("i-col", { attrs: { span: "5", offset: "2" } }, [_c("h4", [_c("Icon", { attrs: { type: "ios-chatbubbles" } }), _vm._v("\n                        " + _vm._s(_vm.$t("index.community")) + "\n                    ")], 1), _vm._v(" "), _c("ul", [_c("li", [_c("a", {
    attrs: {
      href: "https://github.com/iview/iview/issues",
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("index.feedback")))])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://www.iviewui.com/new-issue",
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("index.bug")))])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://gitter.im/iview/iview",
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("index.chat")))])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://segmentfault.com/t/iview",
      target: "_blank"
    }
  }, [_vm._v("SegmentFault")])])])]), _vm._v(" "), _c("i-col", { attrs: { span: "5", offset: "2" } }, [_c("div", { staticClass: "footer-aside" }, [_c("div", { staticClass: "footer-logo" }, [_c("img", { attrs: { src: __webpack_require__(523) } })]), _vm._v(" "), _c("div", { staticClass: "footer-author" }, [_c("a", { attrs: { href: "https://www.talkingdata.com/" } }, [_c("img", {
    attrs: { src: __webpack_require__(522) }
  })])])])])], 1)], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6338ec16", esExports);
  }
}

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "advertisement-ad",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.handleClick($event);
      }
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-642dc412", esExports);
  }
}

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Menu", {
    attrs: { mode: "horizontal", "active-name": _vm.currentActiveKey },
    on: { "on-select": _vm.handleSelect }
  }, [_c("div", { staticClass: "wrapper-header-nav" }, [_c("router-link", { staticClass: "wrapper-header-nav-logo", attrs: { to: "/" } }, [_c("img", { attrs: { src: __webpack_require__(521) } })]), _vm._v(" "), _c("ApplicationMenu"), _vm._v(" "), _c("div", { staticClass: "wrapper-header-nav-search" }, [_c("i-select", {
    ref: "select",
    attrs: {
      filterable: "",
      placeholder: _vm.searchText,
      "not-found-text": _vm.notFoundText
    },
    on: { "on-change": _vm.handleSearch },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }, _vm._l(_vm.navigateList, function (item) {
    return _c("i-option", { key: item.path, attrs: { value: item.path } }, [_vm.lang === "zh-CN" ? [_vm._v(_vm._s(item.title))] : [_vm._v(_vm._s(item.title.split(" ")[0]))]], 2);
  }))], 1), _vm._v(" "), _c("div", { staticClass: "wrapper-header-nav-list" }, [_c("Menu-item", {
    attrs: {
      name: "component",
      to: _vm.handleGoToMenu("/mhc-iView-doc/guide/install")
    }
  }, [_c("Icon", { attrs: { type: "ios-keypad" } }), _vm._v("\n                " + _vm._s(_vm.$t("index.component")) + "\n            ")], 1), _vm._v(" "), _c("ButtonGroup", { attrs: { size: "small" } }, [_c("Button", {
    attrs: {
      type: "ghost",
      size: "small",
      icon: "social-github"
    },
    on: { click: _vm.handleGoToGitHub }
  }), _vm._v(" "), _c("Button", {
    attrs: { icon: "ios-settings" },
    on: { click: _vm.handleToggleSetting }
  })], 1)], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-a380d422", esExports);
  }
}

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("pre", { class: { bg: _vm.bg } }, [_c("code", { ref: "code", class: _vm.language }, [_vm._t("default")], 2)]), _vm._v(" "), _vm.title !== "Code" ? _c("span", { staticClass: "open-fiddle", on: { click: _vm.openFiddle } }, [_c("Tooltip", {
    attrs: {
      content: _vm.$t("index.code_jsfiddle"),
      placement: "top",
      transfer: ""
    }
  }, [_c("Icon", { attrs: { type: "md-code", size: "18" } })], 1)], 1) : _vm._e(), _vm._v(" "), _c("span", { staticClass: "scale", on: { click: _vm.scale } }, [_c("Tooltip", {
    attrs: {
      content: _vm.$t("index.code_fullscreen"),
      placement: "top",
      transfer: ""
    }
  }, [_c("Icon", { attrs: { type: "md-qr-scanner", size: "18" } })], 1)], 1), _vm._v(" "), _c("span", { staticClass: "copy", on: { click: _vm.clip } }, [_c("Tooltip", {
    attrs: {
      content: _vm.$t("index.code_copy"),
      placement: "top",
      transfer: ""
    }
  }, [_c("Icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.copied,
      expression: "!copied"
    }],
    attrs: { type: "md-copy", size: "18" }
  }), _vm._v(" "), _c("Icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.copied,
      expression: "copied"
    }],
    staticStyle: { color: "#5cb85c" },
    attrs: { type: "md-checkmark", size: "18" }
  })], 1)], 1), _vm._v(" "), _c("Modal", {
    attrs: {
      "class-name": "code-scale-modal",
      title: _vm.title,
      width: "65"
    },
    model: {
      value: _vm.openScale,
      callback: function callback($$v) {
        _vm.openScale = $$v;
      },
      expression: "openScale"
    }
  }, [_c("pre", { class: { bg: _vm.bg } }, [_c("code", { ref: "code2", class: _vm.language })])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c2ff9106", esExports);
  }
}

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "apps" }, [_c("Dropdown", {
    attrs: { transfer: "", trigger: "click" },
    on: { "on-click": _vm.handleChange }
  }, [_c("img", {
    staticClass: "apps-menu",
    attrs: { src: "https://file.iviewui.com/icon/application.png" }
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e9faa89a", esExports);
  }
}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'Affix': 'affix',
    'Alert': 'alert',
    'Anchor': 'anchor',
    'AnchorLink': 'anchor-link',
    'AutoComplete': 'auto-complete',
    'Avatar': 'avatar',
    'BackTop': 'back-top',
    'Badge': 'badge',
    'Breadcrumb': 'breadcrumb',
    'BreadcrumbItem': 'breadcrumb-item',
    'Button': 'i-button',
    'ButtonGroup': 'button-group',
    'Card': 'card',
    'Carousel': 'carousel',
    'CarouselItem': 'carousel-item',
    'Cascader': 'cascader',
    'Cell': 'cell',
    'CellGroup': 'cell-group',
    'Checkbox': 'checkbox',
    'CheckboxGroup': 'checkbox-group',
    'Circle': 'i-circle',
    'Col': 'i-col',
    'Collapse': 'collapse',
    'ColorPicker': 'color-picker',
    'DatePicker': 'date-picker',
    'Divider': 'divider',
    'Dropdown': 'dropdown',
    'DropdownItem': 'dropdown-item',
    'DropdownMenu': 'dropdown-menu',
    'Form': 'i-form',
    'FormItem': 'form-item',
    'Icon': 'icon',
    'Input': 'i-input',
    'InputNumber': 'input-number',
    'Layout': 'layout',
    'Sider': 'sider',
    'Header': 'i-header',
    'Content': 'i-content',
    'Footer': 'i-footer',
    'Menu': 'i-menu',
    'MenuGroup': 'menu-group',
    'MenuItem': 'menu-item',
    'Submenu': 'submenu',
    'Modal': 'modal',
    'Option': 'i-option',
    'OptionGroup': 'option-group',
    'Page': 'page',
    'Panel': 'panel',
    'Poptip': 'poptip',
    'Progress': 'i-progress',
    'Radio': 'radio',
    'RadioGroup': 'radio-group',
    'Rate': 'rate',
    'Row': 'row',
    'Scroll': 'scroll',
    'Select': 'i-select',
    'Slider': 'slider',
    'Spin': 'spin',
    'Split': 'split',
    'Step': 'step',
    'Steps': 'steps',
    'Switch': 'i-switch',
    'Table': 'i-table',
    'Tabs': 'tabs',
    'TabPane': 'tab-pane',
    'Tag': 'tag',
    'Time': 'i-time',
    'Timeline': 'timeline',
    'TimelineItem': 'timeline-item',
    'TimePicker': 'time-picker',
    'Tooltip': 'tooltip',
    'Transfer': 'transfer',
    'Tree': 'tree',
    'Upload': 'upload'
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(199);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _pinyin_dict_firstlet;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pinyin_dict_firstletter = {};

pinyin_dict_firstletter.all = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";

pinyin_dict_firstletter.polyphone = (_pinyin_dict_firstlet = { "19969": "DZ", "19975": "WM", "19988": "QJ", "20048": "YL", "20056": "SC", "20060": "NM", "20094": "QG", "20127": "QJ", "20167": "QC", "20193": "YG", "20250": "KH", "20256": "ZC", "20282": "SC", "20285": "QJG", "20291": "TD", "20314": "YD", "20340": "NE", "20375": "TD", "20389": "YJ", "20391": "CZ", "20415": "PB", "20446": "YS", "20447": "SQ", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF" }, (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20504", "TC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20608", "KG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20854", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20857", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20911", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "20985", "AW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21032", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21048", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21049", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21089", "YS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21119", "JC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21242", "SB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21273", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21305", "YP"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21306", "QO"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21330", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21333", "SDC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21345", "QK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21378", "CA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21397", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21414", "XS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21442", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21477", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21480", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21484", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21494", "YX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21505", "YX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21512", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21523", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21537", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21542", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21549", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21571", "E"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21574", "DA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21588", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21589", "O"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21618", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21621", "KHA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21632", "ZJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21654", "KG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21679", "LKG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21683", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21710", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21719", "YH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21734", "WOE"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21769", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21780", "WN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21804", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21834", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21899", "ZD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21903", "RN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21908", "WO"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21939", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21956", "SA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21964", "YA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "21970", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22003", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22031", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22040", "XS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22060", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22066", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22079", "MH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22129", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22179", "XA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22237", "NJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22244", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22280", "JQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22300", "YH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22313", "XW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22331", "YQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22343", "YJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22351", "PH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22395", "DC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22412", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22484", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22500", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22534", "ZD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22549", "DH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22561", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22612", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22771", "KQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22831", "HB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22841", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22855", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "22865", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23013", "ML"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23081", "WM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23487", "SX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23558", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23561", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23586", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23614", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23615", "SN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23631", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23646", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23663", "ZT"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23673", "YG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23762", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23769", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23780", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "23884", "QK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24055", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24113", "DC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24162", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24191", "GA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24273", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24324", "NL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24377", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24378", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24439", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24554", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24683", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24694", "WE"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24733", "LK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "24925", "TN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25094", "ZG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25100", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25103", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25153", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25170", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25179", "KG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25203", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25240", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25282", "FB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25303", "NA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25324", "KG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25341", "ZY"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25373", "WZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25375", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25384", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25457", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25528", "SD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25530", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25552", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25774", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "25874", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26044", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26080", "WM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26292", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26333", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26355", "ZY"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26366", "CZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26397", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26399", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26415", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26451", "SB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26526", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26552", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26561", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26588", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26597", "CZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26629", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26638", "YL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26646", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26653", "KG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26657", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26727", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26894", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26937", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26946", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "26999", "KJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27099", "KJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27449", "YQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27481", "XS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27542", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27663", "ZS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27748", "TS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27784", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27788", "ZD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27795", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27812", "O"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27850", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27852", "MB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27895", "SL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27898", "PL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27973", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27981", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27986", "HX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "27994", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28044", "YC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28065", "WG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28177", "SM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28267", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28291", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28337", "ZQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28463", "TL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28548", "DC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28601", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28689", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28805", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28820", "QG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28846", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28952", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "28975", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "29100", "A"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "29325", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "29575", "SL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "29602", "FB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30010", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30044", "CX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30058", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30091", "YSP"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30111", "YN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30229", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30427", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30465", "SX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30631", "YQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30655", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30684", "QJG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30707", "SD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30729", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30796", "LG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "30917", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31074", "NM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31085", "JZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31109", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31181", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31192", "MLB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31293", "JQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31400", "YX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31584", "YJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31896", "ZN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31909", "ZY"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "31995", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32321", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32327", "ZY"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32418", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32420", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32421", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32438", "LG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32473", "GJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32488", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32521", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32527", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32562", "ZSQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32564", "JZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32735", "ZD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "32793", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33071", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33098", "XL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33100", "YA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33152", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33261", "CX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33324", "BP"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33333", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33406", "YA"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33426", "WM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33432", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33445", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33486", "ZN"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33493", "TS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33507", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33540", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33544", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33564", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33617", "YT"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33632", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33636", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33637", "YX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33694", "WG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33705", "PF"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33728", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "33882", "SR"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34067", "WM"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34074", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34121", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34255", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34259", "XL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34425", "JH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34430", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34485", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34503", "YS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34532", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34552", "XS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34558", "YE"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34593", "ZL"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34660", "YQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34892", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34928", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "34999", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35048", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35059", "SC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35098", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35203", "TQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35265", "JX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35299", "JX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35782", "SZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35828", "YS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35830", "E"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35843", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35895", "YG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "35977", "MH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36158", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36228", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36426", "XQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36466", "DC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36710", "JC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36711", "ZYG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36767", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36866", "SK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "36951", "YW"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "37034", "YX"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "37063", "XH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "37218", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "37325", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38063", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38079", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38085", "QY"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38107", "DC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38116", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38123", "YD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38224", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38241", "XTC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38271", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38415", "YE"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38426", "KH"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38461", "YD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38463", "AE"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38466", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38477", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38518", "YT"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38551", "WK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38585", "ZC"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38704", "XS"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38739", "LJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38761", "GJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "38808", "SQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39048", "JG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39049", "XJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39052", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39076", "CZ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39271", "XT"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39534", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39552", "TD"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39584", "PB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39647", "SB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39730", "LG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "39748", "TPB"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40109", "ZQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40479", "ND"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40516", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40536", "HG"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40583", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40765", "YQ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40784", "QJ"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40840", "YK"), (0, _defineProperty3.default)(_pinyin_dict_firstlet, "40863", "QJG"), _pinyin_dict_firstlet);

exports.default = pinyin_dict_firstletter;

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "512a3fe18c92425975996411a04ac256.png";

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e1cf12c07bf6458992569e67927d767e.png";

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bca1556c01f16f9a9f6094169720c2da.png";

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ecd3b0452aa197097d5131afacab7b8.png";

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(515)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/ad-send.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-642dc412", Component.options)
  } else {
    hotAPI.reload("data-v-642dc412", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(512)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/anchor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27dd2a45", Component.options)
  } else {
    hotAPI.reload("data-v-27dd2a45", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(519)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/applications.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e9faa89a", Component.options)
  } else {
    hotAPI.reload("data-v-e9faa89a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(514)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6338ec16", Component.options)
  } else {
    hotAPI.reload("data-v-6338ec16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(518)
  __webpack_require__(517)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c2ff9106"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/code.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2ff9106", Component.options)
  } else {
    hotAPI.reload("data-v-c2ff9106", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(516)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a380d422", Component.options)
  } else {
    hotAPI.reload("data-v-a380d422", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(513)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-39279dfe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/navigate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39279dfe", Component.options)
  } else {
    hotAPI.reload("data-v-39279dfe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Row", {
    staticClass: "example",
    class: { "example-vertical": _vm.isVertical },
    attrs: { id: _vm.title_link }
  }, [_c("i-col", {
    staticClass: "example-demo",
    attrs: { span: _vm.isVertical ? 24 : 12 }
  }, [_c("div", { staticClass: "example-case" }, [_vm._t("demo")], 2), _vm._v(" "), _c("header", { staticClass: "example-header" }, [_c("span", [_vm._v("\n                " + _vm._s(_vm.title) + "\n                "), _c("a", {
    attrs: { href: "#" + _vm.title_link, "data-title": _vm.title }
  }, [_vm._v("#")])])]), _vm._v(" "), _c("div", { staticClass: "example-desc" }, [_vm._t("desc")], 2)]), _vm._v(" "), _c("div", { staticClass: "example-split" }), _vm._v(" "), _c("i-col", {
    staticClass: "example-code",
    style: _vm.codeHeight,
    attrs: { span: _vm.isVertical ? 24 : 12 }
  }, [_c("div", { style: _vm.style }, [_vm._t("code")], 2), _vm._v(" "), _vm.showMore ? _c("div", {
    staticClass: "example-code-more",
    on: {
      click: function click($event) {
        _vm.showCode = !_vm.showCode;
      }
    }
  }, [_c("Icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.showCode,
      expression: "!showCode"
    }],
    attrs: { type: "ios-arrow-down" }
  }), _vm._v(" "), _c("Icon", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showCode,
      expression: "showCode"
    }],
    attrs: { type: "ios-arrow-up" }
  }), _vm._v(" "), _c("i-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isCodeHide && !_vm.showCode,
      expression: "isCodeHide && !showCode"
    }],
    attrs: { type: "text" }
  }, [_vm.lang === "zh-CN" ? [_vm._v("显示代码")] : [_vm._v("Show Code")]], 2)], 1) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-054b9c73", esExports);
  }
}

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(532)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/demo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-054b9c73", Component.options)
  } else {
    hotAPI.reload("data-v-054b9c73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _article = __webpack_require__(527);

var _article2 = _interopRequireDefault(_article);

var _iCode = __webpack_require__(528);

var _iCode2 = _interopRequireDefault(_iCode);

var _demo = __webpack_require__(533);

var _demo2 = _interopRequireDefault(_demo);

var _grid = __webpack_require__(577);

var _grid2 = _interopRequireDefault(_grid);

var _anchor = __webpack_require__(525);

var _anchor2 = _interopRequireDefault(_anchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        iArticle: _article2.default,
        iCode: _iCode2.default,
        Demo: _demo2.default,
        Anchor: _anchor2.default
    },
    data: function data() {
        return {
            code: _grid2.default
        };
    }
};

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i-article", [_c("article", [_c("h1", [_vm._v("Grid 栅格")]), _vm._v(" "), _c("Anchor", { attrs: { title: "概述", h2: "" } }), _vm._v(" "), _c("Row", { attrs: { "class-name": "demo-row" } }, [_c("Col", { attrs: { span: 24, "class-name": "demo-col" } }, [_vm._v("24：100%")])], 1), _vm._v(" "), _c("Row", { attrs: { "class-name": "demo-row light" } }, [_c("Col", { attrs: { span: 12, "class-name": "demo-col" } }, [_vm._v("12：50%")]), _vm._v(" "), _c("Col", { attrs: { span: 12, "class-name": "demo-col light" } }, [_vm._v("12：50%")])], 1), _vm._v(" "), _c("Row", { attrs: { "class-name": "demo-row" } }, [_c("Col", { attrs: { span: 8, "class-name": "demo-col" } }, [_vm._v("8：33.33%")]), _vm._v(" "), _c("Col", { attrs: { span: 8, "class-name": "demo-col light" } }, [_vm._v("8：33.33%")]), _vm._v(" "), _c("Col", { attrs: { span: 8, "class-name": "demo-col" } }, [_vm._v("8：33.33%")])], 1), _vm._v(" "), _c("Row", { attrs: { "class-name": "demo-row light" } }, [_c("Col", { attrs: { span: 6, "class-name": "demo-col" } }, [_vm._v("6：25%")]), _vm._v(" "), _c("Col", { attrs: { span: 6, "class-name": "demo-col light" } }, [_vm._v("6：25%")]), _vm._v(" "), _c("Col", { attrs: { span: 6, "class-name": "demo-col" } }, [_vm._v("6：25%")]), _vm._v(" "), _c("Col", { attrs: { span: 6, "class-name": "demo-col light" } }, [_vm._v("6：25%")])], 1), _vm._v(" "), _c("Row", { attrs: { "class-name": "demo-row" } }, [_c("Col", { attrs: { span: 16, "class-name": "demo-col" } }, [_vm._v("16：66.66%")]), _vm._v(" "), _c("Col", { attrs: { span: 8, "class-name": "demo-col light" } }, [_vm._v("8：33.33%")])], 1), _vm._v(" "), _c("p", [_vm._v("我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。")]), _vm._v(" "), _c("p", [_vm._v("我们定义了两个概念，行"), _c("code", [_vm._v("row")]), _vm._v("和列"), _c("code", [_vm._v("col")]), _vm._v("，具体使用方法如下：")]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("使用"), _c("code", [_vm._v("row")]), _vm._v("在水平方向创建一行")]), _vm._v(" "), _c("li", [_vm._v("将一组"), _c("code", [_vm._v("col")]), _vm._v("插入在"), _c("code", [_vm._v("row")]), _vm._v("中")]), _vm._v(" "), _c("li", [_vm._v("在每个"), _c("code", [_vm._v("col")]), _vm._v("中，键入自己的内容")]), _vm._v(" "), _c("li", [_vm._v("通过设置"), _c("code", [_vm._v("col")]), _vm._v("的"), _c("code", [_vm._v("span")]), _vm._v("参数，指定跨越的范围，其范围是1到24")]), _vm._v(" "), _c("li", [_vm._v("每个"), _c("code", [_vm._v("row")]), _vm._v("中的"), _c("code", [_vm._v("col")]), _vm._v("总和应该为24")])]), _vm._v(" "), _c("Alert", { staticStyle: { "margin-top": "16px" }, attrs: { "show-icon": "" } }, [_vm._v("注意：非 template/render 模式下，需使用 "), _c("code", [_vm._v("i-col")]), _vm._v("。")]), _vm._v(" "), _c("Anchor", { attrs: { title: "代码示例", h2: "" } }), _vm._v(" "), _c("Demo", { attrs: { title: "基础用法" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", [_c("Col", { attrs: { span: "12" } }, [_vm._v("col-12")]), _vm._v(" "), _c("Col", { attrs: { span: "12" } }, [_vm._v("col-12")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", [_c("Col", { attrs: { span: "8" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", { attrs: { span: "8" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", { attrs: { span: "8" } }, [_vm._v("col-8")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", [_c("Col", { attrs: { span: "6" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_vm._v("col-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_vm._v("col-6")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("水平排列的布局。")]), _vm._v(" "), _c("p", [_c("code", [_vm._v("col")]), _vm._v("必须放在"), _c("code", [_vm._v("row")]), _vm._v("里面。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.base))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "区块间隔" } }, [_c("div", { staticClass: "gutter", attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", { attrs: { gutter: 16 } }, [_c("Col", { attrs: { span: "6" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_c("div", [_vm._v("col-6")])]), _vm._v(" "), _c("Col", { attrs: { span: "6" } }, [_c("div", [_vm._v("col-6")])])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过给 "), _c("code", [_vm._v("row")]), _vm._v(" 添加 "), _c("code", [_vm._v("gutter")]), _vm._v(" 属性，可以给下属的 "), _c("code", [_vm._v("col")]), _vm._v(" 添加间距，推荐使用 "), _c("code", [_vm._v("(16+8n)px")]), _vm._v(" 作为栅格间隔。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.gutter))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "栅格顺序(Flex)" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", { attrs: { type: "flex" } }, [_c("Col", { attrs: { span: "6", order: "4" } }, [_vm._v("1 | order-4")]), _vm._v(" "), _c("Col", { attrs: { span: "6", order: "3" } }, [_vm._v("2 | order-3")]), _vm._v(" "), _c("Col", { attrs: { span: "6", order: "2" } }, [_vm._v("3 | order-2")]), _vm._v(" "), _c("Col", { attrs: { span: "6", order: "1" } }, [_vm._v("4 | order-1")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过 Flex 布局的"), _c("code", [_vm._v("order")]), _vm._v("来改变栅格的顺序。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.order))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "栅格排序" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", [_c("Col", { attrs: { span: "18", push: "6" } }, [_vm._v("col-18 | push-6")]), _vm._v(" "), _c("Col", { attrs: { span: "6", pull: "18" } }, [_vm._v("col-6 | pull-18")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过设置"), _c("code", [_vm._v("push")]), _vm._v("和"), _c("code", [_vm._v("pull")]), _vm._v("来改变栅格的顺序。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.push))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "左右偏移" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", [_c("Col", { attrs: { span: "8" } }, [_vm._v("col-8")]), _vm._v(" "), _c("Col", { attrs: { span: "8", offset: "8" } }, [_vm._v("col-8 | offset-8")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", [_c("Col", { attrs: { span: "6", offset: "8" } }, [_vm._v("col-6 | offset-8")]), _vm._v(" "), _c("Col", { attrs: { span: "6", offset: "4" } }, [_vm._v("col-6 | offset-4")])], 1), _vm._v(" "), _c("br"), _vm._v(" "), _c("Row", [_c("Col", { attrs: { span: "12", offset: "8" } }, [_vm._v("col-12 | offset-8")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过设置"), _c("code", [_vm._v("offset")]), _vm._v("属性，将列进行左右偏移，偏移栅格数为offset的值。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.offset))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "Flex布局" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("p", [_vm._v("子元素向左排列")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "start" }
  }, [_c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素向右排列")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "end" }
  }, [_c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素居中排列")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "center" }
  }, [_c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素等宽排列")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "space-between" }
  }, [_c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")])], 1), _vm._v(" "), _c("p", [_vm._v("子元素分散排列")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "space-around" }
  }, [_c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_vm._v("col-4")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过给"), _c("code", [_vm._v("row")]), _vm._v("设置参数"), _c("code", [_vm._v("justify")]), _vm._v("为不同的值，来定义子元素的排布方式。在"), _c("code", [_vm._v("flex")]), _vm._v("模式下有效。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.justify))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "Flex对齐" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("p", [_vm._v("顶部对齐")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "center", align: "top" }
  }, [_c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1), _vm._v(" "), _c("p", [_vm._v("底部对齐")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "center", align: "bottom" }
  }, [_c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1), _vm._v(" "), _c("p", [_vm._v("居中对齐")]), _vm._v(" "), _c("Row", {
    staticClass: "code-row-bg",
    attrs: { type: "flex", justify: "center", align: "middle" }
  }, [_c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "80px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "30px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "100px" } }, [_vm._v("col-4")])]), _vm._v(" "), _c("Col", { attrs: { span: "4" } }, [_c("p", { staticStyle: { height: "60px" } }, [_vm._v("col-4")])])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("通过给"), _c("code", [_vm._v("row")]), _vm._v("设置参数"), _c("code", [_vm._v("align")]), _vm._v("为不同的值，来定义子元素在垂直方向上的排布方式。在"), _c("code", [_vm._v("flex")]), _vm._v("模式下有效。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.align))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "响应式布局" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", [_c("Col", { attrs: { xs: 2, sm: 4, md: 6, lg: 8 } }, [_vm._v("Col")]), _vm._v(" "), _c("Col", { attrs: { xs: 20, sm: 16, md: 12, lg: 8 } }, [_vm._v("Col")]), _vm._v(" "), _c("Col", { attrs: { xs: 2, sm: 4, md: 6, lg: 8 } }, [_vm._v("Col")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("参照 Bootstrap 的 "), _c("a", {
    attrs: {
      href: "http://getbootstrap.com/css/#grid-media-queries",
      target: "_blank"
    }
  }, [_vm._v("响应式设计")]), _vm._v("，预设四个响应尺寸：xs sm md lg，详见 API。")]), _vm._v(" "), _c("p", [_vm._v("调整浏览器尺寸来查看效果。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.reponsive))])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "其它属性的响应式" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Row", [_c("Col", {
    attrs: {
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 }
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: { span: 11, offset: 1 },
      lg: { span: 6, offset: 2 }
    }
  }, [_vm._v("Col")]), _vm._v(" "), _c("Col", {
    attrs: {
      xs: { span: 5, offset: 1 },
      lg: { span: 6, offset: 2 }
    }
  }, [_vm._v("Col")])], 1)], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_c("code", [_vm._v("span")]), _vm._v(" "), _c("code", [_vm._v("pull")]), _vm._v(" "), _c("code", [_vm._v("push")]), _vm._v(" "), _c("code", [_vm._v("offset")]), _vm._v(" "), _c("code", [_vm._v("order")]), _vm._v(" 属性可以通过内嵌到 "), _c("code", [_vm._v("xs")]), _vm._v(" "), _c("code", [_vm._v("sm")]), _vm._v(" "), _c("code", [_vm._v("md")]), _vm._v(" "), _c("code", [_vm._v("lg")]), _vm._v(" 属性中来使用。")]), _vm._v(" "), _c("p", [_vm._v("其中 "), _c("code", [_vm._v(':xs="6"')]), _vm._v(" 相当于 "), _c("code", [_vm._v(':xs="{ span: 6 }"')]), _vm._v("。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.reponsive2))])], 1), _vm._v(" "), _c("div", { staticClass: "api" }, [_c("Anchor", { attrs: { title: "API", h2: "" } }), _vm._v(" "), _c("Anchor", { attrs: { title: "Row props", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("属性")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("类型")]), _vm._v(" "), _c("th", [_vm._v("默认值")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("gutter")]), _vm._v(" "), _c("td", [_vm._v("栅格间距，单位 px，左右平分")]), _vm._v(" "), _c("td", [_vm._v("Number")]), _vm._v(" "), _c("td", [_vm._v("0")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("type")]), _vm._v(" "), _c("td", [_vm._v("布局模式，可选值为"), _c("code", [_vm._v("flex")]), _vm._v("或不选，在现代浏览器下有效")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("align")]), _vm._v(" "), _c("td", [_vm._v("flex 布局下的垂直对齐方式，可选值为"), _c("code", [_vm._v("top")]), _vm._v("、"), _c("code", [_vm._v("middle")]), _vm._v("、"), _c("code", [_vm._v("bottom")])]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("justify")]), _vm._v(" "), _c("td", [_vm._v("flex 布局下的水平排列方式，可选值为"), _c("code", [_vm._v("start")]), _vm._v("、"), _c("code", [_vm._v("end")]), _vm._v("、"), _c("code", [_vm._v("center")]), _vm._v("、"), _c("code", [_vm._v("space-around")]), _vm._v("、"), _c("code", [_vm._v("space-between")])]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("class-name")]), _vm._v(" "), _c("td", [_vm._v("自定义的class名称")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])])])]), _vm._v(" "), _c("Anchor", { attrs: { title: "Col props", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("属性")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("类型")]), _vm._v(" "), _c("th", [_vm._v("默认值")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("span")]), _vm._v(" "), _c("td", [_vm._v("栅格的占位格数，可选值为0~24的整数，为 0 时，相当于"), _c("code", [_vm._v("display:none")])]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("order")]), _vm._v(" "), _c("td", [_vm._v("栅格的顺序，在"), _c("code", [_vm._v("flex")]), _vm._v("布局模式下有效")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("offset")]), _vm._v(" "), _c("td", [_vm._v("栅格左侧的间隔格数，间隔内不可以有栅格")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("push")]), _vm._v(" "), _c("td", [_vm._v("栅格向右移动格数")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("pull")]), _vm._v(" "), _c("td", [_vm._v("栅格向左移动格数")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("class-name")]), _vm._v(" "), _c("td", [_vm._v("自定义的class名称")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("xs")]), _vm._v(" "), _c("td", [_c("code", [_vm._v("<768px")]), _vm._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]), _vm._v(" "), _c("td", [_vm._v("Number | Object")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("sm")]), _vm._v(" "), _c("td", [_c("code", [_vm._v("≥768px")]), _vm._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]), _vm._v(" "), _c("td", [_vm._v("Number | Object")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("md")]), _vm._v(" "), _c("td", [_c("code", [_vm._v("≥992px")]), _vm._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]), _vm._v(" "), _c("td", [_vm._v("Number | Object")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("lg")]), _vm._v(" "), _c("td", [_c("code", [_vm._v("≥1200px")]), _vm._v(" 响应式栅格，可为栅格数或一个包含其他属性的对象")]), _vm._v(" "), _c("td", [_vm._v("Number | Object")]), _vm._v(" "), _c("td", [_vm._v("-")])])])])], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2250fff5", esExports);
  }
}

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var code = {};

code.base = "\n<template>\n    <Row>\n        <Col span=\"12\">col-12</Col>\n        <Col span=\"12\">col-12</Col>\n    </Row>\n    <br>\n    <Row>\n        <Col span=\"8\">col-8</Col>\n        <Col span=\"8\">col-8</Col>\n        <Col span=\"8\">col-8</Col>\n    </Row>\n    <br>\n    <Row>\n        <Col span=\"6\">col-6</Col>\n        <Col span=\"6\">col-6</Col>\n        <Col span=\"6\">col-6</Col>\n        <Col span=\"6\">col-6</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.gutter = "\n<template>\n    <Row :gutter=\"16\">\n        <Col span=\"6\">\n            <div>col-6</div>\n        </Col>\n        <Col span=\"6\">\n            <div>col-6</div>\n        </Col>\n        <Col span=\"6\">\n            <div>col-6</div>\n        </Col>\n        <Col span=\"6\">\n            <div>col-6</div>\n        </Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.order = "\n<template>\n    <Row type=\"flex\">\n        <Col span=\"6\" order=\"4\">1 | order-4</Col>\n        <Col span=\"6\" order=\"3\">2 | order-3</Col>\n        <Col span=\"6\" order=\"2\">3 | order-2</Col>\n        <Col span=\"6\" order=\"1\">4 | order-1</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.push = "\n<template>\n    <Row>\n        <Col span=\"18\" push=\"6\">col-18 | push-6</Col>\n        <Col span=\"6\" pull=\"18\">col-6 | pull-18</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.offset = "\n<template>\n    <Row>\n        <Col span=\"8\">col-8</Col>\n        <Col span=\"8\" offset=\"8\">col-8 | offset-8</Col>\n    </Row>\n    <br>\n    <Row>\n        <Col span=\"6\" offset=\"8\">col-6 | offset-8</Col>\n        <Col span=\"6\" offset=\"4\">col-6 | offset-4</Col>\n    </Row>\n    <br>\n    <Row>\n        <Col span=\"12\" offset=\"8\">col-12 | offset-8</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.justify = "\n<template>\n    <p>\u5B50\u5143\u7D20\u5411\u5DE6\u6392\u5217</p>\n    <Row type=\"flex\" justify=\"start\" class=\"code-row-bg\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n    </Row>\n    <p>\u5B50\u5143\u7D20\u5411\u53F3\u6392\u5217</p>\n    <Row type=\"flex\" justify=\"end\" class=\"code-row-bg\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n    </Row>\n    <p>\u5B50\u5143\u7D20\u5C45\u4E2D\u6392\u5217</p>\n    <Row type=\"flex\" justify=\"center\" class=\"code-row-bg\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n    </Row>\n    <p>\u5B50\u5143\u7D20\u7B49\u5BBD\u6392\u5217</p>\n    <Row type=\"flex\" justify=\"space-between\" class=\"code-row-bg\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n    </Row>\n    <p>\u5B50\u5143\u7D20\u5206\u6563\u6392\u5217</p>\n    <Row type=\"flex\" justify=\"space-around\" class=\"code-row-bg\">\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n        <Col span=\"4\">col-4</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.align = "\n<template>\n    <p>\u9876\u90E8\u5BF9\u9F50</p>\n    <Row type=\"flex\" justify=\"center\" align=\"top\" class=\"code-row-bg\">\n        <Col span=\"4\"><p style=\"height: 80px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 30px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 100px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 60px\">col-4</p></Col>\n    </Row>\n    <p>\u5E95\u90E8\u5BF9\u9F50</p>\n    <Row type=\"flex\" justify=\"center\" align=\"bottom\" class=\"code-row-bg\">\n        <Col span=\"4\"><p style=\"height: 80px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 30px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 100px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 60px\">col-4</p></Col>\n    </Row>\n    <p>\u5C45\u4E2D\u5BF9\u9F50</p>\n    <Row type=\"flex\" justify=\"center\" align=\"middle\" class=\"code-row-bg\">\n        <Col span=\"4\"><p style=\"height: 80px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 30px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 100px\">col-4</p></Col>\n        <Col span=\"4\"><p style=\"height: 60px\">col-4</p></Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.reponsive = "\n<template>\n    <Row>\n        <Col :xs=\"2\" :sm=\"4\" :md=\"6\" :lg=\"8\">Col</Col>\n        <Col :xs=\"20\" :sm=\"16\" :md=\"12\" :lg=\"8\">Col</Col>\n        <Col :xs=\"2\" :sm=\"4\" :md=\"6\" :lg=\"8\">Col</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

code.reponsive2 = "\n<template>\n    <Row>\n        <Col :xs=\"{ span: 5, offset: 1 }\" :lg=\"{ span: 6, offset: 2 }\">Col</Col>\n        <Col :xs=\"{ span: 11, offset: 1 }\" :lg=\"{ span: 6, offset: 2 }\">Col</Col>\n        <Col :xs=\"{ span: 5, offset: 1 }\" :lg=\"{ span: 6, offset: 2 }\">Col</Col>\n    </Row>\n</template>\n<script>\n    export default {\n        \n    }\n</script>\n";

exports.default = code;

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=8.chunk.js.map