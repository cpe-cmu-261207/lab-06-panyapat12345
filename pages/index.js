import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async (N) => {
    const resp = await axios.get(`https://randomuser.me/api/?results=${N}`);
    //for (const user of resp.data.results) console.log(user);
    setUsers(resp.data.results);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <button
          className="btn btn-dark"
          onClick={() => {
            if (input > 0) genUsers(input);
            else alert("Invalid number of user");
          }}
        >
          Generate
        </button>
      </div>

      {/* Real UserCard */}
      {users.map((user) => (
        <UserCard person={user} key={user.name.last} />
      ))}

      {/* Example of folded UserCard */}
      <div className="border-bottom" style={{ display: "none" }}>
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            className="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronDown />
        </div>

        {/* UserCardDetail is hidden */}
      </div>

      {/* Example of expanded UserCard */}
      <div className="border-bottom" style={{ display: "none" }}>
        {/* main section */}
        <div className="d-flex align-items-center p-3">
          <img
            src="/profile-placeholder.jpeg"
            width="90px"
            className="rounded-circle me-4"
          />
          <span className="text-center display-6 me-auto">Name...</span>
          <IconChevronUp />
        </div>

        {/* UserCardDetail*/}
        <div className="text-center">
          <p>
            <IconMailForward /> Email...
          </p>
          <p>
            <IconMapPins /> Address...
          </p>
        </div>
      </div>

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Panyapat Wongdee 640610650
      </p>
    </div>
  );
}
