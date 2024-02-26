import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#2D3759] text-white">
      <div className="container">
        <div className="py-14 flex-col sm:flex-row border-b border-gray-600 flex items-center justify-between gap-8">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-7 py-5 bg-white rounded-full outline-none text-secondary"
          />
          <div>
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>

        <div className="py-9 flex items-center gap-5 justify-between flex-wrap">
          <p>Copyright © 2023 Company Name. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
