let code = {};

code.default = `
<template>
   <div class="slider-container">
      <ViewImages :imageList="photos"/>
   </div>
</template>
<script>
	export default {
        data () {
            return {
              photos:['http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/318993.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/319680.jpg','http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316605.jpg']
            }
        },
        methods: {}
    }
</script>
`;

export default code;