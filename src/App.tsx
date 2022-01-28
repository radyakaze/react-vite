import React, { useEffect, useState } from 'react'
import Activity, { ActivityData } from './components/Activity/Activity'
import Channel, { ChannelData } from './components/Channel/Channel'
import MainGrid from './components/MainGrid/MainGrid'
import PostGrid from './components/PostGrid/PostGrid'
import SidebarWrapper from './components/SidebarWrapper/SidebarWrapper'
import Layout from './layouts/Layout'
import axios from 'axios'
import {
  generateActivities,
  generateChannels,
  generateListImage,
} from './utils/content'
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay'

function App() {
  const [loading, setLoading] = useState(true)

  const [posts, setPosts] = useState<Record<string, any>>({
    videos: [],
    peoples: [],
    documents: [],
  })

  const [activities, setActivities] = useState<ActivityData[]>([])

  const [channels, setChannels] = useState<ChannelData[]>([])

  useEffect(() => {
    setLoading(true)

    axios
      .get('https://picsum.photos/v2/list?limit=31&width=200')
      .then((response) => {
        setPosts({
          videos: generateListImage(response, 0, 5),
          peoples: generateListImage(response, 6, 5),
          documents: generateListImage(response, 11, 5),
        })

        setActivities(generateActivities(response, 16))
        setChannels(generateChannels())
      })
      .catch((error) => {
        console.log('error', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      {loading && <LoadingOverlay />}
      <MainGrid>
        <PostGrid
          title="Videos"
          action="Browse all videos"
          data={posts.videos}
          suffix="Upload Your Own Video"
          suffixIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 md:h-14 md:w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          }
        />
        <SidebarWrapper
          title="Activity"
          action="View timelines / Filter activities"
        >
          <Activity data={activities} />
        </SidebarWrapper>
      </MainGrid>

      <MainGrid className="mt-8">
        <div>
          <PostGrid
            title="People"
            action="View All"
            data={posts.peoples}
            suffix="Show Your Work"
            suffixIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 md:h-14 md:w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />
          <PostGrid
            className="mt-8"
            title="Documents"
            action="Browse all documents"
            data={posts.documents}
            suffix="Share Your Document"
            suffixIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 md:h-14 md:w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
        <SidebarWrapper title="Channels" action="Browse all channels">
          <Channel data={channels} />
        </SidebarWrapper>
      </MainGrid>
    </Layout>
  )
}

export default App
