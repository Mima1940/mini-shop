export default function Prix({ prix, reduction }) {
  if (reduction) {
    const prixReduit = prix - (prix * reduction) / 100;
    return (
      <p>
        <s>{prix} DH</s>{" "}
        <strong style={{ color: "red" }}>{prixReduit} DH</strong>
      </p>
    );
  }
  return <p><strong>{prix} DH</strong></p>;
}