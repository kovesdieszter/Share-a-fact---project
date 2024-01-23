import Fact from "./Fact";

function FactList({ facts }) {
  if (facts.length === 0) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one!
      </p>
    );
  }
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
      <p>They are {facts.length} in the database. Add your own!</p>
    </section>
  );
}

export default FactList;
