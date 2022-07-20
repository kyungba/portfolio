<template>
  <p class="notice">
    <span>제안프로젝트는 정해진 해상도 크기에서 정해진 히스토리(짜여진 순서)로만 동작하게 구현되어 있어서 </span>
    틀어지는 부분이나 논리적으로 동작하지 않는 부분이 있고,크롬브라우저 / 해상도 1920 * 1080 기준으로만 작업되어 있습니다.<br /><br />
    
    클릭이나 마우스오버 영역에서의 인터렉션 위주로 봐주시면 되고, 순서대로 클릭이나 헤더 영역 클릭시 다음 페이지로 이동됩니다.<br /><br />
    
    해당 페이지도 PC에서만 확인가능합니다.
  </p>
  <div class="listDiv proposal">
    <div class="list"
      v-for="(list, idx) in projectList" 
      :id="projectList[idx].id"
      :data-href="projectList[idx].href"
      :key="idx"
    >
      <div class="txtArea">
        <p v-if="projectList[idx].result == 'Y'" class="type">수주</p>
        <p class="tit"><span>{{projectList[idx].name}}</span></p>
        <a v-if="projectList[idx].href != ''" :href="projectList[idx].href" target="_blank" class="link">Link</a>
      </div>
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap";
import ProposalProjectList from "@/assets/data/ProposalProjectList";

export default {
  name: 'ProposalProject',
  components: {
  },
  data () {
    return {
      projectList : ProposalProjectList,
    }
  },
  mounted() {
    for(let i=0; i<ProposalProjectList.length; i++){
      let $this = document.getElementById(ProposalProjectList[i].id);
      
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