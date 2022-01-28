import { createElement, FC } from 'react'
import Comment from '@/assets/comment_icon.svg?component'
import Love from '@/assets/love_icon.svg?component'
import Video from '@/assets/video_icon.svg?component'
import Document from '@/assets/document_icon.svg?component'
import './style.scss'

export interface ActivityData {
  imageUrl: string
  author: string
  activityName: string
  content: string
  time: string
}

interface ActivityProps {
  data: ActivityData[]
}

const activityList: Record<string, { text: string; icon?: any }> = {
  commented: {
    text: 'commented',
    icon: Comment,
  },
  liked: {
    text: 'liked a video',
    icon: Love,
  },
  sharedDocument: {
    text: 'shared a document',
    icon: Document,
  },
  newVideo: {
    text: 'added new video',
    icon: Video,
  },
}

const Activity: FC<ActivityProps> = ({ data }) => (
  <div className="grid gap-3">
    {data.map((activity, index) => (
      <div key={`activity-${index}`} className="activity">
        <div className="image">
          <img
            loading="lazy"
            height={60}
            width={80}
            src={activity.imageUrl}
            alt={activity.author}
          />
        </div>
        <div className="body flex-grow">
          <div className="text-sm">
            <span className="author font-medium">{activity.author}</span>&nbsp;
            <span className="activity-name font-light">
              {activityList[activity.activityName].text}
            </span>
          </div>
          <div className="content">{activity.content}</div>
          <div className="time text-xs flex items-center font-light">
            {createElement(activityList[activity.activityName].icon)}
            <span className="ml-2">{activity.time}</span>
          </div>
        </div>
        <div className="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    ))}
  </div>
)

export default Activity
