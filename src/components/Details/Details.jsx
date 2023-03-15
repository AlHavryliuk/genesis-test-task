import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from './../../store/detailsReducer/detailsOperations';
import { select } from 'store/selectors/selectors';
import { SimpleSlider } from 'components/SimpleSlider/SimpleSlider';
import Loader from 'components/Loader/Loader';
import { CustomStyled } from './Details.styled';
import { useRef } from 'react';
import Hls from 'hls.js';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import PopupVideo from 'components/PopupVideo/PopupVideo';


const Details = () => {
    const courseId = useParams('id');
    const dispatch = useDispatch();
    const details = useSelector(select.details)
    const currentVideo = useSelector(select.currentVideo)
    const detailsIsLoading = useSelector(select.detailsIsLoading)
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const hls = new Hls();
        const firstVideo = details ? details.lessons[0].link : details;

        if (firstVideo) {
            hls.loadSource(firstVideo);
            hls.attachMedia(video);
        }

    }, [details]);

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