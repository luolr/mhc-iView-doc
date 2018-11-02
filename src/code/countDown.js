let code = {};

code.default = `
<template>
  <CountDown :endTime="endTime" :endFun="endFun"></CountDown>
</template>
<script>
	export default {
        data () {
            return {
              endTime: '2018-11-30'
            }
        },
        methods: {
          endFun() {
            // 结束回调
          },
        }
    }
</script>
`;


export default code;