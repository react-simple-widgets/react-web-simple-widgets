# react-web-simple-widgets

[Storybook](https://react-simple-widgets.github.io/react-web-simple-widgets)
## Get Started

### Installation
```shell
npm install react-native-simple-elements
npm install react-web-simple-widgets
```
### Usage

```js
import ThemeProviver from "react-native-simple-elements/components/theme/Provider";
import SimpleBottomNavigation from "react-web-simple-widgets/widgets/SimpleBottomNavigation";
import HomeIcon from "@mdi/svg/svg/home.svg";
import ReloadIcon from "@mdi/svg/svg/reload.svg";
import ActionIcon from "@mdi/svg/svg/gesture-tap.svg";
import EmailIcon from "@mdi/svg/svg/email.svg";
import SettingsIcon from "@mdi/svg/svg/cog.svg";

<ThemeProviver>
    <SimpleBottomNavigation
        items={[
            { label: "Home", value: "home", icon: HomeIcon },
            { label: "History", value: "history", icon: ReloadIcon },
            { label: "Action", value: "action", icon: ActionIcon },
            { label: "Inbox", value: "inbox", icon: EmailIcon },
            { label: "Settings", value: "settings", icon: SettingsIcon },
        ]}
        onItemPress={() => {
            // do something
        }}
    />
</ThemeProviver>
```

## Components included:

- [x] [SimpleBottomNavigation](https://react-simple-widgets.github.io/react-web-simple-widgets/?path=/story/simplebottomnavigation--default)

## React Native Web support

## Demo App

## Documentation

## Contributing

### First Contributors

### Core Contributors

### Slack Community

## Backers

## Sponsors
