import { useState } from 'react'
import Build from 'component/Build'
import Maintenance from 'component/Maintenance'
import Proposal from 'component/Proposal'
import ViewPop from 'component/ViewPop'
import { useSelector } from 'react-redux';

function App() {
  const [tabN, setTabN] = useState(0)
  const clickTab = (idx:number) => {
    setTabN(idx)
  }
  const isPop = useSelector((state :any) => state.popState.isPop )
  
  return (
    <>
      <p className="title">Portfolio</p>
      <div className="tabs">
        <button className={(tabN === 0 ? "on" : undefined)} onClick={() => clickTab(0)}>구축</button>
        <button className={(tabN === 1 ? "on" : undefined)} onClick={() => clickTab(1)}>운영</button>
        <button className={(tabN === 2 ? "on" : undefined)} onClick={() => clickTab(2)}>제안</button>
      </div>
      {
        {
          0 : <Build />,
          1 : <Maintenance />,
          2 : <Proposal />
        }[tabN]
      }
      {
        isPop && <ViewPop />
      }
    </>
  );
}

export default App;
