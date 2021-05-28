import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react";
import * as List from "react-native-styled-paper/components/List";
import FolderIcon from "@mdi/svg/svg/folder.svg";
import CalendarIcon from "@mdi/svg/svg/calendar.svg";
import StarIcon from "@mdi/svg/svg/star.svg";

const ListExample = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Accordions">
            <List.Accordion
                title="Uncontrolled Accordion"
                left={props => <List.Icon {...props} icon={FolderIcon} />}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>

            <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon={FolderIcon} />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </List.Section>
    );
};

storiesOf("List", module)
    .add("Default", () => {
        return (
            <ListExample />
        )
    })
    .add("List.Item", () => {
        return (
            <View>
                <List.Item
                    title={"First item"}
                    description={"First item description"}
                />
                <List.Item
                    title={"Second item"}
                    description={"Second item description"}
                    left={props => (
                        <List.Icon icon={CalendarIcon} />
                    )}
                />
                <List.Item
                    title={"Third item"}
                    description={"Third item description"}
                    left={props => (
                        <List.Icon icon={CalendarIcon} />
                    )}
                    right={props => (
                        <List.Icon icon={StarIcon} />
                    )}
                />
            </View>
        )
    })
