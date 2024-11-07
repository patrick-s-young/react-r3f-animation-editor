import { useState } from 'react'
import SinglePanel from './SinglePanel'
import DualPanel from './DualPanel'
import QuadPanel from './QuadPanel'
import PanelMenu from './PanelMenu'
import AnimationMenu from './AnimationMenu'
import { useStore } from '../../store'
import './dashboard.scss'

export default function Dashboard() {
  const [panelCount, setPanelCount] = useState(1)
  const { playAnimation, actionNameIndex } = useStore((state) => state);

  const handlePanelCountChange = (count) => {
    setPanelCount(count)
  }

  const handleAnimationIndexChange = (index) => {
    playAnimation(index)
  }

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>  

      <div style={{ boxSizing: 'border-box', marginTop: '74px', paddingRight: '20px',display: 'flex', flexDirection: 'column', padding: '10px', width: '200px', height: '100%' }}>
        <AnimationMenu 
          value={actionNameIndex}
          handleValueChange={handleAnimationIndexChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex', padding: '10px', paddingBottom: '20px'}}>
          <PanelMenu panelCount={panelCount} handlePanelCountChange={handlePanelCountChange} />
        </div>
        <div className="dashboard">
          { panelCount === 1 && <SinglePanel /> }
          { panelCount === 2 && <DualPanel /> }
          { panelCount === 4 && <QuadPanel /> }
        </div>
      </div>

    </div>

  )
}
