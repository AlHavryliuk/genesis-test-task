import Hls from 'hls.js';
import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { pictureModeOn } from 'store/miniVideoReducer/miniVideoReducer';
import { select } from 'store/selectors/selectors';
import { clearCurrentVideo, closeVideoPopup, saveVideoTime } from 'store/videoReducer/videoReducer';
import { PopupVideoBody, PopupVideoMain } from './PopupVideo.styled';


const PopupVideo = () => {
    const openVideoPopup = useSelector(select.openVideoPopup)
    const currentVideo = useSelector(select.currentVideo)
    const videoArray = useSelector(select.videoArray)
    const details = useSelector(select.details)
    const { title } = details ?? 'Lesson name'
    const notify = (text) => toast(text)
    const dispatch = useDispatch()
    const videoRef = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (!openVideoPopup) return
        const video = videoRef.current;
        const hls = new Hls();
        const firstVideo = currentVideo;
        if (!firstVideo) return
        notify("You can control the video playback speed by pressing the keys: 's', 'd', 'f'")
        hls.loadSource(currentVideo);
        hls.attachMedia(video);
        const result = checkVideoList()
        if (result) {
            video.currentTime = result.lastTime;
        }
        return () => {
            pauseVideo()
            hls.destroy()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentVideo]);

    const handlePictureMode = (e) => {
        e.stopPropagation()
        const video = videoRef.current;
        dispatch(saveVideoTime(video.currentTime))
        dispatch(closeVideoPopup())
        dispatch(pictureModeOn())
    }

    const handleKeyDown = (e) => {
        const video = videoRef.current;
        if (e.key === "f") {
            notify(`Quick mode (2x)`)
            video.playbackRate = 2
        } else if (e.key === "s") {
            notify(`Slowly mode (0.5x)`)
            video.playbackRate = 0.5
        } else if (e.key === "d") {
            notify(`Speed default`)
            video.playbackRate = 1
        } else if (e.keyCode === 27) {
            closePopup()
        }
    };

    const checkVideoList = () => {
        if (!videoArray.length) return false
        const result = videoArray.find(({ id }) => id === currentVideo);
        return result ?? false
    }

    const closePopup = () => {
        const video = videoRef.current;
        dispatch(saveVideoTime(video.currentTime))
        dispatch(clearCurrentVideo())
        dispatch(closeVideoPopup())
    }

    const pauseVideo = () => {
        const video = videoRef.current
        if (video) {
            video.pause()
        }
    }

    return (
        openVideoPopup &&
        <PopupVideoMain onClick={closePopup} >
            <PopupVideoBody >
                <h2>{title}</h2>
                <video width="100%" ref={videoRef} controls onClick={((e) => e.stopPropagation())}></video>
                <button onClick={((e) => handlePictureMode(e))}>"Picture in Picture" mode</button>
            </PopupVideoBody>
        </PopupVideoMain>
    )
}

export default PopupVideo