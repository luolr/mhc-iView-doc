webpackJsonp([5],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(599)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-394040b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/components/icon.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-394040b0", Component.options)
  } else {
    hotAPI.reload("data-v-394040b0", Component.options)
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

/***/ 550:
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

var _icon = __webpack_require__(578);

var _icon2 = _interopRequireDefault(_icon);

var _anchor = __webpack_require__(525);

var _anchor2 = _interopRequireDefault(_anchor);

var _iconname = __webpack_require__(579);

var _iconname2 = _interopRequireDefault(_iconname);

var _clipboard = __webpack_require__(133);

var _clipboard2 = _interopRequireDefault(_clipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchPlaceholder = '输入英文关键词搜索，比如 success';

exports.default = {
  components: {
    iArticle: _article2.default,
    iCode: _iCode2.default,
    Demo: _demo2.default,
    Anchor: _anchor2.default
  },
  data: function data() {
    return {
      code: _icon2.default,
      icons: _iconname2.default,
      searchPlaceholder: searchPlaceholder,
      search: ''
    };
  },

  computed: {
    filterIcons: function filterIcons() {
      var _this = this;

      return this.icons.filter(function (icon) {
        return icon.tag.indexOf(_this.search) > -1;
      });
    }
  },
  methods: {
    clip: function clip(type) {
      var _this2 = this;

      var icon = '<Icon type="' + type.name + '"></Icon>';

      var clipboard = new _clipboard2.default('.icons', {
        text: function text() {
          return icon;
        }
      });

      clipboard.on('success', function (e) {
        e.clearSelection();
        clipboard.destroy();
        _this2.$Message.success('组件代码已经复制到剪贴板');
      });
    },
    changeHolder: function changeHolder(type) {
      if (type == 'focus') {
        this.searchPlaceholder = '';
      } else if (type == 'blur') {
        this.searchPlaceholder = searchPlaceholder;
      }
    }
  }
};

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i-article", [_c("article", [_c("h1", [_vm._v("Icon 图标")]), _vm._v(" "), _c("Anchor", { attrs: { title: "概述", h2: "" } }), _vm._v(" "), _c("p", [_vm._v("iView 的图标使用开源项目"), _c("a", { attrs: { href: "http://ionicons.com/", target: "_blank" } }, [_c("Icon", { attrs: { type: "ionic" } }), _vm._v(" ionicons")], 1)]), _vm._v(" "), _c("Anchor", { attrs: { title: "如何使用", h2: "" } }), _vm._v(" "), _c("p", [_vm._v("使用"), _c("code", [_vm._v("<Icon />")]), _vm._v("组件，指定图标对应的"), _c("code", [_vm._v("type")]), _vm._v("属性，示例代码：")]), _vm._v(" "), _c("i-code", { attrs: { lang: "html", bg: "" } }, [_vm._v(_vm._s(_vm.code.demo))]), _vm._v(" "), _c("p", [_vm._v("渲染后为：")]), _vm._v(" "), _c("i-code", { attrs: { lang: "html", bg: "" } }, [_vm._v(_vm._s(_vm.code.render))]), _vm._v(" "), _c("div", { staticClass: "api" }, [_c("Anchor", { attrs: { title: "API", h2: "" } }), _vm._v(" "), _c("Anchor", { attrs: { title: "Icon props", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("属性")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("类型")]), _vm._v(" "), _c("th", [_vm._v("默认值")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("type")]), _vm._v(" "), _c("td", [_vm._v("图标的名称")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("size")]), _vm._v(" "), _c("td", [_vm._v("图标的大小，单位是 px")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("color")]), _vm._v(" "), _c("td", [_vm._v("图标的颜色")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])])])])], 1), _vm._v(" "), _c("Anchor", { attrs: { title: "示例", h2: "" } }), _vm._v(" "), _c("div", { staticClass: "icon-search" }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    attrs: { type: "text", placeholder: _vm.searchPlaceholder },
    domProps: { value: _vm.search },
    on: {
      focus: function focus($event) {
        _vm.changeHolder("focus");
      },
      blur: function blur($event) {
        _vm.changeHolder("blur");
      },
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }
        _vm.search = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("p", [_vm._v("点击下面的图标按钮可以直接复制组件代码")])]), _vm._v(" "), _c("div", { staticClass: "icons" }, _vm._l(_vm.filterIcons, function (item) {
    return _c("div", {
      staticClass: "icons-item",
      on: {
        click: function click($event) {
          _vm.clip(item);
        }
      }
    }, [_c("i", {
      staticClass: "ivu-icon",
      class: ["ivu-icon-" + item.name],
      staticStyle: { "font-size": "32px" }
    }), _vm._v(" "), _c("p", [_vm._v("\n                    " + _vm._s(item.name) + "\n                ")])]);
  }))], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-394040b0", esExports);
  }
}

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var code = {};

code.demo = "\n<Icon type=\"checkmark\" />\n";

code.render = "\n<i class=\"ivu-icon ivu-icon-checkmark\"></i>\n";

exports.default = code;

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ "name": "ionic", "pack": "default", "tag": "badass, framework, sexy, hawt, ionic" }, { "name": "arrow-up-a", "pack": "default", "tag": ", arrow-up-a" }, { "name": "arrow-right-a", "pack": "default", "tag": ", arrow-right-a" }, { "name": "arrow-down-a", "pack": "default", "tag": ", arrow-down-a" }, { "name": "arrow-left-a", "pack": "default", "tag": ", arrow-left-a" }, { "name": "arrow-up-b", "pack": "default", "tag": ", arrow-up-b" }, { "name": "arrow-right-b", "pack": "default", "tag": ", arrow-right-b" }, { "name": "arrow-down-b", "pack": "default", "tag": ", arrow-down-b" }, { "name": "arrow-left-b", "pack": "default", "tag": ", arrow-left-b" }, { "name": "arrow-up-c", "pack": "default", "tag": ", arrow-up-c" }, { "name": "arrow-right-c", "pack": "default", "tag": ", arrow-right-c" }, { "name": "arrow-down-c", "pack": "default", "tag": ", arrow-down-c" }, { "name": "arrow-left-c", "pack": "default", "tag": ", arrow-left-c" }, { "name": "arrow-return-right", "pack": "default", "tag": ", arrow-return-right" }, { "name": "arrow-return-left", "pack": "default", "tag": ", arrow-return-left" }, { "name": "arrow-swap", "pack": "default", "tag": "switch, flip, arrow-swap" }, { "name": "arrow-shrink", "pack": "default", "tag": "pinch, arrow-shrink" }, { "name": "arrow-expand", "pack": "default", "tag": "fullscreen, arrow-expand" }, { "name": "arrow-move", "pack": "default", "tag": "drag, arrow-move" }, { "name": "arrow-resize", "pack": "default", "tag": "drag, arrow-resize" }, { "name": "chevron-up", "pack": "default", "tag": "arrow, up, chevron-up" }, { "name": "chevron-right", "pack": "default", "tag": "arrow, right, chevron-right" }, { "name": "chevron-down", "pack": "default", "tag": "arrow, down, chevron-down" }, { "name": "chevron-left", "pack": "default", "tag": "arrow, left, chevron-left" }, { "name": "navicon-round", "pack": "default", "tag": "menu, hamburger, slide menu, navicon-round" }, { "name": "navicon", "pack": "default", "tag": "menu, hamburger, slide menu, navicon" }, { "name": "drag", "pack": "default", "tag": "reorder, move, drag, drag" }, { "name": "log-in", "pack": "default", "tag": "sign in, , log-in" }, { "name": "log-out", "pack": "default", "tag": "sign out, log-out" }, { "name": "checkmark-round", "pack": "default", "tag": "complete, finished, success, on, checkmark-round" }, { "name": "checkmark", "pack": "default", "tag": "complete, finished, success, on, checkmark" }, { "name": "checkmark-circled", "pack": "default", "tag": "complete, finished, success, on, checkmark-circled" }, { "name": "close-round", "pack": "default", "tag": "delete, trash, kill, x, close-round" }, { "name": "close", "pack": "default", "tag": "delete, trash, kill, x, close" }, { "name": "close-circled", "pack": "default", "tag": "delete, trash, kill, x, close-circled" }, { "name": "plus-round", "pack": "default", "tag": "add, include, new, invite, +, plus-round" }, { "name": "plus", "pack": "default", "tag": "add, include, new, invite, +, plus" }, { "name": "plus-circled", "pack": "default", "tag": "add, include, new, invite, +, plus-circled" }, { "name": "minus-round", "pack": "default", "tag": "hide, remove, minimize, -, minus-round" }, { "name": "minus", "pack": "default", "tag": "hide, remove, minimize, -, minus" }, { "name": "minus-circled", "pack": "default", "tag": "hide, remove, minimize, -, minus-circled" }, { "name": "information", "pack": "default", "tag": "help, more, tooltip, information" }, { "name": "information-circled", "pack": "default", "tag": "help, more, tooltip, information-circled" }, { "name": "help", "pack": "default", "tag": "question, ?, help" }, { "name": "help-circled", "pack": "default", "tag": "question, ?, help-circled" }, { "name": "backspace-outline", "pack": "default", "tag": "delete, remove, back, backspace-outline" }, { "name": "backspace", "pack": "default", "tag": "delete, remove, back, backspace" }, { "name": "help-buoy", "pack": "default", "tag": "question, ?, help-buoy" }, { "name": "asterisk", "pack": "default", "tag": "favorite, mark, star, asterisk" }, { "name": "alert", "pack": "default", "tag": "attention, warning, notice, !, exclamation, alert" }, { "name": "alert-circled", "pack": "default", "tag": "attention, warning, notice, !, exclamation, alert-circled" }, { "name": "refresh", "pack": "default", "tag": "reload, renew, refresh" }, { "name": "loop", "pack": "default", "tag": "refresh, loop" }, { "name": "shuffle", "pack": "default", "tag": "random, shuffle" }, { "name": "home", "pack": "default", "tag": "house, home" }, { "name": "search", "pack": "default", "tag": "magnifying glass, search" }, { "name": "flag", "pack": "default", "tag": "favorite, mark, star, flag" }, { "name": "star", "pack": "default", "tag": "favorite, star" }, { "name": "heart", "pack": "default", "tag": "love, heart" }, { "name": "heart-broken", "pack": "default", "tag": "love, heart-broken" }, { "name": "gear-a", "pack": "default", "tag": "settings, options, cog, gear-a" }, { "name": "gear-b", "pack": "default", "tag": "settings, options, cog, gear-b" }, { "name": "toggle-filled", "pack": "default", "tag": "settings, options, switch, toggle-filled" }, { "name": "toggle", "pack": "default", "tag": "settings, options, switch, toggle" }, { "name": "settings", "pack": "default", "tag": "options, tools, settings" }, { "name": "wrench", "pack": "default", "tag": "settings, options, tools, wrench" }, { "name": "hammer", "pack": "default", "tag": "settings, options, tools, hammer" }, { "name": "edit", "pack": "default", "tag": "change, update, write, type, pencil, edit" }, { "name": "trash-a", "pack": "default", "tag": "delete, remove, dump, trash-a" }, { "name": "trash-b", "pack": "default", "tag": "delete, remove, dump, trash-b" }, { "name": "document", "pack": "default", "tag": "paper, file, document" }, { "name": "document-text", "pack": "default", "tag": "paper, file, document-text" }, { "name": "clipboard", "pack": "default", "tag": "write, clipboard" }, { "name": "scissors", "pack": "default", "tag": "cut, scissors" }, { "name": "funnel", "pack": "default", "tag": "sort, funnel" }, { "name": "bookmark", "pack": "default", "tag": "favorite, tag, save, bookmark" }, { "name": "email", "pack": "default", "tag": "snail, mail, inbox, email" }, { "name": "email-unread", "pack": "default", "tag": "snail, mail, inbox, email-unread" }, { "name": "folder", "pack": "default", "tag": "snail, mail, folder" }, { "name": "filing", "pack": "default", "tag": "mail, filing" }, { "name": "archive", "pack": "default", "tag": "mail, archive" }, { "name": "reply", "pack": "default", "tag": "mail, undo, reply" }, { "name": "reply-all", "pack": "default", "tag": "mail, reply-all" }, { "name": "forward", "pack": "default", "tag": "mail, redo, forward" }, { "name": "share", "pack": "default", "tag": "outbound, share" }, { "name": "paper-airplane", "pack": "default", "tag": "outbound, mail, letter, send, paper-airplane" }, { "name": "link", "pack": "default", "tag": "chain, anchor, href, attach, link" }, { "name": "paperclip", "pack": "default", "tag": "attach, paperclip" }, { "name": "compose", "pack": "default", "tag": "write, compose, type, compose" }, { "name": "briefcase", "pack": "default", "tag": "store, organize, briefcase" }, { "name": "medkit", "pack": "default", "tag": "health, medkit" }, { "name": "at", "pack": "default", "tag": "@, at" }, { "name": "pound", "pack": "default", "tag": "hashtag, #, pound" }, { "name": "quote", "pack": "default", "tag": "chat, quotation, quote" }, { "name": "cloud", "pack": "default", "tag": "storage, cloud" }, { "name": "upload", "pack": "default", "tag": "storage, cloud, upload" }, { "name": "more", "pack": "default", "tag": "circles, more" }, { "name": "grid", "pack": "default", "tag": "menu, grid" }, { "name": "calendar", "pack": "default", "tag": "date, time, month, year, calendar" }, { "name": "clock", "pack": "default", "tag": "time, watch, hours, minutes, seconds, clock" }, { "name": "compass", "pack": "default", "tag": "location, directions, navigation, compass" }, { "name": "pinpoint", "pack": "default", "tag": "gps, navigation, pinpoint" }, { "name": "pin", "pack": "default", "tag": "gps, navigation, pin" }, { "name": "navigate", "pack": "default", "tag": "gps, location pin, navigate" }, { "name": "location", "pack": "default", "tag": "gps, navigation, pin, location" }, { "name": "map", "pack": "default", "tag": "gps, navigation, pin, map" }, { "name": "lock-combination", "pack": "default", "tag": "padlock, security, lock-combination" }, { "name": "locked", "pack": "default", "tag": "padlock, security, locked" }, { "name": "unlocked", "pack": "default", "tag": "padlock, security, unlocked" }, { "name": "key", "pack": "default", "tag": "access, key" }, { "name": "arrow-graph-up-right", "pack": "default", "tag": "stats, arrow-graph-up-right" }, { "name": "arrow-graph-down-right", "pack": "default", "tag": "stats, arrow-graph-down-right" }, { "name": "arrow-graph-up-left", "pack": "default", "tag": "stats, arrow-graph-up-left" }, { "name": "arrow-graph-down-left", "pack": "default", "tag": "stats, arrow-graph-down-left" }, { "name": "stats-bars", "pack": "default", "tag": "data, stats-bars" }, { "name": "connection-bars", "pack": "default", "tag": "data, stats, connection-bars" }, { "name": "pie-graph", "pack": "default", "tag": "stats, pie-graph" }, { "name": "chatbubble", "pack": "default", "tag": "talk, chatbubble" }, { "name": "chatbubble-working", "pack": "default", "tag": "talk, chatbubble-working" }, { "name": "chatbubbles", "pack": "default", "tag": "talk, chatbubbles" }, { "name": "chatbox", "pack": "default", "tag": "talk, chatbox" }, { "name": "chatbox-working", "pack": "default", "tag": "talk, chatbox-working" }, { "name": "chatboxes", "pack": "default", "tag": "talk, chatboxes" }, { "name": "person", "pack": "default", "tag": "users, staff, head, human, person" }, { "name": "person-add", "pack": "default", "tag": "users, staff, head, human, member, new, person-add" }, { "name": "person-stalker", "pack": "default", "tag": "people, human, users, staff, person-stalker" }, { "name": "woman", "pack": "default", "tag": "female, lady, girl, dudette, woman" }, { "name": "man", "pack": "default", "tag": "male, guy, boy, dude, man" }, { "name": "female", "pack": "default", "tag": "lady, girl, dudette, female" }, { "name": "male", "pack": "default", "tag": "male, guy, boy, dude, male" }, { "name": "transgender", "pack": "default", "tag": ", transgender" }, { "name": "fork", "pack": "default", "tag": "food, drink, eat, fork" }, { "name": "knife", "pack": "default", "tag": "food, drink, eat, knife" }, { "name": "spoon", "pack": "default", "tag": "food, drink, eat, spoon" }, { "name": "soup-can-outline", "pack": "default", "tag": "food, drink, eat, soup-can-outline" }, { "name": "soup-can", "pack": "default", "tag": "food, drink, eat, soup-can" }, { "name": "beer", "pack": "default", "tag": "food, drink, eat, beer" }, { "name": "wineglass", "pack": "default", "tag": "food, drink, eat, wineglass" }, { "name": "coffee", "pack": "default", "tag": "food, drink, eat, caffeine, coffee" }, { "name": "icecream", "pack": "default", "tag": "food, drink, eat, icecream" }, { "name": "pizza", "pack": "default", "tag": "food, drink, eat, pizza" }, { "name": "power", "pack": "default", "tag": "on, off, power" }, { "name": "mouse", "pack": "default", "tag": "computer, mouse" }, { "name": "battery-full", "pack": "default", "tag": ", battery-full" }, { "name": "battery-half", "pack": "default", "tag": ", battery-half" }, { "name": "battery-low", "pack": "default", "tag": ", battery-low" }, { "name": "battery-empty", "pack": "default", "tag": ", battery-empty" }, { "name": "battery-charging", "pack": "default", "tag": ", battery-charging" }, { "name": "wifi", "pack": "default", "tag": "internet, connection, wifi" }, { "name": "bluetooth", "pack": "default", "tag": "connection, cloud, bluetooth" }, { "name": "calculator", "pack": "default", "tag": "math, arithmatic, numbers, addition, subtraction, calculator" }, { "name": "camera", "pack": "default", "tag": "photo, camera" }, { "name": "eye", "pack": "default", "tag": "view, see, creeper, eye" }, { "name": "eye-disabled", "pack": "default", "tag": "view, see, creeper, eye-disabled" }, { "name": "flash", "pack": "default", "tag": "lightning, weather, whether, flash" }, { "name": "flash-off", "pack": "default", "tag": ", flash-off" }, { "name": "qr-scanner", "pack": "default", "tag": "reader, qr-scanner" }, { "name": "image", "pack": "default", "tag": "photo, image" }, { "name": "images", "pack": "default", "tag": "photo, images" }, { "name": "wand", "pack": "default", "tag": "images, levels, light, dark, settings, wand" }, { "name": "contrast", "pack": "default", "tag": "images, levels, light, dark, settings, contrast" }, { "name": "aperture", "pack": "default", "tag": "images, levels, light, dark, settings, aperture" }, { "name": "crop", "pack": "default", "tag": "images, levels, light, dark, settings, crop" }, { "name": "easel", "pack": "default", "tag": "images, art, create, color, easel" }, { "name": "paintbrush", "pack": "default", "tag": "images, art, create, color, paintbrush" }, { "name": "paintbucket", "pack": "default", "tag": "images, art, create, color, paintbucket" }, { "name": "monitor", "pack": "default", "tag": "thunderbolt, screen, monitor" }, { "name": "laptop", "pack": "default", "tag": "macbook, apple, osx, laptop" }, { "name": "ipad", "pack": "default", "tag": "tablet, mobile, apple, retina, device, ipad" }, { "name": "iphone", "pack": "default", "tag": "smartphone, mobile, apple, retina, device, iphone" }, { "name": "ipod", "pack": "default", "tag": "music, player, apple, retina, device, ipod" }, { "name": "printer", "pack": "default", "tag": "paper, printer" }, { "name": "usb", "pack": "default", "tag": "digital, computer, usb" }, { "name": "outlet", "pack": "default", "tag": "digital, computer, electricity, outlet" }, { "name": "bug", "pack": "default", "tag": "develop, program, hacker, error, bug" }, { "name": "code", "pack": "default", "tag": "develop, program, hacker, code" }, { "name": "code-working", "pack": "default", "tag": "develop, program, hacker, code-working" }, { "name": "code-download", "pack": "default", "tag": "develop, program, hacker, code-download" }, { "name": "fork-repo", "pack": "default", "tag": "develop, program, hacker, github, fork-repo" }, { "name": "network", "pack": "default", "tag": "develop, program, hacker, github, network" }, { "name": "pull-request", "pack": "default", "tag": "develop, program, hacker, github, pull-request" }, { "name": "merge", "pack": "default", "tag": "develop, program, hacker, github, merge" }, { "name": "xbox", "pack": "default", "tag": "fun, games, xbox" }, { "name": "playstation", "pack": "default", "tag": "fun, games, playstation" }, { "name": "steam", "pack": "default", "tag": "fun, games, steam" }, { "name": "closed-captioning", "pack": "default", "tag": "movie, film, television, closed-captioning" }, { "name": "videocamera", "pack": "default", "tag": "movie, film, television, videocamera" }, { "name": "film-marker", "pack": "default", "tag": "film, cut, action, film-marker" }, { "name": "disc", "pack": "default", "tag": "cd, vinyl, disc" }, { "name": "headphone", "pack": "default", "tag": "music, earbuds, beats, headphone" }, { "name": "music-note", "pack": "default", "tag": "songs, music-note" }, { "name": "radio-waves", "pack": "default", "tag": "music, sound, speaker, radio-waves" }, { "name": "speakerphone", "pack": "default", "tag": "sound, speaker, loud, amplify, speakerphone" }, { "name": "mic-a", "pack": "default", "tag": "sound, talk, speaker, mic-a" }, { "name": "mic-b", "pack": "default", "tag": "sound, talk, speaker, mic-b" }, { "name": "mic-c", "pack": "default", "tag": "sound, talk, speaker, mic-c" }, { "name": "volume-high", "pack": "default", "tag": "sound, noise, volume-high" }, { "name": "volume-medium", "pack": "default", "tag": "sound, volume-medium" }, { "name": "volume-low", "pack": "default", "tag": "sound, volume-low" }, { "name": "volume-mute", "pack": "default", "tag": "sound, volume-mute" }, { "name": "levels", "pack": "default", "tag": "options, toggles, sound, mixer, levels" }, { "name": "play", "pack": "default", "tag": "music, watch, arrow, right, play" }, { "name": "pause", "pack": "default", "tag": "music, break, hold, freeze, pause" }, { "name": "stop", "pack": "default", "tag": "music, square, hold, freeze, stop" }, { "name": "record", "pack": "default", "tag": "music, circle, record" }, { "name": "skip-forward", "pack": "default", "tag": "music, next, skip-forward" }, { "name": "skip-backward", "pack": "default", "tag": "music, previous, skip-backward" }, { "name": "eject", "pack": "default", "tag": "music, dvd, remove, eject" }, { "name": "bag", "pack": "default", "tag": "shopping, price, cart, money, container, $, bag" }, { "name": "card", "pack": "default", "tag": "credit, price, debit, money, shopping, cash, dollars, $, card" }, { "name": "cash", "pack": "default", "tag": "credit, price, debit, money, shopping, dollars, $, cash" }, { "name": "pricetag", "pack": "default", "tag": "credit, debit, money, shopping, cash, dollars, $, pricetag" }, { "name": "pricetags", "pack": "default", "tag": "credit, debit, money, shopping, cash, dollars, $, pricetags" }, { "name": "thumbsup", "pack": "default", "tag": "like, fun, yes, thumbsup" }, { "name": "thumbsdown", "pack": "default", "tag": "dislike, boring, no, thumbsdown" }, { "name": "happy-outline", "pack": "default", "tag": "good, like, fun, yes, happy-outline" }, { "name": "happy", "pack": "default", "tag": "good, like, fun, yes, happy" }, { "name": "sad-outline", "pack": "default", "tag": "cry, bad, no, sad-outline" }, { "name": "sad", "pack": "default", "tag": "cry, bad, no, sad" }, { "name": "bowtie", "pack": "default", "tag": "tie, shirt, dress, clothing, bowtie" }, { "name": "tshirt-outline", "pack": "default", "tag": "tie, shirt, dress, clothing, tshirt-outline" }, { "name": "tshirt", "pack": "default", "tag": "tie, shirt, dress, clothing, tshirt" }, { "name": "trophy", "pack": "default", "tag": "competition, compete, win, lose, award, trophy" }, { "name": "podium", "pack": "default", "tag": "competition, compete, win, lose, award, podium" }, { "name": "ribbon-a", "pack": "default", "tag": "competition, compete, win, lose, award, trophy, ribbon-a" }, { "name": "ribbon-b", "pack": "default", "tag": "competition, compete, win, lose, award, trophy, ribbon-b" }, { "name": "university", "pack": "default", "tag": "graduate, education, school, tassle, university" }, { "name": "magnet", "pack": "default", "tag": "sticky, attraction, magnet" }, { "name": "beaker", "pack": "default", "tag": "mixture, potion, flask, beaker" }, { "name": "erlenmeyer-flask", "pack": "default", "tag": "mixture, potion, beaker, potion, erlenmeyer-flask" }, { "name": "egg", "pack": "default", "tag": "birth, twitter, bird, baby, egg" }, { "name": "earth", "pack": "default", "tag": "nature, globe, home, planet, earth" }, { "name": "planet", "pack": "default", "tag": "nature, globe, home, planet, space, planet" }, { "name": "lightbulb", "pack": "default", "tag": "idea, new, aha!, lightbulb" }, { "name": "cube", "pack": "default", "tag": "box, square, container, cube" }, { "name": "leaf", "pack": "default", "tag": "green, recycle, plant, nature, leaf" }, { "name": "waterdrop", "pack": "default", "tag": "nature, clean, recycle, fresh, wet, rain, waterdrop" }, { "name": "flame", "pack": "default", "tag": "fire, hot, heat, flame" }, { "name": "fireball", "pack": "default", "tag": "hot, heat, fireball" }, { "name": "bonfire", "pack": "default", "tag": "hot, heat, bonfire" }, { "name": "umbrella", "pack": "default", "tag": "wet, rain, dry, shelter, umbrella" }, { "name": "nuclear", "pack": "default", "tag": "danger, warning, hazard, nuclear" }, { "name": "no-smoking", "pack": "default", "tag": "danger, warning, cigarette, cancer, no-smoking" }, { "name": "thermometer", "pack": "default", "tag": "hot, cold, heat, temperature, mercury, thermometer" }, { "name": "speedometer", "pack": "default", "tag": "travel, accelerate, speedometer" }, { "name": "model-s", "pack": "default", "tag": "navigation, car, drive, transportation, tesla, sexy, model-s" }, { "name": "plane", "pack": "default", "tag": "fly, jet, plane" }, { "name": "jet", "pack": "default", "tag": "fly, plane, jet" }, { "name": "load-a", "pack": "default", "tag": "spinner, waiting, refresh, load-a" }, { "name": "load-b", "pack": "default", "tag": "spinner, waiting, refresh, load-b" }, { "name": "load-c", "pack": "default", "tag": "spinner, waiting, refresh, load-c" }, { "name": "load-d", "pack": "default", "tag": "spinner, waiting, refresh, load-d" }, { "name": "ios-ionic-outline", "pack": "ios", "tag": "badass, framework, sexy, ios-ionic-outline" }, { "name": "ios-arrow-back", "pack": "ios", "tag": "chevron, left, ios-arrow-back" }, { "name": "ios-arrow-forward", "pack": "ios", "tag": "chevron, right, ios-arrow-forward" }, { "name": "ios-arrow-up", "pack": "ios", "tag": "chevron, ios-arrow-up" }, { "name": "ios-arrow-right", "pack": "ios", "tag": "chevron, ios-arrow-right" }, { "name": "ios-arrow-down", "pack": "ios", "tag": "chevron, ios-arrow-down" }, { "name": "ios-arrow-left", "pack": "ios", "tag": "chevron, ios-arrow-left" }, { "name": "ios-arrow-thin-up", "pack": "ios", "tag": "chevron, ios-arrow-thin-up" }, { "name": "ios-arrow-thin-right", "pack": "ios", "tag": "chevron, ios-arrow-thin-right" }, { "name": "ios-arrow-thin-down", "pack": "ios", "tag": "chevron, ios-arrow-thin-down" }, { "name": "ios-arrow-thin-left", "pack": "ios", "tag": "chevron, ios-arrow-thin-left" }, { "name": "ios-circle-filled", "pack": "ios", "tag": "checkmark, radio, dot, on, selected, button, ios-circle-filled" }, { "name": "ios-circle-outline", "pack": "ios", "tag": "checkmark, radio, dot, off, button, ios-circle-outline" }, { "name": "ios-checkmark-empty", "pack": "ios", "tag": "success, confirmed, on, finished, complete, ios-checkmark-empty" }, { "name": "ios-checkmark-outline", "pack": "ios", "tag": "success, confirmed, on, finished, complete, ios-checkmark-outline" }, { "name": "ios-checkmark", "pack": "ios", "tag": "success, confirmed, on, finished, complete, ios-checkmark" }, { "name": "ios-plus-empty", "pack": "ios", "tag": "add, include, new, invite, +, ios-plus-empty" }, { "name": "ios-plus-outline", "pack": "ios", "tag": "add, include, new, invite, +, ios-plus-outline" }, { "name": "ios-plus", "pack": "ios", "tag": "add, include, new, invite, +, ios-plus" }, { "name": "ios-close-empty", "pack": "ios", "tag": "delete, remove, trash, end, stop, x, ios-close-empty" }, { "name": "ios-close-outline", "pack": "ios", "tag": "delete, remove, trash, end, stop, x, ios-close-outline" }, { "name": "ios-close", "pack": "ios", "tag": "delete, remove, trash, end, stop, x, ios-close" }, { "name": "ios-minus-empty", "pack": "ios", "tag": "hide, remove, minimize, -, ios-minus-empty" }, { "name": "ios-minus-outline", "pack": "ios", "tag": "hide, remove, minimize, -, ios-minus-outline" }, { "name": "ios-minus", "pack": "ios", "tag": "hide, remove, minimize, -, ios-minus" }, { "name": "ios-information-empty", "pack": "ios", "tag": "help, question, ios-information-empty" }, { "name": "ios-information-outline", "pack": "ios", "tag": "help, question, ios-information-outline" }, { "name": "ios-information", "pack": "ios", "tag": "help, question, ios-information" }, { "name": "ios-help-empty", "pack": "ios", "tag": "question, information, ?, ios-help-empty" }, { "name": "ios-help-outline", "pack": "ios", "tag": "question, information, ?, ios-help-outline" }, { "name": "ios-help", "pack": "ios", "tag": "question, information, ?, ios-help" }, { "name": "ios-search", "pack": "ios", "tag": "find, seek, look, magnifying glass, ios-search" }, { "name": "ios-search-strong", "pack": "ios", "tag": "find, seek, look, magnifying glass, ios-search-strong" }, { "name": "ios-star", "pack": "ios", "tag": "favorite, rate, ios-star" }, { "name": "ios-star-half", "pack": "ios", "tag": "favorite, rate, ios-star-half" }, { "name": "ios-star-outline", "pack": "ios", "tag": "favorite, rate, ios-star-outline" }, { "name": "ios-heart", "pack": "ios", "tag": "love, ios-heart" }, { "name": "ios-heart-outline", "pack": "ios", "tag": "love, ios-heart-outline" }, { "name": "ios-more", "pack": "ios", "tag": "menu, ios-more" }, { "name": "ios-more-outline", "pack": "ios", "tag": "menu, ios-more-outline" }, { "name": "ios-home", "pack": "ios", "tag": "house, ios-home" }, { "name": "ios-home-outline", "pack": "ios", "tag": "house, ios-home-outline" }, { "name": "ios-cloud", "pack": "ios", "tag": "storage, weather, whether, ios-cloud" }, { "name": "ios-cloud-outline", "pack": "ios", "tag": "storage, weather, whether, ios-cloud-outline" }, { "name": "ios-cloud-upload", "pack": "ios", "tag": "storage, ios-cloud-upload" }, { "name": "ios-cloud-upload-outline", "pack": "ios", "tag": "storage, ios-cloud-upload-outline" }, { "name": "ios-cloud-download", "pack": "ios", "tag": "storage, ios-cloud-download" }, { "name": "ios-cloud-download-outline", "pack": "ios", "tag": "storage, ios-cloud-download-outline" }, { "name": "ios-upload", "pack": "ios", "tag": "share, import, ios-upload" }, { "name": "ios-upload-outline", "pack": "ios", "tag": "share, import, ios-upload-outline" }, { "name": "ios-download", "pack": "ios", "tag": "save, export, ios-download" }, { "name": "ios-download-outline", "pack": "ios", "tag": "save, export, ios-download-outline" }, { "name": "ios-refresh", "pack": "ios", "tag": "reload, renew, reset, ios-refresh" }, { "name": "ios-refresh-outline", "pack": "ios", "tag": "reload, renew, reset, ios-refresh-outline" }, { "name": "ios-refresh-empty", "pack": "ios", "tag": "reload, renew, ios-refresh-empty" }, { "name": "ios-reload", "pack": "ios", "tag": "renew, reset, ios-reload" }, { "name": "ios-loop-strong", "pack": "ios", "tag": "reload, renew, reset, ios-loop-strong" }, { "name": "ios-loop", "pack": "ios", "tag": "reload, renew, reset, ios-loop" }, { "name": "ios-bookmarks", "pack": "ios", "tag": "favorite, ios-bookmarks" }, { "name": "ios-bookmarks-outline", "pack": "ios", "tag": "favorite, ios-bookmarks-outline" }, { "name": "ios-book", "pack": "ios", "tag": "favorite, read, literature, ios-book" }, { "name": "ios-book-outline", "pack": "ios", "tag": "favorite, read, literature, ios-book-outline" }, { "name": "ios-flag", "pack": "ios", "tag": "marker, favorite, ios-flag" }, { "name": "ios-flag-outline", "pack": "ios", "tag": "marker, favorite, ios-flag-outline" }, { "name": "ios-glasses", "pack": "ios", "tag": "steve, reading, look, see, ios-glasses" }, { "name": "ios-glasses-outline", "pack": "ios", "tag": "steve, reading, look, see, ios-glasses-outline" }, { "name": "ios-browsers", "pack": "ios", "tag": "square, ios-browsers" }, { "name": "ios-browsers-outline", "pack": "ios", "tag": "square, ios-browsers-outline" }, { "name": "ios-at", "pack": "ios", "tag": "@, ios-at" }, { "name": "ios-at-outline", "pack": "ios", "tag": "@, ios-at-outline" }, { "name": "ios-pricetag", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-pricetag" }, { "name": "ios-pricetag-outline", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-pricetag-outline" }, { "name": "ios-pricetags", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-pricetags" }, { "name": "ios-pricetags-outline", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-pricetags-outline" }, { "name": "ios-cart", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-cart" }, { "name": "ios-cart-outline", "pack": "ios", "tag": "shopping, money, items, commerce, $, ios-cart-outline" }, { "name": "ios-chatboxes", "pack": "ios", "tag": "talk, ios-chatboxes" }, { "name": "ios-chatboxes-outline", "pack": "ios", "tag": "talk, ios-chatboxes-outline" }, { "name": "ios-chatbubble", "pack": "ios", "tag": "talk, ios-chatbubble" }, { "name": "ios-chatbubble-outline", "pack": "ios", "tag": "talk, ios-chatbubble-outline" }, { "name": "ios-cog", "pack": "ios", "tag": "settings, gear, options, ios-cog" }, { "name": "ios-cog-outline", "pack": "ios", "tag": "settings, gear, options, ios-cog-outline" }, { "name": "ios-gear", "pack": "ios", "tag": "cog, settings, options, ios-gear" }, { "name": "ios-gear-outline", "pack": "ios", "tag": "cog, settings, options, ios-gear-outline" }, { "name": "ios-settings", "pack": "ios", "tag": "cog, settings, options, ios-settings" }, { "name": "ios-settings-strong", "pack": "ios", "tag": "cog, settings, options, ios-settings-strong" }, { "name": "ios-toggle", "pack": "ios", "tag": "settings, options, switch, ios-toggle" }, { "name": "ios-toggle-outline", "pack": "ios", "tag": "settings, options, switch, ios-toggle-outline" }, { "name": "ios-analytics", "pack": "ios", "tag": "metrics, track, data, ios-analytics" }, { "name": "ios-analytics-outline", "pack": "ios", "tag": "metrics, track, data, ios-analytics-outline" }, { "name": "ios-pie", "pack": "ios", "tag": "cog, settings, options, ios-pie" }, { "name": "ios-pie-outline", "pack": "ios", "tag": "cog, settings, options, ios-pie-outline" }, { "name": "ios-pulse", "pack": "ios", "tag": "live, hot, rate, ios-pulse" }, { "name": "ios-pulse-strong", "pack": "ios", "tag": "live, hot, rate, ios-pulse-strong" }, { "name": "ios-filing", "pack": "ios", "tag": "archive, ios-filing" }, { "name": "ios-filing-outline", "pack": "ios", "tag": "archive, ios-filing-outline" }, { "name": "ios-box", "pack": "ios", "tag": "archive, ios-box" }, { "name": "ios-box-outline", "pack": "ios", "tag": "archive, ios-box-outline" }, { "name": "ios-compose", "pack": "ios", "tag": "write, type, create, ios-compose" }, { "name": "ios-compose-outline", "pack": "ios", "tag": "write, type, create, ios-compose-outline" }, { "name": "ios-trash", "pack": "ios", "tag": "delete, remove, dispose, waste, basket, dump, kill, ios-trash" }, { "name": "ios-trash-outline", "pack": "ios", "tag": "delete, remove, dispose, waste, basket, dump, kill, ios-trash-outline" }, { "name": "ios-copy", "pack": "ios", "tag": "duplicate, paper, ios-copy" }, { "name": "ios-copy-outline", "pack": "ios", "tag": "duplicate, paper, ios-copy-outline" }, { "name": "ios-email", "pack": "ios", "tag": "snail, mail, ios-email" }, { "name": "ios-email-outline", "pack": "ios", "tag": "snail, mail, ios-email-outline" }, { "name": "ios-undo", "pack": "ios", "tag": "reply, ios-undo" }, { "name": "ios-undo-outline", "pack": "ios", "tag": "reply, ios-undo-outline" }, { "name": "ios-redo", "pack": "ios", "tag": "forward, ios-redo" }, { "name": "ios-redo-outline", "pack": "ios", "tag": "forward, ios-redo-outline" }, { "name": "ios-paperplane", "pack": "ios", "tag": "send, ios-paperplane" }, { "name": "ios-paperplane-outline", "pack": "ios", "tag": "send, ios-paperplane-outline" }, { "name": "ios-folder", "pack": "ios", "tag": "file, ios-folder" }, { "name": "ios-folder-outline", "pack": "ios", "tag": "file, ios-folder-outline" }, { "name": "ios-paper", "pack": "ios", "tag": "feed, paper, ios-paper" }, { "name": "ios-paper-outline", "pack": "ios", "tag": "feed, paper, ios-paper-outline" }, { "name": "ios-list", "pack": "ios", "tag": "todo, feed, paper, ios-list" }, { "name": "ios-list-outline", "pack": "ios", "tag": "todo, feed, paper, ios-list-outline" }, { "name": "ios-world", "pack": "ios", "tag": "globe, earth, ios-world" }, { "name": "ios-world-outline", "pack": "ios", "tag": "globe, earth, ios-world-outline" }, { "name": "ios-alarm", "pack": "ios", "tag": "wake, ring, ios-alarm" }, { "name": "ios-alarm-outline", "pack": "ios", "tag": "wake, ring, ios-alarm-outline" }, { "name": "ios-speedometer", "pack": "ios", "tag": "speed, drive, level, ios-speedometer" }, { "name": "ios-speedometer-outline", "pack": "ios", "tag": "speed, drive, level, ios-speedometer-outline" }, { "name": "ios-stopwatch", "pack": "ios", "tag": "time, speed, ios-stopwatch" }, { "name": "ios-stopwatch-outline", "pack": "ios", "tag": "time, speed, ios-stopwatch-outline" }, { "name": "ios-timer", "pack": "ios", "tag": "cooking, alarm, buzz, ios-timer" }, { "name": "ios-timer-outline", "pack": "ios", "tag": "cooking, alarm, buzz, ios-timer-outline" }, { "name": "ios-clock", "pack": "ios", "tag": "time, date, hours, minutes, seconds, watch, ios-clock" }, { "name": "ios-clock-outline", "pack": "ios", "tag": "time, date, hours, minutes, seconds, watch, ios-clock-outline" }, { "name": "ios-time", "pack": "ios", "tag": "clock, watch, hour, minute, second, ios-time" }, { "name": "ios-time-outline", "pack": "ios", "tag": "clock, watch, hour, minute, second, ios-time-outline" }, { "name": "ios-calendar", "pack": "ios", "tag": "date, time, month, year, ios-calendar" }, { "name": "ios-calendar-outline", "pack": "ios", "tag": "date, time, month, year, ios-calendar-outline" }, { "name": "ios-photos", "pack": "ios", "tag": "images, stills, square, ios-photos" }, { "name": "ios-photos-outline", "pack": "ios", "tag": "images, stills, square, ios-photos-outline" }, { "name": "ios-albums", "pack": "ios", "tag": "square, boxes, slides, ios-albums" }, { "name": "ios-albums-outline", "pack": "ios", "tag": "square, boxes, slides, ios-albums-outline" }, { "name": "ios-camera", "pack": "ios", "tag": "picture, ios-camera" }, { "name": "ios-camera-outline", "pack": "ios", "tag": "picture, ios-camera-outline" }, { "name": "ios-reverse-camera", "pack": "ios", "tag": "picture, ios-reverse-camera" }, { "name": "ios-reverse-camera-outline", "pack": "ios", "tag": "picture, ios-reverse-camera-outline" }, { "name": "ios-eye", "pack": "ios", "tag": "view, see, exposed, look, ios-eye" }, { "name": "ios-eye-outline", "pack": "ios", "tag": "view, see, exposed, look, ios-eye-outline" }, { "name": "ios-bolt", "pack": "ios", "tag": "flash, lightning, ios-bolt" }, { "name": "ios-bolt-outline", "pack": "ios", "tag": "flash, lightning, ios-bolt-outline" }, { "name": "ios-color-wand", "pack": "ios", "tag": "camera, picture, edit, magic, ios-color-wand" }, { "name": "ios-color-wand-outline", "pack": "ios", "tag": "camera, picture, edit, magic, ios-color-wand-outline" }, { "name": "ios-color-filter", "pack": "ios", "tag": "camera, picture, ios-color-filter" }, { "name": "ios-color-filter-outline", "pack": "ios", "tag": "camera, picture, ios-color-filter-outline" }, { "name": "ios-grid-view", "pack": "ios", "tag": "camera, picture, ios-grid-view" }, { "name": "ios-grid-view-outline", "pack": "ios", "tag": "camera, picture, ios-grid-view-outline" }, { "name": "ios-crop-strong", "pack": "ios", "tag": "camera, picture, edit, ios-crop-strong" }, { "name": "ios-crop", "pack": "ios", "tag": "camera, picture, edit, ios-crop" }, { "name": "ios-barcode", "pack": "ios", "tag": "reader, camera, ios-barcode" }, { "name": "ios-barcode-outline", "pack": "ios", "tag": "reader, camera, ios-barcode-outline" }, { "name": "ios-briefcase", "pack": "ios", "tag": "organize, folder, ios-briefcase" }, { "name": "ios-briefcase-outline", "pack": "ios", "tag": "organize, folder, ios-briefcase-outline" }, { "name": "ios-medkit", "pack": "ios", "tag": "health, case, first aid, sick, disease, ios-medkit" }, { "name": "ios-medkit-outline", "pack": "ios", "tag": "health, case, first aid, sick, disease, ios-medkit-outline" }, { "name": "ios-medical", "pack": "ios", "tag": "health, case, first aid, sick, disease, ios-medical" }, { "name": "ios-medical-outline", "pack": "ios", "tag": "health, case, first aid, sick, disease, ios-medical-outline" }, { "name": "ios-infinite", "pack": "ios", "tag": "forever, loop, ios-infinite" }, { "name": "ios-infinite-outline", "pack": "ios", "tag": "forever, loop, ios-infinite-outline" }, { "name": "ios-calculator", "pack": "ios", "tag": "math, arithmatic, ios-calculator" }, { "name": "ios-calculator-outline", "pack": "ios", "tag": "math, arithmatic, ios-calculator-outline" }, { "name": "ios-keypad", "pack": "ios", "tag": "type, grid, circle, ios-keypad" }, { "name": "ios-keypad-outline", "pack": "ios", "tag": "type, grid, circle, ios-keypad-outline" }, { "name": "ios-telephone", "pack": "ios", "tag": "oldschool, call, ios-telephone" }, { "name": "ios-telephone-outline", "pack": "ios", "tag": "oldschool, call, ios-telephone-outline" }, { "name": "ios-drag", "pack": "ios", "tag": "reorder, move, drag, ios-drag" }, { "name": "ios-location", "pack": "ios", "tag": "navigation, map, gps, pin, ios-location" }, { "name": "ios-location-outline", "pack": "ios", "tag": "navigation, map, gps, pin, ios-location-outline" }, { "name": "ios-navigate", "pack": "ios", "tag": "location, map, gps, pin, ios-navigate" }, { "name": "ios-navigate-outline", "pack": "ios", "tag": "location, map, gps, pin, ios-navigate-outline" }, { "name": "ios-locked", "pack": "ios", "tag": "security, padlock, safe, ios-locked" }, { "name": "ios-locked-outline", "pack": "ios", "tag": "security, padlock, safe, ios-locked-outline" }, { "name": "ios-unlocked", "pack": "ios", "tag": "security, padlock, safe, ios-unlocked" }, { "name": "ios-unlocked-outline", "pack": "ios", "tag": "security, padlock, safe, ios-unlocked-outline" }, { "name": "ios-monitor", "pack": "ios", "tag": "thunderbolt, display, screen, ios-monitor" }, { "name": "ios-monitor-outline", "pack": "ios", "tag": "thunderbolt, display, screen, ios-monitor-outline" }, { "name": "ios-printer", "pack": "ios", "tag": "paper, ios-printer" }, { "name": "ios-printer-outline", "pack": "ios", "tag": "paper, ios-printer-outline" }, { "name": "ios-game-controller-a", "pack": "ios", "tag": "gaming, nintendo, play, ios-game-controller-a" }, { "name": "ios-game-controller-a-outline", "pack": "ios", "tag": "gaming, nintendo, play, ios-game-controller-a-outline" }, { "name": "ios-game-controller-b", "pack": "ios", "tag": "gaming, nintendo, play, ios-game-controller-b" }, { "name": "ios-game-controller-b-outline", "pack": "ios", "tag": "gaming, nintendo, play, ios-game-controller-b-outline" }, { "name": "ios-americanfootball", "pack": "ios", "tag": "nfl, games, sports, fun, play, ios-americanfootball" }, { "name": "ios-americanfootball-outline", "pack": "ios", "tag": "nfl, games, sports, fun, play, ios-americanfootball-outline" }, { "name": "ios-baseball", "pack": "ios", "tag": "mlb, games, sports, fun, play, ios-baseball" }, { "name": "ios-baseball-outline", "pack": "ios", "tag": "mlb, games, sports, fun, play, ios-baseball-outline" }, { "name": "ios-basketball", "pack": "ios", "tag": "nba, games, sports, fun, play, ios-basketball" }, { "name": "ios-basketball-outline", "pack": "ios", "tag": "nba, games, sports, fun, play, ios-basketball-outline" }, { "name": "ios-tennisball", "pack": "ios", "tag": "games, sports, fun, play, ios-tennisball" }, { "name": "ios-tennisball-outline", "pack": "ios", "tag": "games, sports, fun, play, ios-tennisball-outline" }, { "name": "ios-football", "pack": "ios", "tag": "mls, soccer, games, sports, fun, play, ios-football" }, { "name": "ios-football-outline", "pack": "ios", "tag": "mls, soccer, games, sports, fun, play, ios-football-outline" }, { "name": "ios-body", "pack": "ios", "tag": "person, users, staff, head, human, ios-body" }, { "name": "ios-body-outline", "pack": "ios", "tag": "person, users, staff, head, human, ios-body-outline" }, { "name": "ios-person", "pack": "ios", "tag": "users, staff, head, human, ios-person" }, { "name": "ios-person-outline", "pack": "ios", "tag": "users, staff, head, human, ios-person-outline" }, { "name": "ios-personadd", "pack": "ios", "tag": "users, staff, head, human, new, invite, ios-personadd" }, { "name": "ios-personadd-outline", "pack": "ios", "tag": "users, staff, head, human, new, invite, ios-personadd-outline" }, { "name": "ios-people", "pack": "ios", "tag": "stalker, person, users, head, human, ios-people" }, { "name": "ios-people-outline", "pack": "ios", "tag": "stalker, person, users, head, human, ios-people-outline" }, { "name": "ios-musical-notes", "pack": "ios", "tag": "sound, noise, listening, play, ios-musical-notes" }, { "name": "ios-musical-note", "pack": "ios", "tag": "sound, noise, listening, play, ios-musical-note" }, { "name": "ios-bell", "pack": "ios", "tag": "right, noise, alarm, sound, music, ios-bell" }, { "name": "ios-bell-outline", "pack": "ios", "tag": "right, noise, alarm, sound, music, ios-bell-outline" }, { "name": "ios-mic", "pack": "ios", "tag": "sound, noise, speaker, talk, ios-mic" }, { "name": "ios-mic-outline", "pack": "ios", "tag": "sound, noise, speaker, talk, ios-mic-outline" }, { "name": "ios-mic-off", "pack": "ios", "tag": "sound, noise, speaker, talk, ios-mic-off" }, { "name": "ios-volume-high", "pack": "ios", "tag": "sound, noise, listen, music, ios-volume-high" }, { "name": "ios-volume-low", "pack": "ios", "tag": "sound, noise, listen, music, ios-volume-low" }, { "name": "ios-play", "pack": "ios", "tag": "music, watch, arrow, right, ios-play" }, { "name": "ios-play-outline", "pack": "ios", "tag": "music, watch, arrow, right, ios-play-outline" }, { "name": "ios-pause", "pack": "ios", "tag": "music, break, hold, freeze, ios-pause" }, { "name": "ios-pause-outline", "pack": "ios", "tag": "music, break, hold, freeze, ios-pause-outline" }, { "name": "ios-recording", "pack": "ios", "tag": "film, tape, voicemail, ios-recording" }, { "name": "ios-recording-outline", "pack": "ios", "tag": "film, tape, voicemail, ios-recording-outline" }, { "name": "ios-fastforward", "pack": "ios", "tag": "next, skip, jump, ios-fastforward" }, { "name": "ios-fastforward-outline", "pack": "ios", "tag": "next, skip, jump, ios-fastforward-outline" }, { "name": "ios-rewind", "pack": "ios", "tag": "music, previous, back, ios-rewind" }, { "name": "ios-rewind-outline", "pack": "ios", "tag": "music, previous, back, ios-rewind-outline" }, { "name": "ios-skipbackward", "pack": "ios", "tag": "music, previous, ios-skipbackward" }, { "name": "ios-skipbackward-outline", "pack": "ios", "tag": "music, previous, ios-skipbackward-outline" }, { "name": "ios-skipforward", "pack": "ios", "tag": "music, next, ios-skipforward" }, { "name": "ios-skipforward-outline", "pack": "ios", "tag": "music, next, ios-skipforward-outline" }, { "name": "ios-shuffle-strong", "pack": "ios", "tag": "music, next, ios-shuffle-strong" }, { "name": "ios-shuffle", "pack": "ios", "tag": "music, next, ios-shuffle" }, { "name": "ios-videocam", "pack": "ios", "tag": "film, movie, camera, ios-videocam" }, { "name": "ios-videocam-outline", "pack": "ios", "tag": "film, movie, camera, ios-videocam-outline" }, { "name": "ios-film", "pack": "ios", "tag": "film, movie, camera, ios-film" }, { "name": "ios-film-outline", "pack": "ios", "tag": "film, movie, camera, ios-film-outline" }, { "name": "ios-flask", "pack": "ios", "tag": "options, mixer, liquid, ios-flask" }, { "name": "ios-flask-outline", "pack": "ios", "tag": "options, mixer, liquid, ios-flask-outline" }, { "name": "ios-lightbulb", "pack": "ios", "tag": "idea, new, bright, aha!, ios-lightbulb" }, { "name": "ios-lightbulb-outline", "pack": "ios", "tag": "idea, new, bright, aha!, ios-lightbulb-outline" }, { "name": "ios-wineglass", "pack": "ios", "tag": "alcohol, drink, food, glass, drunk, cheers, ios-wineglass" }, { "name": "ios-wineglass-outline", "pack": "ios", "tag": "alcohol, drink, food, glass, drunk, cheers, ios-wineglass-outline" }, { "name": "ios-pint", "pack": "ios", "tag": "alcohol, drink, food, beer, drunk, cheers, ios-pint" }, { "name": "ios-pint-outline", "pack": "ios", "tag": "alcohol, drink, food, beer, drunk, cheers, ios-pint-outline" }, { "name": "ios-nutrition", "pack": "ios", "tag": "health, carrot, food, ios-nutrition" }, { "name": "ios-nutrition-outline", "pack": "ios", "tag": "health, carrot, food, ios-nutrition-outline" }, { "name": "ios-flower", "pack": "ios", "tag": "nature, spring, leaf, garden, ios-flower" }, { "name": "ios-flower-outline", "pack": "ios", "tag": "nature, spring, leaf, garden, ios-flower-outline" }, { "name": "ios-rose", "pack": "ios", "tag": "nature, spring, leaf, garden, flower, ios-rose" }, { "name": "ios-rose-outline", "pack": "ios", "tag": "nature, spring, leaf, garden, flower, ios-rose-outline" }, { "name": "ios-paw", "pack": "ios", "tag": "nature, animal, pet, outdoor, track, ios-paw" }, { "name": "ios-paw-outline", "pack": "ios", "tag": "nature, animal, pet, outdoor, track, ios-paw-outline" }, { "name": "ios-flame", "pack": "ios", "tag": "fire, hot, burn, ios-flame" }, { "name": "ios-flame-outline", "pack": "ios", "tag": "fire, hot, burn, ios-flame-outline" }, { "name": "ios-sunny", "pack": "ios", "tag": "weather, whether, light, sky, ios-sunny" }, { "name": "ios-sunny-outline", "pack": "ios", "tag": "weather, whether, light, sky, ios-sunny-outline" }, { "name": "ios-partlysunny", "pack": "ios", "tag": "light, weather, whether, cloudy, ios-partlysunny" }, { "name": "ios-partlysunny-outline", "pack": "ios", "tag": "light, weather, whether, cloudy, ios-partlysunny-outline" }, { "name": "ios-cloudy", "pack": "ios", "tag": "weather, whether, overcast, ios-cloudy" }, { "name": "ios-cloudy-outline", "pack": "ios", "tag": "weather, whether, overcast, ios-cloudy-outline" }, { "name": "ios-rainy", "pack": "ios", "tag": "whether, weather, water, cloud, ios-rainy" }, { "name": "ios-rainy-outline", "pack": "ios", "tag": "whether, weather, water, cloud, ios-rainy-outline" }, { "name": "ios-thunderstorm", "pack": "ios", "tag": "whether, weather, sky, lightning, rain, cloudy, overcast, storm, ios-thunderstorm" }, { "name": "ios-thunderstorm-outline", "pack": "ios", "tag": "whether, weather, sky, lightning, rain, cloudy, overcast, storm, ios-thunderstorm-outline" }, { "name": "ios-snowy", "pack": "ios", "tag": "cold, weather, whether, overcast, ios-snowy" }, { "name": "ios-moon", "pack": "ios", "tag": "sky, night, dark, ios-moon" }, { "name": "ios-moon-outline", "pack": "ios", "tag": "sky, night, dark, ios-moon-outline" }, { "name": "ios-cloudy-night", "pack": "ios", "tag": "weather, whether, overcast, ios-cloudy-night" }, { "name": "ios-cloudy-night-outline", "pack": "ios", "tag": "weather, whether, overcast, ios-cloudy-night-outline" }, { "name": "android-arrow-up", "pack": "android", "tag": "chevron, navigation, android-arrow-up" }, { "name": "android-arrow-forward", "pack": "android", "tag": "chevron, navigation, android-arrow-forward" }, { "name": "android-arrow-down", "pack": "android", "tag": "chevron, navigation, android-arrow-down" }, { "name": "android-arrow-back", "pack": "android", "tag": "chevron, navigation, android-arrow-back" }, { "name": "android-arrow-dropup", "pack": "android", "tag": "chevron, navigation, android-arrow-dropup" }, { "name": "android-arrow-dropup-circle", "pack": "android", "tag": "chevron, navigation, android-arrow-dropup-circle" }, { "name": "android-arrow-dropright", "pack": "android", "tag": "chevron, navigation, android-arrow-dropright" }, { "name": "android-arrow-dropright-circle", "pack": "android", "tag": "chevron, navigation, android-arrow-dropright-circle" }, { "name": "android-arrow-dropdown", "pack": "android", "tag": "chevron, navigation, android-arrow-dropdown" }, { "name": "android-arrow-dropdown-circle", "pack": "android", "tag": "chevron, navigation, android-arrow-dropdown-circle" }, { "name": "android-arrow-dropleft", "pack": "android", "tag": "chevron, navigation, android-arrow-dropleft" }, { "name": "android-arrow-dropleft-circle", "pack": "android", "tag": "chevron, navigation, android-arrow-dropleft-circle" }, { "name": "android-add", "pack": "android", "tag": "plus, include, invite, android-add" }, { "name": "android-add-circle", "pack": "android", "tag": "plus, include, invite, android-add-circle" }, { "name": "android-remove", "pack": "android", "tag": "minus, subtract, delete, android-remove" }, { "name": "android-remove-circle", "pack": "android", "tag": "minus, subtract, delete, android-remove-circle" }, { "name": "android-close", "pack": "android", "tag": "delete, remove, android-close" }, { "name": "android-cancel", "pack": "android", "tag": "delete, remove, android-cancel" }, { "name": "android-radio-button-off", "pack": "android", "tag": ", android-radio-button-off" }, { "name": "android-radio-button-on", "pack": "android", "tag": ", android-radio-button-on" }, { "name": "android-checkmark-circle", "pack": "android", "tag": ", android-checkmark-circle" }, { "name": "android-checkbox-outline-blank", "pack": "android", "tag": ", android-checkbox-outline-blank" }, { "name": "android-checkbox-outline", "pack": "android", "tag": ", android-checkbox-outline" }, { "name": "android-checkbox-blank", "pack": "android", "tag": ", android-checkbox-blank" }, { "name": "android-checkbox", "pack": "android", "tag": ", android-checkbox" }, { "name": "android-done", "pack": "android", "tag": ", android-done" }, { "name": "android-done-all", "pack": "android", "tag": ", android-done-all" }, { "name": "android-menu", "pack": "android", "tag": ", android-menu" }, { "name": "android-more-horizontal", "pack": "android", "tag": "options, menu, android-more-horizontal" }, { "name": "android-more-vertical", "pack": "android", "tag": "options, menu, android-more-vertical" }, { "name": "android-refresh", "pack": "android", "tag": ", android-refresh" }, { "name": "android-sync", "pack": "android", "tag": ", android-sync" }, { "name": "android-wifi", "pack": "android", "tag": "internet,connection, bars, android-wifi" }, { "name": "android-call", "pack": "android", "tag": "telephone, android-call" }, { "name": "android-apps", "pack": "android", "tag": ", android-apps" }, { "name": "android-settings", "pack": "android", "tag": "options, android-settings" }, { "name": "android-options", "pack": "android", "tag": "settings, mixer, android-options" }, { "name": "android-funnel", "pack": "android", "tag": ", android-funnel" }, { "name": "android-search", "pack": "android", "tag": "magnifying glass, android-search" }, { "name": "android-home", "pack": "android", "tag": ", android-home" }, { "name": "android-cloud-outline", "pack": "android", "tag": ", android-cloud-outline" }, { "name": "android-cloud", "pack": "android", "tag": ", android-cloud" }, { "name": "android-download", "pack": "android", "tag": ", android-download" }, { "name": "android-upload", "pack": "android", "tag": ", android-upload" }, { "name": "android-cloud-done", "pack": "android", "tag": ", android-cloud-done" }, { "name": "android-cloud-circle", "pack": "android", "tag": ", android-cloud-circle" }, { "name": "android-favorite-outline", "pack": "android", "tag": "favorite, like, rate, android-favorite-outline" }, { "name": "android-favorite", "pack": "android", "tag": "favorite, like, rate, android-favorite" }, { "name": "android-star-outline", "pack": "android", "tag": "favorite, like, rate, android-star-outline" }, { "name": "android-star-half", "pack": "android", "tag": "favorite, like, rate, android-star-half" }, { "name": "android-star", "pack": "android", "tag": "favorite, like, rate, android-star" }, { "name": "android-calendar", "pack": "android", "tag": "clock, android-calendar" }, { "name": "android-alarm-clock", "pack": "android", "tag": "clock, android-alarm-clock" }, { "name": "android-time", "pack": "android", "tag": "clock, android-time" }, { "name": "android-stopwatch", "pack": "android", "tag": ", android-stopwatch" }, { "name": "android-watch", "pack": "android", "tag": ", android-watch" }, { "name": "android-locate", "pack": "android", "tag": ", android-locate" }, { "name": "android-navigate", "pack": "android", "tag": ", android-navigate" }, { "name": "android-pin", "pack": "android", "tag": ", android-pin" }, { "name": "android-compass", "pack": "android", "tag": ", android-compass" }, { "name": "android-map", "pack": "android", "tag": ", android-map" }, { "name": "android-walk", "pack": "android", "tag": ", android-walk" }, { "name": "android-bicycle", "pack": "android", "tag": "move, bike, transportation, maps, android-bicycle" }, { "name": "android-car", "pack": "android", "tag": ", android-car" }, { "name": "android-bus", "pack": "android", "tag": ", android-bus" }, { "name": "android-subway", "pack": "android", "tag": ", android-subway" }, { "name": "android-train", "pack": "android", "tag": ", android-train" }, { "name": "android-boat", "pack": "android", "tag": ", android-boat" }, { "name": "android-plane", "pack": "android", "tag": ", android-plane" }, { "name": "android-restaurant", "pack": "android", "tag": ", android-restaurant" }, { "name": "android-bar", "pack": "android", "tag": "wine, drink, food, dinner, android-bar" }, { "name": "android-cart", "pack": "android", "tag": ", android-cart" }, { "name": "android-camera", "pack": "android", "tag": ", android-camera" }, { "name": "android-image", "pack": "android", "tag": ", android-image" }, { "name": "android-film", "pack": "android", "tag": ", android-film" }, { "name": "android-color-palette", "pack": "android", "tag": ", android-color-palette" }, { "name": "android-create", "pack": "android", "tag": ", android-create" }, { "name": "android-mail", "pack": "android", "tag": ", android-mail" }, { "name": "android-drafts", "pack": "android", "tag": ", android-drafts" }, { "name": "android-send", "pack": "android", "tag": ", android-send" }, { "name": "android-archive", "pack": "android", "tag": ", android-archive" }, { "name": "android-delete", "pack": "android", "tag": ", android-delete" }, { "name": "android-attach", "pack": "android", "tag": ", android-attach" }, { "name": "android-share", "pack": "android", "tag": ", android-share" }, { "name": "android-share-alt", "pack": "android", "tag": ", android-share-alt" }, { "name": "android-bookmark", "pack": "android", "tag": ", android-bookmark" }, { "name": "android-document", "pack": "android", "tag": ", android-document" }, { "name": "android-clipboard", "pack": "android", "tag": ", android-clipboard" }, { "name": "android-list", "pack": "android", "tag": ", android-list" }, { "name": "android-folder-open", "pack": "android", "tag": ", android-folder-open" }, { "name": "android-folder", "pack": "android", "tag": ", android-folder" }, { "name": "android-print", "pack": "android", "tag": ", android-print" }, { "name": "android-open", "pack": "android", "tag": ", android-open" }, { "name": "android-exit", "pack": "android", "tag": ", android-exit" }, { "name": "android-contract", "pack": "android", "tag": ", android-contract" }, { "name": "android-expand", "pack": "android", "tag": ", android-expand" }, { "name": "android-globe", "pack": "android", "tag": ", android-globe" }, { "name": "android-chat", "pack": "android", "tag": "talk, text, android-chat" }, { "name": "android-textsms", "pack": "android", "tag": "talk, text, android-textsms" }, { "name": "android-hangout", "pack": "android", "tag": ", android-hangout" }, { "name": "android-happy", "pack": "android", "tag": ", android-happy" }, { "name": "android-sad", "pack": "android", "tag": ", android-sad" }, { "name": "android-person", "pack": "android", "tag": ", android-person" }, { "name": "android-people", "pack": "android", "tag": ", android-people" }, { "name": "android-person-add", "pack": "android", "tag": ", android-person-add" }, { "name": "android-contact", "pack": "android", "tag": ", android-contact" }, { "name": "android-contacts", "pack": "android", "tag": ", android-contacts" }, { "name": "android-playstore", "pack": "android", "tag": ", android-playstore" }, { "name": "android-lock", "pack": "android", "tag": ", android-lock" }, { "name": "android-unlock", "pack": "android", "tag": ", android-unlock" }, { "name": "android-microphone", "pack": "android", "tag": "recorder, speak, noise, music, sound, android-microphone" }, { "name": "android-microphone-off", "pack": "android", "tag": "recorder, speak, noise, music, sound, mute, android-microphone-off" }, { "name": "android-notifications-none", "pack": "android", "tag": ", android-notifications-none" }, { "name": "android-notifications", "pack": "android", "tag": ", android-notifications" }, { "name": "android-notifications-off", "pack": "android", "tag": ", android-notifications-off" }, { "name": "android-volume-mute", "pack": "android", "tag": ", android-volume-mute" }, { "name": "android-volume-down", "pack": "android", "tag": ", android-volume-down" }, { "name": "android-volume-up", "pack": "android", "tag": ", android-volume-up" }, { "name": "android-volume-off", "pack": "android", "tag": ", android-volume-off" }, { "name": "android-hand", "pack": "android", "tag": "stop, android-hand" }, { "name": "android-desktop", "pack": "android", "tag": ", android-desktop" }, { "name": "android-laptop", "pack": "android", "tag": ", android-laptop" }, { "name": "android-phone-portrait", "pack": "android", "tag": ", android-phone-portrait" }, { "name": "android-phone-landscape", "pack": "android", "tag": ", android-phone-landscape" }, { "name": "android-bulb", "pack": "android", "tag": ", android-bulb" }, { "name": "android-sunny", "pack": "android", "tag": ", android-sunny" }, { "name": "android-alert", "pack": "android", "tag": ", android-alert" }, { "name": "android-warning", "pack": "android", "tag": ", android-warning" }, { "name": "social-twitter", "pack": "social", "tag": "follow, post, share, social-twitter" }, { "name": "social-twitter-outline", "pack": "social", "tag": "follow, post, share, social-twitter-outline" }, { "name": "social-facebook", "pack": "social", "tag": "like, post, share, social-facebook" }, { "name": "social-facebook-outline", "pack": "social", "tag": "like, post, share, social-facebook-outline" }, { "name": "social-googleplus", "pack": "social", "tag": "follow, post, share, social-googleplus" }, { "name": "social-googleplus-outline", "pack": "social", "tag": "follow, post, share, social-googleplus-outline" }, { "name": "social-google", "pack": "social", "tag": "follow, post, share, social-google" }, { "name": "social-google-outline", "pack": "social", "tag": "follow, post, share, social-google-outline" }, { "name": "social-dribbble", "pack": "social", "tag": "design, social-dribbble" }, { "name": "social-dribbble-outline", "pack": "social", "tag": "design, social-dribbble-outline" }, { "name": "social-octocat", "pack": "social", "tag": "code, github, fork, merge, clone, social-octocat" }, { "name": "social-github", "pack": "social", "tag": "code, fork, merge, clone, social-github" }, { "name": "social-github-outline", "pack": "social", "tag": "code, fork, merge, clone, social-github-outline" }, { "name": "social-instagram", "pack": "social", "tag": "photo, camera, facebook, social-instagram" }, { "name": "social-instagram-outline", "pack": "social", "tag": "photo, camera, facebook, social-instagram-outline" }, { "name": "social-whatsapp", "pack": "social", "tag": "text, sharing, private, facebook, social-whatsapp" }, { "name": "social-whatsapp-outline", "pack": "social", "tag": "text, sharing, private, facebook, social-whatsapp-outline" }, { "name": "social-snapchat", "pack": "social", "tag": "photos, app, social-snapchat" }, { "name": "social-snapchat-outline", "pack": "social", "tag": "photos, app, social-snapchat-outline" }, { "name": "social-foursquare", "pack": "social", "tag": "checkin, social-foursquare" }, { "name": "social-foursquare-outline", "pack": "social", "tag": "checkin, social-foursquare-outline" }, { "name": "social-pinterest", "pack": "social", "tag": "social, social-pinterest" }, { "name": "social-pinterest-outline", "pack": "social", "tag": "social, social-pinterest-outline" }, { "name": "social-rss", "pack": "social", "tag": "blogging, social-rss" }, { "name": "social-rss-outline", "pack": "social", "tag": "blogging, social-rss-outline" }, { "name": "social-tumblr", "pack": "social", "tag": "blogging, social-tumblr" }, { "name": "social-tumblr-outline", "pack": "social", "tag": "blogging, social-tumblr-outline" }, { "name": "social-wordpress", "pack": "social", "tag": "blogging, social-wordpress" }, { "name": "social-wordpress-outline", "pack": "social", "tag": "blogging, social-wordpress-outline" }, { "name": "social-reddit", "pack": "social", "tag": "news, upvotes, karma, social-reddit" }, { "name": "social-reddit-outline", "pack": "social", "tag": "news, upvotes, karma, social-reddit-outline" }, { "name": "social-hackernews", "pack": "social", "tag": "discuss, upvotes, karma, social-hackernews" }, { "name": "social-hackernews-outline", "pack": "social", "tag": "discuss, upvotes, karma, social-hackernews-outline" }, { "name": "social-designernews", "pack": "social", "tag": "design, post, social-designernews" }, { "name": "social-designernews-outline", "pack": "social", "tag": "design, post, social-designernews-outline" }, { "name": "social-yahoo", "pack": "social", "tag": ", social-yahoo" }, { "name": "social-yahoo-outline", "pack": "social", "tag": ", social-yahoo-outline" }, { "name": "social-buffer", "pack": "social", "tag": "share, social-buffer" }, { "name": "social-buffer-outline", "pack": "social", "tag": "share, social-buffer-outline" }, { "name": "social-skype", "pack": "social", "tag": "call, social-skype" }, { "name": "social-skype-outline", "pack": "social", "tag": "call, social-skype-outline" }, { "name": "social-linkedin", "pack": "social", "tag": "connect, social-linkedin" }, { "name": "social-linkedin-outline", "pack": "social", "tag": "connect, social-linkedin-outline" }, { "name": "social-vimeo", "pack": "social", "tag": "video, watch, share, view, social-vimeo" }, { "name": "social-vimeo-outline", "pack": "social", "tag": "video, watch, share, view, social-vimeo-outline" }, { "name": "social-twitch", "pack": "social", "tag": "gaming, games, live, streaming, video, watch, share, view, social-twitch" }, { "name": "social-twitch-outline", "pack": "social", "tag": "gaming, games, live, streaming, video, watch, share, view, social-twitch-outline" }, { "name": "social-youtube", "pack": "social", "tag": "video, watch, share, view, social-youtube" }, { "name": "social-youtube-outline", "pack": "social", "tag": "video, watch, share, view, social-youtube-outline" }, { "name": "social-dropbox", "pack": "social", "tag": "upload, social-dropbox" }, { "name": "social-dropbox-outline", "pack": "social", "tag": "upload, social-dropbox-outline" }, { "name": "social-apple", "pack": "social", "tag": "mac, mobile, social-apple" }, { "name": "social-apple-outline", "pack": "social", "tag": "mac, mobile, social-apple-outline" }, { "name": "social-android", "pack": "social", "tag": "mobile, social-android" }, { "name": "social-android-outline", "pack": "social", "tag": "mobile, social-android-outline" }, { "name": "social-windows", "pack": "social", "tag": "pc, social-windows" }, { "name": "social-windows-outline", "pack": "social", "tag": "pc, social-windows-outline" }, { "name": "social-html5", "pack": "social", "tag": "code, html, css, js, developer, social-html5" }, { "name": "social-html5-outline", "pack": "social", "tag": "code, html, css, js, developer, social-html5-outline" }, { "name": "social-css3", "pack": "social", "tag": "code, html, css, js, developer, social-css3" }, { "name": "social-css3-outline", "pack": "social", "tag": "code, html, css, js, developer, social-css3-outline" }, { "name": "social-javascript", "pack": "social", "tag": "code, html, css, js, developer, social-javascript" }, { "name": "social-javascript-outline", "pack": "social", "tag": "code, html, css, js, developer, social-javascript-outline" }, { "name": "social-angular", "pack": "social", "tag": "code, mobile, js, angularjs, ionic, social-angular" }, { "name": "social-angular-outline", "pack": "social", "tag": "code, mobile, js, angularjs, ionic, social-angular-outline" }, { "name": "social-nodejs", "pack": "social", "tag": "code, js, javascript, developer, social-nodejs" }, { "name": "social-sass", "pack": "social", "tag": "code, css, social-sass" }, { "name": "social-python", "pack": "social", "tag": "code, social-python" }, { "name": "social-chrome", "pack": "social", "tag": "code, mobile, js, angularjs, ionic, social-chrome" }, { "name": "social-chrome-outline", "pack": "social", "tag": "code, mobile, js, angularjs, ionic, social-chrome-outline" }, { "name": "social-codepen", "pack": "social", "tag": "testing, js, developer, social-codepen" }, { "name": "social-codepen-outline", "pack": "social", "tag": "testing, js, developer, social-codepen-outline" }, { "name": "social-markdown", "pack": "social", "tag": "code, testing, text, developer, social-markdown" }, { "name": "social-tux", "pack": "social", "tag": "code, linux, opensource, social-tux" }, { "name": "social-freebsd-devil", "pack": "social", "tag": "code, opensource, unix, social-freebsd-devil" }, { "name": "social-usd", "pack": "social", "tag": "currency, trade, money, cash, social-usd" }, { "name": "social-usd-outline", "pack": "social", "tag": "currency, trade, money, cash, social-usd-outline" }, { "name": "social-bitcoin", "pack": "social", "tag": "currency, trade, money, social-bitcoin" }, { "name": "social-bitcoin-outline", "pack": "social", "tag": "currency, trade, money, social-bitcoin-outline" }, { "name": "social-yen", "pack": "social", "tag": "currency, trade, money, japanese, social-yen" }, { "name": "social-yen-outline", "pack": "social", "tag": "currency, trade, money, japanese, social-yen-outline" }, { "name": "social-euro", "pack": "social", "tag": "currency, trade, money, europe, social-euro" }, { "name": "social-euro-outline", "pack": "social", "tag": "currency, trade, money, europe, social-euro-outline" }];

/***/ }),

/***/ 599:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=5.chunk.js.map