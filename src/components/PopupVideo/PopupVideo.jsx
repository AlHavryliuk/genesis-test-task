import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js';
import { useSelector, useDispatch } from 'react-redux';
import { select } from 'store/selectors/selectors';
import { PopupVideoBody, PopupVideoMain } from './PopupVideo.styled';
import { clearCurrentVideo } from 'store/videoReducer/videoReducer';

const PopupVideo = () => {
    const currentVideo = useSelector(select.currentVideo)
    const dispatch = useDispatch()
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const hls = new Hls();
        const firstVideo = currentVideo;
        if (firstVideo) {
            hls.loadSource(currentVideo);
            hls.attachMedia(video);
        }
    }, [currentVideo]);

    const closePopup = () => {
        pauseVideo()
        dispatch(clearCurrentVideo())
    }

    const pauseVideo = () => {
        const video = videoRef.current
        if (video) {
            video.pause()
        }
    }

    return (
        currentVideo &&
        <PopupVideoMain onClick={closePopup}>
            <PopupVideoBody >
                <video width="100%" ref={videoRef} controls onClick={((e) => e.stopPropagation())}></video>
            </PopupVideoBody>
        </PopupVideoMain>
    )
}

export default PopupVideo