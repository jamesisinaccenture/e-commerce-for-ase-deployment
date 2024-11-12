
// import React, { useState } from 'react';
// import { MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Product } from '@/models/auth.model';  // Import the Product interface
// const CartPage: React.FC = () => {
//   // Sample cart data
//   const [cartItems, setCartItems] = useState<Product[]>([
//     {
//       product_id: "1",
//       product_name: "Cherry Mobile x22",
//       product_img: "/api/placeholder/80/80",
//       product_description: "A reliable mobile phone",
//       category: "Mobile",
//       price: 24,
//       currency: "USD",
//       date_created: "2024-01-01",
//       created_by: "Cherry Mobile",
//       quantity: 1
//     },
//     {
//       product_id: "2",
//       product_name: "Cherry Mobile x22",
//       product_img: "/api/placeholder/80/80",
//       product_description: "A reliable mobile phone",
//       category: "Mobile",
//       price: 24,
//       currency: "USD",
//       date_created: "2024-01-01",
//       created_by: "Cherry Mobile",
//       quantity: 1
//     }
//   ]);
//   const handleQuantityChange = (product_id: string, newQuantity: number) => {
//     setCartItems((items) =>
//       items.map((item) =>
//         item.product_id === product_id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
//       )
//     );
//   };
//   const handleManualQuantityChange = (product_id: string, event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(event.target.value, 10) || 1;
//     handleQuantityChange(product_id, value);
//   };
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const totalProducts = cartItems.length;
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-medium mb-8">Cart</h1>
//       <div className="mb-8">
//         <div className="grid grid-cols-12 gap-4 mb-4 px-4 text-gray-600">
//           <div className="col-span-6">
//             <h2>Product</h2>
//           </div>
//           <div className="col-span-4 text-center">
//             <h2>Quantity</h2>
//           </div>
//           <div className="col-span-2 text-right">
//             <h2>Price</h2>
//           </div>
//         </div>
//         <div className="space-y-4">
//           {cartItems.map((item) => (
//             <div key={item.product_id} className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg">
//               <div className="col-span-6">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={item.product_img}
//                     alt={item.product_name}
//                     className="w-20 h-20 rounded-md object-cover"
//                   />
//                   <div>
//                     <h3 className="font-medium">{item.product_name}</h3>
//                     <p className="text-sm text-gray-500">Category: {item.category}</p>
//                     <p className="text-sm text-gray-500">Created by: {item.created_by}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-span-4">
//                 <div className="flex items-center justify-center space-x-2">
//                   <Button 
//                     variant="outline" 
//                     size="icon"
//                     onClick={() => handleQuantityChange(item.product_id, item.quantity - 1)}
//                     className="h-8 w-8"
//                   >
//                     <MinusCircle className="h-4 w-4" />
//                   </Button>
//                   <Input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleManualQuantityChange(item.product_id, e)}
//                     className="w-16 text-center h-8"
//                     min="1"
//                   />
//                   <Button 
//                     variant="outline" 
//                     size="icon"
//                     onClick={() => handleQuantityChange(item.product_id, item.quantity + 1)}
//                     className="h-8 w-8"
//                   >
//                     <PlusCircle className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//               <div className="col-span-2 text-right">
//                 <p className="font-medium">
//                   {item.currency} ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-between items-center border-t pt-4">
//         <div className="text-gray-600">
//           Total of <span className="text-blue-500 font-medium">{totalProducts}</span> Products
//           <p className="font-medium">Total Price: <span className="text-blue-500">{cartItems[0].currency} ${totalPrice.toFixed(2)}</span></p>
//         </div>
//         <Button 
//           size="lg"
//           className="bg-blue-500 hover:bg-blue-600"
//           onClick={() => {/* Implement checkout */}}
//         >
//           <ShoppingCart className="mr-2 h-5 w-5" />
//           Check out
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default CartPage;
