import  App  from './app';

describe('App component', () => {
  test('renders successfully', () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });
});
