export type BackgroundSlide =
  | {
      id: number;
      type: "image";
      src: string;
    }
  | {
      id: number;
      type: "video";
      src: string;
    };