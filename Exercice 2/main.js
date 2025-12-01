const products = [
  {
    nom: "Clavier mécanique Pro",
    prix: 89.9,
    categorie: "Informatique",
    stock: 12,
  },
  {
    nom: "Souris Optique 1600dpi",
    prix: 14.9,
    categorie: "Informatique",
    stock: 45,
  },
  {
    nom: 'Écran 24" Full HD',
    prix: 129.0,
    categorie: "Informatique",
    stock: 8,
  },
  { nom: "Clé USB 64 Go", prix: 12.5, categorie: "Stockage", stock: 67 },
  { nom: "SSD 1 To NVMe", prix: 89.0, categorie: "Stockage", stock: 20 },
  { nom: "Casque audio Studio", prix: 59.9, categorie: "Audio", stock: 15 },
  { nom: "Enceinte Bluetooth Mini", prix: 29.0, categorie: "Audio", stock: 33 },
  { nom: 'Sac à dos PC 15"', prix: 39.0, categorie: "Accessoires", stock: 18 },
  { nom: "Câble HDMI 2m", prix: 7.9, categorie: "Accessoires", stock: 120 },
  { nom: "Webcam 1080p", prix: 49.0, categorie: "Informatique", stock: 25 },
  { nom: "Chaise bureautique", prix: 119.0, categorie: "Mobilier", stock: 6 },
  {
    nom: "Station d’accueil USB-C",
    prix: 79.0,
    categorie: "Informatique",
    stock: 10,
  },
  { nom: "Lampe LED de bureau", prix: 24.9, categorie: "Maison", stock: 40 },
  {
    nom: "Multiprise 6 ports",
    prix: 14.0,
    categorie: "Électricité",
    stock: 55,
  },
  {
    nom: "Clavier maître 49 touches",
    prix: 149.0,
    categorie: "Musique",
    stock: 5,
  },
  {
    nom: "Jeu de tournevis de précision",
    prix: 19.9,
    categorie: "Bricolage",
    stock: 32,
  },
  { nom: "Ventilateur USB", prix: 9.9, categorie: "Accessoires", stock: 73 },
  {
    nom: "Batterie externe 10 000 mAh",
    prix: 22.9,
    categorie: "Téléphonie",
    stock: 29,
  },
  { nom: 'Housse PC 13"', prix: 12.0, categorie: "Accessoires", stock: 48 },
  {
    nom: "Support écran réglable",
    prix: 34.9,
    categorie: "Mobilier",
    stock: 14,
  },
];

function productList(tab, cat) {
  const filtredProducts = [];

  tab.forEach((produit) => {
    if (produit.categorie === cat) {
      filtredProducts.push(produit);
    }
  });

  return filtredProducts;
}
