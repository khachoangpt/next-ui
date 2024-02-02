import { Avatar } from '@/components/avatar'
import { Badge } from '@/components/badge'

export default function Home() {
  return (
    <main>
      <Badge content="5" color="primary">
        <Avatar
          radius="md"
          size="lg"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
    </main>
  )
}
