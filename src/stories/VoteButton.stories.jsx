import React from 'react';
import VoteButton from '../components/VoteButton';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'VoteButton',
  component: VoteButton,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <VoteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'thread-1',
  upVotesBy: [],
  downVotesBy: [],
  authUser: 'user-1',
  upVote: () => console.log('Upvoted'),
  downVote: () => console.log('Downvoted'),
  neutralizeVote: () => console.log('Neutralized'),
};

export const UpVoted = Template.bind({});
UpVoted.args = {
  id: 'thread-1',
  upVotesBy: ['user-1'],
  downVotesBy: [],
  authUser: 'user-1',
  upVote: () => console.log('Upvoted'),
  downVote: () => console.log('Downvoted'),
  neutralizeVote: () => console.log('Neutralized'),
};

export const DownVoted = Template.bind({});
DownVoted.args = {
  id: 'thread-1',
  upVotesBy: [],
  downVotesBy: ['user-1'],
  authUser: 'user-1',
  upVote: () => console.log('Upvoted'),
  downVote: () => console.log('Downvoted'),
  neutralizeVote: () => console.log('Neutralized'),
};