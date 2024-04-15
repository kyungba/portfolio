import Data from 'data/build.json'
import { gsap } from "gsap";
import { useDispatch } from 'react-redux';
import { popOpen } from 'reducer/popup'

const Build = () => {
  let w, h, x, y, direction;
  const mouseEnter = (E) => {
    let dimd = E.currentTarget.querySelector(".dimd")

    if(window.innerWidth > 981){
      w = E.currentTarget.offsetWidth;
      h = E.currentTarget.offsetHeight;
      x = ( E.pageX - E.currentTarget.offsetLeft - ( w/2 )) * ( w > h ? ( h/w ) : 1 )
      y = ( E.pageY - E.currentTarget.offsetTop  - ( h/2 )) * ( h > w ? ( w/h ) : 1 )
      direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4
      dimd.style.display = "block"

      if(direction === 0) {
        dimd.style.top = -h+"px";
        dimd.style.left = 0;
      } else if(direction === 1) {
        dimd.style.top = 0;
        dimd.style.left = w+"px";
      } else if(direction === 2) {
        dimd.style.top = h+"px";
        dimd.style.left = 0;
      } else {
        dimd.style.top = 0;
        dimd.style.left = -w+"px";
      }
      gsap.to(dimd, {top:0, left:0, duration:0.35});
    }
  }
  const mouseLeave = (E) => {
    let dimd = E.currentTarget.querySelector(".dimd")
    w = E.currentTarget.offsetWidth;
    h = E.currentTarget.offsetHeight;
    x = ( E.pageX - E.currentTarget.offsetLeft - ( w/2 )) * ( w > h ? ( h/w ) : 1 )
    y = ( E.pageY - E.currentTarget.offsetTop  - ( h/2 )) * ( h > w ? ( w/h ) : 1 )
    direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;

    if(direction === 0) {
      gsap.to(dimd, {top:-h, left:0, duration:0.35,ease:"Power3.out"});
    } else if(direction === 1) {
      gsap.to(dimd, {top:0, left:w, duration:0.35,ease:"Power3.out"});
    } else if(direction === 2) {
      gsap.to(dimd, {top:h, left:0, duration:0.35,ease:"Power3.out"});
    } else {
      gsap.to(dimd, {top:0, left:-w, duration:0.35,ease:"Power3.out"});
    }
  }
  const dispatch = useDispatch()
  const popOpenEvt = (data) => {
    if(data.ing === ''){
      dispatch(popOpen(data))
    }else{
      if (document.querySelector(".toastPop") != null) {
        document.querySelector(".toastPop").remove();
      }
      let toastPop = document.createElement('div');
      toastPop.classList.add("toastPop");
      toastPop.innerText = "현재 작업중인 프로젝트입니다";

      document.getElementById("root").append(toastPop);
      if(document.querySelector(".toastPop").offsetWidth % 2 !== 0){
        document.querySelector(".toastPop").style.width = document.querySelector(".toastPop").offsetWidth - 1+"px";
      }

      gsap.to(document.querySelector(".toastPop"), {bottom:40, duration:0.3, ease:"Power3.out", onComplete:function(){
        gsap.to(this.targets(), {bottom:-200, duration:0.3, delay:2, ease:"Power3.in", onComplete:function(){
          this.targets()[0].remove();
        }})
      }})
    }
  }
  return (
    <>
      <div className="listDiv build">
        { Data.map(list => {
          return (
            <div className={"list" + (list.ing && " ing")} key={list.id} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={() => popOpenEvt(list)}>
              <div className="imgArea">
                {
                  list.ing
                  ? <span>작업중</span>
                  : <img src={require('assets/images/project_thumb_' + list.id + '.jpg')} alt=""/>
                }
              </div>
              <div className="txtArea">
                <p className="type">
                  {
                    list.ing && <span className="ing">작업중</span>
                  }
                  {
                    list.responsive
                    ? <span className="responsive">반응형</span>
                    : <><span className="pcweb">PC</span></>
                  }
                  <span className="projectType">구축</span>
                  {
                    list.skill && <span className="skill">{ list.skill }</span>
                  }
                </p>
                <p className="tit"><span>{list.name}</span></p>
              </div>
              <p className="dimd" style={{background:list.color}} />
            </div>
          )
        })}
      </div>
  </>
  )
}
export default Build