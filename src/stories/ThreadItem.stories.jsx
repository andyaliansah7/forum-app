import React from 'react';
import ThreadItem from '../components/ThreadItem';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'ThreadItem',
  component: ThreadItem,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <ThreadItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'thread-1',
  title: 'Sample Thread Title',
  body: 'This is a sample thread body. It contains some text to display.',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 5,
  owner: {
    id: 'user-1',
    name: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=Jhony&background=random',
  },
  upVote: () => console.log('Upvoted'),
  downVote: () => console.log('Downvoted'),
  neutralizeVote: () => console.log('Neutralized'),
  authUser: 'user-1',
};