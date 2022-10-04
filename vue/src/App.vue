<template>
  <div id="wrap">
    <div id="content">
      <div class="workList">
        <p class="title">Portfolio</p>

        <div class="tabs">
          <a href="javascript:" :class="{on:tabN == 0}" @click="tabN = 0">구축</a>
          <a href="javascript:" :class="{on:tabN == 1}" @click="tabN = 1">운영</a>
          <a href="javascript:" :class="{on:tabN == 2}" @click="tabN = 2">제안</a>
        </div>

        <BuildProject v-if="tabN == 0" @updateData="dataSetting">
        </BuildProject>
        <MaintenanceProject v-else-if="tabN == 1">
        </MaintenanceProject>
        <ProposalProject v-else-if="tabN == 2">
        </ProposalProject>
      </div>
    </div>
    <p class="dimdBg" @click="popClose"></p>
  </div>

  <ProjectPop>
    <a href="javascript:" class="xBtn" @click="popClose"></a>
  </ProjectPop>
</template>

<script>

import "@/assets/css/base.scss";
import { gsap } from "gsap";
import BuildProject from "@/components/BuildProject";
import MaintenanceProject from "@/components/MaintenanceProject";
import ProposalProject from "@/components/ProposalProject";
import ProjectPop from "@/components/ProjectPop";

export default {
  name: 'App',
  components: {
    BuildProject,
    MaintenanceProject,
    ProposalProject,
    ProjectPop
  },
  data () {
    return {
      tabN : 0,
      dataSet : [],
      scrollT : '',
      historyCnt : ''
    }
  },
  created () {
    let device, browser;
    if( /Android/i.test(navigator.userAgent)) {
      device = 'android';
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {   
      return navigator.userAgent.match(/(iPhone|iPod)/g) ? device='ios' : device='ipad';
    }else {
      device = 'pc'; // eslint-disable-line no-unused-vars
    }
    
    var agent = navigator.userAgent.toLowerCase(),
      name = navigator.appName;
    if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
      browser = 'ie';
      if(name === 'Microsoft Internet Explorer') { // IE old version (IE 10 or Lower)
        //eslint-disable-next-line
        agent = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(agent);
        browser += parseInt(agent[1]);
      } else { // IE 11+
        if(agent.indexOf('trident') > -1) { // IE 11
          browser += 11;
        } else if(agent.indexOf('edge/') > -1) { // Edge
          browser = 'edge';
        }
      }
    } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
      if(agent.indexOf('opr') > -1) { // Opera
        browser = 'opera';
      } else if(agent.indexOf('chrome') > -1) { // Chrome
        browser = 'chrome';
      } else { // Safari
        browser = 'safari';
      }
    } else if(agent.indexOf('firefox') > -1) { // Firefox
      browser = 'firefox'; // eslint-disable-line no-unused-vars
    }

    
  },
  mounted () { 
    if(this.device != 'pc' || window.innerWidth <= 981){
      document.querySelector("#content").classList.add("mob");
    }
  },
  methods : {
    popClose(){
      let popup = document.querySelector(".viewPop")
      let dimd = document.querySelector(".dimdBg")
      
      gsap.to(popup, {opacity:0, duration:0.3, onComplete:function(){
        popup.style.display = "none";
        dimd.style.display = "none";
      }});
      gsap.to(dimd, {opacity:0, duration:0.3});
      document.querySelector("html").classList.remove("lock");
      document.querySelector("html").scrollTo(0, this.dataSet[0].scroll)
    },
    dataSetting(data){
      this.dataSet.pop()
      this.dataSet.push(data)
    }
  }
}
</script>

<style lang="scss">
  @mixin floatClear{
    content:'';
    display:block;
    clear:both;
  }

  #content{
    padding:80px 0;

    .errorT{
      display:none; 
      padding:0 20px; 
      width:100%; 
      height:100vh; 
      background:#f6f6f6; 
      word-break:keep-all;

      p{
        display:table-cell; 
        vertical-align:middle; 
        text-align:center; 
        font-size:15px; 
        line-height:22px; 
        color:#d84c4c;
      }
    }

    .title{
      position:relative; 
      font-weight:700; 
      font-size:36px; 
      color:#000; 
      text-align:left;
    }

    .notice{
      margin-top:25px; 
      font-family:'Noto Sans KR'; 
      font-weight:500; 
      font-size:15px; 
      line-height:22px; 
      color:#ff2929;

      span{
        display:block
      }

      & + .listDiv{
        margin-top:30px
      }
    }

    .tabs{
      margin-top:30px;

      &:after{
        @include floatClear;
      }

      a{
        position:relative;
        float:left;
        width:80px;
        font-size:18px;
        line-height:40px;
        color:#999;
        text-align:center;

        &.on{
          font-weight:500;
          color:#333;
          
          &:after{
            content:'';
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:2px;
            background:#333;
          }
        }
      }
    }
  }

  .workList{
    margin:0 auto; 
    width:1160px;

    .listDiv{
      position:relative;
      margin-top:50px;

      &:after{
        @include floatClear
      }

      .list{
        position:relative; 
        top:60px; 
        opacity:0; 
        float:left; 
        margin-left:40px; 
        width:360px; 
        height:352px; 
        border:1px solid #d0d0d0; 
        border-radius:10px; 
        overflow:hidden; 
        transition:top 0.6s ease-out, opacity 0.6s ease-out; 
        cursor:pointer;

        &:hover{
          box-shadow:5px 5px 10px 0 rgba(0, 0, 0, 0.15); 
          transition:box-shadow 0.3s cubic-bezier(0.55, 0, 0.1, 1);

          .tit{
            span{
              background:url('@/assets/images/tit_bg.gif') repeat-x bottom 3px left
            }
          }
        }

        &:nth-child(n+4){
          margin-top:40px;
        }

        &:nth-child(3n+1){
          margin-left:0;
          clear:both;
        }

        .imgArea{
          height:200px; 
          overflow:hidden; 
          transition:height 0.6s ease;

          img{
            width:100%
          }
        }

        .txtArea{
          position:relative; 
          padding:20px 22px; 
          height:150px; 
          background:#fff; 
          border-top:1px solid #d0d0d0; 
          z-index:1;

          .type{
            &:after{
              @include floatClear;
            }

            span{
              float:left; 
              margin-right:4px; 
              padding:4px 6px 1px;
              font-weight:300; 
              font-size:13px; 
              text-align:center; 
              border-radius:4px; 
              border:1px solid #d0d0d0;

              &.ing{
                color:#000; 
                border:1px solid #000;
              }

              &.projectType{
                color:#f22867; 
                border:1px solid rgba(242, 40, 103, 0.8)
              }

              &.responsive{
                color:#00959c; 
                border:1px solid rgba(0, 149, 156, 0.8)
              }

              &.pcweb{
                color:#004d45; 
                border:1px solid rgba(0, 77, 69, 0.8)
              }

              &.mobweb{
                color:#0067ac; 
                border:1px solid rgba(0, 103, 172, 0.8)
              }

              &.app{
                color:#2ba758; 
                border:1px solid rgba(43, 167, 88, 0.8)
              }

              &:last-child{
                margin-right:0
              }
            }
          }
          .tit{
            margin-top:12px; 
            font-weight:500; 
            font-size:20px; 
            line-height:26px; 
            color:#333; 
            word-break:keep-all;

            span{
              display:inline;
            }
          }

          .kindD{
            display:none
          }
        }

        .dimd{
          display:none; 
          position:absolute; 
          top:0; 
          left:0; 
          z-index:1; 
          width:100%; 
          height:100%;

          &:after{
            content:'View project'; 
            position:absolute; 
            top:50%; 
            left:50%; 
            transform:translate(-50%, -50%); 
            padding-bottom:24px; 
            width:96px; 
            height:40px; 
            font-weight:700; 
            font-size:16px; 
            color:#fff; 
            text-align:center; 
            background: url('@/assets/images/moreBtn.png') no-repeat center bottom; 
            z-index:1;
          }
        }

        &.ing{
          .dimd{
            &:after{
              content:'작업중'; 
              position:absolute; 
              top:50%; 
              left:50%; 
              transform:translate(-50%, -50%); 
              width:60px; 
              height:60px; 
              font-size:18px; 
              line-height:60px; 
              color:#fff; 
              text-align:center; 
              z-index:1; 
              background:none;
            }
          }
        }
      }

      &.maintenance{
        .list{
          height:122px;
          cursor:auto;

          .txtArea{
            height:120px;
            border-top:none;

            .tit{
              margin-top:0;
              height:52px;
            }

            a{
              display:inline-block;
              margin-top:6px;
              padding-left:34px; 
              font-family:'Metropolis'; 
              font-weight:400; 
              font-size:16px;
              line-height:20px;
              background:url('@/assets/images/link_icon2.png') no-repeat left 1px center;

              &.no{
                pointer-events:none; 
                font-family:'Noto Sans KR'; 
                font-weight:300; 
                color:#d84c4c; 
                background:url('@/assets/images/noLink.png') no-repeat left 1px center;
              }
            }
          }
        }
      }

      &.proposal{
        &:before{
          display:none;
          content:'※ 해당 페이지는 제안용 작업물 리스트 페이지로써 해상도 1920 * 1080 기준으로 작업되어 있습니다. PC에서 확인부탁드립니다.';
          position:absolute;
          top:0;
          left:-5vw;
          padding:40px calc(5vw + 10px) 0;
          padding:40px -webkit-calc(5vw + 10px) 0;
          width:calc(100% + 10vw);
          width:-webkit-calc(100% + 10vw);
          height:100%;
          font-weight:500;
          font-size:13px;
          line-height:20px;
          color:#000;
          background:rgba(246, 246, 246, 0.9);
          z-index:2;
        }

        .list{
          height:154px;
          cursor:auto;

          .txtArea{
            height:152px;
            border-top:none;

            .type{
              display:inline-block; 
              padding:4px 6px 1px;
              font-weight:300; 
              font-size:13px; 
              text-align:center; 
              border-radius:4px; 
              color:#f22867;
              border:1px solid rgba(242, 40, 103, 0.8);

              & + .tit{
                margin-top:12px;
              }
            }

            .tit{
              margin-top:32px;;
              height:52px;
            }

            a{
              display:inline-block;
              margin-top:6px;
              padding-left:34px; 
              font-family:'Metropolis'; 
              font-weight:400; 
              font-size:16px;
              line-height:20px;
              background:url('@/assets/images/link_icon2.png') no-repeat left 1px center;

              &.no{
                pointer-events:none; 
                font-family:'Noto Sans KR'; 
                font-weight:300; 
                color:#d84c4c; 
                background:url('@/assets/images/noLink.png') no-repeat left 1px center;
              }
            }
          }
        }
      }
    }
  }

  .toastPop{
    position:fixed; 
    z-index:12; 
    left:50%; 
    transform:translate(-50%, -50%); 
    width:400px; 
    padding:20px 16px; 
    font-weight:500; 
    font-size:16px; 
    line-height:22px; 
    color:#fff; 
    text-align:center; 
    border-radius:20px; 
    background:rgba(0, 0, 0, 0.7)
  }

  .dimdBg{
    display:none; 
    position:fixed;
    top:0; 
    left:0; 
    width:100%; 
    height:100%; 
    background:rgba(0, 0, 0, 0.6); 
    opacity:0;
    z-index:9;
  }


  //Responsive
  @media all and (max-width:1366px){
    .inner{
      width:90%;
    }
  }

  @media all and (max-width:1280px){
    .workList{
      width:900px;
      
      .listDiv{
        .list{
          width:280px; 
          height:307px; 
          margin-left:30px;

          .imgArea{
            height:155px;
          }

          .txtArea{
            .tit{
              font-size:18px;
            }
          }
        }
      }
    }
  }

  @media all and (max-width:981px){
    #content{
      padding:0;

      .errorT{
        padding:0 5%;

        p{
          font-size:13px;
          line-height:20px;
        }

        & + .workList{
          display:none;
        }
      }

      .title{
        font-size:20px;
      }

      .notice{
        margin-top:20px;
        font-size:13px;
        line-height:18px;

        span{
          display:inline;
        }
      }

      .tabs{
        margin-top:20px;

        a{
          width:60px;
          font-size:16px;
          line-height:36px;
        }
      }
    }

    .workList{
      padding:50px 0; 
      width:90%;

      .listDiv{
        margin-top:30px;

        .list{
          margin-left:20px; 
          width:calc(50% - 10px); 
          width:-webkit-calc(50% - 10px); 
          height:auto;

          &:nth-child(3n+1){
            margin-left:20px;
            clear:none;
          }

          &:nth-child(2n+1){
            margin-left:0;
            clear:both;
          }

          &:nth-child(n+4){
            margin-top:0;
          }

          &:nth-child(n+3){
            margin-top:20px;
          }

          .imgArea{
            height:auto;
          }

          .txtArea{
            padding:12px 15px;
            height:100px;

            .type{
              span{
                padding:3px 4px 1px; 
                margin-right:2px; 
                font-size:11px;
              }
            }

            .tit{
              margin-top:8px;
              font-weight:500;
              font-size:15px;
              line-height:22px;
            }
          }

          &:hover{
            .txtArea{
              .tit{
                span{
                  background-size:1px 3px;
                }
              }
            }
          }
        }

        &.maintenance{
          .list{
            height:auto;

            .txtArea{
              height:auto;

              .tit{
                height:44px;
              }

              a{
                padding-left:24px; 
                font-size:12px;
                line-height:16px;
                background-size:16px;

                &.no{
                  padding-left:24px; 
                  background-size:16px
                }
              }
            }
          }
        }

        &.proposal{
          &:before{
            display:block;
          }

          .list{
            height:116px;

            .txtArea{
              height:114px;

              .type{
                padding:3px 5px 0;
                font-size:11px;

                & + .tit{
                  margin-top:8px
                }
              }

              .tit{
                margin-top:24px;
                height:44px;
              }

              a{
                padding-left:24px; 
                font-size:12px;
                line-height:16px;
                background-size:16px;

                &.no{
                  padding-left:24px; 
                  background-size:16px
                }
              }
            }
          }
        }
      }
    }

    .toastPop{
      width:90%;
      padding:14px 10px; 
      font-weight:500; 
      font-size:13px; 
      line-height:16px; 
      color:#fff; 
      text-align:center; 
      border-radius:20px; 
      background:rgba(0, 0, 0, 0.7)
    }
  }

  @media all and (max-width:758px){

  }

  @media all and (max-width:520px){
    .workList{
      .listDiv{
        .list{
          margin-left:0;
          width:100%;

          &:nth-child(3n+1){
            margin-left:0;
            clear:none;
          }

          &:nth-child(n+3){
            margin-top:0;
          }

          &:nth-child(n+2){
            margin-top:15px
          }
        }
      }
    }
  }

</style>
