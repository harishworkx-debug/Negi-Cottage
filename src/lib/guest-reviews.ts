export interface GuestReview {
  id: string;
  author: string;
  badge?: string;
  rating: number;
  time: string;
  content: string;
  tripType?: string;
  travelGroup?: string;
  highlights?: string[];
  ownerResponse?: string;
  featured?: boolean;
  tags: string[];
}

export const googleReviewsStats = {
  rating: 4.6,
  totalReviews: 279,
  topics: [
    { name: "All", count: 279 },
    { name: "Apple Orchards", count: 28 },
    { name: "Mountain View", count: 10 },
    { name: "Cozy Rooms", count: 7 },
    { name: "Homely Atmosphere", count: 6 },
    { name: "Cottage", count: 5 },
    { name: "Clean Toilet", count: 4 },
    { name: "Humble Host", count: 4 },
    { name: "Newly Made Rooms", count: 3 },
    { name: "Bonfire", count: 3 },
    { name: "Fireplace", count: 2 },
  ],
};

export const allGoogleReviews: GuestReview[] = [
  {
    id: "anup-chaudhuri",
    author: "Anup Chaudhuri",
    badge: "Local Guide · 26 reviews",
    rating: 5,
    time: "October 2026",
    tripType: "Vacation",
    travelGroup: "Friends · Senior Citizens Group",
    highlights: ["Spacious rooms", "Heartiest hospitality", "Kinnar-Kailash range", "Golden apples"],
    content:
      "Awesome experience received by our group of 9 senior citizens at this magnificently-located dream homestay #Negi Cottage, Sangla on World Tourism Day in pollutionless atmosphere. We checked in at 22:15 from Shimla amidst light drizzle. The well-behaved owner anxiously waited for us and showed his helping hands by bringing luggage upstairs from the road. The kitchen staff welcomed us with hot tea & veg pakoras at 22:45 followed by a mouth-watering dinner. Next morning, we were greeted with picturesque snow-capped Kinnar-Kailash range along with surrounding apple orchards full of golden apples. Strongly recommend every guest to spend a couple of days here!",
    featured: true,
    tags: ["apple orchards", "mountain view", "humble host", "homely atmosphere", "family"],
  },
  {
    id: "rupesh-kumar",
    author: "Rupesh Kumar",
    badge: "Local Guide · 112 reviews · 28 photos",
    rating: 5,
    time: "4 months ago",
    tripType: "Vacation",
    travelGroup: "Family",
    highlights: ["Family room with 2 bathrooms", "360-degree rooftop terrace", "Apple orchards"],
    content:
      "We stayed at Negi Cottage, located about 2 kilometers before Sangla, and it was one of the most scenic stays of our Kinnaur trip. The cottage offers stunning views of the surrounding landscape, including lush green mountains, rugged barren peaks, and snow-capped ranges in the distance. We were allotted a family room that featured two large beds and two bathrooms, exceptionally neat and clean with views from two sides—apple orchards on one and snow mountains on the other. The open rooftop terrace with 360-degree views was a highlight, enhanced by the friendly hospitality of Mr. Negi.",
    featured: true,
    tags: ["mountain view", "apple orchards", "newly made rooms", "humble host", "cottage", "clean toilet"],
  },
  {
    id: "avinash-devadiga",
    author: "Avinash Devadiga",
    badge: "Local Guide · 23 reviews · 26 photos",
    rating: 5,
    time: "2 years ago",
    tripType: "Vacation",
    travelGroup: "Family",
    highlights: ["Apple fragrance everywhere", "10/10 cleanliness", "Hygienic food", "Karaoke & Bonfire"],
    content:
      "While staying here I had one of my dreams come to life where one could smell apple fragrance everywhere. This beautiful homestay is surrounded by apple and pear trees—just like heaven that heals mind, body and soul. In breakfast I had Chole Bhature, one of the best dishes I've had. Super clean and hygienic with clean western washrooms attached to every room. Super humble and kind staff and super awesome place. 10 out of 10!",
    ownerResponse: "Thanks ji",
    featured: true,
    tags: ["apple orchards", "clean toilet", "homely atmosphere", "humble host", "cozy rooms"],
  },
  {
    id: "shrirang-pradhan",
    author: "Shrirang Pradhan",
    badge: "Local Guide · 81 reviews · 1 photo",
    rating: 5,
    time: "a year ago",
    tripType: "Vacation",
    travelGroup: "Family",
    highlights: ["Big room with 2 double beds", "Long balcony mountain view", "Attached clean toilet"],
    content:
      "An unforgettable experience at Negi Cottage homestay in Kupa village near Sangla town. From the warm welcome to the delicious food and cozy rooms, everything was just perfect. They provided us a big room with two double beds for three persons equipped with all amenities, attached clean toilet, and long balcony with mountain view. The owner Mr. Ajit Negi is a very humble and friendly person. Highly recommended!",
    featured: true,
    tags: ["cozy rooms", "mountain view", "clean toilet", "humble host", "cottage"],
  },
  {
    id: "prasad-karve",
    author: "Prasad Karve",
    badge: "Local Guide · 45 reviews · 50 photos",
    rating: 5,
    time: "5 years ago",
    tripType: "Vacation",
    travelGroup: "Group (16 persons)",
    highlights: ["Host Ajit (Kaki) Negi", "Delicious food for large group", "360 mountain view"],
    content:
      "This is the best place to stay in Sangla. Nestled between tall mountains on 3 sides and apple orchards on the other, this is a real Shangri-La. The host Ajit (Kaki) Negi is a gem of a person. He looked after our group so well, himself taking on the role of head chef and cooked tasty food for 16 of us. The view from the terrace was mesmerising. I look forward to visiting again in winters!",
    ownerResponse: "thanks bai aap ko hmari hospitality achi lgi or aap nai apna anubhav share kiya",
    featured: true,
    tags: ["humble host", "apple orchards", "mountain view", "homely atmosphere"],
  },
  {
    id: "komal-awasare",
    author: "Komal Awasare",
    badge: "Local Guide · 55 reviews · 76 photos",
    rating: 5,
    time: "4 months ago",
    tripType: "Vacation",
    content:
      "I had a wonderful experience at this hotel in Himachal Pradesh. The location was beautiful, with stunning mountain views and a peaceful atmosphere. The rooms were clean, comfortable, and well-maintained. The staff was friendly, courteous, and always ready to help. The food was delicious, offering a good variety of local and Indian dishes.",
    featured: true,
    tags: ["mountain view", "cozy rooms", "homely atmosphere"],
  },
  {
    id: "adithya-krishnan",
    author: "Adithya Krishnan",
    badge: "Local Guide · 6 reviews · 12 photos",
    rating: 5,
    time: "3 months ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    highlights: ["Night camp & bonfire", "Wifi provided", "Sunrise & sunset view", "Sweet owner"],
    content:
      "The best stay I have ever stayed at! Breathtaking scenery, superb amazing food, night camp, superb service, wifi provided. Can watch sunrise and sunset with super view. Owner is very sweet. Apple orchard right in the stay area. Rooms are very spacious, organized, clean and well thought out.",
    ownerResponse: "Thank you 🙏🙏🙏",
    featured: true,
    tags: ["bonfire", "mountain view", "apple orchards", "cozy rooms", "humble host"],
  },
  {
    id: "het-shah",
    author: "Het Shah",
    badge: "Local Guide · 19 reviews · 7 photos",
    rating: 5,
    time: "7 months ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    highlights: ["Best view from top floor", "Jain food available", "Good rooms"],
    content:
      "Best view from the top floor, good rooms, and most importantly best food. They also provide authentic Jain food upon request. Absolutely worth a try for groups and families!",
    ownerResponse: "🙏🙏",
    tags: ["mountain view", "cozy rooms", "cottage"],
  },
  {
    id: "chandan-sahu",
    author: "Chandan Sahu",
    badge: "Local Guide · 7 reviews · 4 photos",
    rating: 4,
    time: "5 months ago",
    content:
      "Negi Cottage me stay karke bahut hi achha experience raha. Yahan ka environment kaafi peaceful aur comfortable hai. Food quality bhi bahut badhiya hai – fresh, tasty aur ghar jaisa feel deta hai. Sabse khaas baat ye rahi ki Negi ji ka behavior bahut hi polite aur friendly hai. Unka nature itna achha hai ki aapko bilkul apnapan feel hota hai.",
    tags: ["homely atmosphere", "humble host", "cozy rooms"],
  },
  {
    id: "ashma-khan",
    author: "Ashma Khan",
    badge: "Local Guide · 44 reviews · 33 photos",
    rating: 5,
    time: "3 months ago",
    highlights: ["Kinner Kailash views", "Safe for families", "Delicious delicacies"],
    content:
      "Loved being a guest of Negi Cottage Sangla! Property is surrounded by beautiful ice-capped mountains along with holy Kinner Kailash. Felt like home with comfort and delicious delicacies of Himachal Pradesh. Well equipped with safety cameras, properly partitioned twin rooms, hardly 2.5 kms from Sangla Market.",
    tags: ["mountain view", "homely atmosphere", "newly made rooms"],
  },
  {
    id: "tejaswi-tanneru",
    author: "Tejaswi Tanneru",
    badge: "11 reviews · 4 photos",
    rating: 5,
    time: "3 years ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    highlights: ["Balcony with view", "Helpful staff Anil & Arjun", "Playful dog Rocky"],
    content:
      "Best experience ever. Since it’s a remote area, I was expecting very basic places, but I was amazed to see this property! Cute balcony with spectacular view, staff Anil & Arjun were all-rounders and polite. The food especially is yumm. I'm in love with their cute dog, Rocky. Definitely recommend!",
    ownerResponse: "Thanks for ur valuable feedback sir 🙏🙏",
    tags: ["apple orchards", "cottage", "mountain view", "homely atmosphere"],
  },
  {
    id: "mandar-patkar",
    author: "Mandar Patkar",
    badge: "7 reviews · 1 photo",
    rating: 5,
    time: "3 years ago",
    tripType: "Vacation",
    travelGroup: "Family",
    highlights: ["Two story house with 16 rooms", "Big garden & apple farm", "Clean attached toilets"],
    content:
      "Stayed at Mr. Negi homestay while returning from Spiti Valley on way to Solan. This is a two story house with individual rooms with attached toilets. Spacious and clean. Big garden and apple farm adjacent to house where vegetables are planted. Mr. Negi and his family take care of all requirements. Highly recommended before moving to Chitkul.",
    tags: ["apple orchards", "clean toilet", "humble host", "cottage"],
  },
  {
    id: "saili-vaidya",
    author: "Saili Vaidya",
    badge: "1 review",
    rating: 5,
    time: "5 months ago",
    tripType: "Vacation",
    travelGroup: "Family",
    content:
      "Had a great 2-night stay at Negi Cottage! Our room was spacious with spectacular views, and the food was delicious. Special shoutout to Ganesh for being so helpful and accommodating throughout our stay.",
    tags: ["mountain view", "cozy rooms"],
  },
  {
    id: "arnav",
    author: "Arnav",
    badge: "Local Guide · 71 reviews · 100 photos",
    rating: 4,
    time: "4 months ago",
    tripType: "Vacation",
    travelGroup: "Family",
    content:
      "Well the view from the top floor is very good!! And the service is very good. The staff is very good. Food is good. Close to Kamru fort and waterfalls, departmental store just a few steps away. The bigger rooms are amazing and have a great view. Great value!",
    tags: ["mountain view", "cozy rooms", "newly made rooms"],
  },
  {
    id: "shahnaz-shaikh",
    author: "Shahnaz Shaikh",
    badge: "Local Guide · 14 reviews · 19 photos",
    rating: 5,
    time: "4 years ago",
    content:
      "What do I write about this place.. photos or words may not do justice to how amazing this place is. Owned by a very humble man Mr. Ajit Negi, this place feels like home. The place is surrounded by mountains and apple orchards.",
    ownerResponse: "A lot of thnks ji 🙏🙏",
    tags: ["humble host", "homely atmosphere", "apple orchards", "mountain view"],
  },
  {
    id: "pardeep-kumar",
    author: "Pardeep Kumar",
    badge: "Local Guide · 99 reviews · 325 photos",
    rating: 5,
    time: "a year ago",
    content:
      "If you are staying in Sangla, this is the place. Have fireplace, running water, and surrounded by apple orchards. Above this, the hospitality is awesome 👌",
    tags: ["fireplace", "apple orchards", "homely atmosphere"],
  },
  {
    id: "subhankar-bhattacharyya",
    author: "Subhankar Bhattacharyya",
    badge: "Local Guide · 29 reviews · 4 photos",
    rating: 5,
    time: "a year ago",
    tripType: "Vacation",
    content:
      "Stayed here on a very cold night at Sangla when almost all hotels at Chitkul & Rakcham were closed. Negi assured with room heaters and good quality blankets. The food prepared as per our order was very tasty with good ingredients.",
    ownerResponse: "Thanks for ur valuable feedback sir",
    tags: ["cozy rooms", "humble host"],
  },
  {
    id: "pankaj-mathondkar",
    author: "Pankaj Mathondkar",
    badge: "Local Guide · 203 reviews · 1,644 photos",
    rating: 5,
    time: "7 months ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    content:
      "The best hotel in the location. Very scenic location, peaceful, clean toilet, very helpful staff. Total best experience! 😍💥",
    tags: ["clean toilet", "mountain view", "cozy rooms"],
  },
  {
    id: "rishab-surana",
    author: "Rishab Surana",
    badge: "Local Guide · 72 reviews · 2 photos",
    rating: 5,
    time: "3 months ago",
    tripType: "Vacation",
    travelGroup: "Family",
    content:
      "Food is great, chef is excellent. The rooms in the new building are better with large windows. Don't forget to visit the terrace for a breathtaking view. And during apple season.. apples are everywhere!",
    ownerResponse: "Thanks 👍👍",
    tags: ["apple orchards", "newly made rooms", "mountain view"],
  },
  {
    id: "jayesh-raul",
    author: "Jayesh Raul",
    badge: "Local Guide · 11 reviews · 32 photos",
    rating: 5,
    time: "7 months ago",
    content:
      "Had a great time at this place... bonfire, food, and service was at its best! 👏",
    ownerResponse: "🙏🙏👍👍",
    tags: ["bonfire", "homely atmosphere"],
  },
  {
    id: "ojas-gundecha",
    author: "Ojas Gundecha",
    badge: "2 reviews",
    rating: 5,
    time: "8 months ago",
    content:
      "Very good stay. The food was exceptionally good. The fireplace was very fun and hospitality was incredible. Strongly recommend it!",
    ownerResponse: "Thanks ji",
    tags: ["fireplace", "homely atmosphere"],
  },
  {
    id: "samyak-gandhi",
    author: "Samyak Gandhi",
    badge: "9 reviews · 1 photo",
    rating: 5,
    time: "8 months ago",
    content:
      "The staff, food and rooms all are amazing. The food was tasty and the bonfire night was very fantastic! 💯❤️",
    tags: ["bonfire", "cozy rooms"],
  },
  {
    id: "darshan-yadav",
    author: "Darshan Yadav",
    badge: "Local Guide · 33 reviews · 86 photos",
    rating: 5,
    time: "a year ago",
    content:
      "Awesome experience with Negi Homestay. Best in class service and accommodations. Food made by Aunty is delicious 😋. In -25° winter, homestay is warm enough to stay relaxed.",
    tags: ["homely atmosphere", "cozy rooms"],
  },
  {
    id: "ehtesham-ansari",
    author: "Ehtesham Ansari",
    badge: "Local Guide · 61 reviews · 15 photos",
    rating: 5,
    time: "3 years ago",
    tripType: "Vacation",
    travelGroup: "Family",
    content:
      "Family Suite: Room is newly furnished hence neat and clean. Hot water 24x7. Location is awesome. Host is very friendly and helpful. Strongly recommended.",
    ownerResponse: "Thnks sir",
    tags: ["newly made rooms", "clean toilet", "humble host"],
  },
  {
    id: "jahnavi-reddy-kolli",
    author: "Jahnavi Reddy Kolli",
    badge: "7 reviews",
    rating: 5,
    time: "7 years ago",
    content:
      "The place was extremely pleasing. The stay was in the midst of apple orchard and mountains. Food was extraordinary and they use fresh vegetables cultivated right in their garden—cabbage, cauliflower, apples, and green leaves.",
    ownerResponse: "A lot of thnks u like our hosting nd sharing ur experience",
    tags: ["apple orchards", "mountain view", "homely atmosphere"],
  },
  {
    id: "bharat-c",
    author: "Bharat C",
    badge: "Local Guide · 29 reviews · 1 photo",
    rating: 5,
    time: "7 years ago",
    travelGroup: "Couple",
    content:
      "Good rooms, good bathroom with hot water 24x7 from geyser fitted in bathroom. Good food, Mr. Negi the host/owner is a very good person and happy to help guests. Surrounded by apple trees. Value for money.",
    tags: ["clean toilet", "apple orchards", "humble host", "cozy rooms"],
  },
  {
    id: "shrikant-dave",
    author: "Shrikant Dave",
    badge: "8 reviews · 2 photos",
    rating: 4,
    time: "7 months ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    content:
      "If you’re looking for a budget-friendly yet cozy stay, look no further. The hospitality here is top-notch, and the serene environment is just what I needed for a weekend away.",
    ownerResponse: "Thanks ji",
    tags: ["cozy rooms", "homely atmosphere"],
  },
  {
    id: "akshay-durge",
    author: "Akshay Durge",
    badge: "Local Guide · 117 reviews · 11 photos",
    rating: 4,
    time: "2 years ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    content:
      "Travelled in end of December in bone-breaking cold, but they provided us hot water, nice breakfast and dinner, and large apple farm. They also arranged bonfires for our group.",
    ownerResponse: "Thanks for your support 👍👍",
    tags: ["bonfire", "apple orchards", "clean toilet"],
  },
  {
    id: "rajesh-bhandari",
    author: "Rajesh Bhandari",
    badge: "8 reviews · 13 photos",
    rating: 5,
    time: "4 years ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    content:
      "Sabse pehle Negi uncle ji ka nature bahut achha hai and feel home wali. Food light home style, staff family jaisa. Wapis aane ka mann nahi karta.. rooms neat and clean!",
    ownerResponse: "Bhuat 2 dhanyawad 🙏🙏 ji",
    tags: ["humble host", "homely atmosphere", "cozy rooms"],
  },
  {
    id: "manik-dahuja",
    author: "Manik Dahuja",
    badge: "Local Guide · 10 reviews · 8 photos",
    rating: 5,
    time: "a year ago",
    tripType: "Vacation",
    travelGroup: "Friends",
    content:
      "The hosts were incredibly welcoming and attentive, making sure every detail was taken care of. From the delicious homemade meals to the serene surroundings, everything exceeded expectations.",
    tags: ["homely atmosphere", "humble host"],
  },
  {
    id: "alok-saraswat",
    author: "Alok Saraswat",
    badge: "Local Guide · 114 reviews · 201 photos",
    rating: 5,
    time: "3 years ago",
    tripType: "Vacation",
    travelGroup: "Family",
    content:
      "The owner and staff is very humble and cooperative. New rooms are very neat & clean with all amenities. Superb view of Himalaya and apple orchard from rooms.",
    ownerResponse: "Bhuat 2 dhanyawad ji 🙏🙏",
    tags: ["newly made rooms", "apple orchards", "mountain view", "humble host"],
  },
  {
    id: "surya-singh",
    author: "Surya Singh",
    badge: "6 reviews · 5 photos",
    rating: 5,
    time: "9 years ago",
    content:
      "Neat and clean rooms, well behaved staff, good food and most importantly awesome view around. Big apple garden and high mountain range around gives best morning view.",
    tags: ["apple orchards", "mountain view", "cozy rooms"],
  },
];
