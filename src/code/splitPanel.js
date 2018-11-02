let code = {};

code.default = `
<template>
   <div class="panel-wrapper">
    <split-panel :layout="'horizontal'" :gutter="8" :init="40" :min="10" :max="90">
      <div class="panel" slot="1">
          <split-panel :layout="'vertical'" :gutter="8" :init="30" :min="20" :max="80">
              <div class="content" slot="1">Part 1-1</div>
              <div class="content" slot="2">Part 1-2</div>
          </split-panel>
      </div>
      <div class="panel" slot="2">
          <split-panel :layout="'vertical'" :gutter="8" :init="70" :min="20" :max="80">
              <div class="content" slot="1">Part 2-1</div>
              <div class="content" slot="2">Part 2-2</div>
          </split-panel>
      </div>
    </split-panel>
  </div>
</template>
<script>
	export default {
        data () {
            return {}
        }
    }
</script>
<style type="scss" scoped="">
  .panel-wrapper {
    width: 100%;
    height: 500px;
    border: solid 8px #5cadff;

    .panel {
      height: 100%;
    }
    .content {
      padding: 10px;
    }
  }
</style>
`;

export default code;