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
        body='Non minim excepteur Lorem cupidatat cillum non veniam est ut non quis deserunt in veniam ut. Deserunt nulla in exercitation. Ipsum ea quis dolor. Nostrud laboris irure non anim Lorem dolor.'
      />
    </>
  );
}
