import { atom, selector } from 'recoil';

export const repositoryPathQuery = selector({
  key: 'repositoryPath',
  get: async () => window.gitApi.selectRepositoryPath(),
});
export const branchesQuery = selector({
  key: 'branches',
  get: async () => window.gitApi.getBranches(repositoryPathQuery),
});

export const defaultBranchState = atom({
  key: 'defaultBranch',
  default: 'main',
});

export const currentBranchState = atom({
  key: 'currentBranch',
  default: defaultBranchState,
});
