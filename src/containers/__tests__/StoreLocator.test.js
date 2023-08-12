import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import StoreLocator from '../StoreLocator';
import { act } from 'react-dom/test-utils'; 
import axios from 'axios';

configure({ adapter: new Adapter() });

describe("StoreLocator", function(){

let mountedStoreLocator;
beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator />);
});

it('calls axios.get in #componentDidMount', ()=> {
  return mountedStoreLocator.instance().componentDidMount().then(()=> {
    expect(axios.get).toHaveBeenLastCalled();
  })
})
it('calls axios.get with correct url', ()=> {
  return mountedStoreLocator.instance().componentDidMount().then(()=> {
    expect(axios.get).toHaveBeenLastCalledWith('http://localhost:3000/data/shops.json');
  })
})
it('updates state with api fetchData', ()=> {
  return mountedStoreLocator.instance().componentDidMount().then(()=> {
    expect(mountedStoreLocator.state().toHaveProperty('shops',([
      {
        "location": 'test location',
        "address": "test address"
      }
    ])));
  })
})



it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
});

it('renders a header', () => {
    const headers = mountedStoreLocator.find('Header');
    expect(headers.length).toBe(1);
});

it('renders three buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
});

it('renders a map', () => {
    const maps = mountedStoreLocator.find('Map');
    expect(maps.length).toBe(1);
})

});
describe("StoreLocator", () => {
  it('updates currentMap using the location passed to it', () => {
    const mountedStoreLocator = shallow(<StoreLocator />);
    const mockEvent = { target: { value: 'testland' } };
    
    act(() => {
      mountedStoreLocator.find('Button').at(0).prop('handleClick')(mockEvent);
    });
    
    const currentMap = mountedStoreLocator.find('Map').prop('imagename');
    expect(currentMap).toBe('testland.png');
  });
});