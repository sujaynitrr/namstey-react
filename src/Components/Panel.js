import { useState } from "react";

const Panel = ({ data, setShowIndex, showItems }) => {
  const { title, description } = data;

  const onClickHandler = () => {
    setShowIndex();
  };

  return (
    <section className="panel">
      <button onClick={onClickHandler}>⬇️</button>
      {showItems && (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </section>
  );
};

export default Panel;
