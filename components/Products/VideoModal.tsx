import React, { useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import getVideoUrl from '../../../utils/getVideoUrl'
import addClassToVideo from '../../../utils/addClassToVideo'

interface VideoModalProps {
  video: string
}

const VideoModal: React.FC<VideoModalProps> = ({ video }) => {
  const [open, setOpen] = useState(false)

  //Сделать проверку на нулл и поставить дефолтную картинку
  const videoID = getVideoUrl(video)
  const videoWithClass = addClassToVideo(video)

  const handleOpen = () => setOpen(!open)
  return (
    <>
      <div className="relative" onClick={handleOpen}>
        <img
          src={`https://img.youtube.com/vi/${videoID}/0.jpg`}
          alt=""
          className="cursor-pointer"
        />
        <div className="yt-container">
          <div className="yt-icon">
            <div className="play-btn"></div>
          </div>
        </div>
      </div>

      <Dialog open={open} handler={handleOpen} className="h-1/2" size="lg">
        <div
          className="h-full"
          dangerouslySetInnerHTML={{ __html: videoWithClass }}
        />
        {/* <iframe
          className="swiper-lazy w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_9jVczmAhBg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe> */}
      </Dialog>
    </>
  )
}
export default VideoModal
