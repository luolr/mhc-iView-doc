let code = {};

code.default = `
<template>
   <div class="myWorkbench-container">
      <MyWorkbench :meunData="meunData"/>
   </div>
</template>
<script>
	export default {
        data () {
            return {
                  meunData: [{
                    imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/175615c5-bcd7-a52e-a516-717395038bb6.png",
                    name: "账单管理",
                    number: 110,
                    url: "http://www.baidu.com"
                   },{
                   imgUrl: "https://pic.51zhangdan.com/u51/storage/project_4771/10d8d74c-92f6-f88c-94a8-9d4e7be79a04.png",
                   name: "金融服务",
                   number: 120,
                   url: "http://www.baidu.com"
              }],
                  }
              },
        methods: {}
    }
</script>
`;

export default code;