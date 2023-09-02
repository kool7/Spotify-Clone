import type { Meta, StoryObj } from '@storybook/react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import SidebarItem from '../../components/SidebarItem';

const meta = {
  title: 'Components/SidebarItem',
  component: SidebarItem,
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    icon: HiHome,
    label: "Home",
    active: true,
    href: "/"
  }
}

export const Search: Story = {
  args: {
    icon: BiSearch,
    label: "Search",
    active: true,
    href: "/search"
  }
}