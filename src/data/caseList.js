import { slugify } from "@/lib/utils";

const caseList = [
  {
    id: "1",
    img: "/assets/dummy1.jpg",
    client: { name: "Mile Stone Management", logo: "/assets/client0.png" },
    name: "Inter Times",
    category: ["Branding"],
    shortDescription: "This project lorem ipsum solid transparent white",
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    body: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Solid", value: "Gold" },
      { metric: "Copper", value: "Chain" },
    ],
    objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "2",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "Mile Stone Management", logo: "/assets/client0.png" },
    name: "Something Else",
    category: ["Digital Marketing"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "This project lorem ipsum solid tr white",
    body: "Steve minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Olive", value: "Nana" },
      { metric: "Chain", value: "Swerve" },
    ],
    objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "3",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "Mile Stone Management", logo: "/assets/client0.png" },
    name: "John Station",
    category: ["Production"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "This project lorem ipsum solid tr white",
    body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Adam", value: "Jacob" },
      { metric: "Man", value: "Elite" },
    ],
    objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "4",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "Mile Stone Management", logo: "/assets/client0.png" },
    name: "Multiple",
    category: ["Production", "Copywriting", "Digital Marketing"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "This project lorem ipsum solid tr white",
    body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Adam", value: "Jacob" },
      { metric: "Man", value: "Elite" },
    ],
    objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "5",
    img: "/assets/dummy1.jpg",
    favourite: true,
    client: { name: "ABC Corporation", logo: "/assets/client0.png" },
    name: "Brand X Revamp",
    category: ["Branding", "Marketing"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Revamping Brand X with innovative strategies.",
    body: "Revamping Brand X involved extensive market research, creative brainstorming sessions, and the development of a comprehensive strategy to redefine its identity. The project aimed to reposition Brand X in the market, targeting a younger demographic while retaining its loyal customer base.",
    metrics: [
      { metric: "Brand Reach", value: "Increased by 40%" },
      { metric: "Customer Engagement", value: "Up by 25%" },
    ],
    objective: "To enhance Brand X's appeal and market positioning.",
  },
  {
    id: "6",
    img: "/assets/dummy1.jpg",
    client: { name: "ABC Corporation", logo: "/assets/client0.png" },
    name: "Everything",
    category: ["Branding", "Copywriting", "Digital Marketing", "Social Media", "Production", "Logo", "Print"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Revamping Everything with innovative strategies.",
    body: "Revamping Everything involved extensive market research, creative brainstorming sessions, and the development of a comprehensive strategy to redefine its identity. The project aimed to reposition Everything in the market, targeting a younger demographic while retaining its loyal customer base.",
    metrics: [
      { metric: "Brand Reach", value: "Increased by 40%" },
      { metric: "Customer Engagement", value: "Up by 25%" },
    ],
    objective: "To enhance Brand X's appeal and market positioning.",
  },
  {
    id: "7",
    img: "/assets/dummy1.jpg",
    client: { name: "XYZ Industries", logo: "/assets/client0.png" },
    name: "Product Y Launch",
    category: ["Product Launch", "Market Expansion"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Launching Product Y in global markets with a targeted approach.",
    body: "The launch of Product Y involved meticulous market analysis, strategic planning, and a focused approach to penetrate diverse global markets. The project emphasized building product awareness, establishing distribution networks, and engaging with local demographics to ensure a successful market entry.",
    metrics: [
      { metric: "Global Market Penetration", value: "Entered 15 new markets" },
      { metric: "Sales Growth", value: "Exceeded projections by 30%" },
    ],
    objective: "To successfully introduce Product Y in diverse global markets.",
  },

  {
    id: "8",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "PQR Co.", logo: "/assets/client0.png" },
    name: "Website Redesign and User Experience Enhancement",
    category: ["Logo", "Production"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Revamping the website for improved user experience and functionality.",
    body: "The project involved a complete overhaul of the website's design, focusing on intuitive navigation, responsive layouts, and streamlined user interactions. By implementing user feedback and best practices in UX/UI design, the goal was to enhance visitor engagement, reduce bounce rates, and increase conversions.",
    metrics: [
      { metric: "Bounce Rate", value: "Decreased by 15%" },
      { metric: "Conversion Rate", value: "Increased by 25%" },
    ],
    objective: "To improve user experience and boost conversions through website redesign.",
  },
  {
    id: "9",
    img: "/assets/dummy1.jpg",
    client: { name: "RST Solutions", logo: "/assets/client0.png" },
    name: "Content Strategy Restructuring",
    category: ["Digital Marketing", "Social Media"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Restructuring content strategies for enhanced SEO performance.",
    body: "The project involved an in-depth analysis of existing content strategies, keyword research, and SEO optimization techniques. By restructuring content, implementing SEO best practices, and creating valuable, targeted content, the objective was to improve search engine rankings, increase organic traffic, and elevate brand visibility.",
    metrics: [
      { metric: "Organic Traffic", value: "Grew by 40%" },
      { metric: "Keyword Ranking", value: "Achieved top 3 positions for 70% targeted keywords" },
    ],
    objective: "To enhance SEO performance and drive organic traffic through content restructuring.",
  },
  {
    id: "10",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "EFG Corporation", logo: "/assets/client0.png" },
    name: "Event Branding and Promotion",
    category: ["Copywriting", "Branding"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Creating a memorable brand experience for a corporate event.",
    body: "The project centered on conceptualizing and executing a comprehensive branding strategy for a corporate event. It involved designing event themes, crafting marketing collateral, and executing promotional campaigns to ensure a cohesive and impactful brand presence before, during, and after the event.",
    metrics: [
      { metric: "Event Attendance", value: "Surpassed expected attendance by 20%" },
      { metric: "Brand Impressions", value: "Reached over 1 million impressions across channels" },
    ],
    objective: "To establish a strong brand presence and maximize attendance at the corporate event.",
  },
  {
    id: "11",
    favourite: true,
    img: "/assets/dummy1.jpg",
    client: { name: "LMN Enterprises", logo: "/assets/client0.png" },
    name: "Social Media Campaign Optimization",
    category: ["Digital Marketing", "Social Media", "Print"],
    gallery: ["/assets/dummy1.jpg", "/assets/dummy1.jpg"],
    shortDescription: "Optimizing social media campaigns for increased engagement and conversions.",
    body: "The project focused on refining social media campaigns through data-driven strategies, audience segmentation, and content optimization. It aimed to enhance user engagement, boost click-through rates, and ultimately drive conversions by leveraging targeted messaging and creative content.",
    metrics: [
      { metric: "Engagement Rate", value: "Increased by 50%" },
      { metric: "Conversion Rate", value: "Improved by 20%" },
    ],
    objective: "To maximize engagement and conversions through social media channels.",
  },
];

export const findCase = (slug) => {
  const foundCase = caseList.find((entry) => slugify(entry.name) === slug);
  if (foundCase) {
    return foundCase;
  }
  return null; // Return null or handle a case when no match is found
};

export default caseList;
