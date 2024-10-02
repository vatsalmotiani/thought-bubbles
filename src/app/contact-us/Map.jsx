export default function Map() {
  return (
    <div
      className='relative w-full h-0'
      style={{ paddingBottom: "100%" }}
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.314033069178!2d72.89379190000001!3d19.049925699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c602c6afab95%3A0x7f452308f8928976!2sThought%20Bubbles!5e0!3m2!1sen!2sin!4v1727883956373!5m2!1sen!2sin'
        className='absolute top-0 left-0 w-full h-full'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
