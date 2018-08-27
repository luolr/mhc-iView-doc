let code = {};

code.default = `
<template>
   <div class="editor-container">
     <json-editor ref="jsonEditor" v-model="value"/>
   </div>
</template>
<script>
	export default {
        data () {
            return {
                value: {}
            }
        },
        methods: {}
    }
</script>
`;

export default code;