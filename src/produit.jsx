import Prix from "./Prix";

export default function Produit({ nom, prix, image, disponible, reduction }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
      <div style={{ fontSize: "50px" }}>{image}</div>
      <h3>{nom}</h3>
      <Prix prix={prix} reduction={reduction} />
      {disponible ? (
        <p style={{ color: "green" }}>En stock</p>
      ) : (
        <p style={{ color: "red" }}>Rupture de stock</p>
      )}
    </div>
  );
}