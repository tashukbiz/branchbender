import { Button, Classes, Tree, TreeNodeInfo } from '@blueprintjs/core';
import {
  branchesQuery,
  currentBranchState,
  repositoryPathQuery,
} from './git/state';
import { useAtom, useSetAtom } from 'jotai';

export const BranchList = () => {
  const [branches, refreshBranches] = useAtom(branchesQuery);
  const pickRepo = useSetAtom(repositoryPathQuery);
  const [currentBranch, setCurrentBranch] = useAtom(currentBranchState);

  const branchNodes = branches.map((branch) => ({
    id: branch,
    label: branch,
    isSelected: branch === currentBranch,
  }));

  const onRefreshClick = () => {
    refreshBranches();
  };
  const onBranchClick = (node: TreeNodeInfo) => {
    setCurrentBranch(node.id as string);
  };
  const onPickRepoClick = () => {
    pickRepo();
  };

  return (
    <div>
      <Button onClick={onRefreshClick}>Refresh</Button>
      <Button onClick={onPickRepoClick}>Repo</Button>
      <Tree
        contents={branchNodes}
        onNodeClick={onBranchClick}
        // onNodeCollapse={handleNodeCollapse}
        // onNodeExpand={handleNodeExpand}
        className={Classes.ELEVATION_0}
      />
    </div>
  );
};
