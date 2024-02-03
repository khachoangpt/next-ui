import { Breadcrumbs } from '@/components/breadcrumbs'

export default function Home() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbItems={[
          { value: 'Home', id: 'home' },
          { value: 'Music', id: 'music' },
        ]}
      />
    </main>
  )
}
