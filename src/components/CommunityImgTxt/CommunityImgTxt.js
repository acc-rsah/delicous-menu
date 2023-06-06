import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import TextContainer from "../TextContainer/TextContainer";

const CommunityImgTxt = ({
    imagePath,
    altText,
    title,
    bodyText,
    commentCount,
    heartCount,
}) => {
    return (
        <>
            <ImageContainer imagePath={imagePath} altText={altText} />
            <TextContainer
                title={title}
                bodyText={bodyText}
                commentCount={commentCount}
                heartCount={heartCount}
            />
        </>
    );
};

export default CommunityImgTxt;
