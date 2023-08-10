import mapChooser from '../mapChooser';

describe('mapChooser', function(){
  it('returns an image based on the input passed to it', function(){
    let expected = 'portland.jpg';
    let actual = mapChooser('portland');
    expect(actual).toEqual(expected);
  });
  it('returns a default image if wrong input value is added',function(){
    let expected = 'default.jpg';
    let actual = mapChooser('default');
    expect(actual).toEqual(expected);
  })
})