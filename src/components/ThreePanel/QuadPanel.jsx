import FiberPanel from './FiberPanel'
import './quadPanel.scss'

export default function QuadPanel() {
  return (
    <>
      <div className="dashboard__panel">
        <FiberPanel cameraPosition="FRONT"/>
      </div>
      <div className="dashboard__panel">
        <FiberPanel cameraPosition="LEFT"/>
      </div>
      <div className="dashboard__panel">
        <FiberPanel cameraPosition="RIGHT"/>
      </div>
      <div className="dashboard__panel">
        <FiberPanel cameraPosition="BACK"/>
      </div>
    </>
  )
}