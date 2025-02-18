import React from "react";
import BiryaniImg from "../../assets/biryani5.png";
import Vector from "../../assets/vector3.png";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";


const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]  hover:scale-105 duration-300 "
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                Chicken Biryani starts by Marinating
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                It is made with rice, some type of meat (chicken, goat, pork, lamb, beef, prawn, or fish) and spices. To cater to vegetarians, in some cases, it is prepared by ...
                  <br />
                  <br />
                  The traditional process of Chicken Biryani starts by marinating meat 
                  in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the 
                  bottom of a wide pot followed by another layer of par cooked basmati rice, herbs,
                   saffron infused milk, fried onions and ghee or attar (edible essential oil).
                </p>
                <div className="flex gap-6">
                  <div>
                    <TbToolsKitchen2 className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 duration-300  py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
