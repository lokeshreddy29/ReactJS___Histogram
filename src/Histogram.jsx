export default function Histogram(props) {

  var height = props.count;

  //This line will convert the index back to the character
  var charChode = props.index + 97;
  var char = String.fromCharCode(charChode);

  return (
    <div
      style={{ height: `${height*3}rem` }}
      className={` max-h-100 w-6 bg-blue-500 text-white text-lg flex flex-col justify-end mx-2`}
    >
      {char}
      <br/>
      {props.count}
    </div>
  );
}
