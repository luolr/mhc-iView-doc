<template>
    <i-article>
        <article>
            <h1>TextCopy 文本复制</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="文本复制">
                <div slot="demo">
                    <span>要被复制的文字：{{copyContent}}</span>
                    <TextCopy :copyContent="copyContent" :size="16"></TextCopy>
                    <Input type="textarea" :rows="2" placeholder="请粘贴复制好的文字" />
                </div>
                <div slot="desc">
                    <p>文本复制</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="TextCopy methods" h3></inAnchor>
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
                            <td>copyContent</td>
                            <td>要被复制的文字，用于与要被复制的地方绑定</td>
                            <td>String</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>图标大小</td>
                            <td>Number</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>copiedFun</td>
                            <td>复制完成后的回调函数</td>
                            <td>Function</td>
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
    import Code from '../../code/textCopy';
    import inAnchor from '../../components/anchor.vue';
    import TextCopy from '../../components/mhc/TextCopy.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            TextCopy
        },
        data () {
            return {
                code: Code,
                copyContent: '我要被复制了～～'
            }
        },
        methods: {}
    }
</script>
