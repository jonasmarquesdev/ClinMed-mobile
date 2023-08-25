import Principal from '../Tabs/Principal';
import Consultas from '../Tabs/Consultas';
import Explorar from '../Tabs/Explorar';
import Perfil from '../Tabs/Perfil';

const optionsTabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar'
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: 'search'
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  },
]

export { optionsTabs };