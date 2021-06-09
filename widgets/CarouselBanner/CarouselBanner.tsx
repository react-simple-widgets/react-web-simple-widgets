import * as React from "react";
import Carousel, { LeftArrow, RightArrow } from "react-native-styled-paper/components/Carousel";
import Image from "react-native-styled-paper/components/Image/Image";
import { useWindowDimensions } from "react-native";
import RatioBox from "../RatioBox";

const defaultRenderItem = (props) => {

    const { index } = props;

    return (
        <Image
            key={index}
            source={{ uri: "https://via.placeholder.com/350x150" }}
            style={{
                width: 250,
                height: 150,
            }}
        />
    );
};

const defaultProps = {
    data: [{}, {}, {}],
};

const CarouselBanner = (props) => {

    const {
        data,
    } = props;

    const { width: viewportWidth } = useWindowDimensions();
    const sliderWidth = viewportWidth;
    // const sliderWidth = viewportWidth - 32;

    const _imageCarouselRef = React.createRef<Carousel>();

    const renderItem = props.renderItem ?? defaultRenderItem;

    return (
        <RatioBox>
            <LeftArrow
                onPress={e => _imageCarouselRef.current?.snapToPrev()}
            />
            <Carousel
                sliderWidth={sliderWidth ?? 767}
                itemWidth={sliderWidth ?? 767}
                data={data}
                renderItem={({ item, index }) => renderItem({ item, index })}
                ref={_imageCarouselRef}
                loop={true}
            />
            <RightArrow
                onPress={e => _imageCarouselRef.current?.snapToNext()}
            />
        </RatioBox>
    );
};

CarouselBanner.defaultProps = defaultProps;

export default CarouselBanner;
