<template>
  <i-article>
    <article>
      <h1>照片查看</h1>
      <p>轮播图</p>
      <inAnchor title="代码示例" h2></inAnchor>
      <Demo title="viewImages">
        <div slot="demo">
          <div class="viewImages-container">
            <viewImages :imageList="photos" :title="title" />
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
          <tr>
            <td>title</td>
            <td>一组图片的标题</td>
            <td>String</td>
            <td>-</td>
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
  import Code from '../../code/viewImages';
  import inAnchor from '../../components/anchor.vue';
  import viewImages from '../../components/mhc/viewImages.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      viewImages
    },
    data () {
      return {
        code: Code,
        // 照片查看器
        photos:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ],
        title:'采购合同',
      }
    },
    methods: {

    }
  }
</script>
