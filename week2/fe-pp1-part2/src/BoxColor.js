import './BoxColor.css';

function BoxColor(props) {
    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const hexColor = `#${((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1).toLowerCase()}`;

    const textColor = (props.r > props.g && props.r > props.b) ? '#FFF' : '#000';

    return (
        <div className="box-color" style={{ backgroundColor, color: textColor }}>
            <p className="rgb-paragraph">rgb({props.r}, {props.g}, {props.b})</p>
            <p className="hex-paragraph">{hexColor}</p>
        </div>
    );
};

export default BoxColor;