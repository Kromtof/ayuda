import React from "react";

export const ItemCarritoComponent = (props) => {
  return (
    <div>
      {props.item.name} {props.item.price}$ x {props.item.qty} Unidades
    </div>
  );
};

//ItemCarritoComponent.propTypes = {
// item: PropTypes.object.isRequired,
//};
