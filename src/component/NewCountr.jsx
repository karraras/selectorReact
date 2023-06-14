import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import { BiCheck } from "react-icons/bi";
import { useGlobalContext } from "./Context";

function NewCountr(props) {
  const { setState } = useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const [Search, setSearch] = React.useState("");

  return (
    <div className="w-[250px]">
      <h1>{props.name}:</h1>
      <form className="flex  items-center mt-1 w-full bg-white rounded overflow-hidden justify-between px-2">
        <input
          onClick={() => setOpen(!open)}
          type="text"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none flex-1 cursor-pointer"
        />
        <LuChevronsUpDown size={15} className="text-slate-400" />
      </form>
      <ul
        className={`w-full bg-white rounded mt-2 ${
          open ? "h-0" : "max-h-[300px]"
        } overflow-y-auto `}
      >
        {props?.newCo?.map((item, index) => {
          return (
            <li
              onClick={() => {
                setOpen(!open);
                setSearch(item.name);
                setState(item.isoCode);
              }}
              key={index}
              className={`
                      p-2 hover:text-white hover:bg-green-600 flex items-center ${
                        item.name.toLowerCase().startsWith(Search.toLowerCase())
                          ? "block"
                          : "hidden"
                      }
                      `}
            >
              <BiCheck size={15} className="text-white mr-2" />
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewCountr;
