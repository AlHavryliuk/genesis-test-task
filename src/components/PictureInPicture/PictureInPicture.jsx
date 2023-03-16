import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { pictureModeOff } from 'store/miniVideoReducer/miniVideoReducer';
import { select } from 'store/selectors/selectors';
import { clearCurrentVideo, saveVideoTime } from 'store/videoReducer/videoReducer';
import { PictureRightBlock } from './PictureInPicture.styled';


const PictureInPicture = () => {
    const currentVideo = useSelector(select.currentVideo)
    const videoArray = useSelector(select.videoArray)
    const pictureIsHidden = useSelector(select.pictureModeisHidden)
    const dispatch = useDispatch()
    const videoRef = useRef(null);

    useEffect(() => {
        if (pictureIsHidden) return
        const video = videoRef.current;
        const hls = new Hls();
        const firstVideo = currentVideo;
        if (!firstVideo) return
        console.log(currentVideo);
        hls.loadSource(currentVideo);
        hls.attachMedia(video);
        const result = checkVideoList()
        if (result) {
            video.currentTime = result.lastTime;
        }
        video.play(); 
        return () => {
            pauseVideo()
            hls.destroy()
        }
    }, [pictureIsHidden]);



    const handlePictureModeOff = () => {
        dispatch(pictureModeOff())
    }

    const checkVideoList = () => {
        if (!videoArray.length) return false
        const result = videoArray.find(({ id }) => id === currentVideo);
        return result ?? false
    }

    const closePopup = () => {
        const video = videoRef.current;
        dispatch(saveVideoTime(video.currentTime))
        dispatch(clearCurrentVideo())
    }

    const pauseVideo = () => {
        const video = videoRef.current
        if (video) {
            video.pause()
        }
    }

    return (
        !pictureIsHidden &&
        <PictureRightBlock >
            <button onClick={handlePictureModeOff}>Close</button>
            <video width="100%" ref={videoRef} controls onClick={((e) => e.stopPropagation())}></video>
        </PictureRightBlock>
    )
}


export default PictureInPicture