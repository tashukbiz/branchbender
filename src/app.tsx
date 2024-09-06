import { createRoot } from 'react-dom/client';
import { OuterPanel, Panel } from './uiKit/panel';
import { PanelResizeHandle } from 'react-resizable-panels';

const App = () => (
  <OuterPanel direction='horizontal'>
    <Panel defaultSize={30} minSize={20}>
      left
    </Panel>
    <PanelResizeHandle />
    <Panel minSize={20}>main</Panel>
  </OuterPanel>
);

const root = createRoot(document.body);
root.render(<App />);
