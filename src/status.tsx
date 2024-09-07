import { useAtomValue } from 'jotai';
import {
  currentBranchState,
  defaultBranchState,
  repositoryPathQuery,
} from './git/state';

export const Status = () => {
  const repositoryPath = useAtomValue(repositoryPathQuery);
  const defaultBranch = useAtomValue(defaultBranchState);
  const currentBranch = useAtomValue(currentBranchState);

  return (
    <div>
      <p>Working directory: {repositoryPath}</p>
      <p>Default branch: {defaultBranch}</p>
      <p>Current branch: {currentBranch}</p>
    </div>
  );
};
