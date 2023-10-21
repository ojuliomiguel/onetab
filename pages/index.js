import React, { useState } from 'react';

function ClickButton({ onClick }) {
    return (
        <button onClick={onClick}>
            Click and see the magic
        </button>
    );
}

function Home() {
    const handleClick = () => {
        setShowImage(!showImage);
    };

    const [showImage, setShowImage] = useState(false);

    return (
        <div>
            <ClickButton onClick={handleClick}>
                Click and see the magic
            </ClickButton>

            {showImage && (
                <img
                    src="https://i.ibb.co/dBr02DF/DALL-E-2023-10-21-09-31-30-Vector-image-of-a-chemistry-teacher-with-curly-hair-featuring-golden-high.png"
                    alt="Descrição da imagem"
                />
            )}
        </div>
    );
}

export default Home;
