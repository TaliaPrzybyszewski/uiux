import BasicTailwindLayout from '@/components/BasicTailwindLayout'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>A site full of ui / ux designs</h1>

      <BasicTailwindLayout />
      <Footer />
    </main>
  )
}
