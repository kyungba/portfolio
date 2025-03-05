import { useSelector, useDispatch } from 'react-redux';
import { popClose } from 'reducer/popup'

const ViewPop = () => {
  const popData = useSelector((state:any) => state.popState.popData.payload )
  const dispatch = useDispatch()
  const popCloseEvt = (E:React.MouseEvent<HTMLButtonElement>) => {
    if(E.target === E.currentTarget){
      dispatch(popClose())
    }
  }

  let gifArr = [];
  for(let i=0; i<popData.gifSize; i++){
    gifArr.push(
      <img src={require('assets/images/project_view_' + popData.id + i + '.webp')} key={i} alt=""/>
    )
  }

  let imgArr = [];
  for(let i=0; i<popData.imgSize; i++){
    imgArr.push(
      <img src={require('assets/images/project_view_' + popData.id + i + '.jpg')} key={i} alt=""/>
    )
  }

  return (
    <>
      <div className="viewPop" onClick={() => popCloseEvt}>
        <div className="popCon">
          <div className="titArea">
            <p className="tit"><span>{ popData.name }</span></p>
            <span className="link">
              {
                (() => {
                  if (popData.href === 'intra') return <b>내부망 사이트라 링크를 제공하지 않습니다</b>
                  else if (popData.href === 'end') return <strong>내부 사정으로 인해 타 사이트 통합 혹은 운영 종료된 사이트입니다.</strong>
                  else return <a href={ popData.href } target="blank" rel="noreferrer" >VISIT SITE</a>
                })()
              }
            </span>
          </div>
          <div className="conArea">
            {
              popData.gifSize &&
              <div className="gifArea">
                { gifArr.map(list => {
                  return (
                    list
                  )
                })}
              </div>
            }
            <div className="imgArea">
              { imgArr.map(list => {
                return (
                  list
                )
              })}
            </div>
          </div>
          <button className="closeBtn" onClick={()=> dispatch(popClose())} />
        </div>
      </div>
  </>
  )
}
export default ViewPop