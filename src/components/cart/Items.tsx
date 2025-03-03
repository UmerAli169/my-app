
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
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover"
        />
        <div className="flex-1 ml-4">
          <h3 className="font-semibold">{item.name}</h3>
          <div className="flex items-center mt-2">
            <button className="px-2 border rounded">-</button>
            <span className="mx-2">{item.quantity}</span>
            <button className="px-2 border rounded">+</button>
          </div>
        </div>
        <button className="text-red-500">✕</button>
      </div>
    );
  };
  
