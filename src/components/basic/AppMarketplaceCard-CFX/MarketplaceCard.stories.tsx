import { type StoryFn } from '@storybook/react'
import { AppMarketplaceCard } from '.'

export default {
  title: 'CFX/AppMarketplaceCard',
  component: AppMarketplaceCard,
  tags: ['autodocs'],
  args: {
    companyName: 'TechCorp',
    appName: 'Application name in max',
    thumbnailURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s',
    useCase: [
      {
        id: '1',
        label: 'Finance',
      },
      {
        id: '2',
        label: 'Analytics',
      },
    ],
  },
}

const Template: StoryFn<typeof AppMarketplaceCard> = (
  args: React.ComponentProps<typeof AppMarketplaceCard>
) => <AppMarketplaceCard {...args} />

export const DefaultCard = Template.bind({})
