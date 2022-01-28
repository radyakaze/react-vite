import { FC, ReactNode } from 'react'
import './style.scss'

interface Data {
  imageUrl: string
  title: string
  author: string
  views: number
}

interface PostGridProps {
  title?: string
  action?: string
  data: Data[]
  suffix?: string
  suffixIcon?: ReactNode
  className?: string
}

const PostGrid: FC<Pick<PostGridProps, 'data' | 'suffix' | 'suffixIcon'>> = ({
  data,
  suffix,
  suffixIcon,
}) => (
  <div className="post-grid-wrapper">
    {data.map((post, index) => (
      <div key={`post-${index}`} className="post">
        <img
          loading="lazy"
          className="image"
          src={post.imageUrl}
          alt={post.title}
        />
        <div className="content">
          <div className="title">{post.title}</div>
          <div className="flex justify-between">
            <div className="author">{post.author}</div>
            <div className="views">{post.views} views</div>
          </div>
        </div>
      </div>
    ))}
    {suffix && (
      <div className="post-action">
        {suffixIcon}
        <div>{suffix}</div>
      </div>
    )}
  </div>
)

const PostGridWrapper: FC<PostGridProps> = ({
  title,
  action,
  data,
  suffixIcon,
  suffix,
  className,
}) =>
  title ? (
    <div>
      <div className={`post-grid-component ${className}`}>
        <div>
          <div className="text-3xl font-light">{title}</div>
          <div className="text-xs">{action}</div>
        </div>
      </div>
      <PostGrid data={data} suffix={suffix} suffixIcon={suffixIcon} />
    </div>
  ) : (
    <PostGrid data={data} suffix={suffix} suffixIcon={suffixIcon} />
  )

export default PostGridWrapper
