"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { X, Rocket, Mail, User, Smartphone, MessageSquare } from "lucide-react";

const SpaceshipHunter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const intervalRef = useRef(null);

  const [flightPath, setFlightPath] = useState({
    start: { x: 0, y: 50 },
    end: { x: 100, y: 50 },
    control: { x: 50, y: 0 },
  });

  const generateFlightPath = useCallback(() => {
    const startEdge = Math.floor(Math.random() * 4);
    let startX, startY, endX, endY;

    switch (startEdge) {
      case 0:
        startX = Math.random() * 100;
        startY = -10;
        endX = Math.random() * 100;
        endY = 110;
        break;
      case 1:
        startX = 110;
        startY = Math.random() * 100;
        endX = -10;
        endY = Math.random() * 100;
        break;
      case 2:
        startX = Math.random() * 100;
        startY = 110;
        endX = Math.random() * 100;
        endY = -10;
        break;
      default:
        startX = -10;
        startY = Math.random() * 100;
        endX = 110;
        endY = Math.random() * 100;
    }

    setFlightPath({
      start: { x: startX, y: startY },
      end: { x: endX, y: endY },
      control: {
        x: 50 + (Math.random() * 40 - 20),
        y: 50 + (Math.random() * 40 - 20),
      },
    });
  }, []);

  // show rocket after 7 seconds, then every 10 seconds (or 20 after submit)
  useEffect(() => {
    const timeout = setTimeout(() => {
      generateFlightPath();
      setIsVisible(true);

      intervalRef.current = setInterval(
        () => {
          setIsVisible(true);
          generateFlightPath();
          setTimeout(() => setIsVisible(false), 7000);
        },
        submitted ? 25000 : 12000
      );
    }, 7000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, [generateFlightPath, submitted]);

  const handleSpaceshipClick = () => {
    setIsVisible(false);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    setSubmitted(true);
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
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='fixed z-[60] cursor-pointer'
            style={{
              left: `${flightPath.start.x}vw`,
              top: `${flightPath.start.y}vh`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              left: `${flightPath.end.x}vw`,
              top: `${flightPath.end.y}vh`,
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 21,
              ease: [0.2, 0.8, 0.2, 1],
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handleSpaceshipClick}
          >
            <svg
              width='80'
              height='80'
              viewBox='0 0 30 30'
            >
              <path
                d='M15 5 L20 15 L15 25 L10 15 Z'
                fill='#00B6E7'
                stroke='#0084C7'
                strokeWidth='2'
              />
              <circle
                cx='15'
                cy='12'
                r='3'
                fill='white'
                stroke='#00B6E7'
                strokeWidth='1'
              />
              <path
                d='M10 15 L5 20 L10 20 Z'
                fill='#0084C7'
              />
              <path
                d='M20 15 L25 20 L20 20 Z'
                fill='#0084C7'
              />
              <motion.path
                d='M15 25 L12 30 L15 28 L18 30 Z'
                fill='#00B6E7'
                opacity='0.7'
                animate={{
                  d: ["M15 25 L12 30 L15 28 L18 30 Z", "M15 25 L11 32 L15 29 L19 32 Z", "M15 25 L12 30 L15 28 L18 30 Z"],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
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
                onClick={() => setShowForm(false)}
              >
                <X size={24} />
              </button>

              <div className='text-center mb-6'>
                <Rocket
                  size={48}
                  className='mx-auto mb-4 text-[#00B6E7]'
                />
                <h2 className='text-3xl font-bold mb-2'>You Caught Our Spaceship!</h2>
                <p className='text-muted-foreground'>Looks like you've got the keys to our creative galaxy! Let's blast off on your next project together.</p>
              </div>

              <form
                className='space-y-4 '
                onSubmit={handleSubmit}
              >
                <div className='relative'>
                  <div className='absolute left-3 top-3 text-muted-foreground'>
                    <User size={20} />
                  </div>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7] focus:outline-none focus:ring-2 focus:ring-[#00B6E7]'
                  />
                </div>

                <div className='relative'>
                  <div className='absolute left-3 top-3 text-muted-foreground'>
                    <Mail size={20} />
                  </div>
                  <input
                    type='email'
                    placeholder='Your Email'
                    className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7] focus:outline-none focus:ring-2 focus:ring-[#00B6E7]'
                  />
                </div>

                <div className='relative'>
                  <div className='absolute left-3 top-3 text-muted-foreground'>
                    <Smartphone size={20} />
                  </div>
                  <input
                    type='tel'
                    placeholder='Mobile Number'
                    className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7] focus:outline-none focus:ring-2 focus:ring-[#00B6E7]'
                  />
                </div>

                <div className='relative'>
                  <div className='absolute left-3 top-3 text-muted-foreground'>
                    <MessageSquare size={20} />
                  </div>
                  <textarea
                    placeholder='Your Intergalactic Message'
                    rows={3}
                    className='w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[#00B6E7] focus:outline-none focus:ring-2 focus:ring-[#00B6E7]'
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
        )}
      </AnimatePresence>
    </>
  );
};

export default SpaceshipHunter;
