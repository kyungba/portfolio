import { useSelector, useDispatch } from 'react-redux';
import { popClose } from 'reducer/popup';
import { RootState } from 'store'; 

const ViewPop = () => {
  const popData = useSelector((state: RootState) => state.popState.popData);
  const dispatch = useDispatch();

  if (!popData) return null;

  const popCloseEvt = (E: React.MouseEvent<HTMLDivElement>) => {
    if (E.target === E.currentTarget) {
      dispatch(popClose());
    }
  };

  const gifArr = [];
  for (let i = 0; i < (popData.gifSize ?? 0); i++) {
    gifArr.push(
      <img src={require('assets/images/project_view_' + popData.id + i + '.webp')} key={i} alt="" />
    );
  }

  const imgArr = [];
  for (let i = 0; i < popData.imgSize; i++) {
    imgArr.push(
      <img src={require('assets/images/project_view_' + popData.id + i + '.jpg')} key={i} alt="" />
    );
  }

  return (
    <div className="viewPop" onClick={(e) => popCloseEvt(e)}>
      <div className="popCon">
        <div className="titArea">
          <p className="tit"><span>{popData.name}</span></p>
          <span className="link">
            {(() => {
              if (popData.href === 'intra') return <b>내부망 사이트라 링크를 제공하지 않습니다</b>;
              if (popData.href === 'end')   return <strong>내부 사정으로 인해 타 사이트 통합 혹은 운영 종료된 사이트입니다.</strong>;
              return <a href={popData.href} target="_blank" rel="noopener noreferrer">VISIT SITE</a>;
            })()}
          </span>
        </div>
        <div className="conArea">
          {popData.gifSize && (
            <div className="gifArea">
              {Array.from({ length: popData.gifSize }, (_, i) => (
                <img
                  src={require(`assets/images/project_view_${popData.id}${i}.webp`)}
                  key={i}
                  alt={`${popData.name} 애니메이션 ${i + 1}`}
                />
              ))}
            </div>
          )}
          <div className="imgArea">
            {Array.from({ length: popData.imgSize }, (_, i) => (
              <img
                src={require(`assets/images/project_view_${popData.id}${i}.jpg`)}
                key={i}
                alt={`${popData.name} 이미지 ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <button className="closeBtn" onClick={() => dispatch(popClose())} />
      </div>
    </div>
  );
};

export default ViewPop;
