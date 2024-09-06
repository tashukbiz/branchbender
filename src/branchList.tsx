import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { Button, Classes, Tree, TreeNodeInfo } from '@blueprintjs/core';
import { branchesQuery, currentBranchState } from './git/state';

export const BranchList = () => {
  const branches = useRecoilValue(branchesQuery);
  const refreshBranches = useRecoilRefresher_UNSTABLE(branchesQuery);

  const [currentBranch, setCurrentBranch] = useRecoilState(currentBranchState);

  const branchNodes = branches.map((branch) => ({
    id: branch,
    label: branch,
    isSelected: branch === currentBranch,
  }));

  const handleBranchClick = (node: TreeNodeInfo) => {
    setCurrentBranch(node.id as string);
  };

  return (
    <div>
      <Button onClick={refreshBranches}>Refresh</Button>
      <Tree
        contents={branchNodes}
        onNodeClick={handleBranchClick}
        // onNodeCollapse={handleNodeCollapse}
        // onNodeExpand={handleNodeExpand}
        className={Classes.ELEVATION_0}
      />
    </div>
  );
};
