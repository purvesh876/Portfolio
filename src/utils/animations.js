// Animation utilities and easing curves
export const easing = {
  expo: [0.16, 1, 0.3, 1],
  cubic: [0.4, 0, 0.2, 1],
  power: [0.2, 0, 0, 1],
  smooth: [0.25, 0.1, 0.25, 1],
}

export const staggerConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easing.expo,
      },
    },
  },
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.expo,
    },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.cubic,
    },
  },
}
