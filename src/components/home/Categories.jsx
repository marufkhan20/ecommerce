import Link from "next/link";
import Heading from "../shared/Heading";

const Categories = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Custom printec boxes &{" "}
          <span className="text-primary">
            custom <br />
            cardboard
          </span>{" "}
          packaging
        </Heading>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Link
                href="#"
                className="rounded-3xl transition-all overflow-hidden relative category-item"
              >
                <img
                  src="/images/categories/1.jpg"
                  alt="category"
                  className="w-full h-full transition-all duration-300 hover:scale-110"
                />
                <button className="absolute bottom-6 left-[50%] translate-x-[-50%] px-5 py-3 transition-all rounded-full bg-white text-lg text-black font-semibold">
                  Cream Boxes
                </button>
              </Link>
              <Link
                href="#"
                className="rounded-3xl transition-all overflow-hidden relative category-item"
              >
                <img
                  src="/images/categories/2.jpg"
                  alt="category"
                  className="w-full h-full transition-all duration-300 hover:scale-110"
                />
                <button className="absolute bottom-6 left-[50%] translate-x-[-50%] px-5 py-3 transition-all rounded-full bg-white text-lg text-black font-semibold">
                  Soap Boxes
                </button>
              </Link>
            </div>
            <div className="w-full overflow-hidden">
              <Link
                href="#"
                className="rounded-3xl transition-all overflow-hidden w-full block relative category-item"
              >
                <img
                  src="/images/categories/3.jpg"
                  alt="category"
                  className="w-full h-full rounded-3xl transition-all duration-300 hover:scale-110"
                />
                <button className="absolute bottom-6 left-[50%] translate-x-[-50%] px-5 py-3 transition-all rounded-full bg-white text-lg text-black font-semibold">
                  Custom Paper Bags
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Link
              href="#"
              className="rounded-3xl transition-all overflow-hidden w-full block relative category-item"
            >
              <img
                src="/images/categories/4.jpg"
                alt="category"
                className="w-full h-full rounded-3xl transition-all duration-300 hover:scale-110"
              />
              <button className="absolute bottom-6 left-[50%] translate-x-[-50%] px-5 py-3 transition-all rounded-full bg-white text-lg text-black font-semibold">
                Cosmetics Boxes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
