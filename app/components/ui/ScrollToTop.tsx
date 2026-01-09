
interface ScrollToTopProps {
    isVisible: boolean;
    onClick: () => void;
}

const ScrollToTop = ({ isVisible, onClick }: ScrollToTopProps) => {
    return (
        <button
            className={`${"scrollToTopBtn"} ${isVisible ? "scrollToTopBtnVisible" : ""
                }`}
            onClick={onClick}
        >
            <svg width="40" height="30">
                <use href="/svg/svg_spit.svg#icon-arrow"></use>
            </svg>
        </button>
    );
};

export default ScrollToTop;



