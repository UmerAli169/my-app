export const SampleSelection: React.FC = () => {
    return (
      <div className="mt-6">
        {" "}
        <h3 className="font-semibold mb-2">
          Pick 2 Free Samples with every order!
        </h3>
        <div className="flex gap-2 overflow-x-auto">
          {[1, 2, 3].map((sample) => (
            <button key={sample} className="border px-4 py-2 rounded text-sm">
              Sample {sample}
            </button>
          ))}
        </div>
      </div>
    );
  };