<template>
  <div class="viewPop">
    <div class="popCon">
      <div class="titArea">
        <p class="tit"><span></span></p>
        <span class="link"><a href="javascript:" target="blank">VISIT SITE</a><b>내부망 사이트라 링크를 제공하지 않습니다</b><strong>내부 사정으로 인해 타 사이트 통합 혹은 운영 종료된 사이트입니다.</strong><i>서비스 종료로 인하여 마크업 페이지로 대체합니다.</i></span>
      </div>
      <div class="conArea">
        <div class="gifArea"></div>
        <div class="imgArea"></div>
        <div class="etcArea"></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectPop',
  components: {
  },
  data () {
      return {
      }
  },
}
</script>

<style lang="scss">
  @mixin floatClear{
    content:'';
    display:block;
    clear:both;
  }
  .viewPop{
    display:none; 
    position:fixed; 
    top:50%; 
    left:50%; 
    transform:translate(-50%, -50%); 
    width:1400px; 
    z-index:10; 
    opacity:0;
    word-break:keep-all;

    &.loading{
      &:before{
        content:''; 
        position:absolute; 
        top:50%; 
        left:50%; 
        width:60px; 
        height:60px; 
        background:url('@/assets/images//loading_blk.png') no-repeat center; 
        background-size:60px; 
        z-index:1; 
        animation:loadingAni 1s infinite; 
        -moz-animation:loadingAni 1s infinite; 
        -o-animation:loadingAni 1s infinite; 
        animation-timing-function:linear
      }
    }

    .popCon{
      position:relative; 
      padding:35px 0 0; 
      margin:0 auto; 
      background:#fff; 
      height:100%;

      .titArea{
        position:relative; 
        margin:0 auto 70px; 
        padding-bottom:33px; 
        width:calc(100% - 80px); 
        width:-webkit-calc(100% - 80px); 
        border-bottom:1px solid #c8c8c8;

        .tit{
          span{
            font-family:'Metropolis', 'Noto Sans KR'; 
            font-weight:500; 
            font-size:26px; 
            line-height:25px; 
            color:#333; 
            word-break:keep-all;
          }
        }

        .link{
          position:absolute; 
          top:80px; 
          left:0; 
          width:100%; 
          text-align:left;

          a{
            display:inline-block; 
            position:relative; 
            padding-right:16px; 
            font-weight:700; 
            font-size:20px; 
            line-height:22px; 
            color:#555; 
            background:url('@/assets/images//link_icon.png') no-repeat right 1px top 3px;
          }

          b, strong{
            display:none; 
            padding-left:34px; 
            font-family:'Noto Sans KR'; 
            font-weight:400; 
            font-size:15px; 
            line-height:22px; 
            color:#d84c4c; 
            background:url('@/assets/images//noLink.png') no-repeat left 1px center;
          }
          i{
            display:none;
          }

          &.intra{
            text-align:center;

            a, strong{
              display:none
            }

            b{
              display:inline-block; 
              font-family:'Noto Sans KR'; 
              font-weight:500; 
              font-size:14px; 
              color:#e64949;
            }
          }
          &.end{
            a, b{
              display:none
            }

            strong{
              display:inline-block; 
              font-family:'Noto Sans KR'; 
              font-weight:500; 
              font-size:14px; 
              color:#e64949;
            }
          }
          &.replace{
            b, strong{
              display:none
            }

            i{
              display:inline-block;
              margin-left:10px;
              font-style:normal;
              font-family:'Noto Sans KR'; 
              font-weight:500; 
              font-size:14px; 
              color:#e64949;
            }
          }
        }
      }

      .conArea{
        padding:0 40px 0; 
        height:calc(100% - 131px); 
        height:-webkit-calc(100% - 130px); 
        text-align:center; 
        overflow-y:auto;

        &::-webkit-scrollbar{
          -webkit-appearance:none; 
          width:16px; 
          height:calc(100% + 50px);
        }

        &::-webkit-scrollbar-thumb{
          background:#ddd; 
          border-radius:6px; 
          background-clip:padding-box; 
          border-left:4px solid transparent; 
          border-right:4px solid transparent;
        }

        &::-webkit-scrollbar-track{
          border-radius:4px; 
          background:none;
        }

        &:after{
          content:''; 
          display:block; 
          position:relative; 
          width:100%; 
          height:40px; 
          background:#fff
        }

        .imgArea{
          img{
            width:100%
          }
        }
        .gifArea{
          img{
            width:100%;
            margin-bottom:20px;
          }
        }

        .etcArea{
          text-align:left;

          &:after{
            @include floatClear;
          }
          
          .kind{
            float:left; 
            margin-left:20px; 
            width:calc(50% - 10px); 
            width:-webkit-calc(50% - 10px);

            &:first-child{
              margin-left:0;
            }

            .title{
              position:relative; 
              font-family:'Noto Sans KR'; 
              font-weight:400; 
              font-size:20px; 
              line-height:24px; 
              color:#333;

              a{
                position:absolute; 
                top:0; 
                right:0; 
                padding:0 9px; 
                height:24px; 
                font-size:12px; 
                line-height:22px; 
                color:#555; 
                border:1px solid #555; 
                border-radius:20px; 
                transition:color 0.4s ease, border 0.4s ease;

                &:hover{
                  color:#f22867;
                  border:1px solid #f22867;
                }
              }
            }
          }

          .proListD{
            margin-top:20px;

            ul{
              li{
                position:relative; 
                padding-left:14px; 
                margin-top:8px; 
                font-family:'Noto Sans KR'; 
                font-weight:300; 
                font-size:17px; 
                line-height:20px; 
                color:#666; 
                background:url('@/assets/images//dot3x3.gif') no-repeat left 9px;

                &:first-child{
                  margin-top:0;
                }

                &:after{
                  @include floatClear;
                }

                p{
                  float:left;
                  width:170px;
                }

                a{
                  float:left; 
                  margin-left:30px; 
                  padding-left:34px;
                  font-family:'Metropolis'; 
                  font-weight:400; 
                  color:#333;
                  background:url('@/assets/images//link_icon2.png') no-repeat left 1px center;

                  &.no{
                    pointer-events:none; 
                    font-family:'Noto Sans KR'; 
                    font-weight:300; 
                    color:#d84c4c; 
                    background:url('@/assets/images//noLink.png') no-repeat left 1px center;
                  }
                }

                span{
                  position:relative;
                  float:left; 
                  margin-left:30px; 
                  font-weight:400;
                  color:#333;
                }
              }
            }
          }
        }
      }

      .xBtn{
        position:absolute; 
        top:35px; 
        right:40px; 
        width:26px; 
        height:26px; 
        background:url('@/assets/images//viewPop_close.png') no-repeat; 
        background-size:cover;
      }
    }
  }

  @-webkit-keyframes loadingAni { 
    0%   {
      transform:translate(-50%, -50%) rotate(0deg)
    }
    100% {
      transform:translate(-50%, -50%) rotate(360deg)
    }
  }
  @-moz-keyframes loadingAni {
    0%   {
      transform:translate(-50%, -50%) rotate(0deg)
    }
    100% {
      transform:translate(-50%, -50%) rotate(360deg)
    }
  }
  @-o-keyframes loadingAni {
    0%   {
      transform:translate(-50%, -50%) rotate(0deg)
    }
    100% {
      transform:translate(-50%, -50%) rotate(360deg)
    }
  }
  @keyframes loadingAni {
    0%   {
      transform:translate(-50%, -50%) rotate(0deg)
    }
    100% {
      transform:translate(-50%, -50%) rotate(360deg)
    }
  }


  //Responsive
  @media all and (max-width:1560px){
    .viewPop{
      width:1100px
    }
  }

  @media all and (max-width:1280px){
    .viewPop{
      width:820px;
    }
  }

  @media all and (max-width:981px){
    .viewPop{
      width:90%;

      .popCon{
        padding:15px 0 0;

        .titArea{
          margin:0 auto 50px;
          padding-bottom:12px;
          width:calc(100% - 60px);
          width:-webkit-calc(100% - 60px);

          .tit{
            display:table;
            padding-right:35px;
            height:36px;

            span{
              display:table-cell;
              vertical-align:middle;
              font-size:15px;
              line-height:18px;
              color:#000;
            }
          }

          .link{
            top:65px;

            a{
              font-size:14px;
              line-height:1;
              background:url('@/assets/images/m_link_icon.png') no-repeat right 1px center;
              background-size:7px 12px;
            }

            b, strong{
              padding-left:24px;
              line-height:16px;
              background:url('@/assets/images/noLink.png') no-repeat left 1px center;
              background-size:16px;
            }
          }
        }

        .conArea{
          padding:0 30px 0;
          height:calc(100% - 99px);
          height:-webkit-calc(100% - 99px);

          &:after{
            height:26px;
          }

          .imgArea{
            width:100%;
          }
        }

        .xBtn{
          top:23px; 
          right:30px; 
          width:20px; 
          height:20px; 
          background:url('@/assets/images/m_viewPop_close.png') no-repeat; 
          background-size:cover;
        }
      }
    }
  }

  @media all and (max-width:758px){
    .viewPop{
      .popCon{
        .titArea{
          width:calc(100% - 40px);
          width:-webkit-calc(100% - 40px);

          .tit{
            padding-right:25px;
          }
        }

        .xBtn{
          right:20px;
        }
      }
    }
  }

  @media all and (max-width:340px){
    .viewPop{
      .popCon{
        .titArea{
          .link{
            b{
              font-size:13px
            }
          }
        }
      }
    }
  }
</style>