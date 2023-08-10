const mapChooser = (locationName) =>{
  if(!locationName){
    locationName = 'default';
  }
  const image = locationName + '.jpg';
  return (image);
}
export default mapChooser;
