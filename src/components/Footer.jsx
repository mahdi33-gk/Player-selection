import React from "react";

const Footer = () => {
  return (
    <div>
      <div style={{backgroundImage:"url(/images/bg-shadow.png)"}} className="rounded-md -mt-16 absolute ml-28 mr-10 px-10 py-5 flex flex-col bg-slate-400 border-2 border-gray-300 mx-auto w-10/12">
        <h1 className="text-3xl text-center font-bold pt-3 pb-3">Subscribe to our Newsletter</h1>
        <h1 className="text-center pt-3 pb-3 text-gray-200">Get the latest updates and news right in your inbox!</h1>
        <div className="flex gap-2 justify-center items-center pt-5 pb-5">
          <input className="border-2 rounded-md px-5 py-3" type="text" placeholder="type your massage" />
          <button className="border-2 rounded-md px-5 py-3 font-bold text-black">Subscribe</button>
        </div>
      </div>
      <div className="bg-[rgb(6,9,26)] mt-8">
        <div className="w-10/12 mx-auto pt-52">
          <div className="flex justify-center pb-5  items-center">
            <img
              className=" border-2 border-dashed"
              src="/images/logo-footer.png"
              alt=""
            />
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
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div class="join border-2 rounded-lg mt-3">
                <input
                  type="text"
                  placeholder="username@site.com"
                  class="input px-5 py-3 input-bordered join-item"
                />
                <button class="btn px-5 pl-10 py-3 btn-primary join-item">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
