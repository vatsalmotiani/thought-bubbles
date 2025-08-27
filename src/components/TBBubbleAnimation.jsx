export default function TBBubbleAnimation() {
  return (
    <svg
      id='tb-bubble-logo'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 377 424'
      className='w-[220px] h-auto'
    >
      <defs>
        {/* Gradient for a "3D stroke" effect */}
        <linearGradient
          id='bubbleGradient'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='100%'
        >
          <stop
            offset='0%'
            stopColor='#ffffff'
            stopOpacity='1'
          />
          <stop
            offset='50%'
            stopColor='#ffffff'
            stopOpacity='0.6'
          />
          <stop
            offset='100%'
            stopColor='#ffffff'
            stopOpacity='0.1'
          />
        </linearGradient>
      </defs>

      <style>{`
        #tb-bubble-logo path {
          stroke: url(#bubbleGradient);
          stroke-width: 3;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          fill: none;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));
        }

        /* Animate smallest → middle → top */
        #bubble3 {
          animation: draw 1.5s ease-in-out infinite;
        }
        #bubble2 {
          animation: draw 1.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        #bubble1 {
          animation: draw 1.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 1000;
          }
        }
      `}</style>

      {/* Top bubble */}
      <path
        id='bubble1'
        d='M122 95L125.5 77.5L135 45.5L153 18L191 0H302L332.5 10.5L363.5 32.5L377 71.5L374 149L318 203L254 221.5L203.5 225L165 210.5L139.5 190L129.5 169L122 144.5V95Z'
      />
      {/* Middle bubble */}
      <path
        id='bubble2'
        d='M6.5 277L5 269.5L13 249L25.5 237L39.788 238.5H82.882L94.724 242.56L106.759 251.067L112 266.147L110.835 296.113L104.5 311.967L90 322L64.247 324.147L44.641 325.5L29.694 319.893L19.794 311.967L15.912 303.847L13 294.373L6.5 286V277Z'
      />
      {/* Smallest bubble */}
      <path
        id='bubble3'
        d='M0.798996 395.195L0 391.127L4.26199 380.008L10.921 373.5L18.532 374.314H41.489L47.797 376.516L54.208 381.129L57 389.308L56.38 405.561L53.005 414.16L45.28 419.602L31 424L21.117 421.5L13.155 418.459L7.881 414.16L5.813 409.756L4.26199 404.618L0.798996 400.076V395.195Z'
      />
    </svg>
  );
}
