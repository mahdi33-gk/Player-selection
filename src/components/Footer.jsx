import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(6,9,26)] mt-8">
      <div className="w-10/12 mx-auto pt-40">
      <div className="flex justify-center pb-5  items-center">
        <img className=" border-2 border-dashed" src="/images/logo-footer.png" alt="" />
      </div>
      <div className="flex justify-between items-center pt-5 pb-5 text-white">
        <div>
          <p className="text-[25px] font-bold  pb-3">About Us</p>
          <p className="text-gray-400">
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </div>
        <div>
          <p className="text-[25px] font-bold  pb-3">Quick Links</p>
          <li className="text-gray-400">Home</li>
          <li className="text-gray-400">Contact</li>
          <li className="text-gray-400">Services</li>
          <li className="text-gray-400">About</li>
        </div>
        <div>
          <p className="text-[25px] font-bold pb-3">Subscribe</p>
          <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
          <div class="join border-2 rounded-lg mt-3">
            <input
              type="text"
              placeholder="username@site.com"
              class="input px-5 py-3 input-bordered join-item"
            />
            <button class="btn px-5 pl-10 py-3 btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
