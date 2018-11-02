let code = {};

code.default = `
<template>
   <Waterfall :data="data"></Waterfall>
</template>
<script>
	export default {
        data () {
            return {
                data: []
            }
        }
    }
</script>
`;

export default code;