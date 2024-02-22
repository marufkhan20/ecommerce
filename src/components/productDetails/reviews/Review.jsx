import { FaRegStar, FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="flex gap-6">
      <div className="w-14 h-14">
        <img
          className="w-full h-full rounded-full"
          src="/images/users/1.png"
          alt=""
        />
      </div>

      <div className="w-fit">
        <div className="flex items-center gap-1">
          <FaStar className="text-[#F7AC2D]" />
          <FaStar className="text-[#F7AC2D]" />
          <FaStar className="text-[#F7AC2D]" />
          <FaStar className="text-[#F7AC2D]" />
          <FaRegStar />
        </div>
        <h4 className="text-sm my-2">Join Hiddleston</h4>
        <span className="text-sm">February 22, 2023</span>
        <p className="mt-4">
          I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest
          and shoulders. My only complaint is that it is so long! I like to wear
          polo shirts untucked. This shirt goes completely past my rear end. If
          I wore it with ordinary shorts, you probably wouldnt be able to see
          the shorts at all – completely hidden by the shirt. It needs to be 4
          to 5 inches shorter in terms of length to suit me. I have many RL polo
          shirts, and this one is by far the longest. I dont understand why.
        </p>
      </div>
    </div>
  );
};

export default Review;
