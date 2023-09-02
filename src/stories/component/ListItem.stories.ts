import type { Meta, StoryObj } from '@storybook/react';
import ListItem from '../../components/ListItem';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikedSongs: Story = {
  args: {
    image: "/images/liked.png",
    href: "liked",
    name: "Liked Songs"
  }
}