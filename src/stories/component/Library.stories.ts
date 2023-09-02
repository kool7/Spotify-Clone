import type { Meta, StoryObj } from '@storybook/react';
import Library from '../../components/Library';

const meta = {
  title: 'Components/Library',
  component: Library,
  tags: ['autodocs'],
} satisfies Meta<typeof Library>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayList: Story = {
  args: {
    library: {
      songs: "Massive - Drake",
      title: "Your Library"
    }
  }
}