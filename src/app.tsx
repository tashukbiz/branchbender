import { createRoot } from 'react-dom/client';
import { OuterPanel, Panel } from './uiKit/panel';
import { PanelResizeHandle } from 'react-resizable-panels';
import { BranchList } from './branchList';
import { Suspense } from 'react';
import { Status } from './status';

const Loading = () => <div>Loading...</div>;

const App = () => (
  <OuterPanel direction='horizontal'>
    <Panel defaultSize={30} minSize={20}>
      <Suspense fallback={<Loading />}>
        <BranchList />
      </Suspense>
    </Panel>
    <PanelResizeHandle />
    <Panel minSize={20}>
      <Suspense fallback={<Loading />}>
        <Status />
      </Suspense>
    </Panel>
  </OuterPanel>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
