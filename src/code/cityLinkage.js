let code = {};

code.default = `
<template>
  <div class="cityLinkage-container">
    <CityLinkage @changeSelected="getChange"></CityLinkage>
  </div>
</template>
<script>
	export default {
        data () {
            return {
              privance: '',
              city: '',
              area: ''
            }
        },
        methods: {
          getChange (pri, city, area) {
            this.privance = pri
            this.city = city
            this.area = area
          }
        }
    }
</script>
`;

export default code;