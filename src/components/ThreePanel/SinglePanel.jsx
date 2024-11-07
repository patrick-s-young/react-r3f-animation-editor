import { useState, useRef, useLayoutEffect } from 'react'
import FiberPanel from './FiberPanel'

export default function SinglePanel() {

  return (
      <div className="dashboard__panel">
        <FiberPanel 
          cameraPosition="FRONT"
        />
      </div>
  )
}