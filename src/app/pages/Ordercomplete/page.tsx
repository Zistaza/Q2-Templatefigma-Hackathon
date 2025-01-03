'use client';

import Image from 'next/image';
import Link from 'next/link';

function Ordercomplete() {
  return (
    <>
      <section className="bg-[#F6F5FF] h-[200px] md:h-[286px] relative">
        <div className="container h-full items-center md:items-start flex justify-center gap-4 flex-col relative">
          <h1 className="text-[#101750] text-4xl font-bold">Product Details</h1>
          <div className="flex items-center gap-1 font-medium">
            <Link href="/">OrderCompleted</Link>
            <p>.</p>
            <p>Pages</p>
            <p>.</p>
            <p className="text-[#FB2E86]">OrderCompleted</p>
          </div>

        </div>
      </section>

       {/* Clock Icon */}
       <div className="absolute bottom-0 left-8 md:left-12">
            <Image
              src="/pagesimages/orderclock.png"
              alt="Clock Icon"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-md text-center space-y-6">
          {/* Tick Image */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#EDEFFB] rounded-full flex justify-center items-center">
              <Image
                src="/pagesimages/ordertick.png"
                alt="Order Completed Icon"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </div>

          {/* Order Complete */}
          <h2 className="text-2xl font-bold text-[#1D3178]">Your order is completed!</h2>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
            You will receive an email confirmation when your order is completed.
          </p>

          {/* Button */}
          <Link href="/pages/ShopList">
            <button className="bg-[#FB2E86] text-white px-6 py-2 mt-4 hover:bg-red-600 rounded-md text-lg font-medium">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center mt-14">
              <Image
                src={"/homeimages/tagpic.png"}
                alt="tagpic"
                width={904}
                height={93}
                className="cursor-pointer"
              />
            </div>
    </>
  );
}

export default Ordercomplete;
