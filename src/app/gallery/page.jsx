import Title, { TitleBold } from "@/components/Title";
import Photo from "@/components/Photo";

export default function page() {
  return (
    <>
      <TitleBold
        sectionName='Discover Us'
        heading='Gallery'
      />
      <Photo
        img='/assets/dummy1.jpg'
        name='XYZ wins ABC'
        about='Lorem Ipsum'
      />
    </>
  );
}
