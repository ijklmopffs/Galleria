import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import data from "../../data.json";
import { Link, useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();

  const handleStartSlideshow = () => {
    navigate("/gallery/0");
  };
  return (
    <main className="max-w-[100rem] mx-auto">
      <div className="flex items-center justify-between p-4">
        <img src={logo} alt="" className="w-40 h-12" />
        <p
          onClick={handleStartSlideshow}
          className="uppercase font-bold text-xs text-[#7d7d7d] tracking-widest cursor-pointer hover:text-black"
        >
          start slideshow
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="p-4 columns-2 md:columns-3 lg:columns-4 gap-4"
      >
        {data.map((result, index) => (
          <Link to={`/gallery/${index}`} key={index}>
            <div
              key={index}
              className="m-4 relative cursor-pointer hover:opacity-70"
            >
              <div className="relative h-fit w-fit">
                <img src={result.images.thumbnail} alt={result.name} />
                <div className="absolute bg-black/30 w-full h-full z-10 top-0"></div>
              </div>
              <div className="absolute z-10 bottom-4 p-4">
                <h2 className="font-bold text-lg text-white my-5">
                  {result.name}
                </h2>
                <p className="text-xs text-white">{result.artist.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </main>
  );
}
