import { useMediaQuery } from "react-responsive";

const LargeScreen = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 });
    return isDesktop ? children : null;
};

const MediumScreen = ({children}) => {
    const isDesktop = useMediaQuery({ minWidth: 751, maxWidth: 1199 });
    return isDesktop ? children : null;
};

const SmallScreen = ({children}) => {
    const isDesktop = useMediaQuery({ maxWidth: 750 });
    return isDesktop ? children : null;
};

export {
    LargeScreen,
    MediumScreen,
    SmallScreen,
}