export default function Map() {
  return (
    <div
      className='rounded-xl overflow-hidden border-4'
      style={{ borderColor: "#00B6E7" }}
    >
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.314033069178!2d72.89379190000001!3d19.049925699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c602c6afab95%3A0x7f452308f8928976!2sThought%20Bubbles!5e0!3m2!1sen!2sin!4v1727883956373!5m2!1sen!2sin'
        className='w-full h-[300px] sm:h-[400px]'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Office Location'
      />
    </div>
  );
}
