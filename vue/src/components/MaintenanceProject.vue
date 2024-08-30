<template>
  <div class="listDiv maintenance">
    <div class="list"
      v-for="(list, idx) in projectList" 
      :id="projectList[idx].id"
      :data-href="projectList[idx].href"
      :key="idx"
    >
      <div class="txtArea">
        <p class="tit"><span>{{projectList[idx].name}}</span></p>
        <a v-if="projectList[idx].reason == ''" :href="projectList[idx].href" target="_blank" class="link">Link</a>
        <a v-else href="javascript:" class="link no">{{projectList[idx].reason}}</a>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap";
import MaintenanceProjectList from "@/assets/data/MaintenanceProjectList";

export default {
  name: 'MaintenanceProject',
  components: {
  },
  data () {
    return {
        projectList : MaintenanceProjectList,
    }
  },
  mounted() {
    for(let i=0; i<MaintenanceProjectList.length; i++){
      let $this = document.getElementById(MaintenanceProjectList[i].id);
      
      //Load 이벤트
      gsap.to($this, {top:0, opacity:1, duration:0, delay:i*0.15})
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>