import React from 'react';
import Navigation from '../components/Navigation';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  authUser: {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Jhony&background=random',
  },
  logout: () => console.log('Logged out'),
};