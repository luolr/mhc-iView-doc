<template>
  <div>
    <Card  class="box-card">
      <Row>
        <Col class="module-content" v-for="(item, index) in meunData" :key="index">
          <Row
                  type="flex"
                  justify="center"
                  align="middle"
                  class="el-row-height">
            <Col span="4" ><img :src="item.imgUrl" alt=""></Col>
            <Col span="6">
              <Row><span class="text">{{ item.name}}</span></Row>
              <Row><span class="number"><a  :href="item.url">{{ item.number}}</a></span></Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ModuleItem',
  components: {},
  props: {
    meunData: {
      type: Array,
      default: function () {
        return []
      }
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .box-card {
    margin-bottom: 15px;
  }
  .module-title {
    font-size: 18px;
    font-weight: bold;
    color: #3D3D3D;
  }
  .module-content {
    margin-top: 20px;
    margin-right: 10px;
    width: 350px;
    height: 120px;
    font-size: 18px;
    background: #EBEBEB;
    border-radius: 8px;
    .el-row-height {
      height: 120px;
      .text {
        font-size: 12px;
      }
      .number a{
        color: black;
        font-weight: 400;
        margin-top: 10px;
        text-decoration: none;
        color: red;
      }
    }
  }
</style>
