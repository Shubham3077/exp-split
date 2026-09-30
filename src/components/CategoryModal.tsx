import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { categoryOptions } from "../utils/categories";

type CategoryProps = {
  onClose: () => void;
};

const CategoryModal = ({ onClose }: CategoryProps) => {
  return (
    // backdrop
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 p-4"
      onClick={onClose}
    >
      {/* modal */}
      <div
        className="w-full max-w-md max-h-[50vh] overflow-hidden rounded-2xl bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <button onClick={onClose}>
            <XMarkIcon className="size-5 font-bold" />
          </button>

          <button className="flex items-center gap-1">
            <PlusIcon className="size-3" />
            <span className="text-sm font-medium">New Category</span>
          </button>
        </div>

        {/* Search */}
        <div className="px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-2xl border border-gray-300 px-4 py-1 text-medium outline-none"
          />
        </div>

        {/* {Actual Categories} */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="space-y-7">
            {categoryOptions.map((group) => (
              <section key={group.id}>
                <h2 className="text-xs font-light text-gray-400">
                  {group.title}
                </h2>

                <div className="flex flex-wrap gap-3 mt-2">
                  {group.categories.map((category) => (
                    <button
                      key={category.id}
                      className="flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1 text-xs"
                    >
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
