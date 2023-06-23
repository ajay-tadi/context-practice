import Playtime from '../Playtime'
import NewWaysToConnect from '../NewWaysToConnect'

import './index.css'

const FeaturesSection = (props) => (



  <div className="features-section-container">
    <Playtime props={props} />
    <NewWaysToConnect props={props} />
  </div>
)

export default FeaturesSection