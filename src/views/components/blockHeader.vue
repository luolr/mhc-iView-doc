<template>
    <i-article>
        <article>
            <h1>BlockHeader 模块标题</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="模块标题">
                <div slot="demo">
                    <BlockHeader></BlockHeader>
                </div>
                <div slot="desc">
                    <p>模块标题：1对应h1字体 - 6对应h6字体</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="BlockHeader methods" h3></inAnchor>
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
                            <td>blockTitle</td>
                            <td>标题文字</td>
                            <td>String</td>
                            <td>标题1</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>字体大小</td>
                            <td>Number</td>
                            <td>4</td>
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
    import Code from '../../code/BlockHeader';
    import inAnchor from '../../components/anchor.vue';
    import BlockHeader from '../../components/mhc/BlockHeader.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            BlockHeader
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
