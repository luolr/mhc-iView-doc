let code = {};

code.default = `
<template>
   <div class="lodding-container">
     <Lodding :loddingText="loddingText" :background="background" :className="className" :opacityDeep="opacityDeep" :color="color"/>
   </div>
</template>
<script>
	export default {
        data () {
            return {
              // lodding
              loddingText:'加载中...',
              background:'black',
              opacityDeep:0.6,
              color:'blue',
              className: 'lodding1',
            }
        },
        methods: {}
    }
</script>
`;

export default code;