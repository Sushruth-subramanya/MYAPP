function Card(props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}

export default Card;
