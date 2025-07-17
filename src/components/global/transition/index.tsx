import { PageTransition } from './page-tranition';
import { StairTransion } from './stair-transition';
import Stairs from './stairs';

function StairTransionInterface() {
  return <StairTransion Stairs={Stairs} />;
}

export { PageTransition, StairTransionInterface, Stairs };
