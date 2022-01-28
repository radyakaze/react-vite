export const getImage = (id: number, width = 448, height = 280) =>
  `https://picsum.photos/id/${id}/${width}/${height}`

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const generateListImage = (
  response: any,
  start: number = 0,
  total: number = 5,
  width = 448,
  height = 352
) =>
  Array.from({ length: total })
    .fill(start)
    .map((val, i) => ({
      imageUrl: getImage((val as number) + i, width, height),
      title: 'Demo App',
      author: response.data[(val as number) + i].author,
      views: randomIntFromInterval(1, 100),
    }))

const activityList = ['commented', 'liked', 'sharedDocument', 'newVideo']

export const generateActivities = (
  response: any,
  start: number = 0,
  total: number = 6,
  width = 80,
  height = 60
) =>
  Array.from({ length: total })
    .fill(start)
    .map((val, i) => ({
      imageUrl: getImage((val as number) + i, width, height),
      author: response.data[(val as number) + i].author,
      activityName:
        activityList[Math.floor(Math.random() * activityList.length)],
      content: 'Lorem ipsum dolor',
      time: '2 minutes ago',
    }))

const channels = [
  'Google',
  'Dribble',
  'Microsoft',
  'Behance',
  'Weather Channel',
  'Gurus',
  'iMedia',
  'Creativeye',
  'Khan Studio',
  'Yahoo',
]

export const generateChannels = (
  start: number = 21,
  total: number = 10,
  width = 161,
  height = 100
) =>
  Array.from({ length: total })
    .fill(start)
    .map((val, i) => ({
      imageUrl: getImage((val as number) + i, width, height),
      name: channels[i],
      url: '#',
    }))
