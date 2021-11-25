import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import ImageCarousel from 'react-web-simple-widgets/widgets/ImageCarousel';
import { View } from 'react-native';

const ExampleCard = styled.h1`
  background: #00558b;
  color: #fff;
  line-height: 100px;
  text-align: center;
  font-size: 36px;
  margin: 0px;
  padding: 0;
  position: relative;
  box-shadow: 0 1px 2px 0 #00111b;
`;

const Dot = ({
    active,
}: any) => (
    <span style={{ color: active ? "#000000" : "#E5E5E5" }}>•</span>
);

const DefaultExample = () => {
    return (
        <View>
            <ImageCarousel
                responsive={[
                    { breakPoint: 1280, cardsToShow: 3 },
                    { breakPoint: 760, cardsToShow: 1 },
                ]}
                infinite={true}
                autoSlide={false}
                Dot={(<Dot />)}
            >
                <ExampleCard>1</ExampleCard>
                <ExampleCard>2</ExampleCard>
                <ExampleCard>3</ExampleCard>
                <ExampleCard>4</ExampleCard>
                <ExampleCard>5</ExampleCard>
                <ExampleCard>6</ExampleCard>
            </ImageCarousel>
        </View>
    );
};

const AutoPlayExample = () => {
    return (
        <View>
            <ImageCarousel
                responsive={[
                    { breakPoint: 1280, cardsToShow: 3 },
                    { breakPoint: 760, cardsToShow: 1 },
                ]}
                infinite={true}
                autoSlide={2000}
                Dot={(<Dot />)}
            >
                <ExampleCard>1</ExampleCard>
                <ExampleCard>2</ExampleCard>
                <ExampleCard>3</ExampleCard>
                <ExampleCard>4</ExampleCard>
                <ExampleCard>5</ExampleCard>
                <ExampleCard>6</ExampleCard>
            </ImageCarousel>
        </View>
    );
};

const PlaygroundExample = () => {

    const infinite = boolean("infinite", false);

    return (
        <View>
            <ImageCarousel
                responsive={[
                    { breakPoint: 1280, cardsToShow: 1 },
                    { breakPoint: 760, cardsToShow: 1 },
                ]}
                infinite={infinite}
                autoSlide={false}
            >
                <ExampleCard>1</ExampleCard>
                <ExampleCard>2</ExampleCard>
                <ExampleCard>3</ExampleCard>
                <ExampleCard>4</ExampleCard>
                <ExampleCard>5</ExampleCard>
                <ExampleCard>6</ExampleCard>
            </ImageCarousel>
        </View>
    );
};

storiesOf('ImageCarousel', module)
    .addDecorator(withKnobs)
    .add('Default', () => <DefaultExample />)
    .add('AutoPlay', () => <AutoPlayExample />)
    .add('Playground', () => <PlaygroundExample />);
