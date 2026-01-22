

// 'use client'
// import React, { useState, useEffect } from 'react';
// // Assuming ContestantCard is in your project, otherwise I have provided a fallback structure below
// import ContestantCard from '@/components/common/ContestantCard';

// interface Contestant {
//   id: string;
//   name: string;
//   votes: number;
//   imageUrl: string;
// }

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
// }

// interface CircularProgressProps {
//   value: number;
//   total: number;
//   label: string;
// }

// // Data
// const contestants: Contestant[] = [
//   { id: '1', name: 'Contestant 1', votes: 1455, imageUrl: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=400&fit=crop' },
//   { id: '2', name: 'Contestant 2', votes: 1243, imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
//   { id: '3', name: 'Contestant 3', votes: 1127, imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
//   { id: '4', name: 'Contestant 4', votes: 1043, imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
//   { id: '5', name: 'Contestant 5', votes: 1127, imageUrl: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop' },
//   { id: '6', name: 'Contestant 6', votes: 1127, imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop' }
// ];

// /**
//  * Responsive Circular Progress Component
//  * Uses viewBox for perfect scaling across devices
//  */
// function CircularProgress({ value, total, label }: CircularProgressProps): JSX.Element {
//   const radius = 40;
//   const circumference = 2 * Math.PI * radius;
//   const progress = (value / total) * 100;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center gap-2">
//       <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
//         <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
//           {/* Background Circle */}
//           <circle
//             cx="50"
//             cy="50"
//             r={radius}
//             stroke="#1f2937" // Darker gray for the track
//             strokeWidth="8"
//             fill="none"
//           />
//           {/* Progress Circle */}
//           <circle
//             cx="50"
//             cy="50"
//             r={radius}
//             stroke="url(#gradient-timer)"
//             strokeWidth="8"
//             fill="none"
//             strokeDasharray={circumference}
//             style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
//             strokeLinecap="round"
//           />
//           <defs>
//             <linearGradient id="gradient-timer" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#a855f7" />
//               <stop offset="100%" stopColor="#ec4899" />
//             </linearGradient>
//           </defs>
//         </svg>
//         {/* Centered Text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
//             {value}
//           </span>
//           <span className="text-[8px] sm:text-[10px] uppercase text-gray-400 font-medium">
//             {label}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ContestVotingApp(): JSX.Element {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 2,
//     hours: 18,
//     minutes: 45
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         let { days, hours, minutes } = prev;
//         if (minutes > 0) {
//           minutes--;
//         } else if (hours > 0) {
//           hours--;
//           minutes = 59;
//         } else if (days > 0) {
//           days--;
//           hours = 23;
//           minutes = 59;
//         }
//         return { days, hours, minutes };
//       });
//     }, 60000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-10">
//       <div className="container mx-auto border-t border-white/20 py-10 md:py-14">
        
//         {/* Header with Countdown */}
//         <div className="mb-10 md:mb-16">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left tracking-tight">
//               Contest Ends in
//             </h1>
            
//             {/* Timers Container */}
//             <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
//               <CircularProgress 
//                 value={timeLeft.days} 
//                 total={7} // Assuming a 7-day max contest for the bar calculation
//                 label="Days" 
//               />
              
//               <CircularProgress 
//                 value={timeLeft.hours} 
//                 total={24} 
//                 label="Hours" 
//               />
             
//               <CircularProgress 
//                 value={timeLeft.minutes} 
//                 total={60} 
//                 label="Mins" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* Contestants Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {contestants.map((contestant) => (
//             <div key={contestant.id} className="w-full">
//                <ContestantCard {...contestant}/>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// }



'use client'

import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import ContestantCard from '@/components/common/ContestantCard'
import { ContestApiResponse } from './type'

// ── Circular Progress (unchanged) ───────────────────────────────────────
interface CircularProgressProps {
  value: number
  total: number
  label: string
}

function CircularProgress({ value, total, label }: CircularProgressProps) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progress = Math.min((value / total) * 100, 100)
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} stroke="#1f2937" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient-timer)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient-timer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
            {value}
          </span>
          <span className="text-[8px] sm:text-[10px] uppercase text-gray-400 font-medium">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Skeleton ──────────────────────────────────────────────────────────────
function SkeletonContestantCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl h-72 sm:h-80 md:h-96 bg-[#1a1a1e] animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gray-700" />
            <div className="space-y-2">
              <div className="h-6 w-28 bg-gray-700 rounded" />
              <div className="h-5 w-20 bg-gray-600 rounded" />
            </div>
          </div>
          <div className="h-14 w-14 rounded-full bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────
export default function ContestVotingApp() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  const { data, isLoading } = useQuery<ContestApiResponse>({
    queryKey: ['current-contest'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contest/web-current`, { cache: 'no-store' })
      if (!res.ok) throw new Error('Failed')
      return res.json()
    },
  })

  // Usually only one contest group in "current"
  const currentGroup = data?.data?.[0]
  const contest = currentGroup?.contest
  const participants = (currentGroup?.participants || []).sort((a, b) => b.votes - a.votes)

  // Countdown from real endDate
  useEffect(() => {
    if (!contest?.endDate) return

    const end = new Date(contest.endDate).getTime()

    const tick = () => {
      const diff = end - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
        return
      }
      const days    = Math.floor(diff / 86400000)
      const hours   = Math.floor((diff % 86400000) / 3600000)
      const minutes = Math.floor((diff % 3600000) / 60000)
      setTimeLeft({ days, hours, minutes })
    }

    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [contest?.endDate])

  const isEmpty = !data?.success || !currentGroup || participants.length === 0

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-10">
      <div className="container mx-auto border-t border-white/20 py-10 md:py-14">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center lg:text-left">
                Contest Ends In
              </h1>
              {contest && (
                <p className="mt-3 text-gray-400 text-center lg:text-left text-lg">
                  {contest.title}
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-5 sm:gap-7 md:gap-10">
              <CircularProgress value={timeLeft.days}    total={7}  label="Days" />
              <CircularProgress value={timeLeft.hours}   total={24} label="Hours" />
              <CircularProgress value={timeLeft.minutes} total={60} label="Mins" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => <SkeletonContestantCard key={i} />)
          ) : isEmpty ? (
            <div className="col-span-full py-20 text-center text-gray-400 text-xl">
              No active contest or participants yet
            </div>
          ) : (
            participants.map((p) => (
              <ContestantCard
                key={p._id}
                id={p._id}
                name={p.user.name}
                imageUrl={p.photo.url}
                votes={p.votes}
                // optional extras you can pass if your card supports them:
                // frame={p.frame}
                // description={p.description}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}