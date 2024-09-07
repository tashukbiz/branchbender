// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';
import { GitHandles } from './ipcHandles';

contextBridge.exposeInMainWorld('gitApi', {
  selectRepositoryPath: () =>
    ipcRenderer.invoke(GitHandles.SelectRepositoryPath),
  getBranches: (repositoryPath: string) =>
    ipcRenderer.invoke(GitHandles.GetBranches, repositoryPath),
});
