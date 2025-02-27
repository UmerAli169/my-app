export default function FilterSidebar() {
    return (
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-lg font-bold">Filters</h2>
        <div>
          <label className="block">
            <input type="checkbox" /> Under $25
          </label>
          <label className="block">
            <input type="checkbox" /> $25 - $50
          </label>
        </div>
      </div>
    );
  }
  