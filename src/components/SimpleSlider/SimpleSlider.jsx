import LessonDetails from "components/LessonDetails/LessonDetails";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { select } from "store/selectors/selectors";
import { StyledSlider } from "./SimpleSlider.styled";

export const SimpleSlider = () => {
    const details = useSelector(select.details)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <StyledSlider>
            <Slider {...settings}>
                {details && details.lessons.map((lesson, index) => <LessonDetails key={lesson.id} index={index} lesson={lesson} />)}
            </Slider>
        </StyledSlider>
    );
}
