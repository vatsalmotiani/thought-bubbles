import Button from "@/components/Button";

export default function CTA({ title, img }) {
  return (
    <div className='h-96 w-5/6 bg-tb-blue flex p-14 border-2 rounded-3xl justify-between align-middle'>
      <div className='flex flex-col'>
        <p className='text-3xl text-white font-medium'>Unlock Your Brand&apos;s Potential Today</p>
        <Button
          link='/contact-us'
          content='Get Started'
          type='white'
        />
      </div>
    </div>
  );
}
