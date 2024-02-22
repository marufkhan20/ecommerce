import Link from "next/link";
import Heading from "../shared/Heading";

const Categories = () => {
  return (
    <section className="py-14">
      <div className="container">
        <Heading>
          Make it personal—shop{" "}
          <span className="text-primary">
            custom gifts, decor, <br />
            and on-sale
          </span>{" "}
          finds now!
        </Heading>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/23244419/r/il/256acb/5460344806/il_300x300.5460344806_3962.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              Personized Gifts
            </h4>
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/13937228/r/il/2aa962/5720982228/il_300x300.5720982228_3xm5.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              Wall Art
            </h4>
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/11651126/c/1999/1999/0/858/il/b8040d/4026650319/il_300x300.4026650319_bhl2.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              Bedding & Blankets
            </h4>
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/9266327/c/2000/2000/0/0/il/fc0035/5390294661/il_300x300.5390294661_ewbc.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              Jewelry
            </h4>
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/9353657/r/il/ccdf94/3423095141/il_300x300.3423095141_khth.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              Tees & Sweaters
            </h4>
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-3 items-center  category-item"
          >
            <div className="overflow-hidden rounded-full">
              <img
                src="https://i.etsystatic.com/17665462/c/1941/1941/40/330/il/88b0e6/3970877247/il_300x300.3970877247_n9na.jpg"
                alt="category"
                className="rounded-full transition-all"
              />
            </div>
            <h4 className="text-black font-semibold text-lg transition-all">
              On Sale
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
