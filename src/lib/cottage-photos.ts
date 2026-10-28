import balcony from "@/assets/balcony.png";
import balconyRoom from "@/assets/balcony-room.png";
import bathroom from "@/assets/bathroom.png";
import bathroom1 from "@/assets/bathroom1.png";
import bornfire from "@/assets/bornfire.png";
import dinnerarea from "@/assets/dinnerarea.png";
import dinnerarea1 from "@/assets/dinnerarea1.png";
import dinnerarea2 from "@/assets/dinnerarea2.png";
import familyRoom from "@/assets/family-room.png";
import familyRoom1 from "@/assets/family-room1.png";
import familyRoom2 from "@/assets/family-room2.png";
import gardan from "@/assets/gardan.png";
import negiCottageBalcony from "@/assets/negi-cottage-balcony.png";
import negiCottageDining from "@/assets/negi-cottage-dining.png";
import negiCottageEntrance from "@/assets/negi-cottage-entrance.png";
import negiCottageExterior from "@/assets/negi-cottage-exterior.png";
import negiCottageFamilyRoom from "@/assets/negi-cottage-family-room.png";
import negiCottageMountains from "@/assets/negi-cottage-mountains.png";
import negiCottageOrchard from "@/assets/negi-cottage-orchard.png";
import negiCottageRoom from "@/assets/negi-cottage-room.png";
import negiCottageRoomView from "@/assets/negi-cottage-room-view.png";
import eveningLights from "@/assets/negi-retreat-evening-lights.jpg";
import pineTrail from "@/assets/negi-retreat-pine-trail.jpg";
import sunrise from "@/assets/negi-retreat-sunrise.jpg";
import nightView from "@/assets/night-view.png";
import nightView1 from "@/assets/night-view1.png";
import outsideview from "@/assets/outsideview.png";
import room from "@/assets/room.png";
import room2 from "@/assets/room2.png";
import room3 from "@/assets/room3.png";
import room4 from "@/assets/room4.png";
import snowView from "@/assets/snow-view.png";
import snowView2 from "@/assets/snow-view2.png";
import snowView3 from "@/assets/snow-view3.png";
import view from "@/assets/view.png";
import windowRoom from "@/assets/window-room.png";

export interface CottagePhoto {
  id: string;
  src: string;
  title: string;
  description: string;
  category: "rooms" | "dining" | "views" | "winter" | "outdoor" | "experience";
  tag: string;
}

export const allCottagePhotos: CottagePhoto[] = [
  {
    id: "negi-cottage-mountains",
    src: negiCottageMountains,
    title: "Kinner Kailash Range Vista",
    description: "Majestic snow-crested Himalayan peaks standing tall right across the Sangla Valley from Negi Cottage.",
    category: "views",
    tag: "Mountain Panorama",
  },
  {
    id: "negi-cottage-exterior",
    src: negiCottageExterior,
    title: "Negi Cottage Homestay",
    description: "Our signature multi-tiered Himalayan retreat nestled serenely amidst flourishing apple orchards at Kupa.",
    category: "outdoor",
    tag: "Property Exterior",
  },
  {
    id: "negi-cottage-balcony",
    src: negiCottageBalcony,
    title: "Handcrafted Cedar Balcony",
    description: "Traditional wooden balcony providing an open-air vantage point over the misty mountain slopes.",
    category: "outdoor",
    tag: "Balcony & Veranda",
  },
  {
    id: "balcony",
    src: balcony,
    title: "Valley View Balcony",
    description: "Private wooden veranda offering panoramic valley perspectives, morning sunshine, and crisp fresh mountain air.",
    category: "outdoor",
    tag: "Valley View",
  },
  {
    id: "balcony-room",
    src: balconyRoom,
    title: "Balcony Mountain Room",
    description: "Bright and airy bedroom opening directly onto a wooden balcony facing the Himalayan ridgelines.",
    category: "rooms",
    tag: "Deluxe Balcony Room",
  },
  {
    id: "window-room",
    src: windowRoom,
    title: "Window to the Himalayas",
    description: "Inviting guest room with a large scenic window framing snow-capped heights and alpine pine forests.",
    category: "rooms",
    tag: "Scenic Window Suite",
  },
  {
    id: "negi-cottage-room-view",
    src: negiCottageRoomView,
    title: "Orchard & Peak View Bedroom",
    description: "Wake up to gentle sunlight illuminating apple orchards and distant snowy pinnacles right from your bed.",
    category: "rooms",
    tag: "Mountain View Room",
  },
  {
    id: "room",
    src: room,
    title: "Warm Double Bed Retreat",
    description: "Well-appointed double room furnished with cozy Himalayan quilts, natural wood accents, and peaceful quietude.",
    category: "rooms",
    tag: "Cozy Double Room",
  },
  {
    id: "room2",
    src: room2,
    title: "Sunlit Mountain Suite",
    description: "Spacious bedroom bathed in natural high-altitude daylight, designed for rest and slow mountain living.",
    category: "rooms",
    tag: "Sunlit Suite",
  },
  {
    id: "room3",
    src: room3,
    title: "Pine-Accented Bedchamber",
    description: "Comfortable and authentic homestay lodging featuring wooden textures and welcoming warmth.",
    category: "rooms",
    tag: "Wood-Trimmed Room",
  },
  {
    id: "room4",
    src: room4,
    title: "Orchard Wing Guest Room",
    description: "Serene bedroom facing the cottage apple trees, where you sleep with the sound of quiet mountain winds.",
    category: "rooms",
    tag: "Quiet Wing",
  },
  {
    id: "negi-cottage-room",
    src: negiCottageRoom,
    title: "Traditional Wooden Guest Room",
    description: "Handcrafted pine interiors creating a deeply comforting and authentic Himachali homestay ambience.",
    category: "rooms",
    tag: "Traditional Room",
  },
  {
    id: "family-room",
    src: familyRoom,
    title: "Grand Family Suite",
    description: "Generous multi-bed layout perfect for families or groups traveling together across Sangla and Kinnaur.",
    category: "rooms",
    tag: "Family Suite",
  },
  {
    id: "family-room1",
    src: familyRoom1,
    title: "Family Bedroom Master Section",
    description: "Plush bedding, warm blankets, and ample space for the entire family to relax together after day trips.",
    category: "rooms",
    tag: "Family Quarters",
  },
  {
    id: "family-room2",
    src: familyRoom2,
    title: "Family Lounge & Sleeping Area",
    description: "Relaxed and spacious room layout accommodating parents and children in complete comfort and privacy.",
    category: "rooms",
    tag: "Family Comfort",
  },
  {
    id: "negi-cottage-family-room",
    src: negiCottageFamilyRoom,
    title: "Spacious Upper Family Suite",
    description: "Sunlit multi-bed family accommodation with extensive windows framing panoramic Sangla Valley vistas.",
    category: "rooms",
    tag: "Panoramic Family Suite",
  },
  {
    id: "bathroom",
    src: bathroom,
    title: "Modern Attached Bathroom",
    description: "Clean, hygienic, tiled private washroom equipped with 24/7 running hot water geyser and modern fittings.",
    category: "rooms",
    tag: "Ensuite Bathroom",
  },
  {
    id: "bathroom1",
    src: bathroom1,
    title: "Pristine Ensuite Washroom",
    description: "Fresh and spotless bathroom amenities ensuring ultimate comfort during cold Himalayan mornings.",
    category: "rooms",
    tag: "Modern Washroom",
  },
  {
    id: "dinnerarea",
    src: dinnerarea,
    title: "Traditional Dining Lounge",
    description: "Gather with fellow travelers and family around wholesome meals made with organic local ingredients.",
    category: "dining",
    tag: "Dining Lounge",
  },
  {
    id: "dinnerarea1",
    src: dinnerarea1,
    title: "Family Cottage Dining",
    description: "Hearty breakfasts, steamed momos, fresh rotis, and Himachali curries served fresh from the cottage kitchen.",
    category: "dining",
    tag: "Family Dining",
  },
  {
    id: "dinnerarea2",
    src: dinnerarea2,
    title: "Warm Mountain Feast Area",
    description: "Intimate and comfortable table arrangement where hot chai and savory dinners are enjoyed in the cool mountain evenings.",
    category: "dining",
    tag: "Cottage Feast",
  },
  {
    id: "negi-cottage-dining",
    src: negiCottageDining,
    title: "Wood-Panelled Dining Room",
    description: "Rustic wooden walls, ambient warmth, and authentic Himachali culinary hospitality at its finest.",
    category: "dining",
    tag: "Signature Dining",
  },
  {
    id: "bornfire",
    src: bornfire,
    title: "Evening Bonfire Gathering",
    description: "Gather around the crackling firewood flames under crisp night skies for music, tea, and mountain stories.",
    category: "experience",
    tag: "Bonfire & Campfire",
  },
  {
    id: "night-view",
    src: nightView,
    title: "Starry Himalayan Night",
    description: "Tranquil night view showing peaceful cottage silhouettes beneath a canopy of brilliant mountain stars.",
    category: "experience",
    tag: "Starry Night",
  },
  {
    id: "night-view1",
    src: nightView1,
    title: "Illuminated Cottage at Dusk",
    description: "Warm golden glow radiating from cottage windows as the evening descends upon Kupa valley.",
    category: "experience",
    tag: "Evening Glow",
  },
  {
    id: "evening-lights",
    src: eveningLights,
    title: "Cottage Lights at Blue Hour",
    description: "Atmospheric twilight lighting up the mountain retreat against the deep blue silhouettes of the Himalayas.",
    category: "experience",
    tag: "Blue Hour",
  },
  {
    id: "pine-trail",
    src: pineTrail,
    title: "Kinnaur Cedar & Pine Trail",
    description: "Invigorating forest walking trails right outside the cottage lined with towering deodars and wild flowers.",
    category: "experience",
    tag: "Forest Trail",
  },
  {
    id: "gardan",
    src: gardan,
    title: "Lush Cottage Lawn & Garden",
    description: "Manicured green lawn surrounded by flowers, apple orchards, and sitting areas for afternoon relaxation.",
    category: "outdoor",
    tag: "Green Garden",
  },
  {
    id: "negi-cottage-orchard",
    src: negiCottageOrchard,
    title: "Kinnauri Apple Orchard",
    description: "Stroll beneath blooming apple trees that produce some of India's world-famous sweet Kinnaur apples.",
    category: "outdoor",
    tag: "Apple Orchard",
  },
  {
    id: "negi-cottage-entrance",
    src: negiCottageEntrance,
    title: "Hand-Carved Wooden Portal",
    description: "Ornate traditional wood carving framing the entrance, showcasing authentic Kinnauri master craftsmanship.",
    category: "outdoor",
    tag: "Carved Entrance",
  },
  {
    id: "sunrise",
    src: sunrise,
    title: "Golden Himalayan Sunrise",
    description: "Spectacular morning sunrise washing over the Kinner Kailash range in radiant shades of amber and gold.",
    category: "views",
    tag: "Golden Sunrise",
  },
  {
    id: "snow-view",
    src: snowView,
    title: "Winter Snowfall at Negi Cottage",
    description: "Pure white winter magic as heavy snow blankets the cottage balconies, roofs, and mountain terraces.",
    category: "winter",
    tag: "Winter Wonderland",
  },
  {
    id: "snow-view2",
    src: snowView2,
    title: "Frosted Apple Orchard",
    description: "Delicate crystalline snow clinging to dormant apple branches in an idyllic winter landscape.",
    category: "winter",
    tag: "Frosted Trees",
  },
  {
    id: "snow-view3",
    src: snowView3,
    title: "White Snow Crests",
    description: "Dazzling snow-covered ridges glistening under brilliant winter sunlight across Sangla Valley.",
    category: "winter",
    tag: "Alpine Snow",
  },
  {
    id: "outsideview",
    src: outsideview,
    title: "Panoramic Sangla Valley Roads",
    description: "Dramatic mountain vistas looking out towards the winding Baspa river basin and surrounding forests.",
    category: "views",
    tag: "Valley Highway",
  },
  {
    id: "view",
    src: view,
    title: "Vast Kinnaur Horizon",
    description: "Sweeping views of Himachal's legendary highland wilderness right from the cottage perimeter.",
    category: "views",
    tag: "Kinnaur Horizon",
  },
];

export const roomPhotos = allCottagePhotos.filter((p) => p.category === "rooms");
export const diningPhotos = allCottagePhotos.filter((p) => p.category === "dining");
export const viewPhotos = allCottagePhotos.filter((p) => p.category === "views");
export const winterPhotos = allCottagePhotos.filter((p) => p.category === "winter");
export const outdoorPhotos = allCottagePhotos.filter((p) => p.category === "outdoor");
export const experiencePhotos = allCottagePhotos.filter((p) => p.category === "experience");
