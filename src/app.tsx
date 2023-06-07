import { Profile } from './components/profile'
import { SocialMedias } from './components/social-media'

export function App() {
  return (
    <main className="flex items-center flex-col h-screen">
      <Profile />
      <SocialMedias />
    </main>
  )
}
