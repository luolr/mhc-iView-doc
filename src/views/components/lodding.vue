<template>
    <i-article>
        <article>
            <h1>loading</h1>
            <p>loading</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="loading">
                <div slot="demo">
                    <div class="lodding-container">
                        <Loading :loddingText="loddingText" :background="background" :loddingType="className" :opacityDeep="opacityDeep" :color="color"/>
                    </div>
                </div>
                <div slot="desc">
                    <p>用于演示，添加了一个默认数据</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Slider props" h3></inAnchor>
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
                        <td>loadingText</td>
                        <td>加载文字</td>
                        <td>String</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>background</td>
                        <td>加载背景</td>
                        <td>String</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>loadingType</td>
                        <td>loading类型,暂有两种 loading1和loading2</td>
                        <td>String</td>
                        <td>loading1</td>
                    </tr>
                    <tr>
                        <td>opacityDeep</td>
                        <td>背景透明度</td>
                        <td>Number</td>
                        <td>0.6</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>文字颜色</td>
                        <td>String</td>
                        <td>--</td>
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
  import Code from '../../code/lodding';
  import inAnchor from '../../components/anchor.vue';
  import Loading from '../../components/mhc/lodding.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      Loading
    },
    data () {
      return {
        code: Code,
        // lodding
        loddingText:'加载中...',
        background:'black',
        opacityDeep:0.6,
        color:'blue',
        className: 'lodding1'
      }
    },
    methods: {

    }
  }
</script>
