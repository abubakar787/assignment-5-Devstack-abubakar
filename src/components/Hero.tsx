const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-20">

        {/* Left Content */}
        <div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#101426] sm:text-5xl lg:text-[52px]">

            Build Your Ideal

            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href="#technologies"
              className="btn border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 text-white shadow-none hover:opacity-90"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="btn btn-outline border-slate-200 bg-white px-6 font-normal text-slate-600 hover:border-slate-300 hover:bg-white hover:text-slate-700"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">

          <img
            src="/src/assets/banner-stack.png"
            alt="DevStack technology illustration"
            className="w-[280px] sm:w-[350px] lg:w-[430px]"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;