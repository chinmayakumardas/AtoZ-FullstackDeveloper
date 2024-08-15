import React from 'react'
import Card from './Card'

const Cards = () => {
  const datas = [
    {
      name: 'love babber',
      company: 'CodeHelp',
      url: 'https://media.licdn.com/dms/image/D4D12AQHNDnBNU9OA2g/article-cover_image-shrink_720_1280/0/1701524677505?e=1727913600&v=beta&t=99Z_vYWp10zBRK_BPKqP3x5OUGQTNHC8B_vL4ALPpLc'
    },
    {
      name: 'Harsh Vandana',
      company: 'Sherians',
      url: 'https://media.licdn.com/dms/image/D4D03AQG_2E9DMYnDRg/profile-displayphoto-shrink_400_400/0/1706865413542?e=1727913600&v=beta&t=8ZU5VkgMmTAoyAcp943GWXRudFDbWt31fXs51MiS26E'
    },
    {
      name: 'Aswini',
      company: 'Precoder',
      url: 'https://d3fu8elvld6rb5.cloudfront.net/codeforsuccess.in/img/ashwanii.jpg'
    },
    {
      name: 'Ajaya Suneja',
      company: 'Adidas',
      url: 'https://media.licdn.com/dms/image/D5603AQH_kZlEWUc7lg/profile-displayphoto-shrink_200_200/0/1712165556028?e=2147483647&v=beta&t=dxO-1ETEUv3w7BgHUlHNj7LI0ZizIjSGB-V16umXx4s'
    },
    {
      name: 'love babber',
      company: 'CodeHelp',
      url: 'https://media.licdn.com/dms/image/D4D12AQHNDnBNU9OA2g/article-cover_image-shrink_720_1280/0/1701524677505?e=1727913600&v=beta&t=99Z_vYWp10zBRK_BPKqP3x5OUGQTNHC8B_vL4ALPpLc'
    },
    {
      name: 'Harsh Vandana',
      company: 'Sherians',
      url: 'https://media.licdn.com/dms/image/D4D03AQG_2E9DMYnDRg/profile-displayphoto-shrink_400_400/0/1706865413542?e=1727913600&v=beta&t=8ZU5VkgMmTAoyAcp943GWXRudFDbWt31fXs51MiS26E'
    },
    {
      name: 'Aswini',
      company: 'Precoder',
      url: 'https://d3fu8elvld6rb5.cloudfront.net/codeforsuccess.in/img/ashwanii.jpg'
    },
    {
      name: 'Ajaya Suneja',
      company: 'Adidas',
      url: 'https://media.licdn.com/dms/image/D5603AQH_kZlEWUc7lg/profile-displayphoto-shrink_200_200/0/1712165556028?e=2147483647&v=beta&t=dxO-1ETEUv3w7BgHUlHNj7LI0ZizIjSGB-V16umXx4s'
    }
  ]

  return (
    <div className='flex justify-center items-center flex-wrap py-10  gap-10'>
      {datas.map((data, index) => (
        <Card key={index} name={data.name} company={data.company} url={data.url} />
      ))}
    </div>
  )
}

export default Cards
