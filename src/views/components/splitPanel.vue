<template>
    <i-article>
        <article>
            <h1>Split-panel 分割面板</h1>
            <p>类似于codepen, jsfiddle的可拖动面板。</p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="401页面">
                <div slot="demo">
                  <div class="panel-wrapper">
                    <split-panel :layout="'horizontal'" :gutter="8" :init="40" :min="10" :max="90">
                      <div class="panel" slot="1">
                          <split-panel :layout="'vertical'" :gutter="8" :init="30" :min="20" :max="80">
                              <div class="content" slot="1">Part 1-1</div>
                              <div class="content" slot="2">Part 1-2</div>
                          </split-panel>
                      </div>
                      <div class="panel" slot="2">
                          <split-panel :layout="'vertical'" :gutter="8" :init="70" :min="20" :max="80">
                              <div class="content" slot="1">Part 2-1</div>
                              <div class="content" slot="2">Part 2-2</div>
                          </split-panel>
                      </div>
                    </split-panel>
                  </div>
                </div>
                <div slot="desc">
                  <p></p>
                </div>
                <i-code lang="html" slot="code">{{ code.default }}</i-code>
            </Demo>

            <div class="api">
                <inAnchor title="API" h2></inAnchor>
                <inAnchor title="Exception props" h3></inAnchor>
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
                            <td>layout</td>
                            <td>方向，可选值为'horizontal'或者'vertical'</td>
                            <td>String</td>
                            <td>'horizontal'</td>
                        </tr>
                        <tr>
                            <td>color</td>
                            <td>切割线颜色</td>
                            <td>String</td>
                            <td>'#5cadff'</td>
                        </tr>
                        <tr>
                            <td>gutter</td>
                            <td>切割线宽度</td>
                            <td>Number</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>init</td>
                            <td>初始化位置</td>
                            <td>Number</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>最小值</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>最大值</td>
                            <td>Number</td>
                            <td>100</td>
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
    import Code from '../../code/splitPanel';
    import inAnchor from '../../components/anchor.vue';
    import SplitPanel from '../../components/mhc/splitPanel.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            SplitPanel
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {}
    }
</script>
<style type="scss" scoped="">
  .panel-wrapper {
    width: 100%;
    height: 500px;
    border: solid 8px #5cadff;

    .panel {
      height: 100%;
    }
    .content {
      padding: 10px;
    }
  }
</style>
