"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Stars, Float } from "@react-three/drei"
import * as THREE from "three"

function MovingLine({ speed, offset }: { speed: number; offset: number }) {
  const lineRef = useRef<THREE.Line>(null)

  const points = useMemo(() => {
    const p = []
    const startPhi = Math.PI
    const endPhi = 0
    const theta = Math.random() * Math.PI * 2

    for (let i = 0; i <= 20; i++) {
      const phi = startPhi + (endPhi - startPhi) * (i / 20)
      const vector = new THREE.Vector3().setFromSphericalCoords(2.1, phi, theta)
      p.push(vector)
    }
    return p
  }, [])

  useFrame((state) => {
    if (lineRef.current) {
      const t = (state.clock.getElapsedTime() * speed + offset) % 1
      const material = lineRef.current.material as THREE.LineBasicMaterial
      material.opacity = Math.sin(t * Math.PI) * 0.7
    }
  })

  return (
    <line ref={lineRef}>
      <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints(points)} />
      <lineBasicMaterial 
        attach="material" 
        color="#00A37F" 
        transparent 
        opacity={0.4}
        linewidth={1.5}
      />
    </line>
  )
}

function Arcs({ count = 15 }) {
  const lines = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      speed: 0.15 + Math.random() * 0.2,
      offset: Math.random(),
    }))
  }, [count])

  return (
    <group>
      {lines.map((line, i) => (
        <MovingLine key={i} {...line} />
      ))}
    </group>
  )
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0006
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer Glow */}
      <Sphere args={[2.4, 48, 48]}>
        <meshBasicMaterial 
          color="#008060" 
          transparent 
          opacity={0.03} 
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Main Globe */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#001a1a"
          emissive="#004d40"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.25}
        />
      </Sphere>

      {/* Stars */}
      <Stars 
        radius={100} 
        depth={40} 
        count={2000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.3}
      />

      {/* Moving Arcs */}
      <Arcs count={15} />

      {/* Inner Glow */}
      <Sphere args={[1.95, 32, 32]}>
        <meshBasicMaterial 
          color="#00A37F" 
          transparent 
          opacity={0.06} 
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Grid Lines */}
      <Sphere args={[2.02, 48, 48]}>
        <meshBasicMaterial
          color="#6FD1A6"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
    </group>
  )
}

export function WorldGlobe() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }} 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#0A1414']} />
        <ambientLight intensity={0.6} color="#00A37F" />
        <pointLight position={[8, 5, 5]} intensity={0.8} color="#008060" />
        <pointLight position={[-6, -4, -4]} intensity={0.4} color="#95BF47" />
        <Float 
          speed={1.2} 
          rotationIntensity={0.15} 
          floatIntensity={0.2}
        >
          <Globe />
        </Float>
      </Canvas>
    </div>
  )
}