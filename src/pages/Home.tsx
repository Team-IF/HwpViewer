import React, { useEffect, useRef, useState, useCallback } from 'react'
import HWPViewer from 'hwp.js'
import axios from 'axios'

const Home: React.FC = () => {
  const viewerRef = useRef<HTMLDivElement | null>(null)
  const [hasError, setHasError] = useState<Boolean>(false)
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const loadHwp = useCallback(async () => {
    fetch('files/noori.hwp')
      .then((res) => res.arrayBuffer())
      .then((res) => {
        const array = new Uint8Array(res)
        setIsLoading(false)
        new HWPViewer(viewerRef.current, array, { type: 'array' })
      })
      .catch(() => {
        setIsLoading(false)
        setHasError(true)
      })
  }, [])
  useEffect(() => {
    loadHwp()
  }, [])

  return <div className='text-center'>asdf</div>
}

export default Home
