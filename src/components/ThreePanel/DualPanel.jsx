import FiberPanel from './FiberPanel'

export default function DualPanel() {

  return (
    <>
      <div className="dashboard__panel">
        <FiberPanel 
          cameraPosition="FRONT"
        />
      </div>
      <div className="dashboard__panel">
        <FiberPanel 
          cameraPosition="LEFT"
        />
      </div>
    </>
  )
}