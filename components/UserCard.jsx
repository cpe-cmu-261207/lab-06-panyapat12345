import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [isDisplay, setIsDisplay] = useState(false);

  const onClickUserCard = () => {
    if (isDisplay === true) setIsDisplay(false);
    else setIsDisplay(true);
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
          className="rounded-circle me-4"
        />
        <span className="text-center display-6 me-auto">{`${props.person.name.first} ${props.person.name.last}`}</span>
        {!isDisplay && <IconChevronDown />}
        {isDisplay && <IconChevronUp />}
      </div>

      {/* UserCardDetail*/}
      <UserCardDetail
        email={props.person.email}
        address={props.person.location}
        display={isDisplay}
      />
    </div>
  );
}
