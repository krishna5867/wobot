export const getHealthColor = (grade) => {
  switch (grade?.toUpperCase()) {
    case "A":
      return "#029262"; // green
    case "B":
      return "#FF8C00"; // orange
    case "C":
      return "#FFA500"; // lighter orange
    case "D":
      return "#FFD700"; // yellow
    case "E":
      return "#FF4500"; // red-orange
    case "F":
      return "#FF0000"; // red
    default:
      return "#D3D3D3"; // gray for unknown
  }
};
