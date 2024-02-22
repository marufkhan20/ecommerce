import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const Breadcumb = ({ pathnames }) => {
  return (
    <div className="py-8 bg-[#EDEEF2]">
      <div className="container flex items-center justify-center flex-wrap gap-2">
        {pathnames?.map((item, idx) => (
          <>
            {idx === pathnames?.length - 1 ? (
              <span>{item}</span>
            ) : (
              <>
                <Link className="transition-all hover:text-primary" href="#">
                  {item}
                </Link>
                <FaChevronRight className="text-xs" />
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Breadcumb;
