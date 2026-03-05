import { SocialImages } from "@/consts/socialImages";

export type SocialImageData = {
  src: string;
  title: string;
  description: string;
};

export const SOCIAL_IMAGES: Record<SocialImages, SocialImageData> = {
  [SocialImages.TeamCollaboration]: {
    src: "/shared/social/GroupShotOrbit.jpg",
    title: "Team Collaboration",
    description: "Working together across disciplines to design satellites.",
  },

  [SocialImages.OrbitEvents]: {
    src: "/shared/social/OrbitEvents.jpg",
    title: "Orbit Events",
    description: "Celebrating milestones and launches together.",
  },

  [SocialImages.Workshop]: {
    src: "/shared/social/Workshop.jpg",
    title: "Hands-on Learning",
    description: "Students building real hardware for space missions.",
  },

  [SocialImages.Community]: {
    src: "/shared/social/Community.jpg",
    title: "Community",
    description: "A welcoming and supportive engineering environment.",
  },

  [SocialImages.Excursion]: {
    src: "/shared/social/Excursion.jpg",
    title: "Excursions",
    description: "Exploring space technology and visiting industry partners.",
  },
};