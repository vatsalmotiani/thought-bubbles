import Button from "@/components/Button";

export default function CasePage({ category, name }) {
  return (
    <div className='flex flex-col'>
      <Button
        link='/work/all'
        content='Back'
        type='white'
      />
      <p className={`font-noto text-tb-body pb-2`}>{category.join(", ")}</p>
      <p className={`font-poppins  text-tb-black text-bold text-3xl`}>{name}</p>
    </div>
  );
}
