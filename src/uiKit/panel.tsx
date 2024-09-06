import { Panel as ResizablePanel, PanelGroup } from 'react-resizable-panels';
import { Colors } from '@blueprintjs/core';

export const OuterPanel: React.FC<React.PropsWithChildren> = ({ children }) => (
  <PanelGroup
    direction='horizontal'
    style={{
      background: Colors.GRAY5,
      width: '100%',
      height: '100%',
    }}
  >
    {children}
  </PanelGroup>
);

export const Panel: React.FC<
  React.ComponentPropsWithRef<typeof ResizablePanel>
> = (props) => (
  <ResizablePanel
    {...props}
    style={{
      background: Colors.WHITE,
      border: `1px solid ${Colors.GRAY5}`,
      borderRadius: 2,
    }}
  />
);
