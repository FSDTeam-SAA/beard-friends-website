// 'use client'

// import ContestantCard from "@/components/common/ContestantCard"


// interface Contestant {
//   id: string
//   name: string
//   imageUrl: string
//   votes: number
// }

// const featuredContestants: Contestant[] = [
// {
//   id: '5',
//   name: 'Contestant 5',
//   imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
//   votes: 1127,
// },

//   {
//     id: '2',
//     name: 'Contestant 2',
//     imageUrl:
//       '/images/card1.jpg',
//     votes: 1243,
//   },
// ]

// const allContestants: Contestant[] = [
//   {
//     id: '3',
//     name: 'Contestant 3',
//     imageUrl:
//        '/images/card1.jpg',
//     votes: 1455,
//   },
//   {
//     id: '4',
//     name: 'Contestant 4',
//     imageUrl:
//      '/images/card1.jpg',
//     votes: 1243,
//   },
//   {
//     id: '5',
//     name: 'Contestant 5',
//     imageUrl:
//        '/public/images/card1.jpg',
//     votes: 1127,
//   },
//   {
//     id: '6',
//     name: 'Contestant 6',
//     imageUrl:
//      '/images/card1.jpg',
//     votes: 1043,
//   },
// ]

// export default function TopContestantSection() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Hero Section */}
//       <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
//   {/* Left Content (6 columns) */}
//   <div className="flex flex-col justify-center lg:col-span-6">
//     <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
//       Top Contestant
//     </h1>
//     <p className="text-sm text-gray-300 sm:text-base md:text-lg leading-relaxed">
//       Lorem ipsum dolor sit amet consectetur. Odio vitae lectus arcu aliquam
//       nibh pretium. Diam eu proin viverra dignissim. Ut purus elit iaculis
//       quis congue faucibus sit vulputate. Donec aliquet augue ut lectus. Diam
//       nulla dignissim nunc risus vitae enim ac sit nunc.
//     </p>
//   </div>

//   {/* Featured Cards (6 columns) */}
//   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
//     {featuredContestants.map((contestant) => (
//       <ContestantCard
//         key={contestant.id}
//         {...contestant}
//         featured={true}
//       />
//     ))}
//   </div>
// </div>


//       {/* All Contestants Grid */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//         {allContestants.map((contestant) => (
//           <ContestantCard
//             key={contestant.id}
//             {...contestant}
//             featured={false}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }



// app/(your-path)/TopContestantSection.tsx  or similar
'use client'

import { useQuery } from '@tanstack/react-query'
import ContestantCard from '@/components/common/ContestantCard'

interface Participant {
  _id: string
  user: {
    name: string
    // avatar?: { url: string }
  }
  photo: {
    url: string
  }
  votes: number
  description?: string
}

interface ContestData {
  contest: { title: string }
  participants: Participant[]
}

interface ApiResponse {
  success: boolean
  data: ContestData[]
}

function SkeletonCard({ featured = false }: { featured?: boolean }) {
  const height = featured
    ? 'h-64 sm:h-80 md:h-96'
    : 'h-56 sm:h-64 md:h-72'

  return (
    <div className={`relative overflow-hidden rounded-2xl ${height} w-full bg-[#1C1C1E] animate-pulse`}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-gray-700" />
            <div className="space-y-2">
              <div className="h-5 w-24 bg-gray-600 rounded" />
              <div className="h-4 w-16 bg-gray-700 rounded" />
            </div>
          </div>
          <div className="h-12 w-12 rounded-full bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

export default function TopContestantSection() {
  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ['current-contest-participants'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/web-current`, {
        cache: 'no-store', // or remove if you want caching
      })
      if (!res.ok) throw new Error('Failed to fetch contestants')
      return res.json()
    },
    staleTime: 1000 * 60 * 3, // 3 minutes
  })

  // Flatten & sort by votes descending
  const allParticipants = (data?.data ?? [])
    .flatMap(item => item.participants)
    .sort((a, b) => b.votes - a.votes)

  const featured = allParticipants.slice(0, 2)
  const others = allParticipants.slice(2)

  const showSkeletons = isLoading || !data?.success

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Hero + Featured */}
      <div className="mb-12 grid grid-cols-1 gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-12">
        {/* Left Text */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Top Contestants
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
            Celebrate the most loved entries of the current contest. Vote now and help your favorite rise to the top!
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
          {showSkeletons ? (
            <>
              <SkeletonCard featured />
              <SkeletonCard featured />
            </>
          ) : featured.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-gray-400">
              No featured contestants yet...
            </div>
          ) : (
            featured.map(p => (
              <ContestantCard
                key={p._id}
                id={p._id}
                name={p.user.name}
                imageUrl={p.photo?.url ?? '/placeholder-contestant.jpg'}
                votes={p.votes}
                featured
              />
            ))
          )}
        </div>
      </div>

      {/* All Other Contestants */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showSkeletons ? (
          Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={`skel-${i}`} />
          ))
        ) : others.length === 0 ? (
          <div className="col-span-full text-center py-16 text-gray-400">
            No more participants in this contest yet.
          </div>
        ) : (
          others.map(p => (
            <ContestantCard
              key={p._id}
              id={p._id}
              name={p.user.name}
              imageUrl={p.photo?.url ?? '/placeholder-contestant.jpg'}
              votes={p.votes}
            />
          ))
        )}
      </div>
    </div>
  )
}