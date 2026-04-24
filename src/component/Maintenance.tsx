import Data from 'data/maintenance.json'

const Maintenance = () => {
  return (
    <>
      <div className="listDiv maintenance">
        { Data.map(list => {
          return (
            <div className="list" key={list.id}>
              <div className="txtArea">
                <p className="tit"><span>{ list.name }</span></p>
                { 
                  list.framework && <div className="framework">{ list.framework }</div>
                }
                {
                  list.reason === ''
                  ? <a href={list.href} target="_blank" rel="noreferrer" className="link">Link</a>
                  : <span className="link no">{ list.reason }</span>
                }
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Maintenance