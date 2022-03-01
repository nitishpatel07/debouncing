import React from "react";
import data from "../response";
function CountryList({ name }) {
  const [output, setOutput] = React.useState([]);

  React.useEffect(() => {
    setOutput([]);
    data.filter((val) => {
      if (val.toLowerCase().includes(name.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [name]);
  console.log(output);
  return (
    <div>
      <section>
        <ul className="card country-list" data-testid="countryList">
          <li key="india" className="pa-10 pl-20">
            {output.map((name) => (
              <div key={name}>{name}</div>
            ))}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default CountryList;
