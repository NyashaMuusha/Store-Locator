
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use the correct adapter for your React version
import Button from '../../components/Button'
import App from '../../containers/App';

configure({ adapter: new Adapter() });

describe('App', function(){

it('renders app without crashing', () => {
    let mountedApp = shallow(<App/>);
 
  });  


it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App/>);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });  

})
