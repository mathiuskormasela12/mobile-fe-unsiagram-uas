export type RootScreenHook = () => {
  onLayoutRootView: () => Promise<void>
  isAppReady: boolean
}
