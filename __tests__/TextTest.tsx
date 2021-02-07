import {Text} from '../src/components';
import { shallow } from 'enzyme';

test('My Greeter', () => {
  const checkbox = shallow(<Text> Hello</Text>);
});
