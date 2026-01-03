"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = "#00A37F" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 40
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className="relative w-full aspect-[2/1] overflow-hidden">
      {/* Background Image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1414]/95 via-[#0A1414]/90 to-[#000000]/95" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A1414] via-[#0A1414]/90 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1414] via-[#0A1414]/90 to-transparent z-10" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1414] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A1414] to-transparent z-10" />

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A37F]/10 via-transparent to-[#1E3AFF]/10" />

      {/* Legend */}
      <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 z-30">
        <div className="text-sm font-semibold mb-3 text-white flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#00A37F] mr-2 animate-pulse" />
          Active Network Nodes
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#00A37F] mr-2"></div>
            <span className="text-xs text-[#F5F5F7]">Primary Connection</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[#6FD1A6] mr-2"></div>
            <span className="text-xs text-[#F5F5F7]">Backup Route</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-[#008060] mr-2"></div>
            <span className="text-xs text-[#F5F5F7]">Data Flow</span>
          </div>
        </div>
      </div>

      <svg ref={svgRef} viewBox="0 0 800 400" className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <defs>
          {/* Gradient for animated lines */}
          <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="50%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </linearGradient>
          
          {/* Glow effect for dots */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for pulse effect */}
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
          </radialGradient>

          {/* Backup route gradient */}
          <linearGradient id="backupGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6FD1A6" stopOpacity="0" />
            <stop offset="50%" stopColor="#6FD1A6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6FD1A6" stopOpacity="0" />
          </linearGradient>

          {/* Data flow gradient */}
          <linearGradient id="dataFlowGradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#008060" stopOpacity="0" />
            <stop offset="50%" stopColor="#008060" stopOpacity="1" />
            <stop offset="100%" stopColor="#008060" stopOpacity="0" />
          </linearGradient>
        </defs>

        {mounted && dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          const path = createCurvedPath(startPoint, endPoint)

          // Create slightly different paths for backup routes
          const backupPath = `M ${startPoint.x} ${startPoint.y} Q ${(startPoint.x + endPoint.x) / 2} ${Math.min(startPoint.y, endPoint.y) - 60} ${endPoint.x} ${endPoint.y}`

          return (
            <g key={`path-group-${i}`}>
              {/* Backup Route (subtle) */}
              <path 
                d={backupPath} 
                fill="none" 
                stroke="url(#backupGradient)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray="4, 4"
                opacity="0.6"
              />

              {/* Data Flow (thicker center line) */}
              <motion.path
                d={path}
                fill="none"
                stroke="url(#dataFlowGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  ease: "linear"
                }}
              />

              {/* Main animated path */}
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 1, 1, 0],
                  strokeDasharray: "8, 4"
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
              />

              {/* Start Point */}
              <g>
                {/* Pulsing outer ring */}
                <motion.circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="14"
                  fill="url(#pulseGradient)"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: [0.5, 1.2, 0.5],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Outer glow circle */}
                <circle 
                  cx={startPoint.x} 
                  cy={startPoint.y} 
                  r="8" 
                  fill={lineColor}
                  className="opacity-30"
                />
                
                {/* Main dot */}
                <circle 
                  cx={startPoint.x} 
                  cy={startPoint.y} 
                  r="5" 
                  fill={lineColor}
                  filter="url(#glow)"
                />
                
                {/* Inner white dot */}
                <circle 
                  cx={startPoint.x} 
                  cy={startPoint.y} 
                  r="2" 
                  fill="#FFFFFF"
                />

                {/* Label for start point */}
                {dot.start.label && (
                  <g>
                    <rect 
                      x={startPoint.x - 40} 
                      y={startPoint.y - 30} 
                      width="80" 
                      height="20" 
                      rx="4"
                      fill="rgba(0, 0, 0, 0.7)"
                      className="backdrop-blur-sm"
                    />
                    <text 
                      x={startPoint.x} 
                      y={startPoint.y - 18} 
                      textAnchor="middle" 
                      fill="#FFFFFF" 
                      fontSize="10"
                      fontWeight="600"
                      className="font-sans"
                    >
                      {dot.start.label}
                    </text>
                  </g>
                )}
              </g>

              {/* End Point */}
              <g>
                {/* Pulsing outer ring */}
                <motion.circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="14"
                  fill="url(#pulseGradient)"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: [0.5, 1.2, 0.5],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5 + 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Outer glow circle */}
                <circle 
                  cx={endPoint.x} 
                  cy={endPoint.y} 
                  r="8" 
                  fill={lineColor}
                  className="opacity-30"
                />
                
                {/* Main dot */}
                <circle 
                  cx={endPoint.x} 
                  cy={endPoint.y} 
                  r="5" 
                  fill={lineColor}
                  filter="url(#glow)"
                />
                
                {/* Inner white dot */}
                <circle 
                  cx={endPoint.x} 
                  cy={endPoint.y} 
                  r="2" 
                  fill="#FFFFFF"
                />

                {/* Label for end point */}
                {dot.end.label && (
                  <g>
                    <rect 
                      x={endPoint.x - 40} 
                      y={endPoint.y - 30} 
                      width="80" 
                      height="20" 
                      rx="4"
                      fill="rgba(0, 0, 0, 0.7)"
                      className="backdrop-blur-sm"
                    />
                    <text 
                      x={endPoint.x} 
                      y={endPoint.y - 18} 
                      textAnchor="middle" 
                      fill="#FFFFFF" 
                      fontSize="10"
                      fontWeight="600"
                      className="font-sans"
                    >
                      {dot.end.label}
                    </text>
                  </g>
                )}
              </g>

              {/* Connection info */}
              <g>
                <text 
                  x={(startPoint.x + endPoint.x) / 2} 
                  y={(startPoint.y + endPoint.y) / 2 - 20} 
                  textAnchor="middle" 
                  fill="#6FD1A6" 
                  fontSize="9"
                  fontWeight="500"
                  className="font-sans opacity-80"
                >
                  {Math.round(
                    Math.sqrt(
                      Math.pow(endPoint.x - startPoint.x, 2) + 
                      Math.pow(endPoint.y - startPoint.y, 2)
                    ) / 5
                  )}ms
                </text>
              </g>
            </g>
          )
        })}

        {/* Static network nodes */}
        {[
          { lat: 37.7749, lng: -122.4194, size: 3, color: "#95BF47" }, // SF
          { lat: 52.3676, lng: 4.9041, size: 2.5, color: "#95BF47" }, // Amsterdam
          { lat: -33.9249, lng: 18.4241, size: 2, color: "#95BF47" }, // Cape Town
          { lat: 39.9042, lng: 116.4074, size: 4, color: "#95BF47" }, // Beijing
          { lat: 19.4326, lng: -99.1332, size: 3, color: "#95BF47" }, // Mexico City
        ].map((node, i) => {
          const point = projectPoint(node.lat, node.lng)
          return (
            <g key={`static-node-${i}`}>
              <circle 
                cx={point.x} 
                cy={point.y} 
                r={node.size + 1} 
                fill={node.color}
                opacity="0.3"
              />
              <circle 
                cx={point.x} 
                cy={point.y} 
                r={node.size} 
                fill={node.color}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}