export const generateGradientColors = (
  numTeams: number,
  centerIndex: number,
) => {
  const colors = [];

  for (let i = 0; i < numTeams; i++) {
    const distance = Math.abs(i - centerIndex) / (numTeams * 0.5); 
    const intensity = Math.max(0, Math.min(255, Math.floor(255 * (1 - distance)))); 

    colors.push(`rgb(${intensity}, ${intensity}, ${intensity})`);
  }

  return colors;
};
