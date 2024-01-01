import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Edw-Castro',
    name: 'Edward Castro',
    isFollowing: true
  },
  {
    userName: 'Edw-Castro2',
    name: 'Edward Castro2',
    isFollowing: false
  },

]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}