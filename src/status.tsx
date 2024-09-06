import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentBranchState,
  defaultBranchState,
  repositoryPathQuery,
} from './git/state';

export const Status = () => {
  const repositoryPath = useRecoilValue(repositoryPathQuery);
  const [defaultBranch] = useRecoilState(defaultBranchState);
  const [currentBranch] = useRecoilState(currentBranchState);

  return (
    <div>
      <p>Working directory: {repositoryPath}</p>
      <p>Default branch: {defaultBranch}</p>
      <p>Current branch: {currentBranch}</p>
    </div>
  );
};
