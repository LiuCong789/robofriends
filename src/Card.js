import "./Card.css";

function Card({ id, name, email }) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${id}.png?size=200x200`}
        alt="robot"
        className="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
