import gsap from "gsap";
import { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const HeroImages = () => {
  const [loading, setLoading] = useState(true);
  const imageUrl =
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/453d3b199986965.665ab18cd4a01.jpg";

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-gray-200">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-gray-100"
      >
        <img
          src={imageUrl}
          alt="Hero"
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoad={handleImageLoad}
        />

<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75  ">
        T<b>E</b>AM
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-white ">
              kn<b>o</b>w <b  className=" text-yellow-400">*</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-xl text-gray-200">
              We design impact <b className="text-yellow-200">*</b>
              <br /> for the plot <b className="text-yellow-200">*</b>
            </p>

            <Button
              id="contact-us"
              title="Contact us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
      T<b>E</b>AM
      </h1>
    </div>
  );
};

export default HeroImages;
