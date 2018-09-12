<template>
    <i-article>
        <article>
            <h1>Exception 异常页</h1>
            <p>用于在页面异常的时候展示，常见的有401、404、500页面。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="401页面">
                <div slot="demo">
                    <Exception type="401"></Exception>
                </div>
                <div slot="desc">
                    <p>通过设置<code>type</code>为<code>401</code>、<code>404</code>、<code>500</code>来显示不同的页面。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.exception_401 }}</i-code>
            </Demo>

            <Demo title="404页面">
                <div slot="demo">
                    <Exception type="404"></Exception>
                </div>
                <div slot="desc">
                    <p>通过设置<code>type</code>为<code>401</code>、<code>404</code>、<code>500</code>来显示不同的页面。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.exception_404 }}</i-code>
            </Demo>

            <Demo title="500页面">
                <div slot="demo">
                    <Exception type="500"></Exception>
                </div>
                <div slot="desc">
                    <p>通过设置<code>type</code>为<code>401</code>、<code>404</code>、<code>500</code>来显示不同的页面。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.exception_500 }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Exception props" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>按钮类型，可选值为 <code>401</code>、<code>404</code>、<code>500</code>或者不设置</td>
                            <td>String</td>
                            <td>401</td>
                        </tr>
                        <tr>
                            <td>backPage</td>
                            <td>返回的链接</td>
                            <td>String</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Demo from '../../components/demo.vue';
    import Code from '../../code/exception';
    import inAnchor from '../../components/anchor.vue';
    import Exception from '../../components/mhc/Exception.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            Exception
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
