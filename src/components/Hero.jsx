import heroImage from "../assets/illustration-working.svg";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center text-center md:flex-row-reverse lg:text-left">
      <div
        className="flex items-center min-h-[500px] w-full pt-[70vw] bg-[top_left_2rem]
					bg-[length:100vw] lg:bg-auto md:bg-top lg:bg-right md:bg-[length:50vw]
					lg:bg-[length:50%] md:pt-[35vw] lg:pt-0 bg-no-repeat 
					max-w-7xl"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container flex flex-col items-center mx-auto lg:mx-0 lg:w-1/2 lg:items-start">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="max-w-md my-8 text-xl text-grayishViolet">
            Build your brand's recognition and get detailed insights on how
            links are performing.
          </p>
          <button
            type="button"
            className="px-10 py-4 text-xl font-bold text-white rounded-full bg-primary
				hover:bg-primaryHover"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
