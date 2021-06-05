import * as React from "react";
import Drawer from "react-native-styled-paper/components/Drawer";
import { ContainerFluid } from "react-native-styled-paper/components/Container";

type Props = {
    items: Record<string, any>[],
};

const SimpleDrawer = (props: Props) => {

    const {
        items,
    } = props;

    return (
        <ContainerFluid
            position="relative"
            height="100%"
        >
            <Drawer>
                {(Array.isArray(items) && items.length > 0) &&
                    items.map((item, index) => {
                        return (
                            <Drawer.Item 
                                key={index}
                                label={`Item ${index}`}
                            />
                        );
                    })
                }
            </Drawer>
        </ContainerFluid>
    );
};

export default SimpleDrawer;
