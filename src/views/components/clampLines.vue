<template>
    <i-article>
        <article>
            <h1>ClampLines 文本裁剪</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="文本裁剪">
                <div slot="demo">
                    <ClampLines :width="'400px'" :lines="2"></ClampLines>
                </div>
                <div slot="desc">
                    <p>文字提示框的宽度最小值为150px；默认长文本自动换行。</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="ClampLines methods" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                            <th>可选值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>textContent</td>
                            <td>要裁减的文本内容</td>
                            <td>String</td>
                            <td>一段示例文字</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>提示框、文字裁剪后宽度</td>
                            <td>String</td>
                            <td>150px</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>lines</td>
                            <td>文字裁剪后行数</td>
                            <td>Number</td>
                            <td>2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>提示框位置</td>
                            <td>String</td>
                            <td>bottom</td>
                            <td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
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
    import Code from '../../code/clampLines';
    import inAnchor from '../../components/anchor.vue';
    import ClampLines from '../../components/mhc/ClampLines.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            ClampLines
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
