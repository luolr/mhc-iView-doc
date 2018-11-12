webpackJsonp([8],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2969be50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2969be50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2969be50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue__);
var disposed = false
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_2969be50_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_slider_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/components/slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2969be50", Component.options)
  } else {
    hotAPI.reload("data-v-2969be50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 500:
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
      title: 'Button 按钮',
      path: '/mhc-iView-doc/components/button',
      img: 'button.png',
      icon: 'social-youtube-outline'
    }, {
      title: 'Icon 图标',
      path: '/mhc-iView-doc/components/icon',
      img: 'icon.png',
      icon: 'ios-heart-outline'
    }]
  }, {
    type: 'Components',
    title: '组件',
    list: [{
      title: 'Json编辑器 JsonEditor',
      path: '/mhc-iView-doc/components/jsonEditor',
      img: 'error.png',
      icon: 'social-nodejs'
    }, {
      title: '日历 calendar',
      path: '/mhc-iView-doc/components/calendar',
      img: 'error.png',
      icon: 'calendar'
    }, {
      title: '瀑布流 waterfall',
      path: '/mhc-iView-doc/components/waterfall',
      img: 'error.png',
      icon: 'android-apps'
    }, {
      title: '异常页 exception',
      path: '/mhc-iView-doc/components/exception',
      img: 'error.png',
      icon: 'alert-circled'
    }, {
      title: '分割面板 splitPanel',
      path: '/mhc-iView-doc/components/splitPanel',
      img: 'error.png',
      icon: 'ios-grid-view-outline'
    }, {
      title: '轮播图 slider',
      path: '/mhc-iView-doc/components/slider',
      img: 'error.png',
      icon: 'images'
    }, {
      title: '照片预览 viewImages',
      path: '/mhc-iView-doc/components/viewImages',
      img: 'error.png',
      icon: 'image'
    }, {
      title: '工作台 menu',
      path: '/mhc-iView-doc/components/myWorkbench',
      img: 'error.png',
      icon: 'grid'
    }, {
      title: '加载 loading',
      path: '/mhc-iView-doc/components/loading',
      img: 'error.png',
      icon: 'load-a'
    }, {
      title: '下拉刷新 pullRefresh',
      path: '/mhc-iView-doc/components/pullRefresh',
      img: 'error.png',
      icon: 'arrow-down-c'
    }, {
      title: '左右联动菜单 listview',
      path: '/mhc-iView-doc/components/listview',
      img: 'error.png',
      icon: 'navicon'
    }, {
      title: '省市区联动 cityLinkage',
      path: '/mhc-iView-doc/components/CityLinkage',
      img: 'error.png',
      icon: 'ios-more-outline'
    }, {
      title: '倒计时 countDowm',
      path: '/mhc-iView-doc/components/CountDown',
      img: 'error.png',
      icon: 'ios-clock-outline'
    }, {
      title: '模块标题 blockHeader',
      path: '/mhc-iView-doc/components/BlockHeader',
      img: 'error.png',
      icon: 'social-tumblr'
    }, {
      title: '文本裁剪 ClampLines',
      path: '/mhc-iView-doc/components/ClampLines',
      img: 'error.png',
      icon: 'ios-more-outline'
    }, {
      title: '文本复制 TextCopy',
      path: '/mhc-iView-doc/components/TextCopy',
      img: 'error.png',
      icon: 'ios-copy-outline'
    }]
  }]
};

exports.default = list;

/***/ }),

/***/ 501:
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(509);

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

/***/ 503:
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

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(538);

var _navigate2 = _interopRequireDefault(_navigate);

var _navigate3 = __webpack_require__(500);

var _navigate4 = _interopRequireDefault(_navigate3);

var _menu = __webpack_require__(537);

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

/***/ 505:
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

var _tagMap = __webpack_require__(518);

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

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(500);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(508);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _applications = __webpack_require__(534);

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

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navigate = __webpack_require__(500);

var _navigate2 = _interopRequireDefault(_navigate);

var _config = __webpack_require__(508);

var _config2 = _interopRequireDefault(_config);

var _bus = __webpack_require__(88);

var _bus2 = _interopRequireDefault(_bus);

var _adSend = __webpack_require__(532);

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

/***/ 508:
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

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(89);

var _typeof3 = _interopRequireDefault(_typeof2);

var _pinyin_dict_firstletter = __webpack_require__(519);

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

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pinyinUtil = __webpack_require__(509);

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

/***/ 511:
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

/***/ 512:
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
    attrs: { src: __webpack_require__(528) }
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

/***/ 513:
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
  }, [_vm._v("SegmentFault")])])])]), _vm._v(" "), _c("i-col", { attrs: { span: "5", offset: "2" } }, [_c("div", { staticClass: "footer-aside" }, [_c("div", { staticClass: "footer-logo" }, [_c("img", { attrs: { src: __webpack_require__(531) } })]), _vm._v(" "), _c("div", { staticClass: "footer-author" }, [_c("a", { attrs: { href: "https://www.talkingdata.com/" } }, [_c("img", {
    attrs: { src: __webpack_require__(530) }
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

/***/ 514:
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

/***/ 515:
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
  }, [_c("div", { staticClass: "wrapper-header-nav" }, [_c("router-link", { staticClass: "wrapper-header-nav-logo", attrs: { to: "/" } }, [_c("img", { attrs: { src: __webpack_require__(529) } })]), _vm._v(" "), _c("ApplicationMenu"), _vm._v(" "), _c("div", { staticClass: "wrapper-header-nav-search" }, [_c("i-select", {
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

/***/ 516:
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

/***/ 517:
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

/***/ 518:
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

/***/ 519:
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

/***/ 520:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "512a3fe18c92425975996411a04ac256.png";

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e1cf12c07bf6458992569e67927d767e.png";

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bca1556c01f16f9a9f6094169720c2da.png";

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ecd3b0452aa197097d5131afacab7b8.png";

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_642dc412_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_ad_send_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(523)
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

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_27dd2a45_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_anchor_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(520)
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

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_e9faa89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_applications_vue__);
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

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_6338ec16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_article_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(522)
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

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_c2ff9106_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_code_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(526)
  __webpack_require__(525)
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

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_a380d422_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_menu_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(524)
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

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_39279dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_navigate_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(521)
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

/***/ 539:
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

/***/ 540:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_054b9c73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_demo_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(540)
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

/***/ 542:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(544)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 544:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BScroll"] = factory();
	else
		root["BScroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _bscroll = __webpack_require__(1);

	_bscroll.BScroll.Version = ("0.1.15");

	module.exports = _bscroll.BScroll;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BScroll = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TOUCH_EVENT = 1;

	var BScroll = exports.BScroll = function (_EventEmitter) {
	  _inherits(BScroll, _EventEmitter);

	  function BScroll(el, options) {
	    _classCallCheck(this, BScroll);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BScroll).call(this));

	    _this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
	    _this.scroller = _this.wrapper.children[0];

	    _this.scrollerStyle = _this.scroller.style;

	    _this.options = {
	      startX: 0,
	      startY: 0,
	      scrollY: true,
	      directionLockThreshold: 5,
	      momentum: true,
	      bounce: true,
	      selectedIndex: 0,
	      rotate: 25,
	      wheel: false,
	      snap: false,
	      snapLoop: false,
	      snapThreshold: 0.1,
	      swipeTime: 2500,
	      bounceTime: 700,
	      adjustTime: 400,
	      swipeBounceTime: 1200,
	      deceleration: 0.001,
	      momentumLimitTime: 300,
	      momentumLimitDistance: 15,
	      resizePolling: 60,
	      preventDefault: true,
	      preventDefaultException: {
	        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
	      },
	      HWCompositing: true,
	      useTransition: true,
	      useTransform: true
	    };

	    (0, _util.extend)(_this.options, options);

	    _this.translateZ = _this.options.HWCompositing && _util.hasPerspective ? ' translateZ(0)' : '';

	    _this.options.useTransition = _this.options.useTransition && _util.hasTransition;
	    _this.options.useTransform = _this.options.useTransform && _util.hasTransform;

	    _this.options.eventPassthrough = _this.options.eventPassthrough === true ? 'vertical' : _this.options.eventPassthrough;
	    _this.options.preventDefault = !_this.options.eventPassthrough && _this.options.preventDefault;

	    _this.options.scrollX = _this.options.eventPassthrough === 'horizontal' ? false : _this.options.scrollX;
	    _this.options.scrollY = _this.options.eventPassthrough === 'vertical' ? false : _this.options.scrollY;

	    _this.options.freeScroll = _this.options.freeScroll && !_this.options.eventPassthrough;
	    _this.options.directionLockThreshold = _this.options.eventPassthrough ? 0 : _this.options.directionLockThreshold;

	    if (_this.options.tap === true) {
	      _this.options.tap = 'tap';
	    }

	    _this._init();

	    if (_this.options.snap) {
	      _this._initSnap();
	    }

	    _this.refresh();

	    if (!_this.options.snap) {
	      _this.scrollTo(_this.options.startX, _this.options.startY);
	    }

	    _this.enable();
	    return _this;
	  }

	  _createClass(BScroll, [{
	    key: '_init',
	    value: function _init() {
	      this.x = 0;
	      this.y = 0;
	      this.directionX = 0;
	      this.directionY = 0;

	      this._addEvents();
	    }
	  }, {
	    key: '_initSnap',
	    value: function _initSnap() {
	      var _this2 = this;

	      this.currentPage = {};

	      if (this.options.snapLoop) {
	        var children = this.scroller.children;
	        if (children.length > 0) {
	          (0, _util.prepend)(children[children.length - 1].cloneNode(true), this.scroller);
	          this.scroller.appendChild(children[1].cloneNode(true));
	        }
	      }

	      if (typeof this.options.snap === 'string') {
	        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
	      }

	      this.on('refresh', function () {
	        _this2.pages = [];

	        if (!_this2.wrapperWidth || !_this2.wrapperHeight || !_this2.scrollerWidth || !_this2.scrollerHeight) {
	          return;
	        }

	        var stepX = _this2.options.snapStepX || _this2.wrapperWidth;
	        var stepY = _this2.options.snapStepY || _this2.wrapperHeight;

	        var x = 0;
	        var y = void 0;
	        var cx = void 0;
	        var cy = void 0;
	        var i = 0;
	        var l = void 0;
	        var m = 0;
	        var n = void 0;
	        var el = void 0;
	        var rect = void 0;
	        if (_this2.options.snap === true) {
	          cx = Math.round(stepX / 2);
	          cy = Math.round(stepY / 2);

	          while (x > -_this2.scrollerWidth) {
	            _this2.pages[i] = [];
	            l = 0;
	            y = 0;

	            while (y > -_this2.scrollerHeight) {
	              _this2.pages[i][l] = {
	                x: Math.max(x, _this2.maxScrollX),
	                y: Math.max(y, _this2.maxScrollY),
	                width: stepX,
	                height: stepY,
	                cx: x - cx,
	                cy: y - cy
	              };

	              y -= stepY;
	              l++;
	            }

	            x -= stepX;
	            i++;
	          }
	        } else {
	          el = _this2.options.snap;
	          l = el.length;
	          n = -1;

	          for (; i < l; i++) {
	            rect = (0, _util.getRect)(el[i]);
	            if (i === 0 || rect.left <= (0, _util.getRect)(el[i - 1]).left) {
	              m = 0;
	              n++;
	            }

	            if (!_this2.pages[m]) {
	              _this2.pages[m] = [];
	            }

	            x = Math.max(-rect.left, _this2.maxScrollX);
	            y = Math.max(-rect.top, _this2.maxScrollY);
	            cx = x - Math.round(rect.width / 2);
	            cy = y - Math.round(rect.height / 2);

	            _this2.pages[m][n] = {
	              x: x,
	              y: y,
	              width: rect.width,
	              height: rect.height,
	              cx: cx,
	              cy: cy
	            };

	            if (x > _this2.maxScrollX) {
	              m++;
	            }
	          }
	        }

	        var initPage = _this2.options.snapLoop ? 1 : 0;
	        _this2.goToPage(_this2.currentPage.pageX || initPage, _this2.currentPage.pageY || 0, 0);

	        if (_this2.options.snapThreshold % 1 === 0) {
	          _this2.snapThresholdX = _this2.options.snapThreshold;
	          _this2.snapThresholdY = _this2.options.snapThreshold;
	        } else {
	          _this2.snapThresholdX = Math.round(_this2.pages[_this2.currentPage.pageX][_this2.currentPage.pageY].width * _this2.options.snapThreshold);
	          _this2.snapThresholdY = Math.round(_this2.pages[_this2.currentPage.pageX][_this2.currentPage.pageY].height * _this2.options.snapThreshold);
	        }
	      });

	      this.on('scrollEnd', function () {
	        if (_this2.options.snapLoop) {
	          if (_this2.currentPage.pageX === 0) {
	            _this2.goToPage(_this2.pages.length - 2, _this2.currentPage.pageY, 0);
	          }
	          if (_this2.currentPage.pageX === _this2.pages.length - 1) {
	            _this2.goToPage(1, _this2.currentPage.pageY, 0);
	          }
	        }
	      });

	      this.on('flick', function () {
	        var time = _this2.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(_this2.x - _this2.startX), 1000), Math.min(Math.abs(_this2.y - _this2.startY), 1000)), 300);

	        _this2.goToPage(_this2.currentPage.pageX + _this2.directionX, _this2.currentPage.pageY + _this2.directionY, time);
	      });
	    }
	  }, {
	    key: '_nearestSnap',
	    value: function _nearestSnap(x, y) {
	      if (!this.pages.length) {
	        return { x: 0, y: 0, pageX: 0, pageY: 0 };
	      }

	      var i = 0;

	      if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
	        return this.currentPage;
	      }

	      if (x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }

	      if (y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }

	      var l = this.pages.length;
	      for (; i < l; i++) {
	        if (x >= this.pages[i][0].cx) {
	          x = this.pages[i][0].x;
	          break;
	        }
	      }

	      l = this.pages[i].length;

	      var m = 0;
	      for (; m < l; m++) {
	        if (y >= this.pages[0][m].cy) {
	          y = this.pages[0][m].y;
	          break;
	        }
	      }

	      if (i === this.currentPage.pageX) {
	        i += this.directionX;

	        if (i < 0) {
	          i = 0;
	        } else if (i >= this.pages.length) {
	          i = this.pages.length - 1;
	        }

	        x = this.pages[i][0].x;
	      }

	      if (m === this.currentPage.pageY) {
	        m += this.directionY;

	        if (m < 0) {
	          m = 0;
	        } else if (m >= this.pages[0].length) {
	          m = this.pages[0].length - 1;
	        }

	        y = this.pages[0][m].y;
	      }

	      return {
	        x: x,
	        y: y,
	        pageX: i,
	        pageY: m
	      };
	    }
	  }, {
	    key: '_addEvents',
	    value: function _addEvents() {
	      var eventOperation = _util.addEvent;
	      this._handleEvents(eventOperation);
	    }
	  }, {
	    key: '_removeEvents',
	    value: function _removeEvents() {
	      var eventOperation = _util.removeEvent;
	      this._handleEvents(eventOperation);
	    }
	  }, {
	    key: '_handleEvents',
	    value: function _handleEvents(eventOperation) {
	      var target = this.options.bindToWrapper ? this.wrapper : window;
	      eventOperation(window, 'orientationchange', this);
	      eventOperation(window, 'resize', this);

	      if (this.options.click) {
	        eventOperation(this.wrapper, 'click', this);
	      }

	      if (!this.options.disableMouse) {
	        eventOperation(this.wrapper, 'mousedown', this);
	        eventOperation(target, 'mousemove', this);
	        eventOperation(target, 'mousecancel', this);
	        eventOperation(target, 'mouseup', this);
	      }

	      if (_util.hasTouch && !this.options.disableTouch) {
	        eventOperation(this.wrapper, 'touchstart', this);
	        eventOperation(target, 'touchmove', this);
	        eventOperation(target, 'touchcancel', this);
	        eventOperation(target, 'touchend', this);
	      }

	      eventOperation(this.scroller, _util.style.transitionEnd, this);
	    }
	  }, {
	    key: '_start',
	    value: function _start(e) {
	      var _eventType = _util.eventType[e.type];
	      if (_eventType !== TOUCH_EVENT) {
	        if (e.button !== 0) {
	          return;
	        }
	      }
	      if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
	        return;
	      }
	      this.initiated = _eventType;

	      if (this.options.preventDefault && !_util.isBadAndroid && !(0, _util.preventDefaultException)(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }

	      this.moved = false;
	      this.distX = 0;
	      this.distY = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.directionLocked = 0;

	      this._transitionTime();
	      this.startTime = +new Date();

	      if (this.options.wheel) {
	        this.target = e.target;
	      }

	      if (this.options.useTransition && this.isInTransition) {
	        this.isInTransition = false;
	        var pos = this.getComputedPosition();
	        this._translate(pos.x, pos.y);
	        if (this.options.wheel) {
	          this.target = this.items[Math.round(-pos.y / this.itemHeight)];
	        } else {
	          this.trigger('scrollEnd');
	        }
	      }

	      var point = e.touches ? e.touches[0] : e;

	      this.startX = this.x;
	      this.startY = this.y;
	      this.absStartX = this.x;
	      this.absStartY = this.y;
	      this.pointX = point.pageX;
	      this.pointY = point.pageY;

	      this.trigger('beforeScrollStart');
	    }
	  }, {
	    key: '_move',
	    value: function _move(e) {
	      if (!this.enabled || this.destroyed || _util.eventType[e.type] !== this.initiated) {
	        return;
	      }

	      if (this.options.preventDefault) {
	        e.preventDefault();
	      }

	      var point = e.touches ? e.touches[0] : e;
	      var deltaX = point.pageX - this.pointX;
	      var deltaY = point.pageY - this.pointY;

	      this.pointX = point.pageX;
	      this.pointY = point.pageY;

	      this.distX += deltaX;
	      this.distY += deltaY;

	      var absDistX = Math.abs(this.distX);
	      var absDistY = Math.abs(this.distY);

	      var timestamp = +new Date();

	      if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
	        return;
	      }

	      if (!this.directionLocked && !this.options.freeScroll) {
	        if (absDistX > absDistY + this.options.directionLockThreshold) {
	          this.directionLocked = 'h';
	        } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
	          this.directionLocked = 'v';
	        } else {
	          this.directionLocked = 'n';
	        }
	      }

	      if (this.directionLocked === 'h') {
	        if (this.options.eventPassthrough === 'vertical') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'horizontal') {
	          this.initiated = false;
	          return;
	        }
	        deltaY = 0;
	      } else if (this.directionLocked === 'v') {
	        if (this.options.eventPassthrough === 'horizontal') {
	          e.preventDefault();
	        } else if (this.options.eventPassthrough === 'vertical') {
	          this.initiated = false;
	          return;
	        }
	        deltaX = 0;
	      }

	      deltaX = this.hasHorizontalScroll ? deltaX : 0;
	      deltaY = this.hasVerticalScroll ? deltaY : 0;

	      var newX = this.x + deltaX;
	      var newY = this.y + deltaY;

	      if (newX > 0 || newX < this.maxScrollX) {
	        if (this.options.bounce) {
	          newX = this.x + deltaX / 3;
	        } else {
	          newX = newX > 0 ? 0 : this.maxScrollX;
	        }
	      }
	      if (newY > 0 || newY < this.maxScrollY) {
	        if (this.options.bounce) {
	          newY = this.y + deltaY / 3;
	        } else {
	          newY = newY > 0 ? 0 : this.maxScrollY;
	        }
	      }

	      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

	      if (!this.moved) {
	        this.moved = true;
	        this.trigger('scrollStart');
	      }

	      this._translate(newX, newY);

	      if (timestamp - this.startTime > this.options.momentumLimitTime) {
	        this.startTime = timestamp;
	        this.startX = this.x;
	        this.startY = this.y;

	        if (this.options.probeType === 1) {
	          this.trigger('scroll', {
	            x: this.x,
	            y: this.y
	          });
	        }
	      }

	      if (this.options.probeType > 1) {
	        this.trigger('scroll', {
	          x: this.x,
	          y: this.y
	        });
	      }

	      var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
	      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

	      var pX = this.pointX - scrollLeft;
	      var pY = this.pointY - scrollTop;

	      if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
	        this._end(e);
	      }
	    }
	  }, {
	    key: '_end',
	    value: function _end(e) {
	      if (!this.enabled || this.destroyed || _util.eventType[e.type] !== this.initiated) {
	        return;
	      }
	      this.initiated = false;

	      if (this.options.preventDefault && !(0, _util.preventDefaultException)(e.target, this.options.preventDefaultException)) {
	        e.preventDefault();
	      }

	      this.trigger('touchend', {
	        x: this.x,
	        y: this.y
	      });

	      if (this.resetPosition(this.options.bounceTime, _util.ease.bounce)) {
	        return;
	      }
	      this.isInTransition = false;

	      var newX = Math.round(this.x);
	      var newY = Math.round(this.y);

	      if (!this.moved) {
	        if (this.options.wheel) {
	          if (this.target && this.target.className === 'wheel-scroll') {
	            var index = Math.abs(Math.round(newY / this.itemHeight));
	            var _offset = Math.round((this.pointY + (0, _util.offset)(this.target).top - this.itemHeight / 2) / this.itemHeight);
	            this.target = this.items[index + _offset];
	          }
	          this.scrollToElement(this.target, this.options.adjustTime, true, true, _util.ease.swipe);
	        } else {
	          if (this.options.tap) {
	            (0, _util.tap)(e, this.options.tap);
	          }

	          if (this.options.click) {
	            (0, _util.click)(e);
	          }
	        }
	        this.trigger('scrollCancel');
	        return;
	      }

	      this.scrollTo(newX, newY);

	      this.endTime = +new Date();

	      var duration = this.endTime - this.startTime;
	      var absDistX = Math.abs(newX - this.startX);
	      var absDistY = Math.abs(newY - this.startY);

	      if (this._events.flick && duration < this.options.momentumLimitTime && absDistX < this.options.momentumLimitDistance && absDistY < this.options.momentumLimitDistance) {
	        this.trigger('flick');
	        return;
	      }

	      var time = 0;

	      if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
	        var momentumX = this.hasHorizontalScroll ? (0, _util.momentum)(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
	        var momentumY = this.hasVerticalScroll ? (0, _util.momentum)(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
	        newX = momentumX.destination;
	        newY = momentumY.destination;
	        time = Math.max(momentumX.duration, momentumY.duration);
	        this.isInTransition = 1;
	      } else {
	        if (this.options.wheel) {
	          newY = Math.round(newY / this.itemHeight) * this.itemHeight;
	          time = this.options.adjustTime;
	        }
	      }

	      var easing = _util.ease.swipe;
	      if (this.options.snap) {
	        var snap = this._nearestSnap(newX, newY);
	        this.currentPage = snap;
	        time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
	        newX = snap.x;
	        newY = snap.y;

	        this.directionX = 0;
	        this.directionY = 0;
	        easing = _util.ease.bounce;
	      }

	      if (newX !== this.x || newY !== this.y) {
	        if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	          easing = _util.ease.swipeBounce;
	        }
	        this.scrollTo(newX, newY, time, easing);
	        return;
	      }

	      if (this.options.wheel) {
	        this.selectedIndex = Math.abs(this.y / this.itemHeight) | 0;
	      }
	      this.trigger('scrollEnd');
	    }
	  }, {
	    key: '_resize',
	    value: function _resize() {
	      var _this3 = this;

	      if (!this.enabled) {
	        return;
	      }

	      clearTimeout(this.resizeTimeout);
	      this.resizeTimeout = setTimeout(function () {
	        _this3.refresh();
	      }, this.options.resizePolling);
	    }
	  }, {
	    key: '_startProbe',
	    value: function _startProbe() {
	      (0, _util.cancelAnimationFrame)(this.probeTimer);
	      this.probeTimer = (0, _util.requestAnimationFrame)(probe);

	      var me = this;

	      function probe() {
	        var pos = me.getComputedPosition();
	        me.trigger('scroll', pos);
	        if (me.isInTransition) {
	          me.probeTimer = (0, _util.requestAnimationFrame)(probe);
	        }
	      }
	    }
	  }, {
	    key: '_transitionTime',
	    value: function _transitionTime() {
	      var _this4 = this;

	      var time = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.scrollerStyle[_util.style.transitionDuration] = time + 'ms';

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[_util.style.transitionDuration] = time + 'ms';
	        }
	      }

	      if (!time && _util.isBadAndroid) {
	        this.scrollerStyle[_util.style.transitionDuration] = '0.001s';

	        (0, _util.requestAnimationFrame)(function () {
	          if (_this4.scrollerStyle[_util.style.transitionDuration] === '0.0001ms') {
	            _this4.scrollerStyle[_util.style.transitionDuration] = '0s';
	          }
	        });
	      }
	    }
	  }, {
	    key: '_transitionTimingFunction',
	    value: function _transitionTimingFunction(easing) {
	      this.scrollerStyle[_util.style.transitionTimingFunction] = easing;

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          this.items[i].style[_util.style.transitionTimingFunction] = easing;
	        }
	      }
	    }
	  }, {
	    key: '_transitionEnd',
	    value: function _transitionEnd(e) {
	      if (e.target !== this.scroller || !this.isInTransition) {
	        return;
	      }

	      this._transitionTime();
	      if (!this.resetPosition(this.options.bounceTime, _util.ease.bounce)) {
	        this.isInTransition = false;
	        this.trigger('scrollEnd');
	      }
	    }
	  }, {
	    key: '_translate',
	    value: function _translate(x, y) {
	      if (this.options.useTransform) {
	        this.scrollerStyle[_util.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	      } else {
	        x = Math.round(x);
	        y = Math.round(y);
	        this.scrollerStyle.left = x + 'px';
	        this.scrollerStyle.top = y + 'px';
	      }

	      if (this.options.wheel && !_util.isBadAndroid) {
	        for (var i = 0; i < this.items.length; i++) {
	          var deg = this.options.rotate * (y / this.itemHeight + i);
	          this.items[i].style[_util.style.transform] = 'rotateX(' + deg + 'deg)';
	        }
	      }

	      this.x = x;
	      this.y = y;
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      this.enabled = true;
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.enabled = false;
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var rf = this.wrapper.offsetHeight;

	      this.wrapperWidth = parseInt(this.wrapper.style.width) || this.wrapper.clientWidth;
	      this.wrapperHeight = parseInt(this.wrapper.style.height) || this.wrapper.clientHeight;

	      this.scrollerWidth = parseInt(this.scroller.style.width) || this.scroller.clientWidth;
	      this.scrollerHeight = parseInt(this.scroller.style.height) || this.scroller.clientHeight;
	      if (this.options.wheel) {
	        this.items = this.scroller.children;
	        this.options.itemHeight = this.itemHeight = this.items.length ? this.items[0].clientHeight : 0;
	        if (this.selectedIndex === undefined) {
	          this.selectedIndex = this.options.selectedIndex;
	        }
	        this.options.startY = -this.selectedIndex * this.itemHeight;
	        this.maxScrollX = 0;
	        this.maxScrollY = -this.itemHeight * (this.items.length - 1);
	      } else {
	        this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
	      }

	      this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
	      this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

	      if (!this.hasHorizontalScroll) {
	        this.maxScrollX = 0;
	        this.scrollerWidth = this.wrapperWidth;
	      }

	      if (!this.hasVerticalScroll) {
	        this.maxScrollY = 0;
	        this.scrollerHeight = this.wrapperHeight;
	      }

	      this.endTime = 0;
	      this.directionX = 0;
	      this.directionY = 0;
	      this.wrapperOffset = (0, _util.offset)(this.wrapper);

	      this.trigger('refresh');

	      this.resetPosition();
	    }
	  }, {
	    key: 'resetPosition',
	    value: function resetPosition() {
	      var time = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var easeing = arguments.length <= 1 || arguments[1] === undefined ? _util.ease.bounce : arguments[1];

	      var x = this.x;
	      if (!this.hasHorizontalScroll || x > 0) {
	        x = 0;
	      } else if (x < this.maxScrollX) {
	        x = this.maxScrollX;
	      }

	      var y = this.y;
	      if (!this.hasVerticalScroll || y > 0) {
	        y = 0;
	      } else if (y < this.maxScrollY) {
	        y = this.maxScrollY;
	      }

	      if (x === this.x && y === this.y) {
	        return false;
	      }

	      this.scrollTo(x, y, time, easeing);

	      return true;
	    }
	  }, {
	    key: 'wheelTo',
	    value: function wheelTo(selectIndex) {
	      if (this.options.wheel) {
	        this.y = -selectIndex * this.itemHeight;
	        this.scrollTo(0, this.y);
	      }
	    }
	  }, {
	    key: 'scrollBy',
	    value: function scrollBy(x, y) {
	      var time = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      x = this.x + x;
	      y = this.y + y;

	      this.scrollTo(x, y, time, easing);
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(x, y, time) {
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

	      if (!time || this.options.useTransition) {
	        this._transitionTimingFunction(easing.style);
	        this._transitionTime(time);
	        this._translate(x, y);

	        if (time && this.options.probeType === 3) {
	          this._startProbe();
	        }

	        if (this.options.wheel) {
	          if (y > 0) {
	            this.selectedIndex = 0;
	          } else if (y < this.maxScrollY) {
	            this.selectedIndex = this.items.length - 1;
	          } else {
	            this.selectedIndex = Math.abs(y / this.itemHeight) | 0;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex() {
	      return this.options.wheel && this.selectedIndex;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.options.snap && this.currentPage;
	    }
	  }, {
	    key: 'scrollToElement',
	    value: function scrollToElement(el, time, offsetX, offsetY, easing) {
	      if (!el) {
	        return;
	      }
	      el = el.nodeType ? el : this.scroller.querySelector(el);

	      if (this.options.wheel && el.className !== 'wheel-item') {
	        return;
	      }

	      var pos = (0, _util.offset)(el);
	      pos.left -= this.wrapperOffset.left;
	      pos.top -= this.wrapperOffset.top;

	      if (offsetX === true) {
	        offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	      }
	      if (offsetY === true) {
	        offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	      }

	      pos.left -= offsetX || 0;
	      pos.top -= offsetY || 0;
	      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	      pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

	      if (this.options.wheel) {
	        pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
	      }

	      time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

	      this.scrollTo(pos.left, pos.top, time, easing);
	    }
	  }, {
	    key: 'getComputedPosition',
	    value: function getComputedPosition() {
	      var matrix = window.getComputedStyle(this.scroller, null);
	      var x = void 0;
	      var y = void 0;

	      if (this.options.useTransform) {
	        matrix = matrix[_util.style.transform].split(')')[0].split(', ');
	        x = +(matrix[12] || matrix[4]);
	        y = +(matrix[13] || matrix[5]);
	      } else {
	        x = +matrix.left.replace(/[^-\d.]/g, '');
	        y = +matrix.top.replace(/[^-\d.]/g, '');
	      }

	      return {
	        x: x,
	        y: y
	      };
	    }
	  }, {
	    key: 'goToPage',
	    value: function goToPage(x, y, time) {
	      var easing = arguments.length <= 3 || arguments[3] === undefined ? _util.ease.bounce : arguments[3];

	      if (x >= this.pages.length) {
	        x = this.pages.length - 1;
	      } else if (x < 0) {
	        x = 0;
	      }

	      if (y >= this.pages[x].length) {
	        y = this.pages[x].length - 1;
	      } else if (y < 0) {
	        y = 0;
	      }

	      var posX = this.pages[x][y].x;
	      var posY = this.pages[x][y].y;

	      time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

	      this.currentPage = {
	        x: posX,
	        y: posY,
	        pageX: x,
	        pageY: y
	      };
	      this.scrollTo(posX, posY, time, easing);
	    }
	  }, {
	    key: 'next',
	    value: function next(time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;

	      x++;
	      if (x >= this.pages.length && this.hasVerticalScroll) {
	        x = 0;
	        y++;
	      }

	      this.goToPage(x, y, time, easing);
	    }
	  }, {
	    key: 'prev',
	    value: function prev(time, easing) {
	      var x = this.currentPage.pageX;
	      var y = this.currentPage.pageY;

	      x--;
	      if (x < 0 && this.hasVerticalScroll) {
	        x = 0;
	        y--;
	      }

	      this.goToPage(x, y, time, easing);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this._removeEvents();

	      this.destroyed = true;
	      this.trigger('destroy');
	    }
	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(e) {
	      switch (e.type) {
	        case 'touchstart':
	        case 'mousedown':
	          this._start(e);
	          break;
	        case 'touchmove':
	        case 'mousemove':
	          this._move(e);
	          break;
	        case 'touchend':
	        case 'mouseup':
	        case 'touchcancel':
	        case 'mousecancel':
	          this._end(e);
	          break;
	        case 'orientationchange':
	        case 'resize':
	          this._resize();
	          break;
	        case 'transitionend':
	        case 'webkitTransitionEnd':
	        case 'oTransitionEnd':
	        case 'MSTransitionEnd':
	          this._transitionEnd(e);
	          break;
	        case 'click':
	          if (this.enabled && !e._constructed && !/(SELECT|INPUT|TEXTAREA)/i.test(e.target.tagName)) {
	            e.preventDefault();
	            e.stopPropagation();
	          }
	          break;
	      }
	    }
	  }]);

	  return BScroll;
	}(_util.EventEmitter);

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(3);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

	var _env = __webpack_require__(4);

	Object.keys(_env).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _env[key];
	    }
	  });
	});

	var _ease = __webpack_require__(5);

	Object.keys(_ease).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _ease[key];
	    }
	  });
	});

	var _eventEmitter = __webpack_require__(6);

	Object.keys(_eventEmitter).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _eventEmitter[key];
	    }
	  });
	});

	var _momentum = __webpack_require__(7);

	Object.keys(_momentum).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _momentum[key];
	    }
	  });
	});

	var _lang = __webpack_require__(8);

	Object.keys(_lang).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lang[key];
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addEvent = addEvent;
	exports.removeEvent = removeEvent;
	exports.offset = offset;
	exports.getRect = getRect;
	exports.preventDefaultException = preventDefaultException;
	exports.tap = tap;
	exports.click = click;
	exports.prepend = prepend;
	exports.before = before;
	var elementStyle = document.createElement('div').style;

	var vendor = function () {
	  var transformNames = {
	    webkit: 'webkitTransform',
	    Moz: 'MozTransform',
	    O: 'OTransform',
	    ms: 'msTransform',
	    standard: 'transform'
	  };

	  for (var key in transformNames) {
	    if (elementStyle[transformNames[key]] !== undefined) {
	      return key;
	    }
	  }

	  return false;
	}();

	function prefixStyle(style) {
	  if (vendor === false) {
	    return false;
	  }

	  if (vendor === 'standard') {
	    return style;
	  }

	  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	function addEvent(el, type, fn, capture) {
	  el.addEventListener(type, fn, { passive: false, capture: !!capture });
	};

	function removeEvent(el, type, fn, capture) {
	  el.removeEventListener(type, fn, !!capture);
	};

	function offset(el) {
	  var left = 0;
	  var top = 0;

	  while (el) {
	    left -= el.offsetLeft;
	    top -= el.offsetTop;
	    el = el.offsetParent;
	  }

	  return {
	    left: left,
	    top: top
	  };
	};

	var transform = prefixStyle('transform');

	var hasPerspective = exports.hasPerspective = prefixStyle('perspective') in elementStyle;
	var hasTouch = exports.hasTouch = 'ontouchstart' in window;
	var hasTransform = exports.hasTransform = transform !== false;
	var hasTransition = exports.hasTransition = prefixStyle('transition') in elementStyle;

	var style = exports.style = {
	  transform: transform,
	  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	  transitionDuration: prefixStyle('transitionDuration'),
	  transitionDelay: prefixStyle('transitionDelay'),
	  transformOrigin: prefixStyle('transformOrigin'),
	  transitionEnd: prefixStyle('transitionEnd')
	};

	var TOUCH_EVENT = 1;
	var MOUSE_EVENT = 2;
	var eventType = exports.eventType = {
	  touchstart: TOUCH_EVENT,
	  touchmove: TOUCH_EVENT,
	  touchend: TOUCH_EVENT,

	  mousedown: MOUSE_EVENT,
	  mousemove: MOUSE_EVENT,
	  mouseup: MOUSE_EVENT
	};

	function getRect(el) {
	  if (el instanceof window.SVGElement) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top,
	      left: rect.left,
	      width: rect.width,
	      height: rect.height
	    };
	  } else {
	    return {
	      top: el.offsetTop,
	      left: el.offsetLeft,
	      width: el.offsetWidth,
	      height: el.offsetHeight
	    };
	  }
	};

	function preventDefaultException(el, exceptions) {
	  for (var i in exceptions) {
	    if (exceptions[i].test(el[i])) {
	      return true;
	    }
	  }
	  return false;
	}

	function tap(e, eventName) {
	  var ev = document.createEvent('Event');
	  ev.initEvent(eventName, true, true);
	  ev.pageX = e.pageX;
	  ev.pageY = e.pageY;
	  e.target.dispatchEvent(ev);
	};

	function click(e) {
	  var target = e.target;

	  if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
	    var ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
	    ev.initEvent('click', true, true);
	    ev._constructed = true;
	    target.dispatchEvent(ev);
	  }
	};

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isBadAndroid = exports.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var ease = exports.ease = {
		swipe: {
			style: 'cubic-bezier(0.23, 1, 0.32, 1)',
			fn: function fn(t) {
				return 1 + --t * t * t * t * t;
			}
		},

		swipeBounce: {
			style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			fn: function fn(t) {
				return t * (2 - t);
			}
		},

		bounce: {
			style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
			fn: function fn(t) {
				return 1 - --t * t * t * t;
			}
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventEmitter = exports.EventEmitter = function () {
		function EventEmitter() {
			_classCallCheck(this, EventEmitter);

			this._events = {};
		}

		_createClass(EventEmitter, [{
			key: "on",
			value: function on(type, fn) {
				var context = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];

				if (!this._events[type]) {
					this._events[type] = [];
				}

				this._events[type].push([fn, context]);
			}
		}, {
			key: "once",
			value: function once(type, fn) {
				var context = arguments.length <= 2 || arguments[2] === undefined ? this : arguments[2];

				var fired = false;

				function magic() {
					this.off(type, magic);

					if (!fired) {
						fired = true;
						fn.apply(context, arguments);
					}
				}

				this.on(type, magic);
			}
		}, {
			key: "off",
			value: function off(type, fn) {
				var _events = this._events[type];
				if (!_events) {
					return;
				}

				var count = _events.length;
				while (count--) {
					if (_events[count][0] === fn) {
						_events[count][0] = undefined;
					}
				}
			}
		}, {
			key: "trigger",
			value: function trigger(type) {
				var events = this._events[type];
				if (!events) {
					return;
				}

				var len = events.length;
				var eventsCopy = [].concat(_toConsumableArray(events));
				for (var i = 0; i < len; i++) {
					var event = eventsCopy[i];

					var _event = _slicedToArray(event, 2);

					var fn = _event[0];
					var context = _event[1];

					if (fn) {
						fn.apply(context, [].slice.call(arguments, 1));
					}
				}
			}
		}]);

		return EventEmitter;
	}();

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.momentum = momentum;
	function momentum(current, start, time, lowerMargin, wrapperSize, options) {
		var distance = current - start;
		var speed = Math.abs(distance) / time;

		var deceleration = options.deceleration;
		var itemHeight = options.itemHeight;
		var swipeBounceTime = options.swipeBounceTime;
		var bounceTime = options.bounceTime;

		var duration = options.swipeTime;
		var rate = options.wheel ? 4 : 15;

		var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

		if (options.wheel && itemHeight) {
			destination = Math.round(destination / itemHeight) * itemHeight;
		}

		if (destination < lowerMargin) {
			destination = wrapperSize ? lowerMargin - wrapperSize / rate * speed : lowerMargin;
			duration = swipeBounceTime - bounceTime;
		} else if (destination > 0) {
			destination = wrapperSize ? wrapperSize / rate * speed : 0;
			duration = swipeBounceTime - bounceTime;
		}

		return {
			destination: Math.round(destination),
			duration: duration
		};
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.extend = extend;
	function extend(target, source) {
		for (var key in source) {
			target[key] = source[key];
		}
	};

	var DEFAULT_INTERVAL = 100 / 60;

	var requestAnimationFrame = exports.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
			return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2);
		};
	}();

	var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
		return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
			window.clearTimeout(id);
		};
	}();

/***/ }
/******/ ])
});
;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _betterScroll = __webpack_require__(546);

var _betterScroll2 = _interopRequireDefault(_betterScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Slider',
  props: {
    imgArr: Array,
    default: [],
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data: function data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this._setSliderWidth();
      _this._initDots();
      _this._initSlider();

      if (_this.autoPlay) {
        _this._play();
      }
    }, 20);

    window.addEventListener('resize', function () {
      if (!_this.slider) {
        return;
      }
      _this._setSliderWidth(true);
      _this.slider.refresh();
    });
  },
  activated: function activated() {
    if (this.autoPlay) {
      this._play();
    }
  },
  deactivated: function deactivated() {
    clearTimeout(this.timer);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timer);
  },

  methods: {
    addClass: function addClass(el, className) {
      var newClass = el.className.split(' ');
      newClass.push(className);
      el.className = newClass.join(' ');
    },
    _setSliderWidth: function _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children;
      var width = 0;
      var sliderWidth = this.$refs.slider.clientWidth;
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        this.addClass(child, 'slider-item');
        child.style.width = sliderWidth + 'px';
        width += sliderWidth;
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth;
      }

      this.$refs.sliderGroup.style.width = width + 'px';
    },
    _initSlider: function _initSlider() {
      var _this2 = this;

      this.slider = new _betterScroll2.default(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      });

      this.slider.on('scrollEnd', function () {
        _this2.$emit('scrollEnd', event);
        var pageIndex = _this2.slider.getCurrentPage().pageX;

        if (_this2.loop) {
          pageIndex -= 1;
        }

        _this2.currentPageIndex = pageIndex;

        if (_this2.autoPlay) {
          _this2._play();
        }
      });

      this.slider.on('beforeScrollStart', function () {
        _this2.$emit('beforeScrollStart', event);
        if (_this2.autoPlay) {
          clearTimeout(_this2.timer);
        }
      });
    },
    _initDots: function _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play: function _play() {
      var _this3 = this;

      var pageIndex = this.currentPageIndex + 1;
      if (this.loop) {
        pageIndex += 1;
      }
      this.timer = setTimeout(function () {
        _this3.slider.goToPage(pageIndex, 0, 400);
      }, this.interval);
    }
  }
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = __webpack_require__(535);

var _article2 = _interopRequireDefault(_article);

var _iCode = __webpack_require__(536);

var _iCode2 = _interopRequireDefault(_iCode);

var _demo = __webpack_require__(541);

var _demo2 = _interopRequireDefault(_demo);

var _slider = __webpack_require__(646);

var _slider2 = _interopRequireDefault(_slider);

var _anchor = __webpack_require__(533);

var _anchor2 = _interopRequireDefault(_anchor);

var _Slider = __webpack_require__(708);

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    iArticle: _article2.default,
    iCode: _iCode2.default,
    Demo: _demo2.default,
    inAnchor: _anchor2.default,
    Slider: _Slider2.default
  },
  data: function data() {
    return {
      code: _slider2.default,
      imgs: ['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg', 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg', 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg']
    };
  },

  methods: {}
};

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", { staticClass: "slider-wrapper" }, [_c("div", { ref: "slider", staticClass: "slider" }, [_c("div", { ref: "sliderGroup", staticClass: "slider-group" }, _vm._l(_vm.imgArr, function (item) {
    return _c("div", [_c("img", { attrs: { src: item } })]);
  })), _vm._v(" "), _c("div", { staticClass: "dots" }, _vm._l(_vm.dots, function (item, index) {
    return _c("span", {
      staticClass: "dot",
      class: { active: _vm.currentPageIndex === index }
    });
  }))])])]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-09fe8cd8", esExports);
  }
}

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var render = function render() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i-article", [_c("article", [_c("h1", [_vm._v("工作台")]), _vm._v(" "), _c("p", [_vm._v("工作台")]), _vm._v(" "), _c("inAnchor", { attrs: { title: "代码示例", h2: "" } }), _vm._v(" "), _c("Demo", { attrs: { title: "myWorkbench" } }, [_c("div", { attrs: { slot: "demo" }, slot: "demo" }, [_c("div", { staticClass: "slider-container" }, [_c("Slider", { attrs: { imgArr: _vm.imgs } })], 1)]), _vm._v(" "), _c("div", { attrs: { slot: "desc" }, slot: "desc" }, [_c("p", [_vm._v("用于演示，添加了一个默认数据")])]), _vm._v(" "), _c("i-code", { attrs: { slot: "code", lang: "html" }, slot: "code" }, [_vm._v(_vm._s(_vm.code.default))])], 1), _vm._v(" "), _c("div", { staticClass: "api" }, [_c("inAnchor", { attrs: { title: "API", h2: "" } }), _vm._v(" "), _c("inAnchor", { attrs: { title: "Slider props", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("属性")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("类型")]), _vm._v(" "), _c("th", [_vm._v("默认值")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("imgArr")]), _vm._v(" "), _c("td", [_vm._v("图片地址数组")]), _vm._v(" "), _c("td", [_vm._v("Array")]), _vm._v(" "), _c("td", [_vm._v("[]")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("loop")]), _vm._v(" "), _c("td", [_vm._v("是否循环播放")]), _vm._v(" "), _c("td", [_vm._v("Boolean")]), _vm._v(" "), _c("td", [_vm._v("true")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("autoPlay")]), _vm._v(" "), _c("td", [_vm._v("是否自动播放")]), _vm._v(" "), _c("td", [_vm._v("Boolean")]), _vm._v(" "), _c("td", [_vm._v("true")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("interval")]), _vm._v(" "), _c("td", [_vm._v("进行下一次轮播的时间")]), _vm._v(" "), _c("td", [_vm._v("Number")]), _vm._v(" "), _c("td", [_vm._v("2000")])])])]), _vm._v(" "), _c("inAnchor", { attrs: { title: "Slider event", h3: "" } }), _vm._v(" "), _c("table", [_c("thead", [_c("tr", [_c("th", [_vm._v("事件名")]), _vm._v(" "), _c("th", [_vm._v("说明")]), _vm._v(" "), _c("th", [_vm._v("参数")])])]), _vm._v(" "), _c("tbody", [_c("tr", [_c("td", [_vm._v("beforeScrollStart")]), _vm._v(" "), _c("td", [_vm._v("滑动开始前触发事件")]), _vm._v(" "), _c("td", [_vm._v("event")])]), _vm._v(" "), _c("tr", [_c("td", [_vm._v("scrollEnd")]), _vm._v(" "), _c("td", [_vm._v("滑动后触发事件")]), _vm._v(" "), _c("td", [_vm._v("event")])])])])], 1)], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;
var esExports = { render: render, staticRenderFns: staticRenderFns };
exports.default = esExports;

if (false) {
  module.hot.accept();
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2969be50", esExports);
  }
}

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var code = {};

code.default = "\n<template>\n   <div class=\"slider-container\">\n     <slider :imgArr=\"imgs\" :interval=4000 :autoPlay=true :loop=true />\n   </div>\n</template>\n<script>\n\texport default {\n        data () {\n            return {\n              imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg']\n            }\n        },\n        methods: {}\n    }\n</script>\n";

exports.default = code;

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(542)();
// imports


// module
exports.push([module.i, "\n.slider-wrapper[data-v-09fe8cd8] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.slider-wrapper .slider[data-v-09fe8cd8] {\n    min-height: 1px;\n}\n.slider-wrapper .slider .slider-group[data-v-09fe8cd8] {\n      position: relative;\n      overflow: hidden;\n      white-space: nowrap;\n}\n.slider-wrapper .slider .slider-group .slider-item[data-v-09fe8cd8] {\n        float: left;\n        box-sizing: border-box;\n        overflow: hidden;\n        text-align: center;\n}\n.slider-wrapper .slider .slider-group .slider-item img[data-v-09fe8cd8] {\n          display: block;\n          width: 100%;\n}\n.slider-wrapper .slider .dots[data-v-09fe8cd8] {\n      right: 0;\n      left: 0;\n      bottom: 20px;\n      text-align: center;\n      font-size: 0;\n      margin-top: 15px;\n}\n.slider-wrapper .slider .dots .dot[data-v-09fe8cd8] {\n        display: inline-block;\n        margin: 0 4px;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: gainsboro;\n}\n.slider-wrapper .slider .dots .dot.active[data-v-09fe8cd8] {\n          width: 20px;\n          border-radius: 5px;\n          background: greenyellow;\n}\n", "", {"version":3,"sources":["/./src/components/mhc/Slider.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,gBAAgB;CAAE;AAClB;MACE,mBAAmB;MACnB,iBAAiB;MACjB,oBAAoB;CAAE;AACtB;QACE,YAAY;QACZ,uBAAuB;QACvB,iBAAiB;QACjB,mBAAmB;CAAE;AACrB;UACE,eAAe;UACf,YAAY;CAAE;AACpB;MACE,SAAS;MACT,QAAQ;MACR,aAAa;MACb,mBAAmB;MACnB,aAAa;MACb,iBAAiB;CAAE;AACnB;QACE,sBAAsB;QACtB,cAAc;QACd,WAAW;QACX,YAAY;QACZ,mBAAmB;QACnB,sBAAsB;CAAE;AACxB;UACE,YAAY;UACZ,mBAAmB;UACnB,wBAAwB;CAAE","file":"Slider.vue","sourcesContent":[".slider-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .slider-wrapper .slider {\n    min-height: 1px; }\n    .slider-wrapper .slider .slider-group {\n      position: relative;\n      overflow: hidden;\n      white-space: nowrap; }\n      .slider-wrapper .slider .slider-group .slider-item {\n        float: left;\n        box-sizing: border-box;\n        overflow: hidden;\n        text-align: center; }\n        .slider-wrapper .slider .slider-group .slider-item img {\n          display: block;\n          width: 100%; }\n    .slider-wrapper .slider .dots {\n      right: 0;\n      left: 0;\n      bottom: 20px;\n      text-align: center;\n      font-size: 0;\n      margin-top: 15px; }\n      .slider-wrapper .slider .dots .dot {\n        display: inline-block;\n        margin: 0 4px;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: gainsboro; }\n        .slider-wrapper .slider .dots .dot.active {\n          width: 20px;\n          border-radius: 5px;\n          background: greenyellow; }\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09fe8cd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09fe8cd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09fe8cd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue__);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(718)
}
var normalizeComponent = __webpack_require__(197)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09fe8cd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_template_compiler_index_id_data_v_09fe8cd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_Slider_vue___default.a,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/mhc/Slider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09fe8cd8", Component.options)
  } else {
    hotAPI.reload("data-v-09fe8cd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(670);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(543)("15b1d8fe", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09fe8cd8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../../../node_modules/iview-loader/index.js?{\"prefix\":false}!./Slider.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-09fe8cd8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!../../../node_modules/iview-loader/index.js?{\"prefix\":false}!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=8.chunk.js.map