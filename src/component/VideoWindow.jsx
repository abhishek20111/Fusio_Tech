import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = ({ videoUrl, isPlaying }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="p-5">
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <video
          ref={videoRef}
          src={videoUrl}
          style={{
            border: "none",
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
          }}
          controls
        ></video>
      </div>
    </div>
  );
};

const Accordion = ({ syllabus, videoUrl, onAccordionClick }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleAccordionClick = () => {
    setExpanded(!isExpanded);
    onAccordionClick(videoUrl);
  };

  return (
    <div className="border rounded-lg border-gray-600">
      <button
        className={`flex items-center justify-between w-full py-4 px-6 bg-white hover:bg-gray-100 focus:outline-none transition-all duration-300 ease-in-out ${
          isExpanded ? "rounded-t-lg" : "rounded-lg"
        }`}
        onClick={handleAccordionClick}
      >
        <h2 className="text-lg font-medium text-gray-800">{syllabus}</h2>
      </button>
    </div>
  );
};

const VideoWindow = ({ selectedSyllabus, selectedVideoUrl }) => {
  const location = useLocation();

  const syllabus = selectedSyllabus || location.state && location.state.selectedSyllabus;
  const videoUrl = selectedVideoUrl || location.state && location.state.selectedVideoUrl;
  
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleAccordionClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setVideoPlaying(true);
  };
  const [selectIndex, setSelectIndex] = useState(-1);
  return (
    <div className="flex flex-col outline-double -outline-offset-8 rounded-2xl md:rounded-3xl md:flex-row bg-gray-100 bg-gradient-to-r from-white via-blue-200 to-white">
      <div className="md:w-1/2 w-full">
        <VideoPlayer videoUrl={selectedVideo} isPlaying={isVideoPlaying} />
        {selectIndex >= 0 && (<div className="flex justify-center">
          <h1 className="md:text-3xl text-xl font-semibold md:mb-5 ">
            {syllabus[selectIndex]}
          </h1>
        </div>)}
      </div>
      <div className="md:w-1/2">
        <div className="p-6 md:my-10 max-h-[300px] overflow-auto">
          {videoUrl.map((videoUrl, index) => (
            <Accordion
              key={index}
              syllabus={syllabus[index]}
              videoUrl={videoUrl}
              onAccordionClick={handleAccordionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoWindow;
