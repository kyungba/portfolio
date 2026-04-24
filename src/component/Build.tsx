import Data from 'data/build.json';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useDispatch } from 'react-redux';
import { popOpen } from 'reducer/popup';

interface BuildItem {
  app: string;
  color: string;
  href: string;
  id: string;
  imgSize: number;
  gifSize?: number;
  ing: string;
  name: string;
  responsive: string;
  skill?: string[];
}

const Build = () => {
  const directionRef = useRef<number>(0);
  const dispatch = useDispatch();

  const mouseEnter = (E: React.MouseEvent<HTMLDivElement>) => {
    const dimd = E.currentTarget.querySelector('.dimd') as HTMLElement;
    if (!dimd || window.innerWidth <= 981) return;

    const w = E.currentTarget.offsetWidth;
    const h = E.currentTarget.offsetHeight;
    const x = (E.pageX - E.currentTarget.offsetLeft - w / 2) * (w > h ? h / w : 1);
    const y = (E.pageY - E.currentTarget.offsetTop  - h / 2) * (h > w ? w / h : 1);
    directionRef.current = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

    dimd.style.display = 'block';
    if (directionRef.current === 0) {
      dimd.style.top = -h + 'px'; dimd.style.left = '0px';
    } else if (directionRef.current === 1) {
      dimd.style.top = '0px';    dimd.style.left = w + 'px';
    } else if (directionRef.current === 2) {
      dimd.style.top = h + 'px'; dimd.style.left = '0px';
    } else {
      dimd.style.top = '0px';    dimd.style.left = -w + 'px';
    }
    gsap.to(dimd, { top: 0, left: 0, duration: 0.35 });
  };

  const mouseLeave = (E: React.MouseEvent<HTMLDivElement>) => {
    const dimd = E.currentTarget.querySelector('.dimd') as HTMLElement;
    if (!dimd) return;

    const w = E.currentTarget.offsetWidth;
    const h = E.currentTarget.offsetHeight;
    const x = (E.pageX - E.currentTarget.offsetLeft - w / 2) * (w > h ? h / w : 1);
    const y = (E.pageY - E.currentTarget.offsetTop  - h / 2) * (h > w ? w / h : 1);
    directionRef.current = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

    if (directionRef.current === 0) {
      gsap.to(dimd, { top: -h, left: 0,  duration: 0.35, ease: 'Power3.out' });
    } else if (directionRef.current === 1) {
      gsap.to(dimd, { top: 0,  left: w,  duration: 0.35, ease: 'Power3.out' });
    } else if (directionRef.current === 2) {
      gsap.to(dimd, { top: h,  left: 0,  duration: 0.35, ease: 'Power3.out' });
    } else {
      gsap.to(dimd, { top: 0,  left: -w, duration: 0.35, ease: 'Power3.out' });
    }
  };

  const popOpenEvt = (data: BuildItem) => {
    if (data.ing === '') {
      dispatch(popOpen(data));
    } else {
      document.querySelector('.toastPop')?.remove();

      const toastPop = document.createElement('div');
      toastPop.classList.add('toastPop');
      toastPop.innerText = '현재 작업중인 프로젝트입니다';
      document.getElementById('root')!.append(toastPop);

      if (toastPop.offsetWidth % 2 !== 0) {
        toastPop.style.width = toastPop.offsetWidth - 1 + 'px';
      }
      gsap.to(toastPop, {
        bottom: 40, duration: 0.3, ease: 'Power3.out',
        onComplete() {
          gsap.to(this.targets(), {
            bottom: -200, duration: 0.3, delay: 2, ease: 'Power3.in',
            onComplete() { this.targets()[0].remove(); },
          });
        },
      });
    }
  };

  return (
    <div className="listDiv build">
      {Data.map((list) => (
        <div
          key={list.id}
          className={`list${list.ing ? ' ing' : ''}`}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onClick={() => popOpenEvt(list as BuildItem)}
        >
          <div className="imgArea">
            {list.ing
              ? <span>작업중</span>
              : <img src={require('assets/images/project_thumb_' + list.id + '.jpg')} alt={`${list.name} 프로젝트`} />
            }
          </div>
          <div className="txtArea">
            <div className="type">
              {list.ing && <span className="ing">작업중</span>}
              {list.responsive
                ? <span className="responsive">반응형</span>
                : <><span className="pcweb">PC</span><span className="mobweb">MOBILE</span></>
              }
              <span className="projectType">구축</span>
              {list.skill && (
                <div className="skillSet">
                  {list.skill.map((item, idx) => (
                    <span className="skill" key={idx}>{item}</span>
                  ))}
                </div>
              )}
            </div>
            <p className="tit"><span>{list.name}</span></p>
          </div>
          <p className="dimd" style={{ background: list.color }} />
        </div>
      ))}
    </div>
  );
};

export default Build;
