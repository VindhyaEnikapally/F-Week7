import CountryCard from "./CountryCard";

function CountryList({countries}) {
  if (countries.length===0) {
    return <h3>No Countries Found</h3>;
  }

  return (
    <div
      style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",
        gap:"20px",
      }}
    >
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;