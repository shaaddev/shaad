import BlurFade from '@/components/magicui/blur-fade'
import Image from 'next/image';

const images = Array.from({ length: 6}, (_, i) => {
  return `/pics/me${i + 1}.jpg`
})

export function Gallery({delay}: {delay: number}) {
  return(
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, index) => (
          <BlurFade key={index} delay={delay * 4 + index * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              width={600}
              height={800}
              src={imageUrl}
              alt={`Photo ${index + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}