import Data from 'data/proposal.json'

const Proposal = () => {
  return (
    <>
      <p className="notice">
        <span>제안프로젝트는 정해진 해상도 크기에서 정해진 히스토리(짜여진 순서)로만 동작하게 구현되어 있어서 </span>
        틀어지는 부분이나 논리적으로 동작하지 않는 부분이 있고,크롬브라우저 / <u>해상도 1920 * 1080 기준으로만</u> 작업되어 있습니다.<br />
        따라서 해당 페이지도 PC에서만 확인가능합니다.<br /><br />
        
        클릭이나 마우스오버 영역에서의 인터렉션 위주로 봐주시면 되고, 아래방향으로의 순차적인 클릭을 다 한 경우나 헤더 영역 클릭시 다음 페이지로 이동됩니다.<br /><br />
        
      </p>
      <div className="listDiv proposal">
        { Data.map(list => {
          return (
            <div className="list" key={list.id}>
              <div className="txtArea">
                {
                  list.result && <p className="type">수주</p>
                }
                <p className="tit"><span>{ list.name }</span></p>
                {
                  list.href && <a href={ list.href } target="_blank" rel="noreferrer" className="link">Link</a>
                }
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Proposal