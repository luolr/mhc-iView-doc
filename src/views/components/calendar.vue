<template>
    <i-article>
        <article>
            <h1>Calendar 日历</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="日历">
                <div slot="demo">
                    <Calendar></Calendar>
                </div>
                <div slot="desc">
                    <p>日历</p>
                </div>
                <i-code lang="html" slot="code">{{ code }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>

                <inAnchor title="Calendar methods" h3></inAnchor>
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
                            <td>changeMonth</td>
                            <td>月份改变</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>choseDay</td>
                            <td>选中某一天</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>isToday</td>
                            <td>选中的是否是今天</td>
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
    import Code from '../../code/calendar';
    import inAnchor from '../../components/anchor.vue';
    import Calendar from '../../components/mhc/Calendar.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            Calendar
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
