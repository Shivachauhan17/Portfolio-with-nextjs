import data from '../../data/data.json'
import Image from 'next/image'

export default function HomePage() {
  const description=data.description
  return (
    <div>
      <span>
        <h2>Hi my name is</h2>
        <h1>{description.name}</h1>
      </span>
      <span>
        <h2>{description.journey}</h2>

      </span>
      <ul>
        {
          description.skills.map((item)=>{
          
            return(
              <li key={item.skill}>
                <Image src={item.icon} height={'100'} width={'100'} />
                <p>{item.skill}</p>
              </li>
            )
          }
        )
        }
      </ul>
    </div>
  )
}


