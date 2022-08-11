import React, { useState } from "react";
import { IconMailForward, IconMapPins } from "@tabler/icons";

export default function UserCardDetail(props) {
  const display = props.display === true ? "" : "none";

  return (
    <div className="text-center" style={{ display: display }}>
      <p>
        <IconMailForward /> {props.email}
      </p>
      <p>
        <IconMapPins />{" "}
        {`${props.address.city} ${props.address.state} ${props.address.country} ${props.address.postcode}`}
      </p>
    </div>
  );
}
