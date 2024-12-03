import { type StoryFn } from '@storybook/react'
import { ServiceMarketplaceCard } from '.'

export default {
  title: 'CFX/ServiceMarketplaceCard',
  component: ServiceMarketplaceCard,
  tags: ['autodocs'],
  args: {
    companyName: 'TechCorp',
    appName: 'ServiceMarketplaceCard name in max',
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

const Template: StoryFn<typeof ServiceMarketplaceCard> = (
  args: React.ComponentProps<typeof ServiceMarketplaceCard>
) => <ServiceMarketplaceCard {...args} />

export const DefaultCard = Template.bind({})
