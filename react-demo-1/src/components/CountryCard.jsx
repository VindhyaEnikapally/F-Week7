function CountryCard({country}) {
  return (
    <div
      style={{
        border:"1px solid #ddd",
        padding:"15px",
        borderRadius:"8px",
        boxShadow:"0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={country.flags?.png}
        alt={country.name.common}
        width="100%"
        height="150"
        style={{objectFit:"cover"}}
      />

      <h3>{country.name.common}</h3>
      <p><b>Capital:</b> {country.capital?.[0] || "N/A"}</p>
      <p><b>Population:</b> {country.population?.toLocaleString()}</p>
      <p><b>Region:</b> {country.region}</p>
    </div>
  );
}

export default CountryCard;