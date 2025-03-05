// import React from "react";

// interface Item {
//   name: string;
//   quantity: number;
//   price: number;
//   image: string;
// }

// const OrderItem = ({ item }: { item: Item }) => {
//   return (
//     <div className="flex items-center gap-4 border-b pb-2">
//       <img src={item.image} alt={item.name} className="w-[100px]  object-cover rounded" />
//       <div>
//         <p className=" text-[16px] leading-[24px] font-medium text-[#383838]" >{item.name}</p>
//         <p className="text-[#697586]  text-[14px] leading-[20px] font-normal font-[Montserrat]">{item.quantity} Pcs</p>
//       </div> 
//       <p className="ml-auto text-[#697586]  text-[14px] leading-[21px] font-normal ">${(item.quantity * item.price).toFixed(2)}</p>
//     </div>
//   );
// };

// export default OrderItem;
