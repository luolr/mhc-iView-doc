<template>
    <i-article>
        <article>
            <h1>JsonEditor</h1>
            <p>可以对json进行格式验证</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="json-editor">
                <div slot="demo">
                    <div class="editor-container">
                      <json-editor ref="jsonEditor" v-model="value"/>
                    </div>
                </div>
                <div slot="desc">
                    <p>用于演示，添加了一个默认的Json。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="JsonEditor props" h3></inAnchor>
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
                            <td>value</td>
                            <td>默认JSON，可选</td>
                            <td>Object</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>theme</td>
                            <td>主题，可选</td>
                            <td>String</td>
                            <td>rubyblue</td>
                        </tr>
                        <tr>
                            <td>lint</td>
                            <td>是否校验JSON格式</td>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>
                    </tbody>
                </table>

                <inAnchor title="JsonEditor methods" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                            <th>参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>input</td>
                            <td>内容改变</td>
                            <td>无</td>
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
    import Code from '../../code/JsonEditor';
    import inAnchor from '../../components/anchor.vue';
    import JsonEditor from '../../components/mhc/JsonEditor.vue'

    const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            JsonEditor
        },
        data () {
            return {
                code: Code,
                value: JSON.parse(jsonData)
            }
        },
        methods: {}
    }
</script>
