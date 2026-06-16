export type ParametrosRotasStack = {
  StackLogin: undefined;
  MainTabs: undefined;
};

export type ParametrosRotasTabs = {
  TabsHome: undefined;
  TabsNews: undefined;
  TabsGuard: undefined;
  TabsNotification: undefined;
  TabsMenu: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametrosRotasStack {}
    interface RootParamList extends ParametrosRotasTabs {}
  }
}