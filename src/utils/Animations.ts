export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const fadeOut = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeIn" },
    },
};

export const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.40 },
    },
};

export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1], 
      staggerChildren: 0.15,
    },
  },
};

export const itemFadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
