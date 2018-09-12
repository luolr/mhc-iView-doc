<template>
    <i-article>
        <article>
            <h1></h1>
            <p>左右联动菜单</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="Listview">
                <div slot="demo">
                    <div class="listview-container">
                        <Listview/>
                    </div>
                </div>
                <div slot="desc">
                    <p>用于演示，添加了一个默认数据</p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Listview props" h3></inAnchor>
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
                        <td>imgArr</td>
                        <td>图片地址数组</td>
                        <td>Array</td>
                        <td>[]</td>
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
  import Code from '../../code/listview';
  import inAnchor from '../../components/anchor.vue';
  import Listview from '../../components/mhc/Listview.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      Listview
    },
    data () {
      return {
        code: Code
      }
    },
    methods: {

    }
  }
</script>
