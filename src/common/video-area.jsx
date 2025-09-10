import VideoPopup from "@/src/modals/video-popup";
import React, { useRef, useEffect, useState } from 'react'

import video_img from "@assets/img/video/bg_video.gif";
import Image from "next/image";

import CustomCursor from "./cursor";

import { motion} from 'framer-motion';
  

const VideoArea = ({service})  => {

  const imageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // adjust as needed
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false);




    return (
        <>
            
            <div className={`hp-video tp-video-area`} >
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                    <div className="col-xl-12 text-center p-0 m-0" ref={imageRef} style={{ position: 'sticky', top: 0}}>
                        <div className="tp-video-breadcrumb p-relative">
                            <CustomCursor/>
                           
                            <motion.div  onClick={() => setIsVideoOpen(true)}>
                                <Image
                                className={`${isInView ? 'zoom-in' : 'zoom-out'}`} 
                                src={video_img} 
                                alt="theme-pure" 
                                width={1368}
                                height='auto'
                                />
                            </motion.div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
             {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId="https://adverchitects.com/red_panda/red_panda_video.mp4"
            />
            {/* video modal end */}
    </>
    )

}
export default VideoArea;