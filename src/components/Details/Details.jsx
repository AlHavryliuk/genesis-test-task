import GoBackButton from 'components/GoBackButton/GoBackButton';
import Loader from 'components/Loader/Loader';
import PopupVideo from 'components/PopupVideo/PopupVideo';
import { SimpleSlider } from 'components/SimpleSlider/SimpleSlider';
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { select } from 'store/selectors/selectors';
import { getDetails } from './../../store/detailsReducer/detailsOperations';
import { CustomStyled } from './Details.styled';


const Details = () => {
    const courseId = useParams('id');
    const dispatch = useDispatch();
    const details = useSelector(select.details)
    const detailsIsLoading = useSelector(select.detailsIsLoading)
    const currentVideo = useSelector(select.currentVideo)
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const hls = new Hls();
        const firstVideo = details ? details.lessons[0].link : details;
        if (firstVideo) {
            hls.loadSource(firstVideo);
            hls.attachMedia(video);
        }
        return (() => {
            hls.destroy()
        })
    }, [details]);

    useEffect(() => {
        const video = videoRef.current;
        video.pause()
    }, [currentVideo])


    useEffect(() => {
        dispatch(getDetails(courseId.id))
    }, [courseId.id, dispatch])

    return (
        <CustomStyled>
            {detailsIsLoading && <Loader />}
            {details && <>
                <h1>{details.title}</h1>
                <SimpleSlider />
                <h2>Description: </h2>
                <p>{details.description}</p>
            </>
            }
            <GoBackButton />
            <video width="100%" ref={videoRef} controls></video>
            <PopupVideo />
        </CustomStyled>
    )
}

export default Details