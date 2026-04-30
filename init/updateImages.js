const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

const mongoURL = "mongodb://127.0.0.1:27017/travelbnb";

// All photo IDs taken from the original working dataset — each one is unique
const imageMap = [
  { title: "Cozy Beachfront Cottage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60" },
  { title: "Modern Loft in Downtown",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60" },
  { title: "Mountain Retreat",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60" },
  { title: "Historic Villa in Tuscany",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60" },
  { title: "Secluded Treehouse Getaway",
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60" },
  { title: "Beachfront Paradise",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60" },
  { title: "Rustic Cabin by the Lake",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60" },
  { title: "Luxury Penthouse with City Views",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60" },
  { title: "Ski-In/Ski-Out Chalet",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60" },
  { title: "Safari Lodge in the Serengeti",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60" },
  { title: "Historic Canal House",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60" },
  { title: "Private Island Retreat",
    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60" },
  { title: "Charming Cottage in the Cotswolds",
    url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60" },
  { title: "Historic Brownstone in Boston",
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60" },
  { title: "Beachfront Bungalow in Bali",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60" },
  { title: "Mountain View Cabin in Banff",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60" },
  { title: "Art Deco Apartment in Miami",
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60" },
  { title: "Tropical Villa in Phuket",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60" },
  { title: "Historic Castle in Scotland",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60" },
  { title: "Desert Oasis in Dubai",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60" },
  { title: "Rustic Log Cabin in Montana",
    url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60" },
  { title: "Beachfront Villa in Greece",
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60" },
  { title: "Eco-Friendly Treehouse Retreat",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60" },
  { title: "Historic Cottage in Charleston",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60" },
  { title: "Modern Apartment in Tokyo",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60" },
  { title: "Lakefront Cabin in New Hampshire",
    url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60" },
  { title: "Luxury Villa in the Maldives",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60" },
  { title: "Ski Chalet in Aspen",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60" },
  { title: "Secluded Beach House in Costa Rica",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60" },
];

async function main() {
  await mongoose.connect(mongoURL);
  console.log("Connected to DB");

  for (const { title, url } of imageMap) {
    const result = await Listing.updateOne(
      { title },
      { $set: { "image.url": url, "image.filename": "listingimage" } }
    );
    console.log(`${title}: ${result.modifiedCount ? "✓ updated" : "— not found / unchanged"}`);
  }

  await mongoose.disconnect();
  console.log("Done");
}

main().catch(console.error);
