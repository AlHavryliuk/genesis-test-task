import React from 'react'
import { RingLoader } from 'react-spinners'
import { LoaderBody } from './Loader.styled'

const Loader = () => {
    return (
        <LoaderBody>
            <RingLoader color="#36d7b7" />
        </LoaderBody>
    )
}

export default Loader