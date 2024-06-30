import { useState } from "react";
import Panel from "./Panel";

export const data = [
  {
    id: 1,
    title: "About1",
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city",
  },
  {
    id: 2,
    title: "About2",
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city",
  },
  {
    id: 3,
    title: "About3",
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city",
  },
  {
    id: 4,
    title: "About4",
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city",
  },
];

const Accordion = () => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      {/* {data.map((item, index) => (
        <Panel
          key={item.id}
          data={item}
          setShowIndex={() => setShowIndex(index)}
          showItems={index === showIndex}
        />
      ))} */}
    </div>
  );
};

export default Accordion;
