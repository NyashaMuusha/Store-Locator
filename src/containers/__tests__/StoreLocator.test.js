import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import StoreLocator from '../StoreLocator';

configure({ adapter: new Adapter() });

describe("StoreLocator", function(){

let mountedStoreLocator;
beforeEach(()=>{
    mountedStoreLocator = shallow(<StoreLocator />);
});

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
