import { getCategoryById } from "../utils/categories";
import type { Transaction } from "../utils/transactionTypes";

type Props = {
  transactions: Transaction[];
};

const TransactionItems = ({ transactions }: Props) => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {transactions.map((transaction) => {
          const category = transaction.categoryId
            ? getCategoryById(transaction.categoryId)
            : undefined;

          return (
            <tr
              key={transaction.id}
              className="border-b border-gray-100 last:border-b-0"
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
    </table>
  );
};

export default TransactionItems;
