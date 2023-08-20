import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
export default function Index() {
  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/01/27/19/34/giraffe-614141_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/02/10/25/giraffe-4312090_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/23/14/23/giraffe-3344366_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/11/13/20/20/giraffe-5739828_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/02/19/25/giraffes-7238815_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/03/22/58/giraffe-4177095_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/08/22/15/39/giraffes-901009_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/03/23/00/giraffe-2469322_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/12/03/08/04/giraffe-5799818_1280.jpg",
  ]);

  function imageShift(direction) {
    const copy = images.slice();
    if (direction === "L") {
      copy.unshift(copy.pop());
      setImages(copy);
    } else {
      copy.push(copy.shift());
      setImages(copy);
    }
  }

  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center gap-y-5">
        <h1 className="text-5xl text-center">Giraffe Image Carousel</h1>
        <div className="images-container flex gap-x-[25px] items-center overflow-x-clip">
          {images.map((image, index) => (
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "24vh", aspectRatio: 3 / 2 }} // optional
              alt={`image${index}`}
              key={index}
            />
          ))}
          <div
            className="absolute top-[50%] right-[1%] z-20 text-4xl bg-[black]/[0.65] hover:bg-[black] text-[white] border-2 border-[transparent] hover:border-[white]/[0.8] rounded-[50%] p-2 cursor-pointer"
            onClick={() => imageShift()}
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </div>
          <div
            className="absolute top-[50%] left-[1%] z-20 text-4xl bg-[black]/[0.65] hover:bg-[black]
            text-[white] border-2 border-[transparent] hover:border-[white]/[0.8] rounded-[50%] p-2 cursor-pointer"
            onClick={() => imageShift("L")}
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </div>
          <div className=" absolute w-[15%] h-[24vh] left-[0]"></div>
          <div className=" absolute w-[15%] h-[24vh] right-[0]"></div>
        </div>
      </div>
    </>
  );
}
