let code = {};

code.default = `
<template>
  <div class="textCopy-container">
    <TextCopy :copyContent="copyContent" :size="16" :copiedFun="copiedFun"></TextCopy>
  </div>
</template>
<script>
	export default {
        data () {
            return {
              copyContent: '啦啦啦啦啦啦'
            }
        },
        methods: {
          copiedFun() {
            
          }
        }
    }
</script>
`;

export default code;