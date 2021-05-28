
import * as React from 'react';
import { Text } from "react-native";
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Card from 'react-native-styled-paper/components/Card';
import { Title, Paragraph } from 'react-native-styled-paper/components/Typography';
import Button from 'react-native-styled-paper/components/Button';
import * as Avatar from 'react-native-styled-paper/components/Avatar';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const LeftContent = (props: any) => <Avatar.Image size={24} source={{ uri: "https://via.placeholder.com/350x150" }} />

const CardExample = () => (
    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>
);

storiesOf('Card', module)
    .addDecorator(withKnobs)
    .add('Default', () => <CardExample />)
