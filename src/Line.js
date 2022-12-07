import './Line.css';

function Line(props) {
    const style = {
        backgroundColor: props.color,
        animationDuration: "10s"
    }

    return (
      <div className="line" style={style}/>
    );
  }
  // change effect to operations, and introduce effect type in report, change discharging to perfrom
  export default Line;