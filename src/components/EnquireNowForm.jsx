import { motion } from "framer-motion";
import { X, Rocket, Mail, User, Smartphone, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const EnquireNowForm = ({ onClose, onSubmitted, type = "spaceship" }) => {
  const isSpaceship = type === "spaceship";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitted();
    toast.success("Message launched 🚀", {
      style: {
        background: "#ffffff",
        fontFamily: "Poppins, sans-serif",
        color: "var(--foreground)",
        border: "4px solid #00B6E7",
        boxShadow: "4px 4px 0px #00B6E7",
      },
    });
  };

  return (
    <motion.div
      className='fixed inset-0 bg-black/50 flex items-center justify-center z-[70] p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className='bg-background text-foreground rounded-3xl p-8 max-w-md w-full relative border-4 border-[#00B6E7]'
        style={{ boxShadow: "8px 8px 0px #1E1E1E" }}
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      >
        <button
          className='absolute top-4 right-4 p-2 rounded-full'
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className='text-center mb-6'>
          <Rocket
            size={48}
            className='mx-auto mb-4 text-[#00B6E7]'
          />
          <h2 className='text-3xl font-bold mb-2'>{isSpaceship ? "You Caught Our Spaceship!" : "Let’s Get In Touch"}</h2>
          <p className='text-muted-foreground'>{isSpaceship ? "Looks like you've got the keys to our creative galaxy! Let's blast off on your next project together." : "Tell us a bit about your project and we’ll get back to you as soon as possible."}</p>
        </div>

        <form
          className='space-y-4'
          onSubmit={handleSubmit}
        >
          <div className='relative'>
            <div className='absolute left-3 top-3 text-muted-foreground'>
              <User size={20} />
            </div>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7]'
            />
          </div>

          <div className='relative'>
            <div className='absolute left-3 top-3 text-muted-foreground'>
              <Mail size={20} />
            </div>
            <input
              type='email'
              placeholder='Your Email'
              className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7]'
            />
          </div>

          <div className='relative'>
            <div className='absolute left-3 top-3 text-muted-foreground'>
              <Smartphone size={20} />
            </div>
            <input
              type='tel'
              placeholder='Mobile Number'
              className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7]'
            />
          </div>

          <div className='relative'>
            <div className='absolute left-3 top-3 text-muted-foreground'>
              <MessageSquare size={20} />
            </div>
            <textarea
              placeholder='Your Intergalactic Message'
              rows={3}
              className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7]'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 px-6 bg-[#00B6E7] text-white font-bold rounded-xl hover:bg-[#0084C7] transition-colors flex items-center justify-center gap-2'
            style={{ boxShadow: "4px 4px 0px #1E1E1E" }}
          >
            <Rocket size={20} />
            Launch Message
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EnquireNowForm;
