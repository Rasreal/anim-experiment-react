import RotatingText from "../../animation/RotatingText/RotatingText.jsx";
import './ScrollingTextEditor.css'; // Assuming you will add the CSS in this file

export default function ScrollingTextEditor() {
    return (
        <div>
            <RotatingText
                texts={['React', 'Bits', 'Is', 'Cool!']}
                mainClassName="scrolling-text-container"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="split-text-container"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
        </div>
    );
}
