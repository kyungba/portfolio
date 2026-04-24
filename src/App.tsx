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
  const TABS = ['구축', '운영', '제안'] as const;

  return (
    <>
      <h1 className="title">Portfolio</h1>
      <div role="tablist" className="tabs" aria-label="포트폴리오 카테고리">
        {TABS.map((label, idx) => (
          <button key={idx} className={tabN === idx ? 'on' : undefined} role="tab" onClick={() => setTabN(idx)}>
            {label}
          </button>
        ))}
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
