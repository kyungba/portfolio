<template>
  <div class="listDiv">
    <div class="list"
      @click="popOpen"
      @mouseenter="thumbHover"
      v-for="(list, idx) in projectList" 
      :id="projectList[idx].id"
      :class="{ing:projectList[idx].ing == 'Y'}"
      :data-href="projectList[idx].href"
      :data-color="projectList[idx].color"
      :data-img-size="projectList[idx].imgSize"
      :key="idx"
    >
      <div class="imgArea"><img :src="require('@/assets/images/project_thumb_' + projectList[idx].id + '.jpg')" alt=""></div>
      <div class="txtArea">
        <p class="type">
          <span v-if="projectList[idx].ing == 'Y'" class="ing">작업중</span>
          <span v-if="projectList[idx].responsive == 'Y'" class="responsive">반응형</span>
          <span v-if="projectList[idx].responsive != 'Y'" class="pcweb">PC</span>
          <span v-if="projectList[idx].responsive != 'Y'" class="mobweb">MOBILE</span>
          <span v-if="projectList[idx].app == 'Y'" class="app">APP</span>
          <span class="projectType">구축</span>
        </p>
        <p class="tit"><span>{{projectList[idx].name}}</span></p>
      </div>
      <p class="dimd"></p>
    </div>
  </div>
</template>

<script>

import { gsap } from "gsap";
import BuildProjectList from "@/assets/data/BuildProjectList";

export default {
  name: 'BuildProject',
  components: {
  },
  data () {
    return {
      projectList : BuildProjectList,
      scrollT : 0,
      imgSizeData : 0,
      historyCnt : 0
    }
  },
  mounted() {
    for(let i=0; i<BuildProjectList.length; i++){
      let $this = document.getElementById(BuildProjectList[i].id);

      //Load 이벤트
      gsap.to($this, {top:0, opacity:1, duration:0, delay:i*0.15})

      //썸네일 이벤트
      let dimd = $this.querySelector(".dimd")
      dimd.style.background=$this.dataset.color

      let w, h, x, y, direction;
      $this.onmouseenter = (E) => {
        w = $this.offsetWidth;
        h = $this.offsetHeight;
        x = ( E.pageX - $this.offsetLeft - ( w/2 )) * ( w > h ? ( h/w ) : 1 );
        y = ( E.pageY - $this.offsetTop  - ( h/2 )) * ( h > w ? ( w/h ) : 1 );
        direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
        dimd.style.display = "block"

        if(direction == 0) {
          dimd.style.top = -h+"px";
          dimd.style.left = 0;
        } else if(direction == 1) {
          dimd.style.top = 0;
          dimd.style.left = w+"px";
        } else if(direction == 2) {
          dimd.style.top = h+"px";
          dimd.style.left = 0;
        } else {
          dimd.style.top = 0;
          dimd.style.left = -w+"px";
        }
        gsap.to(dimd, {top:0, left:0, duration:0.5});
      }
      $this.onmouseleave = (E) => {
        w = $this.offsetWidth;
        h = $this.offsetHeight;
        x = ( E.pageX - $this.offsetLeft - ( w/2 )) * ( w > h ? ( h/w ) : 1 )
        y = ( E.pageY - $this.offsetTop  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
        direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;

        if(direction == 0) {
          gsap.to(dimd, {top:-h, left:0, duration:0.5,ease:"Power3.out"});
        } else if(direction == 1) {
          gsap.to(dimd, {top:0, left:w, duration:0.5,ease:"Power3.out"});
        } else if(direction == 2) {
          gsap.to(dimd, {top:h, left:0, duration:0.5,ease:"Power3.out"});
        } else {
          gsap.to(dimd, {top:0, left:-w, duration:0.5,ease:"Power3.out"});
        }
      }
    }
  },
  methods: {
    toastPop : function(tit){
      if (document.querySelector(".toastPop") != null) {
        document.querySelector(".toastPop").remove();
      }
      let toastPop = document.createElement('div');
      toastPop.classList.add("toastPop");
      toastPop.innerText = tit;

      document.getElementById("wrap").append(toastPop);
      if(document.querySelector(".toastPop").offsetWidth % 2 != 0){
        document.querySelector(".toastPop").style.width = document.querySelector(".toastPop").offsetWidth - 1+"px";
      }

      gsap.to(document.querySelector(".toastPop"), {bottom:40, duration:0.3, ease:"Power3.out", onComplete:function(){
        gsap.to(this.targets(), {bottom:-200, duration:0.3, delay:2, ease:"Power3.in", onComplete:function(){
          this.targets()[0].remove();
        }})
      }})
    },
    popOpen (e){
      //초기화
      this.scrollT = 0;
      this.imgSizeData = 0;
      this.imgLoad = 0;

      let $this = document.getElementById(e.currentTarget.id)
      let popup = document.querySelector(".viewPop");
      let dimd = document.querySelector(".dimdBg");
      this.imgSizeData = $this.dataset.imgSize;
      history.pushState(null, document.title, location.href);
      this.historyCnt++;

      if(!$this.classList.contains("ing")){
        popup.style.display = "block";
        dimd.style.display = "block";
        gsap.to(popup, {opacity:1, duration:0.3});
        gsap.to(dimd, {opacity:1, duration:0.3});
        this.scrollT = window.scrollY;
        document.querySelector("html").classList.add("lock");
        if(!popup.classList.contains($this.id)){
          popup.querySelector(".titArea .tit span").innerText = $this.querySelector(".txtArea .tit").innerText;
          popup.className = "viewPop loading " + $this.id;
          if($this.dataset.href == "intra"){
            if(!popup.querySelector(".titArea .link").classList.contains("on")){
              popup.querySelector(".titArea .link").classList.add("on");
            }
          }else{
            if(popup.querySelector(".titArea .link").classList.contains("on")){
              popup.querySelector(".titArea .link").classList.remove("on");
            }
            popup.querySelector(".titArea .link a").setAttribute("href",$this.dataset.href);
          }
          popup.querySelector(".imgArea").innerHTML = "";
          popup.height = "";
          for (var i = 0; i < $this.dataset.imgSize; i++) {
            popup.querySelector(".conArea .imgArea").insertAdjacentHTML('beforeend','<img src="https://raw.githack.com/kyungba/portfolio/master/images/project_view_' + $this.id + i + '.jpg" alt="" />');
            popup.querySelectorAll(".conArea .imgArea img")[i].onload = () => {
              this.imgLoad ++;
              if(this.imgLoad == this.imgSizeData -1){
                popup.classList.remove("loading")
              }
            }
          }
          if(parseInt(window.innerHeight * 0.9) % 2 == 1){
            popup.style.height = parseInt(window.innerHeight * 0.9) - 1+"px";
          }else{
            popup.style.height = parseInt(window.innerHeight * 0.9)+"px"
          }
        }
      }else{
        this.toastPop("현재 작업중인 프로젝트입니다")
      }
      let saveData = { 
        'scroll' : this.scrollT,
        'history' : this.historyCnt
      }
      this.$emit('updateData', saveData)
    },
  }
}
</script>

<style lang="scss">
</style>