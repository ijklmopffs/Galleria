import { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";
import data from "../data.json";
import cross from "../../assets/shared/icon-view-image.svg";
import back from "../../assets/shared/icon-back-button.svg";
import next from "../../assets/shared/icon-next-button.svg";

export default function Detail() {
  const { index } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleStopSlideshow = () => {
    navigate("/");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const goToNext = () => {
    const nextIndex = Math.min(parseInt(index, 10) + 1, 14);
    navigate(`/gallery/${nextIndex}`);
  };

  const goToPrevious = () => {
    const previousIndex = Math.max(parseInt(index, 10) - 1, 0);
    navigate(`/gallery/${previousIndex}`);
  };

  return (
    <main className="max-w-[100rem] mx-auto">
      <div className="flex items-center justify-between p-4">
        <img src={logo} alt="" className="w-40 h-12" />
        <p
          onClick={handleStopSlideshow}
          className="uppercase cursor-pointer font-bold text-xs text-[#7d7d7d] tracking-widest hover:text-black"
        >
          stop slideshow
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#979797]/50 my-5"></div>

      <motion.section
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-40 p-4"
      >
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="relative">
              <img
                src={data[index].images.hero.large}
                alt={data[index].name}
                className="h-[560px] aspect-square"
              />
              <div
                onClick={openModal}
                className="absolute cursor-pointer top-10 md:top-auto md:bottom-[2rem] lg:bottom-5 left-5 bg-black text-white w-fit uppercase p-2 flex items-center gap-3"
              >
                <p>view image</p>
                <img src={cross} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between lg:h-[80vh]">
              <div className="p-4 relative bottom-28 w-80 md:w-auto right-2 md:bottom-1 lg:bottom-0 md:right-14 bg-white">
                <h1 className="text-5xl font-bold w-80 mb-5">
                  {data[index].name}
                </h1>
                <p className="text-[#7d7d7d] text-sm">
                  {data[index].artist.name}
                </p>
              </div>
              <div className="relative md:left-10">
                <img src={data[index].artist.image} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[100px] md:text-[200px] text-[#f3f3f3]">
            {data[index].year}
          </h1>
          <p className="md:w-[30rem] lg:w-64 text-sm text-[#7d7d7d] relative bottom-16 md:bottom-32">
            {data[index].description}
          </p>
          <Link
            to={data[index].source}
            className="font-bold text-[9px] text-[#7d7d7d] underline"
            target="_blank"
          >
            Go to source
          </Link>
        </div>
      </motion.section>

      <div className="w-full h-[1px] bg-[#979797]/50 my-10"></div>
      <div className="flex justify-between items-center p-4">
        <div>
          <h3 className="text-lg font-bold">{data[index].name}</h3>
          <p className="text-xs">{data[index].artist.name}</p>
        </div>
        <div className="flex items-center gap-10 cursor-pointer">
          <button
            onClick={goToPrevious}
            className={parseInt(index, 10) === 0 ? "opacity-50" : ""}
          >
            <img src={back} alt="" />
          </button>
          <button
            onClick={goToNext}
            className={parseInt(index, 10) === 14 ? "opacity-50" : ""}
          >
            <img src={next} alt="" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-60">
            <div className="bg-white relative rounded-md shadow-lg">
              <button
                className="absolute top-[-2rem] right-4 text-[#979797] hover:text-gray-700"
                onClick={closeModal}
              >
                <p className="uppercase">close</p>
              </button>
              <div className="h-[500px]">
                <img
                  src={data[index].images.gallery}
                  alt={data[index].name}
                  className="h-[500px]"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
