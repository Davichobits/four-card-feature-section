import { Card } from './card'

import IconSupervisor from '../assets/images/icon-supervisor.svg'
import IconTeamBuilder from '../assets/images/icon-team-builder.svg'
import IconKarma from '../assets/images/icon-karma.svg'
import IconCalculator from '../assets/images/icon-calculator.svg'

export const CardContainer = () => {

  const services = [
    {
      id: 1,
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      img: IconSupervisor,
      borderColor: 'bg-Cyan',
    },
    {
      id: 2,
      title: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      img: IconTeamBuilder,
      borderColor: 'bg-Red',
    },
    {
      id: 3,
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      img: IconKarma,
      borderColor: 'bg-Orange',
    },
    {
      id: 4,
      title: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates',
      img: IconCalculator,
      borderColor: 'bg-Blue',
    },
  ]

  return (
    <section className='flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-[30px]'>

      <Card {...services[0]} />

      <div className="flex flex-col gap-6 xl:gap-[30px]">
        <Card {...services[1]} />
        <Card {...services[2]} />
      </div>

      <Card {...services[3]} />
      
    </section>
  )
}
