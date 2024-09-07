import { atom } from 'jotai';
import { atomWithDefault, atomWithRefresh } from 'jotai/utils';

const gitApi = (window as any).gitApi;

export const repositoryPathQuery = atomWithRefresh(
  async () => gitApi.selectRepositoryPath() as Promise<string>
);
export const branchesQuery = atomWithRefresh(async (get) => {
  const repositoryPath = await get(repositoryPathQuery);
  const branches = await (gitApi.getBranches(repositoryPath) as Promise<
    string[]
  >);
  return branches.map((branch) => branch.replace(/^\*\s+/, '')).filter(Boolean);
});
export const defaultBranchState = atom('main');

export const currentBranchState = atomWithDefault((get) =>
  get(defaultBranchState)
);
