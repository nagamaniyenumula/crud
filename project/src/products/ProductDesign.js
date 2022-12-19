import React from 'react';

const ProductDesign = (props) => {
  console.log(props)
  return (
    <>
      <h2>{props.data.title}</h2>
      <img src={props.data.img} width="100" />
      <p>
        price <span>{'₹' + props.data.offeredPrice}</span>
      </p>
      <p>
        origianl <del>{'₹' + props.data.originalPrice}</del>
      </p>
      <ul>
        {props.data.highlights.map((h, i) => {
          return <li>{h}</li>;
        })}
      </ul>
      <hr />
    </>
  );
};

export default ProductDesign;
