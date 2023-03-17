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
        if (!currentVideo) return
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pictureIsHidden]);


    const checkVideoList = () => {
        if (!videoArray.length) return false
        const result = videoArray.find(({ id }) => id === currentVideo);
        return result ?? false
    }

    const handleClosePopup = () => {
        const video = videoRef.current;
        dispatch(saveVideoTime(video.currentTime))
        dispatch(clearCurrentVideo())
        dispatch(pictureModeOff())
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
            <button onClick={handleClosePopup}>Close</button>
            <video width="100%" ref={videoRef} controls onClick={((e) => e.stopPropagation())}></video>
        </PictureRightBlock>
    )
}


export default PictureInPicture