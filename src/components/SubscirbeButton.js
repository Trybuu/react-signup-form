import React from "react";

const SubscribeButton = (props) => {
  return (
    <button className="button button--subscribe" onClick={props.isSubscribed}>
      <strong>Try it free 7 days</strong> then $20/mo. thereafter
    </button>
  );
};

export default SubscribeButton;
