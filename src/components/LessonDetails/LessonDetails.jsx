import { useDispatch, useSelector } from 'react-redux';
import { pictureModeOff } from 'store/miniVideoReducer/miniVideoReducer';
import { select } from 'store/selectors/selectors';
import { openVideoPopup, saveVideoId, setCurrentVideo } from 'store/videoReducer/videoReducer';
import { LessonItem } from './LessonDetails.styled';

const LessonDetails = ({ index, lesson }) => {
    const { title, status } = lesson
    const dispatch = useDispatch();
    const videoArray = useSelector(select.videoArray)
    const pictureMode = useSelector(select.pictureModeisHidden)

    const handleSetVideo = (link) => {
        if (!pictureMode) {
            dispatch(pictureModeOff())
        }
        dispatch(setCurrentVideo(link))
        dispatch(openVideoPopup())
        addVideoId(link)
    }

    // Add new video to LS

    const addVideoId = (link) => {
        if (!videoArray.length) {
            dispatch(saveVideoId())
            return
        }
        if (videoArray.some(({ id }) => id === link)) return
        dispatch(saveVideoId())
    }

    return (
        <LessonItem >
            <div className={status === 'locked' ? 'blocked' : ''}>
                <h2>Lesson {++index}</h2>
                <span>{title}</span>
            </div>
            <button onClick={(() => handleSetVideo(lesson.link))}>Watch video</button>
        </LessonItem>
    )
}

export default LessonDetails