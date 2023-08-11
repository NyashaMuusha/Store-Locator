import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import StoreLocator from '../StoreLocator';

configure({ adapter: new Adapter() });

describe('StoreLocator',() => {
  let mountedStoreLocator;
    beforeEach(()=>{
      mountedStoreLocator = shallow(<StoreLocator/>);
    })
  it('renders without crashing', () => {
  let mountedStoreLocator = shallow(<StoreLocator />);
  expect(mountedStoreLocator.exists()).toBe(true);

});
  it('renders a header', () => {
  const headers = mountedStoreLocator.find('Header');
  expect(headers.length).toBe(1);

});
it('renders two buttons', () => {
  const buttons = mountedStoreLocator.find('Button');
  expect(buttons.length).toBe(2);
})
it('renders two a map', () => {
  const map = mountedStoreLocator.find('Map');
  expect(map.length).toBe(1);
})
})
