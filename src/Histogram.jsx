export default function Histogram(props) {
  var height = props.count;
  //This line will convert the index back to the character
  var charChode = props.index + 97;
  var char = String.fromCharCode(charChode);
  return (
    <div
      style={{ height: `${height * 10}%` }}
      className={`w-5 bg-amber-600 text-white flex flex-col justify-end`}
    >
      {char}
    </div>
  );
}
