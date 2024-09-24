




import React from 'react';

function Pictureframe(props) {
    return (
        <>
            <img src={props.imageUrl} style={{ width: '100%', height: '500px' }}  />
        </>
    );
}

export default Pictureframe;
