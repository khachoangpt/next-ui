import NextImage from 'next/image'

import { Image } from '@/components/image/Image'

export default function Home() {
  return (
    <main>
      <Image
        as={NextImage}
        width={300}
        height={200}
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        alt="NextUI hero Image"
      />
    </main>
  )
}
