import React from 'react'
import { LessonItem } from './LessonDetails.styled';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from 'store/videoReducer/videoReducer';

const LessonDetails = ({ index, lesson }) => {
    const { title } = lesson
    const dispatch = useDispatch();

const handleSetVideo = (link) => {
    dispatch(setCurrentVideo(link)) 
}


    return (
        <LessonItem>
            <div>
                <h2>Lesson {++index}</h2>
                <span>{title}</span>
            </div>
            <button onClick={(() => handleSetVideo(lesson.link))}>Watch video</button>
        </LessonItem>
    )
}

export default LessonDetails