import heroImage from "../assets/illustration-working.svg";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse text-center lg:text-left justify-center">
      <div
        className="flex items-center min-h-[500px] w-full pt-[70vw] bg-[top_left_2rem]
					bg-[length:100vw] lg:bg-auto md:bg-top lg:bg-right md:bg-[length:50vw]
					lg:bg-[length:50%] md:pt-[35vw] lg:pt-0 bg-no-repeat 
					max-w-7xl lg:container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-veryDarkViolet">
            More than just shorter links
          </h1>
          <p className="text-gray my-8 max-w-md">
            Build your brand's recognition and get detailed insights on how
            links are performing.
          </p>
          <button
            type="button"
            className="px-10 py-4 bg-primary font-bold text-xl rounded-full hover:bg-primaryHover text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
