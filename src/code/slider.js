let code = {};

code.default = `
<template>
   <div class="slider-container">
     <slider :imgArr="imgs" :interval=4000 :autoPlay=true :loop=true />
   </div>
</template>
<script>
	export default {
        data () {
            return {
              imgs:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg']
            }
        },
        methods: {}
    }
</script>
`;

export default code;