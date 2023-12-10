import CaseLarge from "@/components/CaseLarge";

export const metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <>
      <CaseLarge
        img='/assets/case0.jpg'
        name='Inter Times'
        category={["Branding"]}
        body='Non minim excepteur Lorem cupidatat cillum. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.'
        metrics={[
          { metric: "Solid", value: "Gold" },
          { metric: "Copper", value: "Chain" },
        ]}
      />
    </>
  );
}
