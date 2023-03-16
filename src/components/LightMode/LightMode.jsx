import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from 'store/themeReducer/themeSlice';
import icon from '../../images/icon-spread.svg';
import { select } from './../../store/selectors/selectors';
import { LightButton, LightmodeWrapper } from './LightMode.styled';

const sunIcon = `${icon}#icon-sun`;
const moonIcon = `${icon}#icon-moon`;

const LightMode = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(select.darkmode);

    const handleToggleLightMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <LightmodeWrapper >
            <LightButton onClick={handleToggleLightMode}>
                <svg width="100%" height="100%">
                    <use href={darkMode ? moonIcon : sunIcon}></use>
                </svg>

            </LightButton>
            <h2>{darkMode ? `Night` : `Light`} Mode</h2>
        </LightmodeWrapper>
    );
};

export default LightMode;
