let code = {};

code.default = `
<template>
   <div class="loading-container">
     <Loading :loadingText="loadingText" :background="background" :className="className" :opacityDeep="opacityDeep" :color="color"/>
   </div>
</template>
<script>
	export default {
        data () {
            return {
              loadingText:'加载中...',
              background:'black',
              opacityDeep:0.6,
              color:'blue',
              className: 'loading1',
            }
        },
        methods: {}
    }
</script>
`;

export default code;