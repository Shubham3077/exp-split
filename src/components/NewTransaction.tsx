import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../index.css"

type TransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCategoryClick?: () => void;
};

const TransactionModal = ({
  isOpen,
  onClose,
  onCategoryClick,
}: TransactionModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
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

        <div className="px-6 pb-7 pt-8">
          {/* Amount */}
          <div className="flex items-center justify-center">
            <input
              type="number"
              onWheelCapture={(e) => e.preventDefault()}
              placeholder=""
              className="w-full bg-transparent text-center text-5xl font-bold tracking-tight outline-none placeholder:text-black"
              autoFocus
            />

            <span className="text-2xl font-medium text-gray-300">₹</span>
          </div>

          {/* Date */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-between rounded-2xl border border-gray-200 px-5 py-2 text-left"
          >
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="mt-0.5 text-base font-medium">Today</p>
            </div>

            <CalendarDaysIcon className="size-5 text-gray-500" />
          </button>

          {/* Transaction Type */}
          <div className="mt-5 grid grid-cols-3 rounded-2xl bg-gray-100 p-1">
            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white px-2 py-3 text-sm font-medium shadow-sm"
            >
              <ArrowDownLeftIcon className="size-4 text-red-500" />
              Expense
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-sm text-gray-400"
            >
              <ArrowUpRightIcon className="size-4" />
              Income
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-sm text-gray-400"
            >
              ↗ Investment
            </button>
          </div>

          {/* Description */}
          <div className="mt-5 flex items-center rounded-2xl bg-gray-50 px-5">
            <input
              type="text"
              placeholder="Description"
              className="h-16 w-full bg-transparent text-base outline-none placeholder:text-gray-400"
            />

            <DocumentTextIcon className="size-6 text-gray-400" />
          </div>

          {/* Category */}
          <button
            type="button"
            onClick={onCategoryClick}
            className="mt-5 flex h-16 w-full items-center justify-between rounded-2xl bg-gray-50 px-5 text-left"
          >
            <span className="text-base text-gray-400">Category</span>

            <ChevronDownIcon className="size-5 text-gray-500" />
          </button>

          {/* Recurring */}
          <div className="mt-7 flex items-start gap-4 px-1">
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

            {/* Toggle */}
            <button
              type="button"
              className="relative h-7 w-12 rounded-full bg-green-500 transition-colors"
              aria-label="Toggle recurring transaction"
            >
              <span className="absolute right-1 top-1 size-5 rounded-full bg-white shadow-sm" />
            </button>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="mt-8 h-14 w-full rounded-full bg-[#292929] text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
