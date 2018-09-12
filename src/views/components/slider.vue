<template>
    <i-article>
        <article>
            <h1>工作台</h1>
            <p>工作台</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="myWorkbench">
                <div slot="demo">
                    <div class="slider-container">
                        <Slider :imgArr="imgs"></Slider>
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
                        <td>imgArr</td>
                        <td>图片地址数组</td>
                        <td>Array</td>
                        <td>[]</td>
                    </tr>
                    <tr>
                        <td>loop</td>
                        <td>是否循环播放</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>autoPlay</td>
                        <td>是否自动播放</td>
                        <td>Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>interval</td>
                        <td>进行下一次轮播的时间</td>
                        <td>Number</td>
                        <td>2000</td>
                    </tr>
                    </tbody>
                </table>
                <inAnchor title="Slider event" h3></inAnchor>
                <table>
                    <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>beforeScrollStart</td>
                        <td>滑动开始前触发事件</td>
                        <td>event</td>
                    </tr>
                    <tr>
                        <td>scrollEnd</td>
                        <td>滑动后触发事件</td>
                        <td>event</td>
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
  import Code from '../../code/slider';
  import inAnchor from '../../components/anchor.vue';
  import Slider from '../../components/mhc/Slider.vue'

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      inAnchor,
      Slider
    },
    data () {
      return {
        code: Code,
        imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg',
          'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg'
        ]
      }
    },
    methods: {

    }
  }
</script>
