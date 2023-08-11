import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import Map from '../../components/Map';

configure({ adapter: new Adapter() });

describe('Map', () => {
  let mountedMap;
  beforeEach(()=> {
    mountedMap = shallow(<Map/>);
  })
  it('renders without crashing', () => {
  const mountedMap = shallow(<Map />);
  expect(mountedMap.exists()).toBe(true);
});
 it('renders without crashing', () => {
  const img= mountedMap.find('img');
  expect(img.length).toBe(1);
})
 it('displays the none map when no params are given', () => {
  const defaultMap = mountedMap.find('img [src="images/none.png"]');
  expect(defaultMap.length).toBe(1);
 })
})

