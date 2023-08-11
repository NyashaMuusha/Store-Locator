import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import Header from '../../components/Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(mountedHeader.exists()).toBe(true);
  });

  it('renders a logo', () => {
    const logoImg = mountedHeader.find('img [src="images/wired=brain-coffee-logo.png"]');
    expect(logoImg.length).toBe(1);
  });
});
