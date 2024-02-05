import { Pagination } from '@/components/pagination'

export default function Home() {
  return (
    <main>
      <Pagination radius="full" total={10} initialPage={1} />
    </main>
  )
}
