import Breadcumb from "@/components/shared/Breadcumb";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const CheckoutPage = () => {
  return (
    <main>
      <Breadcumb title="Checkout" pathnames={["Home", "Checkout"]} />

      <section className="py-24">
        <div className="container flex flex-col md:flex-row justify-between gap-12">
          <div className="w-full">
            <h2 className="text-[28px] leading-[28px] mb-4 font-semibold">
              Billing details
            </h2>

            <form action="">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="firstName">First name *</label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="lastName">Last name *</label>
                    <Input placeholder="Enter your last name" id="lastName" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="country">Country / Region *</label>
                  <Input placeholder="Enter your country" id="country" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="address">Street address *</label>
                  <Input
                    placeholder="House number and street name"
                    id="address"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="town">Town / City *</label>
                  <Input placeholder="Enter your city name" id="town" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="state">State *</label>
                  <Input placeholder="Enter your state" id="state" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <Input placeholder="Enter your zipCode" id="zipCode" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="phone">Phone *</label>
                  <Input
                    placeholder="Enter your phone number"
                    type="number"
                    id="phone"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email">Email *</label>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="note">Order notes (optional)</label>
                  <textarea
                    className="px-5 w-full block py-3 rounded-full bg-white  outline-none focus:ring-1 ring-primary placeholder:font-normal"
                    placeholder="Enter your note"
                    id="note"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="w-full md:min-w-[400px] xl:min-w-[500px] p-9 border-4 rounded-3xl bg-white h-fit">
            <h2 className="text-[28px] leading-[28px] mb-4 font-semibold">
              Your Order
            </h2>
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
                <span className="font-medium">Product</span>
                <span className="font-medium">Subtotal</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
                <div className="flex flex-col text-base gap-4">
                  <span>Business card × 1</span>
                  <span>Shirt × 1</span>
                  <span>Jeans × 1</span>
                </div>
                <span>$9.95</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Subtotal</span>
              <span>$9.95</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5 border-b">
              <span>Shipping: Arlene </span>
              <span className="text-[15px]">Flat rate: $10.00</span>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap text-lg text-black py-5">
              <span>Total</span>
              <span className="font-semibold text-[28px] text-primary">
                $19.95
              </span>
            </div>
            <div className="mt-5">
              <Button href="/checkout" className="w-full block text-center">
                Place order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
