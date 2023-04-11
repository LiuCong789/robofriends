import Card from "./Card";

function Cards({ robots }) {
  return (
    <div className="cards">
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
}

export default Cards;
