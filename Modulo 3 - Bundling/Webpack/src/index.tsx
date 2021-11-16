import "./mystyles.scss";

import React from "react";
import ReactDOM from "react-dom";
import landscapeImg from "./content/iceland-1.jpg";

import { HelloWorldComponent } from "./components/helloWorld/HelloWorldComponent";
import ContactList from "./components/list/ListComponent";

const img = document.createElement("img");
img.src = landscapeImg;

document.getElementById("imgContainer").appendChild(img);

interface Contact {
  id: number;
  name: string;
}

const contacts: Contact[] = [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" }
  ];

ReactDOM.render(
    <div>
        <HelloWorldComponent />
        <ContactList contacts={contacts} />
    </div>,
    document.getElementById('root')
  );