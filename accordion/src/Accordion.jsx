import React, { useState } from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const item = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    const func = (index) => {
      setActiveIndex(index);
    };
    return (
      <React.Fragment key={item.title}>
        <div className="title" onClick={() => func(index)}>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <>{item}</>;
};

export default Accordion;
