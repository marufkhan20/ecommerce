import Heading from "../shared/Heading";

const FeedBacks = () => {
  return (
    <section className="py-14">
      <div className="container grid md:grid-cols-2 gap-10">
        <div className="hidden md:block">
          <img src="/images/feedback.png" alt="" />
        </div>
        <div>
          <h4 className="mb-5 text-[13px] font-semibold text-primary">
            OUR CLIENTS SAY
          </h4>
          <Heading className="text-left">
            {`Here's`} what our{" "}
            <span className="text-primary">
              users <br />
              speak
            </span>{" "}
            about us
          </Heading>

          <div className="sm:ml-20 mt-10">
            <p className="font-medium text-black italic text-lg">
              “The other hand we denounce with righteou indg ation and dislike
              men who are so beguiled and demorali ed by the of pleasure of the
              moment.Dislike men who are so beguiled demoraliz worlds ed by the
              charms of pleasure of the moment. Lorem ipsum dolor sit”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <h4 className="font-semibold text-lg">Jessica Cherner</h4>
              <span>Senior Artist Developer</span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <img
                src="/images/users/1.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <img
                src="/images/users/2.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <img
                src="/images/users/3.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <img
                src="/images/users/4.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <img
                src="/images/users/5.png"
                alt="user"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBacks;
