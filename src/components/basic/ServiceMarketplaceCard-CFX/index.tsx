import './ServiceMarketplace.scss'
import { Card, CardContent, Typography } from '@mui/material'
import { Image } from '../Image'

interface ServiceplaceProps {
  id: string
  label: string
}

interface ServiceCardProps<T> {
  companyName: string
  appName: string
  useCase: T[]
  thumbnailURL?: string
  fetchImageWithToken: (url: string) => Promise<ArrayBuffer>
}

export const ServiceMarketplaceCard = ({
  thumbnailURL,
  companyName,
  fetchImageWithToken,
  appName,
  useCase,
}: ServiceCardProps<ServiceplaceProps>) => {
  return (
    <Card className="service-card">
      <CardContent className="service-card__content">
        <div className="service-card__logo-container">
          {thumbnailURL && (
            <Image
              className={'service-card__image'}
              src={thumbnailURL}
              alt={`${companyName} logo`}
              loader={fetchImageWithToken}
            />
          )}
        </div>
        <div className="service-card__info">
          <Typography
            variant="subtitle2"
            className="service-card__company-name"
          >
            {companyName}
          </Typography>
          <Typography variant="h6" className="service-card__service-name">
            {appName}
          </Typography>
          <Typography variant="body2" className="service-card__use-case">
            {useCase.map((item) => item.label).join(', ')}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
