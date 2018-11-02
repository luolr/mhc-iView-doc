<template>
    <i-article>
        <article>
            <h1>CountDown 倒计时</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="倒计时">
                <div slot="demo">
                    <CountDown :endTime="`2018-11-30`"></CountDown>
                </div>
                <div slot="desc">
                    <p>倒计时组件</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="CountDown methods" h3></inAnchor>
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
                            <td>endTime</td>
                            <td>倒计时结束时间</td>
                            <td>String</td>
                            <td>当前时间</td>
                        </tr>
                        <tr>
                            <td>endFun</td>
                            <td>倒计时结束后的回调函数</td>
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
    import Code from '../../code/countDown';
    import inAnchor from '../../components/anchor.vue';
    import CountDown from '../../components/mhc/CountDown.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            CountDown
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
