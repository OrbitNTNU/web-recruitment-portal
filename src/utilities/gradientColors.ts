export const generateGradientColors = (numTeams: number, centerIndex: number) => {
  const colors = [];

  for (let i = 0; i < numTeams; i++) {
    let red = 0,
      green = 0,
      blue = 0;
    const distance = (i - centerIndex) / (numTeams * 0.4);

    if (Math.abs(distance) < 0.05) {
      green = 255;
    } else if (distance < 0) {
      blue = 255;
      green = Math.max(0, 255 - Math.floor(255 * (Math.abs(distance) * 2.5)));
    } else {
      red = 255;
      green = Math.max(0, 255 - Math.floor(255 * (distance * 2.5)));
    }

    colors.push(`rgb(${red}, ${green}, ${blue})`);
  }

  return colors;
};