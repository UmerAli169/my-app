interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}
export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <img
        src={item.image || "/cart/cart1.png"}
        alt={item.name}
        className="w-16 h-16 object-cover"
      />
      <div className="flex-1 gap-[10px] ml-4">
        <h3 className="font-semibold">{item.name}</h3>
        <h3 className="font-semibold">{item.price }</h3>

        <div className="flex items-center mt-2">
          <div className="border rounded-[4px]">

          <button className="px-2  rounded">-</button>
          <span className="mx-2">{item.quantity || "12"}</span>
          <button className="px-2  rounded">+</button>
          </div>
          <div className=" ml-[10px] filter invert w-[8px]">

          <img src="/svgs/Shared/cross/cross.svg" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
