import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

export default function FAQ() {
  return (
    <>
      <div className='py-14 flex align-middle justify-center bg-tb-black'>
        <Image
          src='assets/faq-des.svg'
          alt='FAQ'
          height={425}
          width={350}
        />

        <div className='ms-14 flex flex-col py-14'>
          <p className={`font-poppins text-2xl text-white`}>Got any questions? We&apos;ve got you!</p>
          <Accordion
            type='single'
            collapsible
            defaultValue='item-1'
          >
            <AccordionItem value='item-1'>
              <AccordionTrigger>What sets your agency apart from competitors?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>Do you provide detailed reports and analytics for campaign performance?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
