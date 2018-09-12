<template>
    <i-article>
        <article>
            <h1>Waterfall 瀑布流</h1>
            <p></p>
            <inAnchor title="代码示例" h2></inAnchor>
            <Demo title="瀑布流">
                <div slot="demo">
                    <Waterfall :data="data"></Waterfall>
                </div>
                <div slot="desc">
                    <p>图片瀑布流，会随着页面大小的改变，重新计算一行展示的数量。</p>
                </div>
                <i-code lang="html" slot="code">{{ code }}</i-code>
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
                            <td>data</td>
                            <td>图片</td>
                            <td>Array</td>
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
    import Code from '../../code/waterfall';
    import inAnchor from '../../components/anchor.vue';
    import Waterfall from '../../components/mhc/waterfall.vue'

    export default {
        components: {
            iArticle,
            iCode,
            Demo,
            inAnchor,
            Waterfall
        },
        data () {
            return {
                data: [
                'http://img0.imgtn.bdimg.com/it/u=2502313064,1397167486&fm=26&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=820187427,4212180164&fm=26&gp=0.jpg',
                'http://img4.imgtn.bdimg.com/it/u=3561759131,2732048751&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=428549871,4004515111&fm=26&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2339694865,2382456002&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=1706662613,4153832992&fm=26&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=1134559476,164772601&fm=200&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=54202095,3670836593&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2022888886,2757317261&fm=200&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=2818660063,53944668&fm=200&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=1598903339,3545123556&fm=200&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=3756090549,2773217785&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=1841827901,1655131218&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1254316055,1307220925&fm=200&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=820187427,4212180164&fm=26&gp=0.jpg',
                'http://img4.imgtn.bdimg.com/it/u=3561759131,2732048751&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=428549871,4004515111&fm=26&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2339694865,2382456002&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=1706662613,4153832992&fm=26&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=1134559476,164772601&fm=200&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=54202095,3670836593&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2022888886,2757317261&fm=200&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=2818660063,53944668&fm=200&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=1598903339,3545123556&fm=200&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=3756090549,2773217785&fm=200&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=1841827901,1655131218&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1254316055,1307220925&fm=200&gp=0.jpg'
                ],
                code: Code
            }
        },
        methods: {}
    }
</script>
