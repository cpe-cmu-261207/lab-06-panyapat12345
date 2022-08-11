import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isDispaly, setIsDispaly] = useState(false);

  const onClickUserCard = () => {
    if (isDispaly === true) setIsDispaly(false);
    else setIsDispaly(true);
  };

  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        className="d-flex align-items-center p-3"
        onClick={() => {
          onClickUserCard();
        }}
      >
        <img
          src={props.person.picture.large}
          width="90px"
          class="rounded-circle me-4"
        />
        <span className="text-center display-6 me-auto">{`${props.person.name.first} ${props.person.name.last}`}</span>
        {!isDispaly && <IconChevronDown />}
        {isDispaly && <IconChevronUp />}
      </div>

      {/* UserCardDetail*/}
      <UserCardDetail
        email={props.person.email}
        address={props.person.location}
        display={isDispaly}
      />
    </div>
  );
}
