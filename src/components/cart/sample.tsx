import Button from "@/views/ui/shared/Button";

export const SampleSelection: React.FC = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
  <img src="/svgs/cart/lock.svg" alt="" className="w-5 h-5" />
  <h3 className="font-semibold mb-2">Pick 2 Free Samples with every order!</h3>
</div>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((sample) => (
          <div key={sample} className="border rounded-lg p-3 text-center shadow-sm">
            <img src={`/cart/sample.png`} alt={`Sample ${sample}`} className="w-full h-24 object-cover rounded-md mb-2" />
            <Button className="border px-[17px] py-[2px] rounded text-[12px] w-full max-w-[106px] font-normal text-[#383838]">
              ADD
            </Button>
            <p className="text-xs mt-1 text-gray-600">The Dewy Skin Cream</p>
          </div>
        ))}
      </div>
    </div>
  );
};
