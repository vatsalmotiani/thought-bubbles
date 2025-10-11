// Make compatible with static export
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap() {
  // Use environment variable to switch between URLs
  const baseUrl = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ? "https://vatsalmotiani.github.io/thought-bubbles" : "https://thoughtbubbles.in";

  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
