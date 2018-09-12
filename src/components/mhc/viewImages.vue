<template>
  <div>
    <Row>
      <Col span="24"><h4 class="title-text">{{ title + '：' }}</h4></Col>
      <Col
        v-for="(o, index) in imageList"
        span="6"
        :offset="1"
        :key="index">
          <img
            :alt="index"
            :src="changeImgUrl(o)"
            :data-original="o"
            class="image"
            @click="initViewer()">
      </Col>
    </Row>
  </div>
</template>
<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.min.css'
export default {
  name: 'ViewImages',
  props: {
    title: {
      type: String,
      default: ''
    },
    imageList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      viewerId: null,
      suffix: '?imageView2/2/w/100/h/100'
    }
  },
  methods: {
    changeImgUrl: function (imgUrl) {
      return imgUrl && imgUrl.indexOf('?') > -1 ? (imgUrl) : (imgUrl + this.suffix)
    },
    initViewer () {
      console.log(this.$el)
      // var galley = document.getElementsByClassName('galley')[0]
      this.viewerId = new Viewer(this.$el, {
        url: 'data-original',
        toolbar: {
          zoomIn: 4,
          zoomOut: 4,
          oneToOne: 4,
          reset: 4,
          prev: 4,
          play: {
            show: 0,
            size: 'large'
          },
          next: 4,
          rotateLeft: 4,
          rotateRight: 4,
          flipHorizontal: 0,
          flipVertical: 0
        }
      })
      console.log(this.viewerId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    width: 90%;
    display: inline-block;
    cursor: pointer;
  }
  .title-text{
    font-weight: 400;
  }
</style>
