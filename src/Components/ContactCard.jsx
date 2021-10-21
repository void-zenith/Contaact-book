import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CirclePicker } from "react-color";
const ContactCard = ({ details, selected }) => {
  const layout = useSelector((state) => state.layout);

  const [color, setColor] = useState("rgba(244,67, 54, 0.35)");
  const hanldeColorChange = (color) => {
    setColor(`rgba(${color.rgb.r},${color.rgb.g}, ${color.rgb.b}, 0.35)`);
  };
  if (layout.displayForm && !selected) {
    details.color = color;
  }
  let background =
    layout.displayForm && selected
      ? details.color
      : layout.displayContact
      ? details.color
      : color;

  return (
    <div
      className="user-card"
      style={{
        background: `${background}`,
      }}
    >
      <div className="card-avatar">
        <FontAwesomeIcon
          className="avatar"
          icon="user"
          size="5x"
        ></FontAwesomeIcon>
      </div>
      <div className="card-details">
        <p className="card-details__name">
          {details.firstname === "" ? " _______" : details.firstname}{" "}
          {details.lastname === "" ? "_______" : details.lastname},
          <span className="age">
            {details.age === "" ? "______" : details.age}
          </span>
        </p>
        <p className="card-details__email">
          {details.email === "" ? "________" : details.email}
        </p>
        {layout.displayForm && !selected && (
          <div className="card-details__color">
            <CirclePicker
              color={color}
              colors={[
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
              ]}
              onChangeComplete={hanldeColorChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
