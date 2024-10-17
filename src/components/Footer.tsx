import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 h-[50rem] sm:h-[30rem] flex justify-center items-center text-white py-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold mb-7  text-4xl">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, facilis? Dolorum eos voluptate at fuga consequatur, a inventore voluptates atque? Unde dicta autem reiciendis obcaecati ipsum eos numquam, porro nihil?
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-7 text-4xl">Quick Links</h3>
          <ul className="flex flex-col  gap-3">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-7 text-4xl">Follow Us</h3>
          <ul className="flex flex-col  gap-3">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-7 text-4xl">Contact Us</h3>
          <ul className="flex flex-col  gap-3">
            <li>New Delhi, India</li>
            <li>Delhi 1001</li>
            <li>Email: Info@musicsschool.com</li>
            <li>Phone: 984374264</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
