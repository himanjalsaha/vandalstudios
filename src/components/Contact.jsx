import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import ContactModal from "./ContactModal";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-6">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f57779199986965.665ab1892f590.png"
            clipClass="contact-clip-path-1 "
          />
          <ImageClipBox
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/353b2a199986965.665ab18928e1d.png"
            clipClass="contact-clip-path-2 lg:translate-y-80 translate-y-80"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Let's connect
          </p>

          <AnimatedTitle
            title="let's c<b>o</b>nnect and <br /> create something <br /> e<b>x</b>tra <br /> ordinary together."
            containerClass ="special-font text-[0.3px] !md:text-[6.2rem] w-full font-zentry  !font-black !leading-[.9]"

          />

          <ContactModal/>
        </div>
      </div>
    </div>
  );
};

export default Contact;