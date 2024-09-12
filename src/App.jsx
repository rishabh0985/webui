import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center p-4 bg-indigo-300 max-w-full">
        <div>
          <img
            src="./assets/images/logo.svg"
            width="129"
            height="40"
            alt="Blogy logo"
          />
        </div>

        {/* Nav items (Hidden on small screens) */}
        <div className="hidden md:flex justify-center gap-6">
          <p className="font-semibold text-lg">Home</p>
          <p className="font-semibold text-lg">Recent Post</p>
          <p className="font-semibold text-lg">Membership</p>
        </div>

        {/* Search and Join button */}
        <div className="flex gap-4 items-center">
          <input
            placeholder="🔍Search"
            alt="Search"
            className="bg-slate-300 hover:bg-slate-200  h-8 w-[125px] p-4 rounded-2xl block"
            maxLength={10}
          />
          <button className="bg-black hover:bg-slate-700 text-white font-bold h-8 w-20 rounded-2xl hidden md:block">
            Join
          </button>
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          className="block md:hidden bg-black text-white p-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu (opens only when button is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-14 right-4 bg-white shadow-lg p-4 rounded-md md:hidden">
            <ul className="flex flex-col gap-2 ">
              <li className="font-semibold text-lg font-mono ">Home</li>
              <li className="font-semibold text-lg font-mono">Recent Post</li>
              <li className="font-semibold text-lg font-mono">Membership</li>
            </ul>
          </div>
        )}
      </div>

      {/* Content starting below the header */}
      <div className="bg-white flex-col mt-8 p-4">
        <p className="text-[7rem] font-bold w-full justify-start">
          Hey, We're Blog.
        </p>
        <p className="text-4xl font-semibold font-mono w-full h-auto">
          See Our thoughts, stories, and ideas.
        </p>
        <div className="flex items-center gap-4 mt-10 mx-auto ml-20">
          <div className="relative flex items-center">
            <input
              placeholder="Your email address"
              className="bg-slate-300 w-[350px] h-12 rounded-3xl p-4 pr-24"
            />
            <button className="absolute right-0 hover:bg-blue-500 hover:h-14 hover:w-44 bg-black text-white w-[160px] h-12 rounded-3xl font-semibold text-2xl items-center">
              Subscribe
            </button>
          </div>
          <p className="font-mono w-50 hidden md:block">
            Get the email newsletter and unlock access to members-only content
            and updates
          </p>
        </div>
        <div className="flex bg-black w-full border mt-4"></div>
        <div>
          {/* GET start Img */}

          {/* <div className="flex ">
            <div className="flex-col flex  ">
              <p className="font-serif mt-2 text-xl ">
                Get Started with our best stories
              </p>

              <img
                src="https://codewithsadee.github.io/blogy/assets/images/featured-1.jpg"
                className="flex h-80 rounded-lg mt-5 shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300"
              />
              <div className="flex gap-5 items-center mt-4 ml-3">
                <button className="flex bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                  Idea
                </button>
                <button className="flex bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                  Design
                </button>
                <button className="flex bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                  Review
                </button>
              </div>
              <p className="flex text-2xl w-22">
                New technology is not good or evil in and of itself
              </p>
            </div>
          </div> */}
          <div className="flex">
            <div className="flex-col flex">
              {/* Text section */}
              <div className="mt-4">
                <p className="font-serif text-xl justify-start">
                  Get Started with our best stories
                </p>
              </div>

              {/* Image section */}
              <div className="flex flex-wrap gap-8 justify-center mt-4 ">
                {/* First Box */}
                <div className="flex flex-col items-start max-w-xs">
                  <img
                    src="https://codewithsadee.github.io/blogy/assets/images/featured-1.jpg"
                    className="h-80 w-64 rounded-lg shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300"
                    alt="Featured Story"
                  />

                  <div className="flex gap-2 items-center mt-4">
                    <button className="bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Idea
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Design
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Review
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-[15px] w-64 font-bold text-left hover:underline">
                      New technology is not good or evil in and of itself
                    </p>
                    <p className="text-[12px] w-64 font-mono text-left hover:font-bold mt-2">
                      Vestibulum vehicula dui venenatis neque tempor, accumsan
                      iaculis sapien ornare. Sed at ante porta, ...
                    </p>
                  </div>
                </div>

                {/* Second Box */}
                <div className="flex flex-col items-start max-w-xs">
                  <img
                    src="https://codewithsadee.github.io/blogy/assets/images/featured-2.jpg"
                    className="h-80 w-64 rounded-lg shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300"
                    alt="Featured Story"
                  />

                  <div className="flex gap-2 items-center mt-4">
                    <button className="bg-slate-400 rounded-2xl font-mono w-20 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      creative
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-20 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Product
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-[15px] w-64 font-bold text-left hover:underline">
                      It’s a new era in design, there are no rules
                    </p>
                    <p className="text-[12px] w-64 font-mono text-left hover:font-bold mt-2">
                      Quibus autem in rebus tanta obscuratio non fit, fieri
                      tamen potest, ut id ipsum, quod interest, non sit ...
                    </p>
                  </div>
                </div>
                {/* third box */}
                <div className="flex flex-col items-start max-w-xs">
                  <img
                    src="https://codewithsadee.github.io/blogy/assets/images/featured-3.jpg"
                    className="h-80 w-64 rounded-lg shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300"
                    alt="Featured Story"
                  />

                  <div className="flex gap-2 items-center mt-4">
                    <button className="bg-slate-400 rounded-2xl font-mono w-20 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Design
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-20 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      creative
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      Idea
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-[15px] w-64 font-bold text-left hover:underline">
                      Perfection has to do with the end product
                    </p>
                    <p className="text-[12px] w-64 font-mono text-left hover:font-bold mt-2">
                      Aenean eget urna aliquet, viverra orci quis, aliquam erat.
                      Ut rutrum quam quam, eu eleifend est ...
                    </p>
                  </div>
                </div>
                {/* fourth box */}
                <div className="flex flex-col items-start max-w-xs">
                  <img
                    src="https://codewithsadee.github.io/blogy/assets/images/featured-4.jpg"
                    className="h-80 w-64 rounded-lg shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300"
                    alt="Featured Story"
                  />

                  <div className="flex gap-2 items-center mt-4">
                    <button className="bg-slate-400 rounded-2xl font-mono w-20 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      people
                    </button>
                    <button className="bg-slate-400 rounded-2xl font-mono w-16 text-sm items-center justify-center shadow-lg hover:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:shadow-[0_5px_10px_rgba(0,0,0,0.6)] focus:outline-none transition-shadow duration-300">
                      story
                    </button>
                  </div>

                  <div className="mt-4">
                    <p className="text-[15px] w-64 font-bold text-left hover:underline">
                      Everyone has a different life story
                    </p>
                    <p className="text-[12px] w-64 font-mono text-left hover:font-bold mt-2">
                      Non est igitur summum malum dolor. Tu autem inter haec
                      tantam multitudinem hominum ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex bg-black w-full border mt-4 justify-between"></div>
              <div className="flex mt-4 justify-evenly">
                <div className="flex justify-evenly	">
                  <p className=" text-4xl ">Subscribe to </p>
                  <p className=" text-4xl ml-2 font-bold"> new posts</p>
                </div>

                <div className="relative flex items-center">
                  <input
                    placeholder="Your email address"
                    className="bg-slate-300 w-[350px] h-12 rounded-3xl p-4 pr-24"
                  />
                  <button className="absolute right-0 hover:bg-blue-500 hover:h-14 hover:w-44 bg-black text-white w-[160px] h-12 rounded-3xl font-semibold text-2xl items-center">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex bg-black w-full border mt-4 justify-between"></div>
              {/* end section */}
              <div className="flex justify-around mt-6">
                <div className="flex-col mt-4 flex justify-end">
                  <img
                    src="./assets/images/logo.svg"
                    width="129"
                    height="40"
                    alt="Blogy logo"
                  />
                </div>
                <div className="flex-col mt-4 flex ">
                  <p className="flex font-mono text-2xl shadow-lg underline ">
                    Rishabh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
