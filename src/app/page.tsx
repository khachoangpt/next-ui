import { Button } from '@/components/button'
import { Dropdown } from '@/components/dropdown'

export default function Home() {
  return (
    <main>
      <Dropdown dropdownItems={[{ title: 'Test', value: 'test' }]}>
        <Button variant="bordered">Open Menu</Button>
      </Dropdown>
    </main>
  )
}
