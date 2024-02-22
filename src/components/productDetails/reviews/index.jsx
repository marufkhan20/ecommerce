import Review from "./Review";

const Reviews = () => {
  return (
    <div>
      <h3 className="text-2xl">5 reviews for Plain Postal Boxes</h3>
      <div className="mt-6 flex flex-col gap-8">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
