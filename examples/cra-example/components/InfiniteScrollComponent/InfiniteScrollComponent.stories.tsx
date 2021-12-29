import * as React from "react";
import { storiesOf } from "@storybook/react";
import InfiniteScrollComponent from "react-web-simple-widgets/widgets/InfiniteScrollComponent";

const DefaultExample = (props) => {

    const [items, setItems] = React.useState(Array.from({ length: 30 }));

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 1500);
    };

    return (
        <div>
            <InfiniteScrollComponent
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((i, index) => (
                    <div
                        key={index}
                        style={{
                            height: 30,
                            border: "1px solid green",
                            margin: 6,
                            padding: 8
                        }}
                    >
                        div - #{index}
                    </div>
                ))}
            </InfiniteScrollComponent>
        </div>
    );
};

const WithHeightExample = (props) => {

    const [items, setItems] = React.useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = React.useState(true);

    const fetchMoreData = () => {
        if (items.length >= 500) {
            setHasMore(false);
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 500);
    };

    return (
        <div>
            <InfiniteScrollComponent
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                height={400}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {items.map((i, index) => (
                    <div
                        key={index}
                        style={{
                            height: 30,
                            border: "1px solid green",
                            margin: 6,
                            padding: 8
                        }}
                    >
                        div - #{index}
                    </div>
                ))}
            </InfiniteScrollComponent>
        </div>
    )
}

const WithScrollableTargetExample = (props) => {

    const [items, setItems] = React.useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = React.useState(true);

    const fetchMoreData = () => {
        if (items.length >= 500) {
            setHasMore(false);
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 500);
    };

    return (
        <div>
            <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
                <InfiniteScrollComponent
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {items.map((i, index) => (
                        <div
                            key={index}
                            style={{
                                height: 30,
                                border: "1px solid green",
                                margin: 6,
                                padding: 8
                            }}
                        >
                            div - #{index}
                        </div>
                    ))}
                </InfiniteScrollComponent>
            </div>
        </div>
    )
}

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("InfiniteScrollComponent", module)
    .add("Default", () => <DefaultExample />)
    .add("with Height", () => <WithHeightExample />)
    .add("with ScrollableTarget", () => <WithScrollableTargetExample />)
    .add("Playground", () => <PlaygroundExample />);
