
  const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.7798, 34.0259],
      },
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-74.006, 40.7128],
      },
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-106.8175, 39.1911],
      },
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
        type: "Point",
        coordinates: [11.2558, 43.7696],
      },
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-122.6765, 45.5231],
      },
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: {
        type: "Point",
        coordinates: [-86.8515, 21.1619],
      },
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-120.0025, 39.0968],
      },
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.2437, 34.0522],
      },
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1548018560-c7196548f37a?auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      geometry: {
        type: "Point",
        coordinates: [7.2275, 46.0965],
      },
    },
      {
        title: "Safari Lodge in the Serengeti",
        description:
          "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        geometry: {
          type: "Point",
          coordinates: [34.8333, -2.3333],
        },
      },
      {
        title: "Historic Canal House",
        description:
          "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        geometry: {
          type: "Point",
          coordinates: [4.9041, 52.3676],
        },
      },
      {
        title: "Private Island Retreat",
        description:
          "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1510525009520-5c192ba9d9e5?auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        geometry: {
          type: "Point",
          coordinates: [179.1941, -17.7134],
        },
      },
      {
        title: "Charming Cottage in the Cotswolds",
        description:
          "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        geometry: {
          type: "Point",
          coordinates: [-1.7201, 51.8333],
        },
      },
      {
        title: "Historic Brownstone in Boston",
        description:
          "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        geometry: {
          type: "Point",
          coordinates: [-71.0589, 42.3601],
        },
      },
        {
          title: "Beachfront Bungalow in Bali",
          description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60",
          },
          price: 1800,
          location: "Bali",
          country: "Indonesia",
          geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095],
          },
        },
        {
          title: "Mountain View Cabin in Banff",
          description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=60",
          },
          price: 1500,
          location: "Banff",
          country: "Canada",
          geometry: {
            type: "Point",
            coordinates: [-115.5708, 51.1784],
          },
        },
        {
          title: "Art Deco Apartment in Miami",
          description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533588253746-4a4c45b9debb?auto=format&fit=crop&w=800&q=60",
          },
          price: 1600,
          location: "Miami",
          country: "United States",
          geometry: {
            type: "Point",
            coordinates: [-80.1300, 25.7617],
          },
        },
        {
          title: "Tropical Villa in Phuket",
          description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540202404-a2f29cf7a7b5?auto=format&fit=crop&w=800&q=60",
          },
          price: 3000,
          location: "Phuket",
          country: "Thailand",
          geometry: {
            type: "Point",
            coordinates: [98.3981, 7.8804],
          },
        },
        {
          title: "Historic Castle in Scotland",
          description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
          },
          price: 4000,
          location: "Scottish Highlands",
          country: "United Kingdom",
          geometry: {
            type: "Point",
            coordinates: [-4.2026, 57.4778],
          },
        },
        {
          title: "Desert Oasis in Dubai",
          description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
          },
          price: 5000,
          location: "Dubai",
          country: "United Arab Emirates",
          geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048],
          },
        },
        {
          title: "Rustic Log Cabin in Montana",
          description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
          },
          price: 1100,
          location: "Montana",
          country: "United States",
          geometry: {
            type: "Point",
            coordinates: [-110.3626, 47.1164],
          },
        },
        {
          title: "Beachfront Villa in Greece",
          description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=60",
          },
          price: 2500,
          location: "Mykonos",
          country: "Greece",
          geometry: {
            type: "Point",
            coordinates: [25.4319, 37.4467],
          },
        },
        {
          title: "Eco-Friendly Treehouse Retreat",
          description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=800&q=60",
          },
          price: 750,
          location: "Costa Rica",
          country: "Costa Rica",
          geometry: {
            type: "Point",
            coordinates: [-84.0739, 9.7489],
          },
        },
        {
          title: "Historic Cottage in Charleston",
          description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
          },
          price: 1600,
          location: "Charleston",
          country: "United States",
          geometry: {
            type: "Point",
            coordinates: [-79.9311, 32.7765],
          },
        },
        {
          title: "Modern Apartment in Tokyo",
          description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=60",
          },
          price: 2000,
          location: "Tokyo",
          country: "Japan",
          geometry: {
            type: "Point",
            coordinates: [139.6917, 35.6895],
          },
        },
        {
          title: "Lakefront Cabin in New Hampshire",
          description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
          },
          price: 1200,
          location: "New Hampshire",
          country: "United States",
          geometry: {
            type: "Point",
            coordinates: [-71.5724, 44.0012],
          },
        },
        {
          title: "Luxury Villa in the Maldives",
          description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60",
          },
          price: 6000,
          location: "Maldives",
          country: "Maldives",
          geometry: {
            type: "Point",
            coordinates: [73.2207, 3.2028],
          },
        },
        {
          title: "Ski Chalet in Aspen",
          description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=60",
          },
          price: 4000,
          location: "Aspen",
          country: "United States",
          geometry: {
            type: "Point",
            coordinates: [-106.8344, 39.1911],
          },
        },
        {
          title: "Secluded Beach House in Costa Rica",
          description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
          image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
          },
          price: 1800,
          location: "Costa Rica",
          country: "Costa Rica",
          geometry: {
            type: "Point",
            coordinates: [-84.0739, 9.7489],
          },
        },

  ];


module.exports = { data: sampleListings };
