import * as React from "react";
import { storiesOf } from "@storybook/react";
import SectionScrollspy from "react-web-simple-widgets/widgets/SectionScrollspy";
import Button from "react-native-simple-elements/dist/commonjs/Button";

const DefaultExample = (props) => {

    const [ currentIndex, setCurrentIndex ] = React.useState(0);

    const sectionScrollspyRef = React.useRef(null);
    const [items,] = React.useState(Array.from({ length: 4 }));

    const handleSectionChange = (newIndex) => {
        setCurrentIndex(newIndex);
    }

    return (
        <div>
            <div style={{ height: "160px", overflow: "hidden" }}>
            {items.map((i, index) => (
                <Button
                    onPress={() => {
                        sectionScrollspyRef?.current?.tabClick({
                            index: index,
                        })
                    }}
                >
                    {`Tab ${index}`}
                </Button>
            ))}
            </div>
            <SectionScrollspy
                innerRef={sectionScrollspyRef}
                sectionClassName="sectionClassName"
                onSectionChange={handleSectionChange}
                headerOffset={160}
            >
                {items.map((i, index) => (
                    <div
                        key={index}
                        className={`sectionClassName sectionClassName_${index}`}
                        style={{
                            height: 160,
                            // border: "1px solid green",
                            margin: "0 6",
                            padding: "0 8",
                        }}
                    >
                        div - #{index} - active section - #{currentIndex}
                    </div>
                ))}
            </SectionScrollspy>
            <div style={{ height: "200px", overflow: "hidden" }}>
            </div>
        </div>
    );
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("SectionScrollspy", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
