const mapChooser = (locationName) => {
  if (!locationName) {
    locationName = "none";
  }
  const image = locationName + ".png";
  return (image);
};

export default mapChooser;
