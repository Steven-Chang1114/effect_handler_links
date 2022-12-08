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
  export default Line;