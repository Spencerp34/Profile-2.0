import {useState, useRef} from 'react';
import { Stage, Layer, Line } from 'react-konva';
import {startingDoodle} from './StartingDoodle';

const Chalkboard = () => {
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState(startingDoodle());
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];

    
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const fullErase = () =>{
    setLines([])
  }


  return (
    <div className='chalkboard'>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Chalk</option>
        <option value="eraser">Eraser</option>
      </select>
      <button onClick={fullErase}>
          Erase All
      </button>
      <Stage
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.8}
        onPointerDown={handleMouseDown}
        onPointermove={handleMouseMove}
        onPointerup={handleMouseUp}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#FBF7F5"
              strokeWidth={15}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Chalkboard
