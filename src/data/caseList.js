import { slugify } from "@/lib/utils";

const caseList = [
  {
    id: "1",
    img: "/assets/dummy1.jpg",
    name: "Inter Times",
    category: ["Branding"],
    body: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Solid", value: "Gold" },
      { metric: "Copper", value: "Chain" },
    ],
    objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "2",
    img: "/assets/dummy1.jpg",
    name: "Something Else",
    category: ["Digital Marketing"],
    body: "Steve minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Olive", value: "Nana" },
      { metric: "Chain", value: "Swerve" },
    ],
    objective: "Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "3",
    img: "/assets/dummy1.jpg",
    name: "John Station",
    category: ["Production"],
    body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Adam", value: "Jacob" },
      { metric: "Man", value: "Elite" },
    ],
    objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
  },
  {
    id: "4",
    img: "/assets/dummy1.jpg",
    name: "Multiple",
    category: ["Production", "Copywriting", "Digital Marketing"],
    body: "Tim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.",
    metrics: [
      { metric: "Adam", value: "Jacob" },
      { metric: "Man", value: "Elite" },
    ],
    objective: "Lip excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris",
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
