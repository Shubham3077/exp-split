import type { CategoryId } from "./categories";


export const transactionType = [
  {
    id: "expense",
    label: "Expense",
  },
  {
    id: "income",
    label: "Income",
  },
  {
    id: "transfer",
    label: "Transfer",
  },
  {
    id: "investment",
    label: "Investment",
  },
] as const;

export type TransactionTypeId =
  (typeof transactionType)[number]["id"];

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  typeId: TransactionTypeId;
  categoryId?: CategoryId;
  date: string;
  note?: string;
};


export const transactions: Transaction[] = [
  {
    id: "1",
    title: "Netflix",
    amount: 4500,
    typeId: "expense",
    categoryId: "streaming",
    date: "2026-09-04",
  },
  {
    id: "2",
    title: "Salary",
    amount: 85000,
    typeId: "income",
    categoryId: "job",
    date: "2026-09-01",
  },
  {
    id: "3",
    title: "Spotify",
    amount: 199,
    typeId: "expense",
    categoryId: "streaming",
    date: "2026-09-03",
  },
  {
    id: "4",
    title: "Amazon",
    amount: 3200,
    typeId: "expense",
    categoryId: "shopping",
    date: "2026-09-02",
  },
  {
    id: "5",
    title: "Freelance Project",
    amount: 25000,
    typeId: "income",
    categoryId: "freelance",
    date: "2026-09-01",
  },
  {
    id: "6",
    title: "Investment Return",
    amount: 12000,
    typeId: "investment",
    categoryId: "investment",
    date: "2026-09-01",
  },
];
