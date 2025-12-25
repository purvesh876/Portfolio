import { useEffect, useRef, useMemo } from 'react'

const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          willChange: 'transform',
        }}
      />
    </div>
  )
}

const NoiseOverlay = () => {
  const canvasRef = useRef(null)
  const imageDataRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit for performance
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.scale(dpr, dpr)
    
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    // Generate noise once - more performant
    const width = window.innerWidth
    const height = window.innerHeight
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255
      data[i] = value
      data[i + 1] = value
      data[i + 2] = value
      data[i + 3] = Math.random() * 5 // Reduced opacity for performance
    }

    ctx.putImageData(imageData, 0, 0)
    imageDataRef.current = imageData

    // Throttled resize handler
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const newWidth = window.innerWidth
        const newHeight = window.innerHeight
        canvas.width = newWidth * dpr
        canvas.height = newHeight * dpr
        ctx.scale(dpr, dpr)
        canvas.style.width = `${newWidth}px`
        canvas.style.height = `${newHeight}px`
        ctx.putImageData(imageDataRef.current, 0, 0)
      }, 100)
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-[0.01] pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  )
}

const GradientOrbs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
      />
      <div 
        className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
      />
      <div 
        className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}

export { BackgroundGrid, NoiseOverlay, GradientOrbs }