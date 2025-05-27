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
      borderColor: 'bg-Red',
    },
    {
      id: 2,
      title: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      img: IconTeamBuilder,
      borderColor: 'bg-Cyan',
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
    <section className='flex flex-col gap-6'>
      {
        services.map(({id, title, description, img, borderColor}) => {
          
          return (
          <Card 
            key={id} 
            title={title}
            description={description}
            img={img}
            borderColor={borderColor}
          />
          )
        })
      }
    </section>
  )
}