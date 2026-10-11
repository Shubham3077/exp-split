import { getCategoryById } from "../utils/categories";
import type { Transaction } from "../utils/transactionTypes";
import { useAppSelector } from "../store/hook";

type Props = {
  transactions: Transaction[];
};

const TransactionItems = ({ }: Props) => {
  const transactionsFromStore = useAppSelector((state) => state.transactions);
  return (
    <table className="w-full border-collapse">
      {transactionsFromStore.length === 0 ? (
        <p className="py-8 text-center text-sm text-gray-500">
          No transactions yet. Add your first transaction to get started.
        </p>
      ) : (
        // Render your transaction table here
        <tbody>
          {transactionsFromStore.map((transaction) => {
            const category = transaction.categoryId
              ? getCategoryById(transaction.categoryId)
              : undefined;

            return (
              <tr
                key={transaction.id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-200"

              >
                <td className="py-4 text-xs font-medium text-gray-900">
                  {transaction.title}
                </td>

                <td className="py-4 text-xs text-gray-600">
                  {category && (
                    <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1">
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </button>
                  )}
                </td>

                <td className="py-4 text-right text-xs font-medium text-gray-900">
                  ₹ {transaction.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default TransactionItems;
