import { GoBackCustom } from './GoBackButton.styled';

const GoBackButton = () => {
    // Simple Go Back without 'location object'
    const handleGoBack = () => window.history.back();

    return (
        <GoBackCustom onClick={handleGoBack}>Go Back</GoBackCustom>
    )
}

export default GoBackButton