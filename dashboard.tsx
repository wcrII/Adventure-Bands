import React, { useState } from 'react'
import { User, Sun, Award, Gift, TreePine, Clock, Film, Book, Moon } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Dashboard() {
  const [outdoorTime, setOutdoorTime] = useState("12h 30m")
  const [tokensEarned, setTokensEarned] = useState(250)
  const [tokensRedeemed, setTokensRedeemed] = useState(100)
  const adventureLevel = "Forest Explorer"
  const adventureProgress = 75

  const rewards = [
    { name: "Extra Screen Time", tokens: 50, icon: Clock },
    { name: "Choose Family Movie", tokens: 50, icon: Film },
    { name: "New Book", tokens: 50, icon: Book },
    { name: "Stay Up Late", tokens: 50, icon: Moon },
  ]

  const twoWeekOutdoorTime = [
    { day: "Mon", minutes: 120 },
    { day: "Tue", minutes: 90 },
    { day: "Wed", minutes: 180 },
    { day: "Thu", minutes: 150 },
    { day: "Fri", minutes: 210 },
    { day: "Sat", minutes: 240 },
    { day: "Sun", minutes: 180 },
    { day: "Mon", minutes: 130 },
    { day: "Tue", minutes: 100 },
    { day: "Wed", minutes: 170 },
    { day: "Thu", minutes: 140 },
    { day: "Fri", minutes: 200 },
    { day: "Sat", minutes: 220 },
    { day: "Sun", minutes: 190 },
  ]

  const leaderboard = [
    { initial: "Y", name: "You", points: 300 },
    { initial: "S", name: "Sam", points: 250 },
    { initial: "A", name: "Alex", points: 200 },
    { initial: "J", name: "Jordan", points: 150 },
    { initial: "T", name: "Taylor", points: 100 },
  ]

  return (
    <div className="min-h-screen bg-blue-600 p-6 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 L75 40 L25 40 Z" fill="#4CAF50"/>
            <path d="M50 30 L70 50 L30 50 Z" fill="#4CAF50"/>
            <path d="M50 45 L65 60 L35 60 Z" fill="#4CAF50"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 Q60 10 70 20 Q80 30 70 40 Q60 50 50 40 Q40 50 30 40 Q20 30 30 20 Q40 10 50 20 Z" fill="#FFA000"/>
            <circle cx="40" cy="25" r="2" fill="#000"/>
            <circle cx="60" cy="25" r="2" fill="#000"/>
            <path d="M45 32 Q50 36 55 32" fill="none" stroke="#000" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">AdventureBands</h1>
          <User className="text-white" size={24} />
        </header>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-500 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-normal flex items-center">
                  <Sun className="text-green-300 mr-2" size={24} />
                  Outdoor Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input 
                  value={outdoorTime}
                  onChange={(e) => setOutdoorTime(e.target.value)}
                  className="text-4xl font-bold bg-transparent border-none text-white p-0"
                />
                <div className="text-sm mt-2">+2h 15m from last week</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-normal flex items-center">
                  <Award className="text-green-300 mr-2" size={24} />
                  Tokens Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input 
                  type="number"
                  value={tokensEarned}
                  onChange={(e) => setTokensEarned(Number(e.target.value))}
                  className="text-4xl font-bold bg-transparent border-none text-white p-0"
                />
                <div className="text-sm mt-2">+50 from yesterday</div>
              </CardContent>
            </Card>

            <Card className="bg-blue-500 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-normal flex items-center">
                  <Gift className="text-green-300 mr-2" size={24} />
                  Tokens Redeemed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input 
                  type="number"
                  value={tokensRedeemed}
                  onChange={(e) => setTokensRedeemed(Number(e.target.value))}
                  className="text-4xl font-bold bg-transparent border-none text-white p-0"
                />
                <div className="text-sm mt-2">Last redeemed 2 days ago</div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-500 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-normal flex items-center">
                <TreePine className="text-green-300 mr-2" size={32} />
                Adventure Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{adventureLevel}</div>
              <Progress value={adventureProgress} className="h-2 bg-blue-400" indicatorClassName="bg-green-400" />
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Reward Shop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rewards.map((reward, index) => (
                  <div key={index} className="bg-blue-600 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                    <reward.icon className="text-green-300 mb-2" size={24} />
                    <div className="font-semibold">{reward.name}</div>
                    <div className="text-sm">{reward.tokens} tokens</div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Redeem Reward</Button>
              <Button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white border border-blue-400">+ Add Custom Reward</Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">2-Week Outdoor Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end h-40">
                {twoWeekOutdoorTime.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-green-400 w-4" style={{ height: `${day.minutes / 2.4}px` }}></div>
                    <div className="mt-2 text-xs">{day.day}</div>
                    <div className="text-xs">{day.minutes}m</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              {leaderboard.map((user, index) => (
                <div key={index} className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {user.initial}
                    </div>
                    <span>{user.name}</span>
                  </div>
                  <span>{user.points} pts</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <footer className="mt-6 text-center text-white">
          Keep exploring and earning tokens!
        </footer>
      </div>
    </div>
  )
}