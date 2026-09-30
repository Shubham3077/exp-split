import { useState } from "react";
import CategoryModal from "./CategoryModal";
import Dropdown from "./Dropdown";
import { transactions, transactionType } from "../utils/transactionTypes";
import TransactionItems from "./TransactionItems";
import NewTransaction from "./NewTransaction";

const Transactions = () => {
  const [isCategoryModal, setIsCategoryModal] = useState(false);
  const [transaction, setTransaction] = useState("Type");
  const transactionTypes = transactionType.map((t) => t.label);
  const [newTransationModal, setNewTransactionModal] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-lg font-semibold">Transactions</h3>
          <p className="text-xs font-light text-gray-400">
            This month 2 incomes and 3 expenses
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Dropdown
            name="type"
            value={transaction}
            options={transactionTypes}
            onChange={(value) => setTransaction(value)}
          />
          <button
            className="bg-gray-200 text-black rounded-2xl px-3 py-1 text-xs"
            onClick={() => setIsCategoryModal((prev) => !prev)}
          >
            Category
          </button>
          <button
            className="border bg-black text-white rounded-2xl px-3 py-1 text-xs"
            onClick={() => setNewTransactionModal((prev) => !prev)}
          >
            + Add
          </button>
        </div>
      </div>

      {isCategoryModal && (
        <CategoryModal onClose={() => setIsCategoryModal(false)} />
      )}

      {newTransationModal && (
        <NewTransaction
          isOpen={newTransationModal}
          onClose={() => setNewTransactionModal(false)}
        />
      )}

      <TransactionItems transactions={transactions} />
    </div>
  );
};

export default Transactions;
