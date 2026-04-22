import { useState } from 'react';
import Build from 'component/Build';
import Maintenance from 'component/Maintenance';
import Proposal from 'component/Proposal';
import ViewPop from 'component/ViewPop';
import { useSelector } from 'react-redux';
import { RootState } from 'store'; 

function App() {
  const [tabN, setTabN] = useState<number>(0);
  const isPop = useSelector((state: RootState) => state.popState.isPop);

  return (
    <>
      <p className="title">Portfolio</p>
      <div className="tabs">
        <button className={tabN === 0 ? 'on' : undefined} onClick={() => setTabN(0)}>구축</button>
        <button className={tabN === 1 ? 'on' : undefined} onClick={() => setTabN(1)}>운영</button>
        <button className={tabN === 2 ? 'on' : undefined} onClick={() => setTabN(2)}>제안</button>
      </div>
      {
        {
          0: <Build />,
          1: <Maintenance />,
          2: <Proposal />,
        }[tabN]
      }
      {isPop && <ViewPop />}
    </>
  );
}

export default App;
