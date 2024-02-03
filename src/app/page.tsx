import { Input } from '@/components/input'

export default function Home() {
  return (
    <main>
      <Input
        type="password"
        label="Email"
        labelPlacement="outside"
        placeholder="Email"
      />
    </main>
  )
}
