import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPage, incrementPage, setMaxPage } from 'store/pageReducer/pageSlice';
import { select } from 'store/selectors/selectors';
import { CusomButton, PaginationBlock } from './PaginationButton.styled';

const PaginationButton = () => {

    const page = useSelector(select.page)
    const maxpage = useSelector(select.maxpage)
    const courses = useSelector(select.courses)
    const dispatch = useDispatch()


    const handleIncrementPage = () => {
        dispatch(incrementPage())
    }

    const handleDecrementPage = () => {
        dispatch(decrementPage())
    }

    useEffect(() => {
        if (!courses) return
        const endPage = Math.ceil(courses.length / 10);
        dispatch(setMaxPage(endPage))
    }, [dispatch, courses])


    return (
        <PaginationBlock>
            <CusomButton disabled={page === 1} onClick={handleDecrementPage}>Previous</CusomButton>
            <CusomButton disabled={page === maxpage} onClick={handleIncrementPage}>Next</CusomButton>
        </PaginationBlock>

    )
}

export default PaginationButton