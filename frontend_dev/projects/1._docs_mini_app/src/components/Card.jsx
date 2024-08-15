import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { motion } from "framer-motion"


const Card = ({ data,reference }) => {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.2} whileDrag={{scale:1.1}} dragTransition={{bounceStiffness:100,bounceDamping:30}} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full  left-0 ">
        <div className="flex items-center justify-between mb-5 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {
               data.close?<RiCloseFill />:<MdOutlineFileDownload size=".7em" color="#fff" />
            }
            
          </span>
        </div>
        {
            data.tag.isOpen&&(
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
                   <h3 className="text-sm font-semibold text-black">{data.tag.tagTitle}</h3>
                </div>
            )
        }
        
      </div>
    </motion.div>
  );
};

export default Card;
