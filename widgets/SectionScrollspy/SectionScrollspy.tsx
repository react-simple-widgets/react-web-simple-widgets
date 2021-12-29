import * as React from "react";

type Props = {
    headerOffset: number,
    stickyOffset: number,
    sectionClassName: string,
    onSectionChange: (index) => void,
    innerRef: React.RefObject<any>,
    disableSectionScroll: boolean,
    children: React.ReactNode,
};

const defaultProps = {
    headerOffset: 0,
    stickyOffset: 0,
    disableSectionScroll: false,
};

const SectionScrollspy = ({
    headerOffset,
    stickyOffset,
    sectionClassName,
    onSectionChange,
    innerRef,
    disableSectionScroll,
    children,
}: Props) => {

    const handleTabItemClick = (item, e?) => {
        e?.preventDefault();
        // do something
        try {
            const targetSectionEl: HTMLElement = document.querySelector(`.${sectionClassName}_${item.index}`);

            if (targetSectionEl) {
                window.scrollTo({
                    top: targetSectionEl.offsetTop - stickyOffset,
                    behavior: "smooth",
                });
            }
        } catch (error) {
            // do something
        }
    };

    const handleScrollEvent = () => {
        try {
            let indexTemp = 0;
            document
                .querySelectorAll(`.${sectionClassName}`)
                .forEach((item: any, index) => {
                    if (window.scrollY + headerOffset > item.offsetTop) {
                        indexTemp = index;
                    }
                });

            onSectionChange(indexTemp);
            // console.log("Current index:", indexTemp);
        } catch (e) {
            // do something
        }
    };

    React.useImperativeHandle(innerRef, () => ({
        tabClick: (item, e?) => {
            handleTabItemClick(item, e);
        },
    }));

    React.useEffect(() => {
        if (!disableSectionScroll) {
            // if (window) {
            //     window.scrollTo(0, 0);
            // }
            window.addEventListener("scroll", handleScrollEvent);
        }

        return () => {
            if (!disableSectionScroll) {
                window.removeEventListener("scroll", handleScrollEvent);
            }
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};

SectionScrollspy.defaultProps = defaultProps;

export default SectionScrollspy;
