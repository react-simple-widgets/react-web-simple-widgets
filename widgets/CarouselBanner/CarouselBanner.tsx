import * as React from "react";
import Carousel, { LeftArrow, RightArrow } from "react-native-styled-paper/components/Carousel";
import Image from "react-native-styled-paper/components/Image/Image";
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

type Props = {
    sliderWidth: number,
    itemWidth?: number,
    data: Record<string, any>[],
    renderItem?: (data) => React.ReactElement,
}

const defaultProps = {
    data: [],
};

const CarouselBanner = (props: Props) => {

    const {
        sliderWidth,
        itemWidth,
        data,
    } = props;

    const _imageCarouselRef = React.createRef<Carousel>();

    const renderItem = props.renderItem ?? defaultRenderItem;

    return (
        <RatioBox>
            <LeftArrow
                onPress={e => _imageCarouselRef.current?.snapToPrev()}
            />
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={itemWidth ?? sliderWidth}
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
