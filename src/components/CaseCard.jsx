import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { slugify } from "@/lib/utils";

// CaseCard Component (for individual cards)
const CaseCard = ({ caseStudy, index = 0, withAnimation = true }) => {
  // Determine image source with fallbacks
  const imageSrc = caseStudy.image || caseStudy.mainImage || caseStudy.img;
  const imageAlt = caseStudy.title || caseStudy.name || "Case study image";
  const description = caseStudy.shortDescription || "";

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: { opacity: 1, y: 0, rotate: 0 },
    hover: {
      scale: 1.02,
      rotate: index % 2 === 0 ? 1 : -1,
      y: -8,
    },
  };
  const showRandomBubble = Math.random();

  return (
    <motion.div
      initial={withAnimation ? "hidden" : false}
      whileInView={withAnimation ? "visible" : false}
      whileHover='hover'
      variants={withAnimation ? cardVariants : {}}
      transition={{
        delay: 0.1 + index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true, margin: "-50px" }}
      className='relative group cursor-pointer'
    >
      <Link href={`/work/${slugify(caseStudy.name)}`}>
        <div
          className='relative rounded-3xl border-4 overflow-hidden transform'
          style={{
            backgroundColor: "white",
            borderColor: "#00B6E7",
            boxShadow: "8px 8px 0px #00B6E7",
          }}
        >
          <div className='aspect-video overflow-hidden relative'>
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                onError={(e) => {
                  e.target.src = "/default-case-image.jpg";
                }}
              />
            ) : (
              <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>No image available</span>
              </div>
            )}
          </div>

          <div className='p-6'>
            <h3
              className='text-xl font-black mb-2'
              style={{ color: "#1E1E1E" }}
            >
              {caseStudy.title || caseStudy.name}
            </h3>
            <p
              className='text-sm font-medium mb-3'
              style={{ color: "#828282" }}
            >
              {description}
            </p>
          </div>
        </div>
      </Link>

      {/* Floating sparkle */}
      {withAnimation && showRandomBubble < 0.5 && (
        <motion.div
          className='absolute -top-2 -right-2 w-6 h-6 rounded-full'
          style={{ backgroundColor: "#00B6E7" }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      )}
      {withAnimation && showRandomBubble >= 0.5 && (
        <motion.div
          className='absolute -top-2 -left-2 w-6 h-6 rounded-full'
          style={{ backgroundColor: "#00B6E7" }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      )}
    </motion.div>
  );
};

// CaseCardList Component (for displaying multiple cards)
const CaseCardList = ({ cases, withAnimation = true }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {cases.map((caseStudy, index) => (
        <CaseCard
          key={caseStudy.id || index}
          caseStudy={caseStudy}
          index={index}
          withAnimation={withAnimation}
        />
      ))}
    </div>
  );
};

// CaseStudyDisplay Component (smart component that handles both single and list)
const CaseStudyDisplay = ({ caseStudies, withAnimation = true }) => {
  // Check if caseStudies is an array
  if (Array.isArray(caseStudies)) {
    return (
      <CaseCardList
        cases={caseStudies}
        withAnimation={withAnimation}
      />
    );
  }

  // Handle single case study
  return (
    <CaseCard
      caseStudy={caseStudies}
      withAnimation={withAnimation}
    />
  );
};

export default CaseStudyDisplay;
export { CaseCard, CaseCardList }; // Optional: export individual components if needed
