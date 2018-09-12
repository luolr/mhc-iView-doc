<template>
    <i-article>
        <article>
            <h1>工作台</h1>
            <p>工作台</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="MyWorkbench">
                <div slot="demo">
                    <div class="MyWorkbench-container">
                        <MyWorkbench :meunData="meunData"/>
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
                        <td>imageList</td>
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
  import Code from '../../code/myWorkbench';
  import inAnchor from '../../components/anchor.vue';
  import MyWorkbench from '../../components/mhc/myWorkbench/MyWorkbench.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      MyWorkbench
    },
    data () {
      return {
        code: Code,
        // 菜单栏
        meunData: [{
          imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/175615c5-bcd7-a52e-a516-717395038bb6.png",
          name: "账单管理",
          number: 110,
          url: "http://www.baidu.com"
        },{
          imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/10d8d74c-92f6-f88c-94a8-9d4e7be79a04.png",
          name: "金融服务",
          number: 120,
          url: "http://www.baidu.com"
        }]
      }
    },
    methods: {

    }
  }
</script>
