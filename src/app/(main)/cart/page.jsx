"use client";
import Breadcumb from "@/components/shared/Breadcumb";
import Button from "@/components/ui/Button";
import { createOrder } from "@/http/api";
import { useAuthStore } from "@/providers/AuthStoreProvider";
import { useCartStore } from "@/providers/CartStoreProvider";
import { useMutation } from "@tanstack/react-query";

const CartPage = () => {
  const { cart, updateQuantity } = useCartStore();

  const cartElements = [];

  if (cart?.totalQty) {
    console.log("working");
    for (let product of Object.values(cart?.items)) {
      cartElements.push(
        <tr>
          <td className="py-6 border-b">
            <img
              src={product?.item?.userData?.finalImage}
              alt="product"
              className="w-24 rounded-md"
            />
          </td>
          <td className="py-6 font-medium border-b">{product?.item?.title}</td>
          <td className="py-6 border-b">
            ${product?.item?.discount_price || product?.item?.current_price}
          </td>
          <td className="py-6 border-b">
            <div className="bg-[#EDEEF1] p-1 rounded-full flex items-center gap-2 w-fit">
              <button
                className="w-6 h-6 rounded-full transition-all hover:bg-white flex items-center justify-center"
                onClick={() => updateQuantity(product?.item?.id, 1)}
              >
                -
              </button>
              <input
                className="w-5 text-center bg-transparent outline-none"
                type="text"
                value={product?.qty}
                name=""
                id=""
              />
              <button
                className="w-6 h-6 rounded-full transition-all hover:bg-white flex items-center justify-center"
                onClick={() => updateQuantity(product?.item?.id, 1, true)}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-6 border-b">
            $
            {Number(
              product?.item?.discount_price || product?.item?.current_price
            ) * Number(product?.qty)}
          </td>
        </tr>
      );
    }
  }

  const { token } = useAuthStore();

  // prepare api request
  const { mutate: createNewOrder, isPending } = useMutation({
    mutationKey: ["createOrder"],
    mutationFn: async ({ id, data: orderData }) => {
      const { data } = await createOrder({
        id,
        data: orderData,
        token,
      });

      return data;
    },
    onSuccess: async (data) => {
      console.log("order data", data);
    },
  });

  const orderHandler = () => {
    if (cart?.totalQty) {
      for (let product of Object.values(cart?.items)) {
        const item = product?.item;

        createNewOrder({
          id: item?.id,
          data: {
            product_item: item?.id,
            user_personalized_data: {
              brandText: item?.userData?.brandText,
              color: item?.userData?.color,
              size: item?.userData?.size,
            },
            user_personalized_images: [
              item?.userData?.finalImage,
              item?.userData?.brandImage,
            ],
          },
        });
      }
    }
  };
  return (
    <main>
      <Breadcumb title="Cart" pathnames={["Home", "Cart"]} />

      <section className="py-24">
        <div className="container flex flex-col md:flex-row justify-between gap-12">
          <div className="w-full">
            <div className="overflow-auto">
              <table className="md:w-full w-[700px] text-base text-black">
                <thead className="border-b">
                  <tr>
                    <th className="font-medium pb-6 text-left">Product</th>
                    <th className="font-medium pb-6 text-left">Name</th>
                    <th className="font-medium pb-6 text-left">Price</th>
                    <th className="font-medium pb-6 text-left">Quantity</th>
                    <th className="font-medium pb-6 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>{cartElements}</tbody>
              </table>

              {cart?.totalQty === 0 && (
                <p className="mt-3">No Cart Items Found!!</p>
              )}
            </div>
          </div>

          <div className="w-full md:min-w-[400px] md:max-w-[400px] xl:min-w-[500px] p-9 border-4 rounded-3xl bg-white">
            <h2 className="text-[28px] leading-[28px] mb-4 font-semibold">
              Cart totals
            </h2>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Subtotal</span>
              <span>${cart?.totalPrice}</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Shipping: Arlene </span>
              <span className="text-[15px]">Flat rate: $10.00</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5">
              <span>Total</span>
              <span className="font-semibold text-[28px] text-primary">
                ${Number(cart?.totalPrice) + 10}
              </span>
            </div>
            <div className="mt-5">
              <Button
                onClick={orderHandler}
                className="w-full block text-center"
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
