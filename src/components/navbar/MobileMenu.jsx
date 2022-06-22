export default function MobileMenu() {
  return (
    // container panel
    <div className="w-[80vw] max-w-md absolute left-1/2 -translate-x-1/2 bg-secondary rounded-xl text-xl my-8 py-10">
      <div className="flex flex-col w-4/5 text-white mx-auto text-center">
        {/* mobile links */}
        <div className="w-full">
          <ul className="flex flex-col gap-4 mb-8">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Resources</li>
          </ul>
        </div>

        {/* buttons */}
        <div className="flex flex-col gap-8 border-t border-gray w-full">
          <button type="button" className="font-bold pt-8">
            Login
          </button>
          <button
            type="button"
            className="font-bold bg-primary rounded-full py-3"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
