import Title from "@/components/Title";
import CaseSmall from "@/components/CaseSmall";
import Button from "@/components/Button";
import caseList from "@/data/caseList";

export default function OurWork() {
  return (
    <div className='bg-white flex flex-col items-center w-screen py-16'>
      <Title
        sectionName='Our Work'
        heading='Helping Brands Break out of their Bubble'
        subheading="Here's where the magic happens! Get an inside look at our success stories—a mix of creativity, problem-solving, and awesome collaborations with our amazing clients."
      />
      <div className='flex my-8'>
        {caseList.map((filteredCase) => {
          return (
            <span
              key={filteredCase.id}
              className='me-8'
            >
              <CaseSmall
                img={filteredCase.img}
                name={filteredCase.name}
                category={filteredCase.category}
              />
            </span>
          );
        })}
      </div>
      <Button
        link='/work/all'
        type='White'
        content='View All'
      />
    </div>
  );
}
