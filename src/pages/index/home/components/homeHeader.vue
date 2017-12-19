<template>
  <div id="indexHeader">
    <header>
      <div class="top_bar">

      </div>
    </header>
    <nav>
      <div class="nav_ul">
        <a href="" v-for="(item, index) in indexColumn" :key="index">
          {{item.classname}}
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  }, 
  computed: {
    ...mapGetters('index', [
      'indexColumn'   // 主题域对象信息
    ])
  }
    
}
</script>
