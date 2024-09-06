import { createRoot } from 'react-dom/client';
import { OuterPanel, Panel } from './uiKit/panel';
import { PanelResizeHandle } from 'react-resizable-panels';
import { RecoilRoot } from 'recoil';
import { BranchList } from './branchList';
import { Suspense } from 'react';
import { Status } from './status';

const App = () => (
  <RecoilRoot>
    <OuterPanel direction='horizontal'>
      <Panel defaultSize={30} minSize={20}>
        <Suspense fallback={<div>Loading...</div>}>
          <BranchList />
        </Suspense>
      </Panel>
      <PanelResizeHandle />
      <Panel minSize={20}>
        <Status />
      </Panel>
    </OuterPanel>
  </RecoilRoot>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
