const About = () => {
  return (
    <>
      <div id="about" className="grid grid-cols-12 pt-20 gap-y-10 lg:gap-y-0">
        <div className="col-span-12 lg:col-start-1 lg:col-span-9 row-span-1">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-sky-500">About me 👦</h1>
          <div className="relative mt-3">
            <h2 className="text-xs sm:text-lg lg:text-xl">
              Experience with React.js with more than 3 years of experience at web design. Currently exploring about backend development.
            </h2>
            <img
              className="absolute w-16 sm:w-20 left-[85px] sm:left-36 lg:left-40 top-[13px] sm:top-7"
              src="/underline.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-10 sm:col-span-6 md:col-start-1 md:col-span-3 lg:col-start-11 lg:col-span-3 relative">
          <img
            className="absolute w-14 -top-6 -right-11"
            src="/meArrow.png"
            alt="arrow"
          />
          <img className="rounded-lg" src="/joan.jpg" alt="joan purba" />
        </div>
      </div>
    </>
  );
};

export default About;
