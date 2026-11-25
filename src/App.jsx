import Produit from "./produit";

const produits = [
  { id: 1, nom: "Clavier", prix: 150, image: "⌨️", disponible: true, reduction: 20 },
  { id: 2, nom: "Souris", prix: 80, image: "🖱️", disponible: true },
  { id: 3, nom: "Écran", prix: 1200, image: "🖥️", disponible: false, reduction: 10 },
  { id: 4, nom: "Casque", prix: 250, image: "🎧", disponible: true },
  { id: 5, nom: "Webcam", prix: 300, image: "📷", disponible: false },
  { id: 6, nom: "Clé USB", prix: 60, image: "💾", disponible: true, reduction: 50 },
];

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {produits.map((p) => (
        <Produit key={p.id} {...p} />
      ))}
    </div>
  );
}