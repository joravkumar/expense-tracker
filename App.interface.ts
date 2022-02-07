export type RootStackParamList = {
  Login: undefined;
  AddExpense: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};
