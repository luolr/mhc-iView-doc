webpackJsonp([2],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_394040b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_icon_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(555)
  __webpack_require__(554)
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

/***/ 487:
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
            icon: 'ios-color-fill-outline'
        }, {
            title: 'Font 字体',
            path: '/mhc-iView-doc/components/font',
            img: 'font.png',
            icon: 'ios-at-outline'
        }, {
            title: 'Button 按钮',
            path: '/mhc-iView-doc/components/button',
            img: 'button.png',
            icon: 'logo-youtube'
        }, {
            title: 'Icon 图标',
            path: '/mhc-iView-doc/components/icon',
            img: 'icon.png',
            icon: 'ios-heart-outline'
        }, {
            title: 'Exception 异常页',
            path: '/mhc-iView-doc/components/exception',
            img: 'error.png',
            icon: 'ios-heart-outline'
        }]
    }]
};

exports.default = list;

/***/ }),

/***/ 488:
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

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(496);

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

/***/ 490:
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

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(525);

var _navigate2 = _interopRequireDefault(_navigate);

var _navigate3 = __webpack_require__(487);

var _navigate4 = _interopRequireDefault(_navigate3);

var _menu = __webpack_require__(524);

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

/***/ 492:
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

var _tagMap = __webpack_require__(505);

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

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(487);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(495);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _applications = __webpack_require__(521);

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
            window.open('https://github.com/iview/iview');
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

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(487);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(495);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _adSend = __webpack_require__(519);

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

/***/ 495:
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

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(89);

var _typeof3 = _interopRequireDefault(_typeof2);

var _pinyin_dict_firstletter = __webpack_require__(506);

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

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(496);

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

/***/ 498:
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

/***/ 499:
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
    attrs: { src: __webpack_require__(515) }
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

/***/ 500:
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
  }, [_vm._v("SegmentFault")])])])]), _vm._v(" "), _c("i-col", { attrs: { span: "5", offset: "2" } }, [_c("div", { staticClass: "footer-aside" }, [_c("div", { staticClass: "footer-logo" }, [_c("img", { attrs: { src: __webpack_require__(518) } })]), _vm._v(" "), _c("div", { staticClass: "footer-author" }, [_c("a", { attrs: { href: "https://www.talkingdata.com/" } }, [_c("img", {
    attrs: { src: __webpack_require__(517) }
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

/***/ 501:
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

/***/ 502:
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
  }, [_c("div", { staticClass: "wrapper-header-nav" }, [_c("router-link", { staticClass: "wrapper-header-nav-logo", attrs: { to: "/" } }, [_c("img", { attrs: { src: __webpack_require__(516) } })]), _vm._v(" "), _c("ApplicationMenu"), _vm._v(" "), _c("div", { staticClass: "wrapper-header-nav-search" }, [_c("i-select", {
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

/***/ 505:
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

/***/ 506:
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

/***/ 507:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "512a3fe18c92425975996411a04ac256.png";

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e1cf12c07bf6458992569e67927d767e.png";

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bca1556c01f16f9a9f6094169720c2da.png";

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ecd3b0452aa197097d5131afacab7b8.png";

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(510)
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(507)
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

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
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

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(509)
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(513)
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

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(511)
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

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(508)
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

/***/ 526:
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

/***/ 527:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(527)
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

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _article = __webpack_require__(522);

var _article2 = _interopRequireDefault(_article);

var _iCode = __webpack_require__(523);

var _iCode2 = _interopRequireDefault(_iCode);

var _demo = __webpack_require__(528);

var _demo2 = _interopRequireDefault(_demo);

var _icon = __webpack_require__(550);

var _icon2 = _interopRequireDefault(_icon);

var _anchor = __webpack_require__(520);

var _anchor2 = _interopRequireDefault(_anchor);

var _iconname = __webpack_require__(551);

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
        inAnchor: _anchor2.default
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

            var icon = '<Icon type="' + type.name + '" />';

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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i-article", [_c("article", [_c("h1", [_vm._v("Icon 图标")]), _vm._v(" "), _c("inAnchor", { attrs: { title: "概述", h2: "" } }), _vm._v(" "), _c("p", [_vm._v("iView 的图标使用开源项目"), _c("a", { attrs: { href: "http://ionicons.com/", target: "_blank" } }, [_c("Icon", { attrs: { type: "ios-ionic" } }), _vm._v(" ionicons")], 1), _vm._v(" 3.x 版本。")]), _vm._v(" "), _c("inAnchor", { attrs: { title: "如何使用", h2: "" } }), _vm._v(" "), _c("p", [_vm._v("使用"), _c("code", [_vm._v("<Icon />")]), _vm._v("组件，指定图标对应的"), _c("code", [_vm._v("type")]), _vm._v("属性，示例代码：")]), _vm._v(" "), _c("i-code", { attrs: { lang: "html", bg: "" } }, [_vm._v(_vm._s(_vm.code.demo))]), _vm._v(" "), _c("p", [_vm._v("渲染后为：")]), _vm._v(" "), _c("i-code", { attrs: { lang: "html", bg: "" } }, [_vm._v(_vm._s(_vm.code.render))]), _vm._v(" "), _c("div", { staticClass: "api" }, [_c("inAnchor", { attrs: { title: "API", h2: "" } }), _vm._v(" "), _c("inAnchor", { attrs: { title: "Icon props", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("属性")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("类型")]), _vm._v(" "), _c("th", [_vm._v("默认值")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("type")]), _vm._v(" "), _c("td", [_vm._v("图标的名称")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("size")]), _vm._v(" "), _c("td", [_vm._v("图标的大小，单位是 px")]), _vm._v(" "), _c("td", [_vm._v("Number | String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("color")]), _vm._v(" "), _c("td", [_vm._v("图标的颜色")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("custom")]), _vm._v(" "), _c("td", [_vm._v("自定义图标")]), _vm._v(" "), _c("td", [_vm._v("String")]), _vm._v(" "), _c("td", [_vm._v("-")])])])])], 1), _vm._v(" "), _c("Demo", { attrs: { title: "自定义图标用法" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("Icon", {
    attrs: { custom: "i-icon i-icon-shop_fill", size: "24" }
  }), _vm._v(" "), _c("Icon", {
    attrs: {
      custom: "i-icon i-icon-publishgoods_fill",
      size: "24"
    }
  }), _vm._v(" "), _c("Icon", {
    attrs: { custom: "i-icon i-icon-financial_fill", size: "24" }
  })], 1), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("iView 的 Icon 支持使用第三方自定义图标，你可以引入任意的字体文件库来使用。")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.custom))])], 1), _vm._v(" "), _c("Alert", { attrs: { "show-icon": "" } }, [_c("template", { slot: "desc" }, [_vm._v("iView 3 使用的是 ionicons 3.x 的图标，iView 2 使用的是 ionicons 2.x 的图标，如果是从 iView 2 升级至 iView 3，需要查找并修改使用过的图标名称，因为很多图标名称改变了。")])], 2), _vm._v(" "), _c("inAnchor", { attrs: { title: "所有图标", h2: "" } }), _vm._v(" "), _c("div", { staticClass: "icon-search" }, [_c("input", {
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

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var code = {};

code.demo = "\n<Icon type=\"ios-checkmark\" />\n";

code.render = "\n<i class=\"ivu-icon ivu-icon-ios-checkmark\"></i>\n";
code.custom = "\n<template>\n    <div>\n        <Icon custom=\"i-icon i-icon-shop_fill\" size=\"24\" />\n        <Icon custom=\"i-icon i-icon-publishgoods_fill\" size=\"24\" />\n        <Icon custom=\"i-icon i-icon-financial_fill\" size=\"24\" />\n    </div>\n</template>\n\n<style>\n    @font-face {\n        font-family: \"custom-font\";\n        src: url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff');\n    }\n    \n    .i-icon {\n        display: inline-block;\n        font-family: 'custom-font' !important;\n        speak: none;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n        text-rendering: auto;\n        line-height: 1;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        vertical-align: middle;\n    }\n    \n    .i-icon-accessory:before { content: \"e6dd\"; }\n    \n    .i-icon-activity:before { content: \"e6de\"; }\n    \n    .i-icon-activity_fill:before { content: \"e6df\"; }\n    \n    .i-icon-add:before { content: \"e6e0\"; }\n    \n    .i-icon-addressbook_fill:before { content: \"e6e2\"; }\n    \n    .i-icon-addressbook:before { content: \"e6e3\"; }\n    \n    .i-icon-barrage_fill:before { content: \"e6e4\"; }\n    \n    .i-icon-barrage:before { content: \"e6e5\"; }\n    \n    .i-icon-browse_fill:before { content: \"e6e6\"; }\n    \n    .i-icon-browse:before { content: \"e6e7\"; }\n    \n    .i-icon-brush:before { content: \"e6e8\"; }\n    \n    .i-icon-brush_fill:before { content: \"e6e9\"; }\n    \n    .i-icon-businesscard_fill:before { content: \"e6ea\"; }\n    \n    .i-icon-businesscard:before { content: \"e6eb\"; }\n    \n    .i-icon-camera_fill:before { content: \"e6ec\"; }\n    \n    .i-icon-camera:before { content: \"e6ed\"; }\n    \n    .i-icon-clock_fill:before { content: \"e6ee\"; }\n    \n    .i-icon-clock:before { content: \"e6ef\"; }\n    \n    .i-icon-close:before { content: \"e6f0\"; }\n    \n    .i-icon-collection_fill:before { content: \"e6f1\"; }\n    \n    .i-icon-collection:before { content: \"e6f2\"; }\n    \n    .i-icon-computer_fill:before { content: \"e6f3\"; }\n    \n    .i-icon-computer:before { content: \"e6f4\"; }\n    \n    .i-icon-coordinates_fill:before { content: \"e6f5\"; }\n    \n    .i-icon-coordinates:before { content: \"e6f6\"; }\n    \n    .i-icon-coupons_fill:before { content: \"e6f7\"; }\n    \n    .i-icon-coupons:before { content: \"e6f8\"; }\n    \n    .i-icon-createtask_fill:before { content: \"e6f9\"; }\n    \n    .i-icon-createtask:before { content: \"e6fa\"; }\n    \n    .i-icon-customerservice_fill:before { content: \"e6fb\"; }\n    \n    .i-icon-customerservice:before { content: \"e6fc\"; }\n    \n    .i-icon-delete_fill:before { content: \"e6fd\"; }\n    \n    .i-icon-delete:before { content: \"e6fe\"; }\n    \n    .i-icon-document:before { content: \"e6ff\"; }\n    \n    .i-icon-document_fill:before { content: \"e700\"; }\n    \n    .i-icon-dynamic_fill:before { content: \"e701\"; }\n    \n    .i-icon-dynamic:before { content: \"e702\"; }\n    \n    .i-icon-editor:before { content: \"e703\"; }\n    \n    .i-icon-eit:before { content: \"e704\"; }\n    \n    .i-icon-emoji_fill:before { content: \"e705\"; }\n    \n    .i-icon-emoji:before { content: \"e706\"; }\n    \n    .i-icon-enter:before { content: \"e707\"; }\n    \n    .i-icon-enterinto:before { content: \"e708\"; }\n    \n    .i-icon-enterinto_fill:before { content: \"e709\"; }\n    \n    .i-icon-feedback_fill:before { content: \"e70a\"; }\n    \n    .i-icon-feedback:before { content: \"e70b\"; }\n    \n    .i-icon-flag_fill:before { content: \"e70c\"; }\n    \n    .i-icon-flag:before { content: \"e70d\"; }\n    \n    .i-icon-flashlight:before { content: \"e70e\"; }\n    \n    .i-icon-flashlight_fill:before { content: \"e70f\"; }\n    \n    .i-icon-fullscreen:before { content: \"e710\"; }\n    \n    .i-icon-group:before { content: \"e711\"; }\n    \n    .i-icon-group_fill:before { content: \"e712\"; }\n    \n    .i-icon-homepage_fill:before { content: \"e713\"; }\n    \n    .i-icon-homepage:before { content: \"e714\"; }\n    \n    .i-icon-integral_fill:before { content: \"e715\"; }\n    \n    .i-icon-integral:before { content: \"e716\"; }\n    \n    .i-icon-interactive_fill:before { content: \"e717\"; }\n    \n    .i-icon-interactive:before { content: \"e718\"; }\n    \n    .i-icon-keyboard:before { content: \"e719\"; }\n    \n    .i-icon-label:before { content: \"e71a\"; }\n    \n    .i-icon-label_fill:before { content: \"e71b\"; }\n    \n    .i-icon-like_fill:before { content: \"e71c\"; }\n    \n    .i-icon-like:before { content: \"e71d\"; }\n    \n    .i-icon-live_fill:before { content: \"e71e\"; }\n    \n    .i-icon-live:before { content: \"e71f\"; }\n    \n    .i-icon-lock_fill:before { content: \"e720\"; }\n    \n    .i-icon-lock:before { content: \"e721\"; }\n    \n    .i-icon-mail:before { content: \"e722\"; }\n    \n    .i-icon-mail_fill:before { content: \"e723\"; }\n    \n    .i-icon-message:before { content: \"e724\"; }\n    \n    .i-icon-message_fill:before { content: \"e725\"; }\n    \n    .i-icon-mine:before { content: \"e726\"; }\n    \n    .i-icon-mine_fill:before { content: \"e727\"; }\n    \n    .i-icon-mobilephone_fill:before { content: \"e728\"; }\n    \n    .i-icon-mobilephone:before { content: \"e729\"; }\n    \n    .i-icon-more:before { content: \"e72a\"; }\n    \n    .i-icon-narrow:before { content: \"e72b\"; }\n    \n    .i-icon-offline_fill:before { content: \"e72c\"; }\n    \n    .i-icon-offline:before { content: \"e72d\"; }\n    \n    .i-icon-other:before { content: \"e72e\"; }\n    \n    .i-icon-picture_fill:before { content: \"e72f\"; }\n    \n    .i-icon-picture:before { content: \"e730\"; }\n    \n    .i-icon-play:before { content: \"e731\"; }\n    \n    .i-icon-play_fill:before { content: \"e732\"; }\n    \n    .i-icon-playon_fill:before { content: \"e733\"; }\n    \n    .i-icon-playon:before { content: \"e734\"; }\n    \n    .i-icon-praise_fill:before { content: \"e735\"; }\n    \n    .i-icon-praise:before { content: \"e736\"; }\n    \n    .i-icon-prompt_fill:before { content: \"e737\"; }\n    \n    .i-icon-prompt:before { content: \"e738\"; }\n    \n    .i-icon-redpacket_fill:before { content: \"e739\"; }\n    \n    .i-icon-redpacket:before { content: \"e73a\"; }\n    \n    .i-icon-refresh:before { content: \"e73b\"; }\n    \n    .i-icon-remind_fill:before { content: \"e73c\"; }\n    \n    .i-icon-remind:before { content: \"e73d\"; }\n    \n    .i-icon-return:before { content: \"e73e\"; }\n    \n    .i-icon-right:before { content: \"e73f\"; }\n    \n    .i-icon-scan:before { content: \"e740\"; }\n    \n    .i-icon-send:before { content: \"e741\"; }\n    \n    .i-icon-service_fill:before { content: \"e742\"; }\n    \n    .i-icon-service:before { content: \"e743\"; }\n    \n    .i-icon-setup_fill:before { content: \"e744\"; }\n    \n    .i-icon-setup:before { content: \"e745\"; }\n    \n    .i-icon-share_fill:before { content: \"e746\"; }\n    \n    .i-icon-share:before { content: \"e747\"; }\n    \n    .i-icon-success_fill:before { content: \"e748\"; }\n    \n    .i-icon-success:before { content: \"e749\"; }\n    \n    .i-icon-suspend:before { content: \"e74a\"; }\n    \n    .i-icon-switch:before { content: \"e74b\"; }\n    \n    .i-icon-systemprompt_fill:before { content: \"e74c\"; }\n    \n    .i-icon-systemprompt:before { content: \"e74d\"; }\n    \n    .i-icon-tailor:before { content: \"e74e\"; }\n    \n    .i-icon-task:before { content: \"e74f\"; }\n    \n    .i-icon-task_fill:before { content: \"e750\"; }\n    \n    .i-icon-tasklist_fill:before { content: \"e751\"; }\n    \n    .i-icon-tasklist:before { content: \"e752\"; }\n    \n    .i-icon-time_fill:before { content: \"e753\"; }\n    \n    .i-icon-time:before { content: \"e754\"; }\n    \n    .i-icon-translation_fill:before { content: \"e755\"; }\n    \n    .i-icon-translation:before { content: \"e756\"; }\n    \n    .i-icon-trash:before { content: \"e757\"; }\n    \n    .i-icon-trash_fill:before { content: \"e758\"; }\n    \n    .i-icon-undo:before { content: \"e759\"; }\n    \n    .i-icon-video:before { content: \"e75a\"; }\n    \n    .i-icon-video_fill:before { content: \"e75b\"; }\n    \n    .i-icon-warning_fill:before { content: \"e75c\"; }\n    \n    .i-icon-warning:before { content: \"e75d\"; }\n    \n    .i-icon-search:before { content: \"e75e\"; }\n    \n    .i-icon-searchfill:before { content: \"e75f\"; }\n    \n    .i-icon-publishgoods_fill:before { content: \"e760\"; }\n    \n    .i-icon-shop_fill:before { content: \"e761\"; }\n    \n    .i-icon-transaction_fill:before { content: \"e762\"; }\n    \n    .i-icon-packup:before { content: \"e763\"; }\n    \n    .i-icon-unfold:before { content: \"e764\"; }\n    \n    .i-icon-financial_fill:before { content: \"e765\"; }\n    \n    .i-icon-commodity:before { content: \"e766\"; }\n</style>\n";

exports.default = code;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    "name": "ios-add",
    "tag": "add,include,invite,plus"
}, {
    "name": "md-add",
    "tag": "add,include,invite,plus"
}, {
    "name": "ios-add-circle",
    "tag": "add,circle"
}, {
    "name": "ios-add-circle-outline",
    "tag": "add,circle"
}, {
    "name": "md-add-circle",
    "tag": "add,circle"
}, {
    "name": "ios-alarm",
    "tag": "alarm"
}, {
    "name": "ios-alarm-outline",
    "tag": "alarm"
}, {
    "name": "md-alarm",
    "tag": "alarm"
}, {
    "name": "ios-albums",
    "tag": "albums,boxes,slides,square"
}, {
    "name": "ios-albums-outline",
    "tag": "albums,boxes,slides,square"
}, {
    "name": "md-albums",
    "tag": "albums,boxes,slides,square"
}, {
    "name": "ios-alert",
    "tag": "!,alert,attention,exclamation,notice,warning"
}, {
    "name": "ios-alert-outline",
    "tag": "!,alert,attention,exclamation,notice,warning"
}, {
    "name": "md-alert",
    "tag": "!,alert,attention,exclamation,notice,warning"
}, {
    "name": "ios-american-football",
    "tag": "american,football"
}, {
    "name": "ios-american-football-outline",
    "tag": "american,football"
}, {
    "name": "md-american-football",
    "tag": "american,football"
}, {
    "name": "ios-analytics",
    "tag": "analytics,data,metrics,track"
}, {
    "name": "ios-analytics-outline",
    "tag": "analytics,data,metrics,track"
}, {
    "name": "md-analytics",
    "tag": "analytics,data,metrics,track"
}, {
    "name": "logo-android",
    "tag": "android,google,mobile,logo"
}, {
    "name": "logo-angular",
    "tag": "angular,logo"
}, {
    "name": "ios-aperture",
    "tag": "aperture,dark,images,levels,light,settings"
}, {
    "name": "ios-aperture-outline",
    "tag": "aperture,dark,images,levels,light,settings"
}, {
    "name": "md-aperture",
    "tag": "aperture,dark,images,levels,light,settings"
}, {
    "name": "logo-apple",
    "tag": "apple,mac,mobile,logo"
}, {
    "name": "ios-apps",
    "tag": "apps,applications"
}, {
    "name": "ios-apps-outline",
    "tag": "apps,applications"
}, {
    "name": "md-apps",
    "tag": "apps,applications"
}, {
    "name": "ios-appstore",
    "tag": "appstore,store"
}, {
    "name": "ios-appstore-outline",
    "tag": "appstore,store"
}, {
    "name": "md-appstore",
    "tag": "appstore,store"
}, {
    "name": "ios-archive",
    "tag": "archive,email"
}, {
    "name": "ios-archive-outline",
    "tag": "archive,email"
}, {
    "name": "md-archive",
    "tag": "archive,email"
}, {
    "name": "ios-arrow-back",
    "tag": "arrow,back,chevron,navigation"
}, {
    "name": "md-arrow-back",
    "tag": "arrow,back,chevron,navigation"
}, {
    "name": "ios-arrow-down",
    "tag": "arrow,chevron,down"
}, {
    "name": "md-arrow-down",
    "tag": "arrow,chevron,down"
}, {
    "name": "ios-arrow-dropdown",
    "tag": "arrow,dropdown"
}, {
    "name": "md-arrow-dropdown",
    "tag": "arrow,dropdown"
}, {
    "name": "ios-arrow-dropdown-circle",
    "tag": "arrow,circle,dropdown"
}, {
    "name": "md-arrow-dropdown-circle",
    "tag": "arrow,circle,dropdown"
}, {
    "name": "ios-arrow-dropleft",
    "tag": "arrow,dropleft"
}, {
    "name": "md-arrow-dropleft",
    "tag": "arrow,dropleft"
}, {
    "name": "ios-arrow-dropleft-circle",
    "tag": "arrow,circle,dropleft"
}, {
    "name": "md-arrow-dropleft-circle",
    "tag": "arrow,circle,dropleft"
}, {
    "name": "ios-arrow-dropright",
    "tag": "arrow,dropright"
}, {
    "name": "md-arrow-dropright",
    "tag": "arrow,dropright"
}, {
    "name": "ios-arrow-dropright-circle",
    "tag": "arrow,circle,dropright"
}, {
    "name": "md-arrow-dropright-circle",
    "tag": "arrow,circle,dropright"
}, {
    "name": "ios-arrow-dropup",
    "tag": "arrow,dropup"
}, {
    "name": "md-arrow-dropup",
    "tag": "arrow,dropup"
}, {
    "name": "ios-arrow-dropup-circle",
    "tag": "arrow,circle,dropup"
}, {
    "name": "md-arrow-dropup-circle",
    "tag": "arrow,circle,dropup"
}, {
    "name": "ios-arrow-forward",
    "tag": "arrow,chevron,forward,navigation"
}, {
    "name": "md-arrow-forward",
    "tag": "arrow,chevron,forward,navigation"
}, {
    "name": "ios-arrow-round-back",
    "tag": "arrow,back,round"
}, {
    "name": "md-arrow-round-back",
    "tag": "arrow,back,round"
}, {
    "name": "ios-arrow-round-down",
    "tag": "arrow,down,round"
}, {
    "name": "md-arrow-round-down",
    "tag": "arrow,down,round"
}, {
    "name": "ios-arrow-round-forward",
    "tag": "arrow,forward,round"
}, {
    "name": "md-arrow-round-forward",
    "tag": "arrow,forward,round"
}, {
    "name": "ios-arrow-round-up",
    "tag": "arrow,round,up"
}, {
    "name": "md-arrow-round-up",
    "tag": "arrow,round,up"
}, {
    "name": "ios-arrow-up",
    "tag": "arrow,chevron,up"
}, {
    "name": "md-arrow-up",
    "tag": "arrow,chevron,up"
}, {
    "name": "ios-at",
    "tag": "@,at"
}, {
    "name": "ios-at-outline",
    "tag": "@,at"
}, {
    "name": "md-at",
    "tag": "@,at"
}, {
    "name": "ios-attach",
    "tag": "attach"
}, {
    "name": "md-attach",
    "tag": "attach"
}, {
    "name": "ios-backspace",
    "tag": "backspace"
}, {
    "name": "ios-backspace-outline",
    "tag": "backspace"
}, {
    "name": "md-backspace",
    "tag": "backspace"
}, {
    "name": "ios-barcode",
    "tag": "barcode,camera,reader"
}, {
    "name": "ios-barcode-outline",
    "tag": "barcode,camera,reader"
}, {
    "name": "md-barcode",
    "tag": "barcode,camera,reader"
}, {
    "name": "ios-baseball",
    "tag": "baseball"
}, {
    "name": "ios-baseball-outline",
    "tag": "baseball"
}, {
    "name": "md-baseball",
    "tag": "baseball"
}, {
    "name": "ios-basket",
    "tag": "basket"
}, {
    "name": "ios-basket-outline",
    "tag": "basket"
}, {
    "name": "md-basket",
    "tag": "basket"
}, {
    "name": "ios-basketball",
    "tag": "basketball"
}, {
    "name": "ios-basketball-outline",
    "tag": "basketball"
}, {
    "name": "md-basketball",
    "tag": "basketball"
}, {
    "name": "ios-battery-charging",
    "tag": "battery,charging"
}, {
    "name": "md-battery-charging",
    "tag": "battery,charging"
}, {
    "name": "ios-battery-dead",
    "tag": "battery,dead"
}, {
    "name": "md-battery-dead",
    "tag": "battery,dead"
}, {
    "name": "ios-battery-full",
    "tag": "battery,full"
}, {
    "name": "md-battery-full",
    "tag": "battery,full"
}, {
    "name": "ios-beaker",
    "tag": "beaker,flask,mixture,potion"
}, {
    "name": "ios-beaker-outline",
    "tag": "beaker,flask,mixture,potion"
}, {
    "name": "md-beaker",
    "tag": "beaker,flask,mixture,potion"
}, {
    "name": "ios-beer",
    "tag": "beer,drink,eat,food"
}, {
    "name": "ios-beer-outline",
    "tag": "beer,drink,eat,food"
}, {
    "name": "md-beer",
    "tag": "beer,drink,eat,food"
}, {
    "name": "ios-bicycle",
    "tag": "bicycle"
}, {
    "name": "md-bicycle",
    "tag": "bicycle"
}, {
    "name": "logo-bitcoin",
    "tag": "bitcoin,currency,money,logo,trade"
}, {
    "name": "ios-bluetooth",
    "tag": "bluetooth,cloud,connection"
}, {
    "name": "md-bluetooth",
    "tag": "bluetooth,cloud,connection"
}, {
    "name": "ios-boat",
    "tag": "boat"
}, {
    "name": "ios-boat-outline",
    "tag": "boat"
}, {
    "name": "md-boat",
    "tag": "boat"
}, {
    "name": "ios-body",
    "tag": "body"
}, {
    "name": "ios-body-outline",
    "tag": "body"
}, {
    "name": "md-body",
    "tag": "body"
}, {
    "name": "ios-bonfire",
    "tag": "bonfire,heat,hot"
}, {
    "name": "ios-bonfire-outline",
    "tag": "bonfire,heat,hot"
}, {
    "name": "md-bonfire",
    "tag": "bonfire,heat,hot"
}, {
    "name": "ios-book",
    "tag": "book,read"
}, {
    "name": "ios-book-outline",
    "tag": "book,read"
}, {
    "name": "md-book",
    "tag": "book,read"
}, {
    "name": "ios-bookmark",
    "tag": "bookmark,favorite,save,tag"
}, {
    "name": "ios-bookmark-outline",
    "tag": "bookmark,favorite,save,tag"
}, {
    "name": "md-bookmark",
    "tag": "bookmark,favorite,save,tag"
}, {
    "name": "ios-bookmarks",
    "tag": "bookmarks,favorite"
}, {
    "name": "ios-bookmarks-outline",
    "tag": "bookmarks,favorite"
}, {
    "name": "md-bookmarks",
    "tag": "bookmarks,favorite"
}, {
    "name": "ios-bowtie",
    "tag": "bowtie"
}, {
    "name": "ios-bowtie-outline",
    "tag": "bowtie"
}, {
    "name": "md-bowtie",
    "tag": "bowtie"
}, {
    "name": "ios-briefcase",
    "tag": "briefcase,folder,organize"
}, {
    "name": "ios-briefcase-outline",
    "tag": "briefcase,folder,organize"
}, {
    "name": "md-briefcase",
    "tag": "briefcase,folder,organize"
}, {
    "name": "ios-browsers",
    "tag": "browsers,square"
}, {
    "name": "ios-browsers-outline",
    "tag": "browsers,square"
}, {
    "name": "md-browsers",
    "tag": "browsers,square"
}, {
    "name": "ios-brush",
    "tag": "brush"
}, {
    "name": "ios-brush-outline",
    "tag": "brush"
}, {
    "name": "md-brush",
    "tag": "brush"
}, {
    "name": "logo-buffer",
    "tag": "buffer,share,logo"
}, {
    "name": "ios-bug",
    "tag": "bug,develop,error,hacker,program"
}, {
    "name": "ios-bug-outline",
    "tag": "bug,develop,error,hacker,program"
}, {
    "name": "md-bug",
    "tag": "bug,develop,error,hacker,program"
}, {
    "name": "ios-build",
    "tag": "build"
}, {
    "name": "ios-build-outline",
    "tag": "build"
}, {
    "name": "md-build",
    "tag": "build"
}, {
    "name": "ios-bulb",
    "tag": "bulb"
}, {
    "name": "ios-bulb-outline",
    "tag": "bulb"
}, {
    "name": "md-bulb",
    "tag": "bulb"
}, {
    "name": "ios-bus",
    "tag": "bus"
}, {
    "name": "ios-bus-outline",
    "tag": "bus"
}, {
    "name": "md-bus",
    "tag": "bus"
}, {
    "name": "ios-cafe",
    "tag": "cafe"
}, {
    "name": "ios-cafe-outline",
    "tag": "cafe"
}, {
    "name": "md-cafe",
    "tag": "cafe"
}, {
    "name": "ios-calculator",
    "tag": "arithmatic,calculator,math"
}, {
    "name": "ios-calculator-outline",
    "tag": "arithmatic,calculator,math"
}, {
    "name": "md-calculator",
    "tag": "arithmatic,calculator,math"
}, {
    "name": "ios-calendar",
    "tag": "calendar,date,month,week"
}, {
    "name": "ios-calendar-outline",
    "tag": "calendar,date,month,week"
}, {
    "name": "md-calendar",
    "tag": "calendar,date,month,week"
}, {
    "name": "ios-call",
    "tag": "call,telephone"
}, {
    "name": "ios-call-outline",
    "tag": "call,telephone"
}, {
    "name": "md-call",
    "tag": "call,telephone"
}, {
    "name": "ios-camera",
    "tag": "camera,image,photo"
}, {
    "name": "ios-camera-outline",
    "tag": "camera,image,photo"
}, {
    "name": "md-camera",
    "tag": "camera,image,photo"
}, {
    "name": "ios-car",
    "tag": "car"
}, {
    "name": "ios-car-outline",
    "tag": "car"
}, {
    "name": "md-car",
    "tag": "car"
}, {
    "name": "ios-card",
    "tag": "$,card,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "ios-card-outline",
    "tag": "$,card,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "md-card",
    "tag": "$,card,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "ios-cart",
    "tag": "cart"
}, {
    "name": "ios-cart-outline",
    "tag": "cart"
}, {
    "name": "md-cart",
    "tag": "cart"
}, {
    "name": "ios-cash",
    "tag": "$,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "ios-cash-outline",
    "tag": "$,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "md-cash",
    "tag": "$,cash,credit,debit,dollars,money,price,shopping"
}, {
    "name": "ios-chatboxes",
    "tag": "chatboxes,talk"
}, {
    "name": "ios-chatboxes-outline",
    "tag": "chatboxes,talk"
}, {
    "name": "md-chatboxes",
    "tag": "chatboxes,talk"
}, {
    "name": "ios-chatbubbles",
    "tag": "chatbubbles,talk"
}, {
    "name": "ios-chatbubbles-outline",
    "tag": "chatbubbles,talk"
}, {
    "name": "md-chatbubbles",
    "tag": "chatbubbles,talk"
}, {
    "name": "ios-checkbox",
    "tag": "checkbox"
}, {
    "name": "ios-checkbox-outline",
    "tag": "checkbox"
}, {
    "name": "md-checkbox",
    "tag": "checkbox"
}, {
    "name": "ios-checkbox-outline",
    "tag": "checkbox,outline"
}, {
    "name": "ios-checkbox-outline",
    "tag": "checkbox,outline"
}, {
    "name": "md-checkbox-outline",
    "tag": "checkbox,outline"
}, {
    "name": "ios-checkmark",
    "tag": "checkmark,success,ok"
}, {
    "name": "md-checkmark",
    "tag": "checkmark,success,ok"
}, {
    "name": "ios-checkmark-circle",
    "tag": "checkmark,circle,success,ok"
}, {
    "name": "ios-checkmark-circle-outline",
    "tag": "checkmark,circle,success,ok"
}, {
    "name": "md-checkmark-circle",
    "tag": "checkmark,circle,success,ok"
}, {
    "name": "ios-checkmark-circle-outline",
    "tag": "checkmark,circle,outline,success,ok"
}, {
    "name": "ios-checkmark-circle-outline",
    "tag": "checkmark,circle,outline,success,ok"
}, {
    "name": "md-checkmark-circle-outline",
    "tag": "checkmark,circle,outline,success,ok"
}, {
    "name": "logo-chrome",
    "tag": "chrome,logo"
}, {
    "name": "ios-clipboard",
    "tag": "clipboard,write"
}, {
    "name": "ios-clipboard-outline",
    "tag": "clipboard,write"
}, {
    "name": "md-clipboard",
    "tag": "clipboard,write"
}, {
    "name": "ios-clock",
    "tag": "clock,time"
}, {
    "name": "ios-clock-outline",
    "tag": "clock,time"
}, {
    "name": "md-clock",
    "tag": "clock,time"
}, {
    "name": "ios-close",
    "tag": "close,delete,remove"
}, {
    "name": "md-close",
    "tag": "close,delete,remove"
}, {
    "name": "ios-close-circle",
    "tag": "circle,close"
}, {
    "name": "ios-close-circle-outline",
    "tag": "circle,close"
}, {
    "name": "md-close-circle",
    "tag": "circle,close"
}, {
    "name": "ios-closed-captioning",
    "tag": "captioning,closed,film,movie,television"
}, {
    "name": "ios-closed-captioning-outline",
    "tag": "captioning,closed,film,movie,television"
}, {
    "name": "md-closed-captioning",
    "tag": "captioning,closed,film,movie,television"
}, {
    "name": "ios-cloud",
    "tag": "cloud,storage,weather,whether"
}, {
    "name": "ios-cloud-outline",
    "tag": "cloud,storage,weather,whether"
}, {
    "name": "md-cloud",
    "tag": "cloud,storage,weather,whether"
}, {
    "name": "ios-cloud-circle",
    "tag": "circle,cloud"
}, {
    "name": "ios-cloud-circle-outline",
    "tag": "circle,cloud"
}, {
    "name": "md-cloud-circle",
    "tag": "circle,cloud"
}, {
    "name": "ios-cloud-done",
    "tag": "cloud,done"
}, {
    "name": "ios-cloud-done-outline",
    "tag": "cloud,done"
}, {
    "name": "md-cloud-done",
    "tag": "cloud,done"
}, {
    "name": "ios-cloud-download",
    "tag": "cloud,download,storage"
}, {
    "name": "ios-cloud-download-outline",
    "tag": "cloud,download,storage"
}, {
    "name": "md-cloud-download",
    "tag": "cloud,download,storage"
}, {
    "name": "ios-cloud-outline",
    "tag": "cloud,outline"
}, {
    "name": "ios-cloud-outline",
    "tag": "cloud,outline"
}, {
    "name": "md-cloud-outline",
    "tag": "cloud,outline"
}, {
    "name": "ios-cloud-upload",
    "tag": "cloud,storage,upload"
}, {
    "name": "ios-cloud-upload-outline",
    "tag": "cloud,storage,upload"
}, {
    "name": "md-cloud-upload",
    "tag": "cloud,storage,upload"
}, {
    "name": "ios-cloudy",
    "tag": "cloudy,overcast,weather,whether"
}, {
    "name": "ios-cloudy-outline",
    "tag": "cloudy,overcast,weather,whether"
}, {
    "name": "md-cloudy",
    "tag": "cloudy,overcast,weather,whether"
}, {
    "name": "ios-cloudy-night",
    "tag": "cloudy,night,overcast,weather,whether"
}, {
    "name": "ios-cloudy-night-outline",
    "tag": "cloudy,night,overcast,weather,whether"
}, {
    "name": "md-cloudy-night",
    "tag": "cloudy,night,overcast,weather,whether"
}, {
    "name": "ios-code",
    "tag": "code,develop,hacker,program"
}, {
    "name": "md-code",
    "tag": "code,develop,hacker,program"
}, {
    "name": "ios-code-download",
    "tag": "code,develop,download,hacker,program"
}, {
    "name": "md-code-download",
    "tag": "code,develop,download,hacker,program"
}, {
    "name": "ios-code-working",
    "tag": "code,develop,hacker,program,working"
}, {
    "name": "md-code-working",
    "tag": "code,develop,hacker,program,working"
}, {
    "name": "logo-codepen",
    "tag": "codepen,logo"
}, {
    "name": "ios-cog",
    "tag": "cog,gear,options,settings"
}, {
    "name": "ios-cog-outline",
    "tag": "cog,gear,options,settings"
}, {
    "name": "md-cog",
    "tag": "cog,gear,options,settings"
}, {
    "name": "ios-color-fill",
    "tag": "color,fill"
}, {
    "name": "ios-color-fill-outline",
    "tag": "color,fill"
}, {
    "name": "md-color-fill",
    "tag": "color,fill"
}, {
    "name": "ios-color-filter",
    "tag": "color,filter"
}, {
    "name": "ios-color-filter-outline",
    "tag": "color,filter"
}, {
    "name": "md-color-filter",
    "tag": "color,filter"
}, {
    "name": "ios-color-palette",
    "tag": "color,palette"
}, {
    "name": "ios-color-palette-outline",
    "tag": "color,palette"
}, {
    "name": "md-color-palette",
    "tag": "color,palette"
}, {
    "name": "ios-color-wand",
    "tag": "color,wand"
}, {
    "name": "ios-color-wand-outline",
    "tag": "color,wand"
}, {
    "name": "md-color-wand",
    "tag": "color,wand"
}, {
    "name": "ios-compass",
    "tag": "compass,directions,location,navigation"
}, {
    "name": "ios-compass-outline",
    "tag": "compass,directions,location,navigation"
}, {
    "name": "md-compass",
    "tag": "compass,directions,location,navigation"
}, {
    "name": "ios-construct",
    "tag": "construct"
}, {
    "name": "ios-construct-outline",
    "tag": "construct"
}, {
    "name": "md-construct",
    "tag": "construct"
}, {
    "name": "ios-contact",
    "tag": "contact,people,users"
}, {
    "name": "ios-contact-outline",
    "tag": "contact,people,users"
}, {
    "name": "md-contact",
    "tag": "contact,people,users"
}, {
    "name": "ios-contacts",
    "tag": "contacts,people,users"
}, {
    "name": "ios-contacts-outline",
    "tag": "contacts,people,users"
}, {
    "name": "md-contacts",
    "tag": "contacts,people,users"
}, {
    "name": "ios-contract",
    "tag": "contract"
}, {
    "name": "md-contract",
    "tag": "contract"
}, {
    "name": "ios-contrast",
    "tag": "contrast,dark,images,levels,light,settings"
}, {
    "name": "md-contrast",
    "tag": "contrast,dark,images,levels,light,settings"
}, {
    "name": "ios-copy",
    "tag": "copy,duplicate,paper"
}, {
    "name": "ios-copy-outline",
    "tag": "copy,duplicate,paper"
}, {
    "name": "md-copy",
    "tag": "copy,duplicate,paper"
}, {
    "name": "ios-create",
    "tag": "create"
}, {
    "name": "ios-create-outline",
    "tag": "create"
}, {
    "name": "md-create",
    "tag": "create"
}, {
    "name": "ios-crop",
    "tag": "crop"
}, {
    "name": "ios-crop-outline",
    "tag": "crop"
}, {
    "name": "md-crop",
    "tag": "crop"
}, {
    "name": "logo-css3",
    "tag": "css3,logo"
}, {
    "name": "ios-cube",
    "tag": "box,container,cube,square"
}, {
    "name": "ios-cube-outline",
    "tag": "box,container,cube,square"
}, {
    "name": "md-cube",
    "tag": "box,container,cube,square"
}, {
    "name": "ios-cut",
    "tag": "cut"
}, {
    "name": "ios-cut-outline",
    "tag": "cut"
}, {
    "name": "md-cut",
    "tag": "cut"
}, {
    "name": "logo-designernews",
    "tag": "design,designernews,post,logo"
}, {
    "name": "ios-desktop",
    "tag": "desktop"
}, {
    "name": "ios-desktop-outline",
    "tag": "desktop"
}, {
    "name": "md-desktop",
    "tag": "desktop"
}, {
    "name": "ios-disc",
    "tag": "cd,disc,vinyl"
}, {
    "name": "ios-disc-outline",
    "tag": "cd,disc,vinyl"
}, {
    "name": "md-disc",
    "tag": "cd,disc,vinyl"
}, {
    "name": "ios-document",
    "tag": "document,file,paper"
}, {
    "name": "ios-document-outline",
    "tag": "document,file,paper"
}, {
    "name": "md-document",
    "tag": "document,file,paper"
}, {
    "name": "ios-done-all",
    "tag": "all,done"
}, {
    "name": "md-done-all",
    "tag": "all,done"
}, {
    "name": "ios-download",
    "tag": "download,export"
}, {
    "name": "ios-download-outline",
    "tag": "download,export"
}, {
    "name": "md-download",
    "tag": "download,export"
}, {
    "name": "logo-dribbble",
    "tag": "design,dribbble,logo"
}, {
    "name": "logo-dropbox",
    "tag": "dropbox,logo,upload"
}, {
    "name": "ios-easel",
    "tag": "easel"
}, {
    "name": "ios-easel-outline",
    "tag": "easel"
}, {
    "name": "md-easel",
    "tag": "easel"
}, {
    "name": "ios-egg",
    "tag": "baby,bird,birth,egg,twitter"
}, {
    "name": "ios-egg-outline",
    "tag": "baby,bird,birth,egg,twitter"
}, {
    "name": "md-egg",
    "tag": "baby,bird,birth,egg,twitter"
}, {
    "name": "logo-euro",
    "tag": "euro,logo"
}, {
    "name": "ios-exit",
    "tag": "exit"
}, {
    "name": "ios-exit-outline",
    "tag": "exit"
}, {
    "name": "md-exit",
    "tag": "exit"
}, {
    "name": "ios-expand",
    "tag": "expand"
}, {
    "name": "md-expand",
    "tag": "expand"
}, {
    "name": "ios-eye",
    "tag": "exposed,eye,look,see,view"
}, {
    "name": "ios-eye-outline",
    "tag": "exposed,eye,look,see,view"
}, {
    "name": "md-eye",
    "tag": "exposed,eye,look,see,view"
}, {
    "name": "ios-eye-off",
    "tag": "eye,off"
}, {
    "name": "ios-eye-off-outline",
    "tag": "eye,off"
}, {
    "name": "md-eye-off",
    "tag": "eye,off"
}, {
    "name": "logo-facebook",
    "tag": "facebook,like,post,share,logo"
}, {
    "name": "ios-fastforward",
    "tag": "fastforward,jump,next,skip"
}, {
    "name": "ios-fastforward-outline",
    "tag": "fastforward,jump,next,skip"
}, {
    "name": "md-fastforward",
    "tag": "fastforward,jump,next,skip"
}, {
    "name": "ios-female",
    "tag": "dudette,female,girl,lady"
}, {
    "name": "md-female",
    "tag": "dudette,female,girl,lady"
}, {
    "name": "ios-filing",
    "tag": "archive,filing"
}, {
    "name": "ios-filing-outline",
    "tag": "archive,filing"
}, {
    "name": "md-filing",
    "tag": "archive,filing"
}, {
    "name": "ios-film",
    "tag": "film"
}, {
    "name": "ios-film-outline",
    "tag": "film"
}, {
    "name": "md-film",
    "tag": "film"
}, {
    "name": "ios-finger-print",
    "tag": "finger,print"
}, {
    "name": "md-finger-print",
    "tag": "finger,print"
}, {
    "name": "ios-flag",
    "tag": "favorite,flag,marker"
}, {
    "name": "ios-flag-outline",
    "tag": "favorite,flag,marker"
}, {
    "name": "md-flag",
    "tag": "favorite,flag,marker"
}, {
    "name": "ios-flame",
    "tag": "fire,flame,heat,hot"
}, {
    "name": "ios-flame-outline",
    "tag": "fire,flame,heat,hot"
}, {
    "name": "md-flame",
    "tag": "fire,flame,heat,hot"
}, {
    "name": "ios-flash",
    "tag": "flash,lightning,weather,whether"
}, {
    "name": "ios-flash-outline",
    "tag": "flash,lightning,weather,whether"
}, {
    "name": "md-flash",
    "tag": "flash,lightning,weather,whether"
}, {
    "name": "ios-flask",
    "tag": "bubbles,flask,mixture,potion"
}, {
    "name": "ios-flask-outline",
    "tag": "bubbles,flask,mixture,potion"
}, {
    "name": "md-flask",
    "tag": "bubbles,flask,mixture,potion"
}, {
    "name": "ios-flower",
    "tag": "flower"
}, {
    "name": "ios-flower-outline",
    "tag": "flower"
}, {
    "name": "md-flower",
    "tag": "flower"
}, {
    "name": "ios-folder",
    "tag": "file,folder"
}, {
    "name": "ios-folder-outline",
    "tag": "file,folder"
}, {
    "name": "md-folder",
    "tag": "file,folder"
}, {
    "name": "ios-folder-open",
    "tag": "folder,open"
}, {
    "name": "ios-folder-open-outline",
    "tag": "folder,open"
}, {
    "name": "md-folder-open",
    "tag": "folder,open"
}, {
    "name": "ios-football",
    "tag": "football"
}, {
    "name": "ios-football-outline",
    "tag": "football"
}, {
    "name": "md-football",
    "tag": "football"
}, {
    "name": "logo-foursquare",
    "tag": "checkin,foursquare,logo"
}, {
    "name": "logo-freebsd-devil",
    "tag": "devil,freebsd,logo,unix"
}, {
    "name": "ios-funnel",
    "tag": "funnel,sort"
}, {
    "name": "ios-funnel-outline",
    "tag": "funnel,sort"
}, {
    "name": "md-funnel",
    "tag": "funnel,sort"
}, {
    "name": "ios-game-controller-a",
    "tag": "a,controller,fun,game"
}, {
    "name": "ios-game-controller-a-outline",
    "tag": "a,controller,fun,game"
}, {
    "name": "md-game-controller-a",
    "tag": "a,controller,fun,game"
}, {
    "name": "ios-game-controller-b",
    "tag": "b,controller,fun,game"
}, {
    "name": "ios-game-controller-b-outline",
    "tag": "b,controller,fun,game"
}, {
    "name": "md-game-controller-b",
    "tag": "b,controller,fun,game"
}, {
    "name": "ios-git-branch",
    "tag": "branch,git"
}, {
    "name": "md-git-branch",
    "tag": "branch,git"
}, {
    "name": "ios-git-commit",
    "tag": "commit,git"
}, {
    "name": "md-git-commit",
    "tag": "commit,git"
}, {
    "name": "ios-git-compare",
    "tag": "compare,git"
}, {
    "name": "md-git-compare",
    "tag": "compare,git"
}, {
    "name": "ios-git-merge",
    "tag": "git,merge"
}, {
    "name": "md-git-merge",
    "tag": "git,merge"
}, {
    "name": "ios-git-network",
    "tag": "git,network"
}, {
    "name": "md-git-network",
    "tag": "git,network"
}, {
    "name": "ios-git-pull-request",
    "tag": "git,pull,request"
}, {
    "name": "md-git-pull-request",
    "tag": "git,pull,request"
}, {
    "name": "logo-github",
    "tag": "code,github,logo"
}, {
    "name": "ios-glasses",
    "tag": "glasses,look,reading,see,steve"
}, {
    "name": "ios-glasses-outline",
    "tag": "glasses,look,reading,see,steve"
}, {
    "name": "md-glasses",
    "tag": "glasses,look,reading,see,steve"
}, {
    "name": "ios-globe",
    "tag": "globe"
}, {
    "name": "ios-globe-outline",
    "tag": "globe"
}, {
    "name": "md-globe",
    "tag": "globe"
}, {
    "name": "logo-google",
    "tag": "follow,google,post,share,logo"
}, {
    "name": "logo-googleplus",
    "tag": "follow,googleplus,post,share,logo"
}, {
    "name": "ios-grid",
    "tag": "grid,menu"
}, {
    "name": "ios-grid-outline",
    "tag": "grid,menu"
}, {
    "name": "md-grid",
    "tag": "grid,menu"
}, {
    "name": "logo-hackernews",
    "tag": "discuss,hackernews,karma,logo,upvotes"
}, {
    "name": "ios-hammer",
    "tag": "hammer,options,settings,tools"
}, {
    "name": "ios-hammer-outline",
    "tag": "hammer,options,settings,tools"
}, {
    "name": "md-hammer",
    "tag": "hammer,options,settings,tools"
}, {
    "name": "ios-hand",
    "tag": "hand,stop"
}, {
    "name": "ios-hand-outline",
    "tag": "hand,stop"
}, {
    "name": "md-hand",
    "tag": "hand,stop"
}, {
    "name": "ios-happy",
    "tag": "fun,good,happy,like,yes"
}, {
    "name": "ios-happy-outline",
    "tag": "fun,good,happy,like,yes"
}, {
    "name": "md-happy",
    "tag": "fun,good,happy,like,yes"
}, {
    "name": "ios-headset",
    "tag": "headset"
}, {
    "name": "ios-headset-outline",
    "tag": "headset"
}, {
    "name": "md-headset",
    "tag": "headset"
}, {
    "name": "ios-heart",
    "tag": "heart,love"
}, {
    "name": "ios-heart-outline",
    "tag": "heart,love"
}, {
    "name": "md-heart",
    "tag": "heart,love"
}, {
    "name": "md-heart-outline",
    "tag": "heart,outline"
}, {
    "name": "ios-help",
    "tag": "?,help,information,question"
}, {
    "name": "md-help",
    "tag": "?,help,information,question"
}, {
    "name": "ios-help-buoy",
    "tag": "?,buoy,help,question"
}, {
    "name": "ios-help-buoy-outline",
    "tag": "?,buoy,help,question"
}, {
    "name": "md-help-buoy",
    "tag": "?,buoy,help,question"
}, {
    "name": "ios-help-circle",
    "tag": "circle,help"
}, {
    "name": "ios-help-circle-outline",
    "tag": "circle,help"
}, {
    "name": "md-help-circle",
    "tag": "circle,help"
}, {
    "name": "ios-home",
    "tag": "home,house"
}, {
    "name": "ios-home-outline",
    "tag": "home,house"
}, {
    "name": "md-home",
    "tag": "home,house"
}, {
    "name": "logo-html5",
    "tag": "html5,logo"
}, {
    "name": "ios-ice-cream",
    "tag": "cream,ice"
}, {
    "name": "ios-ice-cream-outline",
    "tag": "cream,ice"
}, {
    "name": "md-ice-cream",
    "tag": "cream,ice"
}, {
    "name": "ios-image",
    "tag": "camera,image,photo"
}, {
    "name": "ios-image-outline",
    "tag": "camera,image,photo"
}, {
    "name": "md-image",
    "tag": "camera,image,photo"
}, {
    "name": "ios-images",
    "tag": "images,photo"
}, {
    "name": "ios-images-outline",
    "tag": "images,photo"
}, {
    "name": "md-images",
    "tag": "images,photo"
}, {
    "name": "ios-infinite",
    "tag": "forever,infinite,loop"
}, {
    "name": "ios-infinite-outline",
    "tag": "forever,infinite,loop"
}, {
    "name": "md-infinite",
    "tag": "forever,infinite,loop"
}, {
    "name": "ios-information",
    "tag": "help,information,knowledge"
}, {
    "name": "md-information",
    "tag": "help,information,knowledge"
}, {
    "name": "ios-information-circle",
    "tag": "circle,information"
}, {
    "name": "ios-information-circle-outline",
    "tag": "circle,information"
}, {
    "name": "md-information-circle",
    "tag": "circle,information"
}, {
    "name": "logo-instagram",
    "tag": "camera,instagram,photo,logo"
}, {
    "name": "ios-ionic",
    "tag": "badass,framework,hawt,ionic,sexy"
}, {
    "name": "ios-ionic-outline",
    "tag": "badass,framework,hawt,ionic,sexy"
}, {
    "name": "md-ionic",
    "tag": "badass,framework,hawt,ionic,sexy"
}, {
    "name": "ios-ionitron",
    "tag": "ionitron"
}, {
    "name": "ios-ionitron-outline",
    "tag": "ionitron"
}, {
    "name": "md-ionitron",
    "tag": "ionitron"
}, {
    "name": "logo-javascript",
    "tag": "javascript,logo"
}, {
    "name": "ios-jet",
    "tag": "fly,jet,plane"
}, {
    "name": "ios-jet-outline",
    "tag": "fly,jet,plane"
}, {
    "name": "md-jet",
    "tag": "fly,jet,plane"
}, {
    "name": "ios-key",
    "tag": "access,key"
}, {
    "name": "ios-key-outline",
    "tag": "access,key"
}, {
    "name": "md-key",
    "tag": "access,key"
}, {
    "name": "ios-keypad",
    "tag": "keypad,type"
}, {
    "name": "ios-keypad-outline",
    "tag": "keypad,type"
}, {
    "name": "md-keypad",
    "tag": "keypad,type"
}, {
    "name": "ios-laptop",
    "tag": "apple,laptop,macbook,osx"
}, {
    "name": "md-laptop",
    "tag": "apple,laptop,macbook,osx"
}, {
    "name": "ios-leaf",
    "tag": "green,leaf,nature,plant,recycle"
}, {
    "name": "ios-leaf-outline",
    "tag": "green,leaf,nature,plant,recycle"
}, {
    "name": "md-leaf",
    "tag": "green,leaf,nature,plant,recycle"
}, {
    "name": "ios-link",
    "tag": "anchor,attach,chain,href,link"
}, {
    "name": "ios-link-outline",
    "tag": "anchor,attach,chain,href,link"
}, {
    "name": "md-link",
    "tag": "anchor,attach,chain,href,link"
}, {
    "name": "logo-linkedin",
    "tag": "connect,linkedin,logo"
}, {
    "name": "ios-list",
    "tag": "list"
}, {
    "name": "md-list",
    "tag": "list"
}, {
    "name": "ios-list-box",
    "tag": "box,list"
}, {
    "name": "ios-list-box-outline",
    "tag": "box,list"
}, {
    "name": "md-list-box",
    "tag": "box,list"
}, {
    "name": "ios-locate",
    "tag": "gps,locate,maps,navigate"
}, {
    "name": "ios-locate-outline",
    "tag": "gps,locate,maps,navigate"
}, {
    "name": "md-locate",
    "tag": "gps,locate,maps,navigate"
}, {
    "name": "ios-lock",
    "tag": "lock,privacy"
}, {
    "name": "ios-lock-outline",
    "tag": "lock,privacy"
}, {
    "name": "md-lock",
    "tag": "lock,privacy"
}, {
    "name": "ios-log-in",
    "tag": "in,log,signin"
}, {
    "name": "md-log-in",
    "tag": "in,log,signin"
}, {
    "name": "ios-log-out",
    "tag": "log,out,signout"
}, {
    "name": "md-log-out",
    "tag": "log,out,signout"
}, {
    "name": "ios-magnet",
    "tag": "attraction,magnet,sticky"
}, {
    "name": "ios-magnet-outline",
    "tag": "attraction,magnet,sticky"
}, {
    "name": "md-magnet",
    "tag": "attraction,magnet,sticky"
}, {
    "name": "ios-mail",
    "tag": "email,mail"
}, {
    "name": "ios-mail-outline",
    "tag": "email,mail"
}, {
    "name": "md-mail",
    "tag": "email,mail"
}, {
    "name": "ios-mail-open",
    "tag": "mail,open"
}, {
    "name": "ios-mail-open-outline",
    "tag": "mail,open"
}, {
    "name": "md-mail-open",
    "tag": "mail,open"
}, {
    "name": "ios-male",
    "tag": "boy,dude,guy,male,male"
}, {
    "name": "md-male",
    "tag": "boy,dude,guy,male,male"
}, {
    "name": "ios-man",
    "tag": "boy,dude,guy,male,man"
}, {
    "name": "ios-man-outline",
    "tag": "boy,dude,guy,male,man"
}, {
    "name": "md-man",
    "tag": "boy,dude,guy,male,man"
}, {
    "name": "ios-map",
    "tag": "gps,map,navigation,pin"
}, {
    "name": "ios-map-outline",
    "tag": "gps,map,navigation,pin"
}, {
    "name": "md-map",
    "tag": "gps,map,navigation,pin"
}, {
    "name": "logo-markdown",
    "tag": "markdown,logo"
}, {
    "name": "ios-medal",
    "tag": "medal"
}, {
    "name": "ios-medal-outline",
    "tag": "medal"
}, {
    "name": "md-medal",
    "tag": "medal"
}, {
    "name": "ios-medical",
    "tag": "medical"
}, {
    "name": "ios-medical-outline",
    "tag": "medical"
}, {
    "name": "md-medical",
    "tag": "medical"
}, {
    "name": "ios-medkit",
    "tag": "case,disease,firstaid,health,medkit,sick"
}, {
    "name": "ios-medkit-outline",
    "tag": "case,disease,firstaid,health,medkit,sick"
}, {
    "name": "md-medkit",
    "tag": "case,disease,firstaid,health,medkit,sick"
}, {
    "name": "ios-megaphone",
    "tag": "megaphone"
}, {
    "name": "ios-megaphone-outline",
    "tag": "megaphone"
}, {
    "name": "md-megaphone",
    "tag": "megaphone"
}, {
    "name": "ios-menu",
    "tag": "menu"
}, {
    "name": "ios-menu-outline",
    "tag": "menu"
}, {
    "name": "md-menu",
    "tag": "menu"
}, {
    "name": "ios-mic",
    "tag": "mic,noise,sound,speaker,talk"
}, {
    "name": "ios-mic-outline",
    "tag": "mic,noise,sound,speaker,talk"
}, {
    "name": "md-mic",
    "tag": "mic,noise,sound,speaker,talk"
}, {
    "name": "ios-mic-off",
    "tag": "mic,noise,off,sound,speaker,talk"
}, {
    "name": "ios-mic-off-outline",
    "tag": "mic,noise,off,sound,speaker,talk"
}, {
    "name": "md-mic-off",
    "tag": "mic,noise,off,sound,speaker,talk"
}, {
    "name": "ios-microphone",
    "tag": "microphone,music,noise,recorde,sound,speak"
}, {
    "name": "ios-microphone-outline",
    "tag": "microphone,music,noise,recorde,sound,speak"
}, {
    "name": "md-microphone",
    "tag": "microphone,music,noise,recorde,sound,speak"
}, {
    "name": "ios-moon",
    "tag": "dark,moon,night,sky"
}, {
    "name": "ios-moon-outline",
    "tag": "dark,moon,night,sky"
}, {
    "name": "md-moon",
    "tag": "dark,moon,night,sky"
}, {
    "name": "ios-more",
    "tag": "more,options"
}, {
    "name": "ios-more-outline",
    "tag": "more,options"
}, {
    "name": "md-more",
    "tag": "more,options"
}, {
    "name": "ios-move",
    "tag": "move"
}, {
    "name": "md-move",
    "tag": "move"
}, {
    "name": "ios-musical-note",
    "tag": "listening,musical,noise,note,play,sound"
}, {
    "name": "ios-musical-note-outline",
    "tag": "listening,musical,noise,note,play,sound"
}, {
    "name": "md-musical-note",
    "tag": "listening,musical,noise,note,play,sound"
}, {
    "name": "ios-musical-notes",
    "tag": "listening,musical,noise,notes,play,sound"
}, {
    "name": "ios-musical-notes-outline",
    "tag": "listening,musical,noise,notes,play,sound"
}, {
    "name": "md-musical-notes",
    "tag": "listening,musical,noise,notes,play,sound"
}, {
    "name": "ios-navigate",
    "tag": "gps,location,map,navigate,pin"
}, {
    "name": "ios-navigate-outline",
    "tag": "gps,location,map,navigate,pin"
}, {
    "name": "md-navigate",
    "tag": "gps,location,map,navigate,pin"
}, {
    "name": "ios-no-smoking",
    "tag": "cancer,cigarette,danger,no,smoking,warning"
}, {
    "name": "ios-no-smoking-outline",
    "tag": "cancer,cigarette,danger,no,smoking,warning"
}, {
    "name": "md-no-smoking",
    "tag": "cancer,cigarette,danger,no,smoking,warning"
}, {
    "name": "logo-nodejs",
    "tag": "nodejs,logo"
}, {
    "name": "ios-notifications",
    "tag": "notifications,push"
}, {
    "name": "ios-notifications-outline",
    "tag": "notifications,push,outline"
}, {
    "name": "md-notifications",
    "tag": "notifications,push"
}, {
    "name": "ios-notifications-off",
    "tag": "notifications,off,push"
}, {
    "name": "ios-notifications-off-outline",
    "tag": "notifications,off,push"
}, {
    "name": "md-notifications-off",
    "tag": "notifications,off,push"
}, {
    "name": "md-notifications-outline",
    "tag": "notifications,outline,push"
}, {
    "name": "ios-nuclear",
    "tag": "danger,hazard,nuclear,warning"
}, {
    "name": "ios-nuclear-outline",
    "tag": "danger,hazard,nuclear,warning"
}, {
    "name": "md-nuclear",
    "tag": "danger,hazard,nuclear,warning"
}, {
    "name": "ios-nutrition",
    "tag": "nutrition"
}, {
    "name": "ios-nutrition-outline",
    "tag": "nutrition"
}, {
    "name": "md-nutrition",
    "tag": "nutrition"
}, {
    "name": "logo-octocat",
    "tag": "octocat,logo"
}, {
    "name": "ios-open",
    "tag": "open"
}, {
    "name": "ios-open-outline",
    "tag": "open"
}, {
    "name": "md-open",
    "tag": "open"
}, {
    "name": "ios-options",
    "tag": "options"
}, {
    "name": "ios-options-outline",
    "tag": "options"
}, {
    "name": "md-options",
    "tag": "options"
}, {
    "name": "ios-outlet",
    "tag": "computer,digital,electricity,outlet"
}, {
    "name": "ios-outlet-outline",
    "tag": "computer,digital,electricity,outlet"
}, {
    "name": "md-outlet",
    "tag": "computer,digital,electricity,outlet"
}, {
    "name": "ios-paper",
    "tag": "feed,paper,paper"
}, {
    "name": "ios-paper-outline",
    "tag": "feed,paper,paper"
}, {
    "name": "md-paper",
    "tag": "feed,paper,paper"
}, {
    "name": "ios-paper-plane",
    "tag": "paper,plane"
}, {
    "name": "ios-paper-plane-outline",
    "tag": "paper,plane"
}, {
    "name": "md-paper-plane",
    "tag": "paper,plane"
}, {
    "name": "ios-partly-sunny",
    "tag": "partly,sunny"
}, {
    "name": "ios-partly-sunny-outline",
    "tag": "partly,sunny"
}, {
    "name": "md-partly-sunny",
    "tag": "partly,sunny"
}, {
    "name": "ios-pause",
    "tag": "break,freeze,hold,music,pause"
}, {
    "name": "ios-pause-outline",
    "tag": "break,freeze,hold,music,pause"
}, {
    "name": "md-pause",
    "tag": "break,freeze,hold,music,pause"
}, {
    "name": "ios-paw",
    "tag": "paw"
}, {
    "name": "ios-paw-outline",
    "tag": "paw"
}, {
    "name": "md-paw",
    "tag": "paw"
}, {
    "name": "ios-people",
    "tag": "head,human,people,person,stalker,users"
}, {
    "name": "ios-people-outline",
    "tag": "head,human,people,person,stalker,users"
}, {
    "name": "md-people",
    "tag": "head,human,people,person,stalker,users"
}, {
    "name": "ios-person",
    "tag": "head,human,person,staff,users"
}, {
    "name": "ios-person-outline",
    "tag": "head,human,person,staff,users"
}, {
    "name": "md-person",
    "tag": "head,human,person,staff,users"
}, {
    "name": "ios-person-add",
    "tag": "add,head,human,member,new,person,staff,users"
}, {
    "name": "ios-person-add-outline",
    "tag": "add,head,human,member,new,person,staff,users"
}, {
    "name": "md-person-add",
    "tag": "add,head,human,member,new,person,staff,users"
}, {
    "name": "ios-phone-landscape",
    "tag": "landscape,phone"
}, {
    "name": "md-phone-landscape",
    "tag": "landscape,phone"
}, {
    "name": "ios-phone-portrait",
    "tag": "phone,portrait"
}, {
    "name": "md-phone-portrait",
    "tag": "phone,portrait"
}, {
    "name": "ios-photos",
    "tag": "images,photos,square,stills"
}, {
    "name": "ios-photos-outline",
    "tag": "images,photos,square,stills"
}, {
    "name": "md-photos",
    "tag": "images,photos,square,stills"
}, {
    "name": "ios-pie",
    "tag": "cog,options,pie,settings"
}, {
    "name": "ios-pie-outline",
    "tag": "cog,options,pie,settings"
}, {
    "name": "md-pie",
    "tag": "cog,options,pie,settings"
}, {
    "name": "ios-pin",
    "tag": "gps,navigation,pin"
}, {
    "name": "ios-pin-outline",
    "tag": "gps,navigation,pin"
}, {
    "name": "md-pin",
    "tag": "gps,navigation,pin"
}, {
    "name": "ios-pint",
    "tag": "pint"
}, {
    "name": "ios-pint-outline",
    "tag": "pint"
}, {
    "name": "md-pint",
    "tag": "pint"
}, {
    "name": "logo-pinterest",
    "tag": "pinterest,logo"
}, {
    "name": "ios-pizza",
    "tag": "drink,eat,food,pizza"
}, {
    "name": "ios-pizza-outline",
    "tag": "drink,eat,food,pizza"
}, {
    "name": "md-pizza",
    "tag": "drink,eat,food,pizza"
}, {
    "name": "ios-plane",
    "tag": "fly,jet,plane"
}, {
    "name": "ios-plane-outline",
    "tag": "fly,jet,plane"
}, {
    "name": "md-plane",
    "tag": "fly,jet,plane"
}, {
    "name": "ios-planet",
    "tag": "globe,home,nature,planet,planet,space"
}, {
    "name": "ios-planet-outline",
    "tag": "globe,home,nature,planet,planet,space"
}, {
    "name": "md-planet",
    "tag": "globe,home,nature,planet,planet,space"
}, {
    "name": "ios-play",
    "tag": "arrow,music,play,right,watch"
}, {
    "name": "ios-play-outline",
    "tag": "arrow,music,play,right,watch"
}, {
    "name": "md-play",
    "tag": "arrow,music,play,right,watch"
}, {
    "name": "logo-playstation",
    "tag": "fun,games,playstation,logo"
}, {
    "name": "ios-podium",
    "tag": "award,compete,competition,lose,podium,win"
}, {
    "name": "ios-podium-outline",
    "tag": "award,compete,competition,lose,podium,win"
}, {
    "name": "md-podium",
    "tag": "award,compete,competition,lose,podium,win"
}, {
    "name": "ios-power",
    "tag": "off,on,power"
}, {
    "name": "ios-power-outline",
    "tag": "off,on,power"
}, {
    "name": "md-power",
    "tag": "off,on,power"
}, {
    "name": "ios-pricetag",
    "tag": "$,commerce,items,money,pricetag,shopping"
}, {
    "name": "ios-pricetag-outline",
    "tag": "$,commerce,items,money,pricetag,shopping"
}, {
    "name": "md-pricetag",
    "tag": "$,commerce,items,money,pricetag,shopping"
}, {
    "name": "ios-pricetags",
    "tag": "$,commerce,items,money,pricetags,shopping"
}, {
    "name": "ios-pricetags-outline",
    "tag": "$,commerce,items,money,pricetags,shopping"
}, {
    "name": "md-pricetags",
    "tag": "$,commerce,items,money,pricetags,shopping"
}, {
    "name": "ios-print",
    "tag": "print"
}, {
    "name": "ios-print-outline",
    "tag": "print"
}, {
    "name": "md-print",
    "tag": "print"
}, {
    "name": "ios-pulse",
    "tag": "hot,live,pulse,rate"
}, {
    "name": "ios-pulse-outline",
    "tag": "hot,live,pulse,rate"
}, {
    "name": "md-pulse",
    "tag": "hot,live,pulse,rate"
}, {
    "name": "logo-python",
    "tag": "python,logo"
}, {
    "name": "ios-qr-scanner",
    "tag": "qr,reader,scanner"
}, {
    "name": "md-qr-scanner",
    "tag": "qr,reader,scanner"
}, {
    "name": "ios-quote",
    "tag": "chat,quotation,quote"
}, {
    "name": "ios-quote-outline",
    "tag": "chat,quotation,quote"
}, {
    "name": "md-quote",
    "tag": "chat,quotation,quote"
}, {
    "name": "ios-radio",
    "tag": "radio"
}, {
    "name": "ios-radio-outline",
    "tag": "radio"
}, {
    "name": "md-radio",
    "tag": "radio"
}, {
    "name": "ios-radio-button-off",
    "tag": "button,off,radio"
}, {
    "name": "md-radio-button-off",
    "tag": "button,off,radio"
}, {
    "name": "ios-radio-button-on",
    "tag": "button,on,radio"
}, {
    "name": "md-radio-button-on",
    "tag": "button,on,radio"
}, {
    "name": "ios-rainy",
    "tag": "cloud,rainy,water,weather,whether"
}, {
    "name": "ios-rainy-outline",
    "tag": "cloud,rainy,water,weather,whether"
}, {
    "name": "md-rainy",
    "tag": "cloud,rainy,water,weather,whether"
}, {
    "name": "ios-recording",
    "tag": "film,recording,tape,voicemail"
}, {
    "name": "ios-recording-outline",
    "tag": "film,recording,tape,voicemail"
}, {
    "name": "md-recording",
    "tag": "film,recording,tape,voicemail"
}, {
    "name": "logo-reddit",
    "tag": "karma,news,reddit,logo,upvotes"
}, {
    "name": "ios-redo",
    "tag": "forward,redo"
}, {
    "name": "ios-redo-outline",
    "tag": "forward,redo"
}, {
    "name": "md-redo",
    "tag": "forward,redo"
}, {
    "name": "ios-refresh",
    "tag": "refresh,reload,renew,reset"
}, {
    "name": "md-refresh",
    "tag": "refresh,reload,renew,reset"
}, {
    "name": "ios-refresh-circle",
    "tag": "circle,refresh"
}, {
    "name": "ios-refresh-circle-outline",
    "tag": "circle,refresh"
}, {
    "name": "md-refresh-circle",
    "tag": "circle,refresh"
}, {
    "name": "ios-remove",
    "tag": "minus,remove,subtract"
}, {
    "name": "md-remove",
    "tag": "minus,remove,subtract"
}, {
    "name": "ios-remove-circle",
    "tag": "circle,remove"
}, {
    "name": "ios-remove-circle-outline",
    "tag": "circle,remove"
}, {
    "name": "md-remove-circle",
    "tag": "circle,remove"
}, {
    "name": "ios-reorder",
    "tag": "reorder"
}, {
    "name": "md-reorder",
    "tag": "reorder"
}, {
    "name": "ios-repeat",
    "tag": "repeat"
}, {
    "name": "md-repeat",
    "tag": "repeat"
}, {
    "name": "ios-resize",
    "tag": "resize"
}, {
    "name": "md-resize",
    "tag": "resize"
}, {
    "name": "ios-restaurant",
    "tag": "restaurant"
}, {
    "name": "ios-restaurant-outline",
    "tag": "restaurant"
}, {
    "name": "md-restaurant",
    "tag": "restaurant"
}, {
    "name": "ios-return-left",
    "tag": "left,return"
}, {
    "name": "md-return-left",
    "tag": "left,return"
}, {
    "name": "ios-return-right",
    "tag": "return,right"
}, {
    "name": "md-return-right",
    "tag": "return,right"
}, {
    "name": "ios-reverse-camera",
    "tag": "camera,picture,reverse"
}, {
    "name": "ios-reverse-camera-outline",
    "tag": "camera,picture,reverse"
}, {
    "name": "md-reverse-camera",
    "tag": "camera,picture,reverse"
}, {
    "name": "ios-rewind",
    "tag": "back,music,previous,rewind"
}, {
    "name": "ios-rewind-outline",
    "tag": "back,music,previous,rewind"
}, {
    "name": "md-rewind",
    "tag": "back,music,previous,rewind"
}, {
    "name": "ios-ribbon",
    "tag": "ribbon"
}, {
    "name": "ios-ribbon-outline",
    "tag": "ribbon"
}, {
    "name": "md-ribbon",
    "tag": "ribbon"
}, {
    "name": "ios-rose",
    "tag": "rose"
}, {
    "name": "ios-rose-outline",
    "tag": "rose"
}, {
    "name": "md-rose",
    "tag": "rose"
}, {
    "name": "logo-rss",
    "tag": "blogging,rss,logo"
}, {
    "name": "ios-sad",
    "tag": "bad,cry,no,sad"
}, {
    "name": "ios-sad-outline",
    "tag": "bad,cry,no,sad"
}, {
    "name": "md-sad",
    "tag": "bad,cry,no,sad"
}, {
    "name": "logo-sass",
    "tag": "sass,logo"
}, {
    "name": "ios-school",
    "tag": "school"
}, {
    "name": "ios-school-outline",
    "tag": "school"
}, {
    "name": "md-school",
    "tag": "school"
}, {
    "name": "ios-search",
    "tag": "magnifyingglass,search"
}, {
    "name": "ios-search-outline",
    "tag": "magnifyingglass,search"
}, {
    "name": "md-search",
    "tag": "magnifyingglass,search"
}, {
    "name": "ios-send",
    "tag": "email,paper,send,push"
}, {
    "name": "ios-send-outline",
    "tag": "email,paper,send,push"
}, {
    "name": "md-send",
    "tag": "email,paper,send,push"
}, {
    "name": "ios-settings",
    "tag": "options,settings"
}, {
    "name": "ios-settings-outline",
    "tag": "options,settings"
}, {
    "name": "md-settings",
    "tag": "options,settings"
}, {
    "name": "ios-share",
    "tag": "share"
}, {
    "name": "ios-share-outline",
    "tag": "share"
}, {
    "name": "md-share",
    "tag": "share"
}, {
    "name": "ios-share-alt",
    "tag": "alt,share"
}, {
    "name": "ios-share-alt-outline",
    "tag": "alt,share"
}, {
    "name": "md-share-alt",
    "tag": "alt,share"
}, {
    "name": "ios-shirt",
    "tag": "shirt"
}, {
    "name": "ios-shirt-outline",
    "tag": "shirt"
}, {
    "name": "md-shirt",
    "tag": "shirt"
}, {
    "name": "ios-shuffle",
    "tag": "random,shuffle"
}, {
    "name": "md-shuffle",
    "tag": "random,shuffle"
}, {
    "name": "ios-skip-backward",
    "tag": "backward,music,previous,skip"
}, {
    "name": "ios-skip-backward-outline",
    "tag": "backward,music,previous,skip"
}, {
    "name": "md-skip-backward",
    "tag": "backward,music,previous,skip"
}, {
    "name": "ios-skip-forward",
    "tag": "forward,music,next,skip"
}, {
    "name": "ios-skip-forward-outline",
    "tag": "forward,music,next,skip"
}, {
    "name": "md-skip-forward",
    "tag": "forward,music,next,skip"
}, {
    "name": "logo-skype",
    "tag": "call,skype,logo"
}, {
    "name": "logo-snapchat",
    "tag": "snapchat,logo"
}, {
    "name": "ios-snow",
    "tag": "snow"
}, {
    "name": "ios-snow-outline",
    "tag": "snow"
}, {
    "name": "md-snow",
    "tag": "snow"
}, {
    "name": "ios-speedometer",
    "tag": "drive,level,speed,speedometer"
}, {
    "name": "ios-speedometer-outline",
    "tag": "drive,level,speed,speedometer"
}, {
    "name": "md-speedometer",
    "tag": "drive,level,speed,speedometer"
}, {
    "name": "ios-square",
    "tag": "square"
}, {
    "name": "ios-square-outline",
    "tag": "square"
}, {
    "name": "md-square",
    "tag": "square"
}, {
    "name": "md-square-outline",
    "tag": "square,outline"
}, {
    "name": "ios-star",
    "tag": "favorite,star"
}, {
    "name": "ios-star-outline",
    "tag": "favorite,star"
}, {
    "name": "md-star",
    "tag": "favorite,star"
}, {
    "name": "ios-star-half",
    "tag": "favorite,half,rate,star"
}, {
    "name": "md-star-half",
    "tag": "favorite,half,rate,star"
}, {
    "name": "md-star-outline",
    "tag": "star,outline"
}, {
    "name": "ios-stats",
    "tag": "stats"
}, {
    "name": "ios-stats-outline",
    "tag": "stats"
}, {
    "name": "md-stats",
    "tag": "stats"
}, {
    "name": "logo-steam",
    "tag": "fun,games,logo,steam"
}, {
    "name": "ios-stopwatch",
    "tag": "stopwatch"
}, {
    "name": "ios-stopwatch-outline",
    "tag": "stopwatch"
}, {
    "name": "md-stopwatch",
    "tag": "stopwatch"
}, {
    "name": "ios-subway",
    "tag": "subway"
}, {
    "name": "ios-subway-outline",
    "tag": "subway"
}, {
    "name": "md-subway",
    "tag": "subway"
}, {
    "name": "ios-sunny",
    "tag": "light,sky,sunny,weather,whether"
}, {
    "name": "ios-sunny-outline",
    "tag": "light,sky,sunny,weather,whether"
}, {
    "name": "md-sunny",
    "tag": "light,sky,sunny,weather,whether"
}, {
    "name": "ios-swap",
    "tag": "swap"
}, {
    "name": "md-swap",
    "tag": "swap"
}, {
    "name": "ios-switch",
    "tag": "switch"
}, {
    "name": "ios-switch-outline",
    "tag": "switch"
}, {
    "name": "md-switch",
    "tag": "switch"
}, {
    "name": "ios-sync",
    "tag": "sync"
}, {
    "name": "md-sync",
    "tag": "sync"
}, {
    "name": "ios-tablet-landscape",
    "tag": "landscape,tablet"
}, {
    "name": "md-tablet-landscape",
    "tag": "landscape,tablet"
}, {
    "name": "ios-tablet-portrait",
    "tag": "portrait,tablet"
}, {
    "name": "md-tablet-portrait",
    "tag": "portrait,tablet"
}, {
    "name": "ios-tennisball",
    "tag": "tennisball"
}, {
    "name": "ios-tennisball-outline",
    "tag": "tennisball"
}, {
    "name": "md-tennisball",
    "tag": "tennisball"
}, {
    "name": "ios-text",
    "tag": "text"
}, {
    "name": "ios-text-outline",
    "tag": "text"
}, {
    "name": "md-text",
    "tag": "text"
}, {
    "name": "ios-thermometer",
    "tag": "cold,heat,hot,mercury,temperature,thermometer"
}, {
    "name": "ios-thermometer-outline",
    "tag": "cold,heat,hot,mercury,temperature,thermometer"
}, {
    "name": "md-thermometer",
    "tag": "cold,heat,hot,mercury,temperature,thermometer"
}, {
    "name": "ios-thumbs-down",
    "tag": "down,thumbs"
}, {
    "name": "ios-thumbs-down-outline",
    "tag": "down,thumbs"
}, {
    "name": "md-thumbs-down",
    "tag": "down,thumbs"
}, {
    "name": "ios-thumbs-up",
    "tag": "thumbs,up"
}, {
    "name": "ios-thumbs-up-outline",
    "tag": "thumbs,up"
}, {
    "name": "md-thumbs-up",
    "tag": "thumbs,up"
}, {
    "name": "ios-thunderstorm",
    "tag": "cloudy,lightning,overcast,rain,sky,storm,thunderstorm,weather,whether"
}, {
    "name": "ios-thunderstorm-outline",
    "tag": "cloudy,lightning,overcast,rain,sky,storm,thunderstorm,weather,whether"
}, {
    "name": "md-thunderstorm",
    "tag": "cloudy,lightning,overcast,rain,sky,storm,thunderstorm,weather,whether"
}, {
    "name": "ios-time",
    "tag": "clock,hour,minute,second,time,watch"
}, {
    "name": "ios-time-outline",
    "tag": "clock,hour,minute,second,time,watch"
}, {
    "name": "md-time",
    "tag": "clock,hour,minute,second,time,watch"
}, {
    "name": "ios-timer",
    "tag": "clock,timer"
}, {
    "name": "ios-timer-outline",
    "tag": "clock,timer"
}, {
    "name": "md-timer",
    "tag": "clock,timer"
}, {
    "name": "ios-train",
    "tag": "train"
}, {
    "name": "ios-train-outline",
    "tag": "train"
}, {
    "name": "md-train",
    "tag": "train"
}, {
    "name": "ios-transgender",
    "tag": "transgender"
}, {
    "name": "md-transgender",
    "tag": "transgender"
}, {
    "name": "ios-trash",
    "tag": "close,delete,remove,trash"
}, {
    "name": "ios-trash-outline",
    "tag": "close,delete,remove,trash"
}, {
    "name": "md-trash",
    "tag": "close,delete,remove,trash"
}, {
    "name": "ios-trending-down",
    "tag": "down,trending"
}, {
    "name": "md-trending-down",
    "tag": "down,trending"
}, {
    "name": "ios-trending-up",
    "tag": "trending,up"
}, {
    "name": "md-trending-up",
    "tag": "trending,up"
}, {
    "name": "ios-trophy",
    "tag": "award,compete,competition,lose,trophy,win"
}, {
    "name": "ios-trophy-outline",
    "tag": "award,compete,competition,lose,trophy,win"
}, {
    "name": "md-trophy",
    "tag": "award,compete,competition,lose,trophy,win"
}, {
    "name": "logo-tumblr",
    "tag": "blogging,logo,tumblr"
}, {
    "name": "logo-tux",
    "tag": "linux,opensource,logo,tux"
}, {
    "name": "logo-twitch",
    "tag": "logo,twitch"
}, {
    "name": "logo-twitter",
    "tag": "follow,post,share,logo,twitter"
}, {
    "name": "ios-umbrella",
    "tag": "dry,rain,shelter,umbrella,wet"
}, {
    "name": "ios-umbrella-outline",
    "tag": "dry,rain,shelter,umbrella,wet"
}, {
    "name": "md-umbrella",
    "tag": "dry,rain,shelter,umbrella,wet"
}, {
    "name": "ios-undo",
    "tag": "reply,undo"
}, {
    "name": "ios-undo-outline",
    "tag": "reply,undo"
}, {
    "name": "md-undo",
    "tag": "reply,undo"
}, {
    "name": "ios-unlock",
    "tag": "unlock"
}, {
    "name": "ios-unlock-outline",
    "tag": "unlock"
}, {
    "name": "md-unlock",
    "tag": "unlock"
}, {
    "name": "logo-usd",
    "tag": "cash,currency,money,logo,trade,usd"
}, {
    "name": "ios-videocam",
    "tag": "camera,film,movie,videocam"
}, {
    "name": "ios-videocam-outline",
    "tag": "camera,film,movie,videocam"
}, {
    "name": "md-videocam",
    "tag": "camera,film,movie,videocam"
}, {
    "name": "logo-vimeo",
    "tag": "share,logo,video,view,vimeo,watch"
}, {
    "name": "ios-volume-down",
    "tag": "down,volume"
}, {
    "name": "md-volume-down",
    "tag": "down,volume"
}, {
    "name": "ios-volume-mute",
    "tag": "mute,sound,volume"
}, {
    "name": "md-volume-mute",
    "tag": "mute,sound,volume"
}, {
    "name": "ios-volume-off",
    "tag": "off,volume"
}, {
    "name": "md-volume-off",
    "tag": "off,volume"
}, {
    "name": "ios-volume-up",
    "tag": "up,volume"
}, {
    "name": "md-volume-up",
    "tag": "up,volume"
}, {
    "name": "ios-walk",
    "tag": "walk"
}, {
    "name": "md-walk",
    "tag": "walk"
}, {
    "name": "ios-warning",
    "tag": "warning"
}, {
    "name": "ios-warning-outline",
    "tag": "warning"
}, {
    "name": "md-warning",
    "tag": "warning"
}, {
    "name": "ios-watch",
    "tag": "watch"
}, {
    "name": "md-watch",
    "tag": "watch"
}, {
    "name": "ios-water",
    "tag": "water"
}, {
    "name": "ios-water-outline",
    "tag": "water"
}, {
    "name": "md-water",
    "tag": "water"
}, {
    "name": "logo-whatsapp",
    "tag": "logo,whatsapp"
}, {
    "name": "ios-wifi",
    "tag": "bars,connection,internet,wifi"
}, {
    "name": "ios-wifi-outline",
    "tag": "bars,connection,internet,wifi"
}, {
    "name": "md-wifi",
    "tag": "bars,connection,internet,wifi"
}, {
    "name": "logo-windows",
    "tag": "pc,logo,windows"
}, {
    "name": "ios-wine",
    "tag": "wine"
}, {
    "name": "ios-wine-outline",
    "tag": "wine"
}, {
    "name": "md-wine",
    "tag": "wine"
}, {
    "name": "ios-woman",
    "tag": "dudette,female,girl,lady,woman"
}, {
    "name": "ios-woman-outline",
    "tag": "dudette,female,girl,lady,woman"
}, {
    "name": "md-woman",
    "tag": "dudette,female,girl,lady,woman"
}, {
    "name": "logo-wordpress",
    "tag": "blogging,logo,wordpress"
}, {
    "name": "logo-xbox",
    "tag": "fun,games,logo,xbox"
}, {
    "name": "logo-yahoo",
    "tag": "logo,yahoo"
}, {
    "name": "logo-yen",
    "tag": "logo,yen"
}, {
    "name": "logo-youtube",
    "tag": "share,logo,video,view,watch,youtube"
}, {
    "name": "ios-loading",
    "tag": "load,spin,loading"
}];

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=2.chunk.js.map