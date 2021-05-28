import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as Avatar from "react-native-styled-paper/components/Avatar";
import FolderIcon from "@mdi/svg/svg/folder.svg";

storiesOf("Avatar", module)
    .add("Icon", () => {
        return (
            <Avatar.Icon size={24} icon={FolderIcon} />
        )
    })
    .add("Image", () => {
        return (
            <Avatar.Image size={24} source={{ uri: "https://via.placeholder.com/350x150" }} />
        )
    })
    .add("Text", () => {
        return (
            <Avatar.Text size={24} label={"Text"}/>
        )
    })
