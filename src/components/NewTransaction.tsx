import {
  CalendarDaysIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../index.css";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import {
  transactionType,
  type TransactionTypeId,
  type TransactionForm,
  type Transaction
} from "../utils/transactionTypes";
import CategoryModal from "./CategoryModal";
import { getCategoryById, type CategoryId } from "../utils/categories";
import { useAppDispatch } from "../store/hook";
import { addTransaction } from "../store/transactions/transactionSlice";


type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCategoryClick?: () => void;
};

const TransactionModal = ({
  isOpen,
  onClose,
}: TransactionModalProps) => {

  const [form, setForm] = useState<TransactionForm>({
    amount: Number(""),
    typeId: "expense",
    date: new Date(),
    description: "",
    categoryId: undefined,
    recurring: false,
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  if (!isOpen) return null;

  // Form handlers
  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      amount: Number(e.target.value),
    }));
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }

  function handleTypeChange(typeId: TransactionTypeId) {
    setForm((prev) => ({
      ...prev,
      typeId,
    }));
  }

  function handleDateSelect(selectedDate: Date | undefined) {
    if (!selectedDate) return;
    setForm((prev) => ({
      ...prev,
      date: selectedDate,
    }));
    setShowCalendar(false);
  }

  function handleSelectToday() {
    setForm((prev) => ({
      ...prev,
      date: new Date(),
    }));

    setShowCalendar(false);
  }

  // what to do when the user selects reoccuring ? 

  // function handleRecurringToggle() {
  //   setForm((prev) => ({
  //     ...prev,
  //     recurring: !prev.recurring,
  //   }));
  // }

  function handleCategorySelect(categoryId: CategoryId) {
    setForm((prev) => ({
      ...prev,
      categoryId,
    }));

    setShowCategoryModal(false);
  }

  const selectedCategory = form.categoryId
    ? getCategoryById(form.categoryId)
    : undefined;
  
  const dispatch = useAppDispatch();

  // Submit
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Form data:", form);
    if (!form.amount || Number(form.amount) <= 0) {
      // throw new Error("Your transaction amount cannot be 0 or empty");
      return;
    }
    if (!form.description.trim()) {
      return;
    }
    const userTransaction: Transaction = {
      id: crypto.randomUUID(),
      title: form.description,
      amount: form.amount,
      typeId: form.typeId,
      date: form.date.toISOString(),
      categoryId: form.categoryId,
      recurring: form.recurring,
    };

    // Later:
    dispatch(addTransaction(userTransaction));
    onClose()

  }

  const formattedDate = form.date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onClick={onClose}
    >
      <form
        className="w-full max-w-md overflow-visible rounded-3xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div className="relative flex items-center justify-center px-6 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="absolute left-6 top-6 rounded-full transition-colors hover:bg-gray-100"
            aria-label="Close"
          >
            <XMarkIcon className="size-5 stroke-2" />
          </button>

          <h2 className="text-medium font-medium">New Transaction</h2>
        </div>

        <div className="px-6 pb-4 pt-4">
          {/* Amount */}
          <div className="flex items-center justify-center">
            <input
              type="number"
              onWheelCapture={(e) => e.preventDefault()}
              placeholder=""
              className="w-full bg-transparent text-center text-5xl font-bold tracking-tight outline-none"
              autoFocus
              value={form.amount}
              onChange={handleAmountChange}
            />

            <span className="text-2xl font-medium text-gray-300">₹</span>
          </div>

          {/* Date */}
          <div className="relative mt-3">
            <button
              type="button"
              onClick={() => setShowCalendar((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-2xl border border-gray-200 px-4 py-2 text-left"
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-500">Date</p>

                <p className="mt-0.5 text-sm font-medium">{formattedDate}</p>
              </div>

              <CalendarDaysIcon className="size-5 text-gray-500" />
            </button>

            {/* Calendar */}
            {showCalendar && (
              <div
                className="absolute right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={handleDateSelect}
                  className="p-3 [--cell-size:2.25rem]"
                />

                <div className="border-t border-gray-100 px-3 py-2">
                  <button
                    type="button"
                    onClick={handleSelectToday}
                    className="w-full rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Select Today
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Transaction Type */}
          <div className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-gray-100 p-1">
            {transactionType.map((type) => {
              const Icon = type.icon;
              const isSelected = form.typeId === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleTypeChange(type.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-400"
                  }`}
                >
                  <Icon className={`size-4 ${type.color}`} />

                  {type.label}
                </button>
              );
            })}
          </div>

          {/* Description */}
          <div className="mt-3 flex items-center rounded-2xl bg-gray-50 px-5">
            <input
              type="text"
              placeholder="Description"
              className="h-16 w-full bg-transparent text-base outline-none placeholder:text-gray-400"
              value={form.description}
              onChange={handleDescriptionChange}
            />

            <DocumentTextIcon className="size-6 text-gray-400" />
          </div>

          {/* Category */}
          <button
            type="button"
            onClick={() => setShowCategoryModal(true)}
            className="mt-2 flex h-16 w-full items-center justify-between rounded-2xl bg-gray-50 px-5 text-left"
          >
            <div className="flex items-center gap-3">
              {selectedCategory ? (
                <>
                  <span className="text-xl">{selectedCategory.icon}</span>

                  <span className="text-base font-medium text-gray-900">
                    {selectedCategory.label}
                  </span>
                </>
              ) : (
                  <span className="text-base text-gray-400">Category</span>
              )}
            </div>

            <ChevronDownIcon className="size-5 text-gray-500" />
          </button>

          {
            <div className="">
              {showCategoryModal && (
                <CategoryModal
                  onClose={() => setShowCategoryModal(false)}
                  onCategorySelect={handleCategorySelect}
                />
              )}
            </div>
          }

          {/* Recurring */}
          {/* <div className="mt-4 flex items-start gap-4 px-1">
            <div className="mt-0.5">
              <CalendarDaysIcon className="size-6" />
            </div>

            <div className="flex-1">
              <p className="text-base font-medium">Add as recurring</p>

              <p className="mt-1 max-w-xs text-sm leading-5 text-gray-400">
                This transaction will be added again the following months at the
                same day as today
              </p>
            </div>

            <button
              type="button"
              onClick={handleRecurringToggle}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                form.recurring ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-label="Toggle recurring transaction"
            >
              <span
                className={`absolute top-1 size-5 rounded-full bg-white shadow-sm transition-all ${
                  form.recurring ? "right-1" : "left-1"
                }`}
              />
            </button>
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 h-14 w-full rounded-full bg-[#292929] text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionModal;
