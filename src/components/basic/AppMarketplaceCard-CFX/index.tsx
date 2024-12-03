import './MarketplaceCard.scss'
import { Card, CardContent, Typography } from '@mui/material'
import { Image } from '../Image'

interface AppMarketplaceProps {
  id: string
  label: string
}

interface ApplicationCardProps<T> {
  companyName: string
  appName: string
  useCase: T[]
  thumbnailURL?: string
  fetchImageWithToken: (url: string) => Promise<ArrayBuffer>
}

export const AppMarketplaceCard = ({
  companyName,
  appName,
  useCase,
  thumbnailURL,
  fetchImageWithToken,
}: ApplicationCardProps<AppMarketplaceProps>) => {
  return (
    <Card className="application-card">
      <CardContent className="application-card__content">
        <div className="application-card__logo-container">
          {thumbnailURL && (
            <Image
              className={'application-card__image'}
              src={thumbnailURL}
              alt={`${companyName} logo`}
              loader={fetchImageWithToken}
            />
          )}
        </div>
        <div className="application-card__info">
          <Typography
            variant="subtitle2"
            className="application-card__company-name"
          >
            {companyName}
          </Typography>
          <Typography
            variant="h6"
            className="application-card__application-name"
          >
            {appName}
          </Typography>
          <Typography variant="body2" className="application-card__use-case">
            {useCase.map((item) => item.label).join(', ')}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
