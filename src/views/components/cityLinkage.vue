<template>
    <i-article>
        <article>
            <h1>CityLinkage 省市区联动</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="省市区联动">
                <div slot="demo">
                    <CityLinkage></CityLinkage>
                </div>
                <div slot="desc">
                    <p>省市区联动：返回省市区三个变量值</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="CityLinkage methods" h3></inAnchor>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>参数</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>label</td>
                            <td>左侧文字</td>
                            <td>String</td>
                            <td></td>
                            <td>省市区</td>
                        </tr>
                        <tr>
                            <td>changeSelected</td>
                            <td>回调函数</td>
                            <td>Function</td>
                            <td>city,link,area</td>
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
    import Code from '../../code/cityLinkage';
    import inAnchor from '../../components/anchor.vue';
    import CityLinkage from '../../components/mhc/CityLinkage.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            CityLinkage
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
