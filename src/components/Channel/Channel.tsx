import { FC } from 'react'
import './style.scss'

export interface ChannelData {
  imageUrl: string
  name: string
  url: string
}

interface ChannelProps {
  data: ChannelData[]
}

const Channel: FC<ChannelProps> = ({ data }) => (
  <div className="grid grid-cols-2 gap-3 py-2">
    {data.map((channel, index) => (
      <div key={`channel-${index}`} className="channel">
        <img loading="lazy" height={100} width={161} src={channel.imageUrl} alt={channel.name} />
        <div className="channel-name">{channel.name}</div>
        <div className="close" title="Subscibe Channel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    ))}
  </div>
)

export default Channel
