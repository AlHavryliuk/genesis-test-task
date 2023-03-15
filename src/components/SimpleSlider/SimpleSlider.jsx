import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { select } from "store/selectors/selectors";
import LessonDetails from "components/LessonDetails/LessonDetails";

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
        <div>
            <Slider {...settings}>
                {details && details.lessons.map((lesson, index) => <LessonDetails key={lesson.id} index={index} lesson={lesson} />)}
            </Slider>
        </div>
    );
}
