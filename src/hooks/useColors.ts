import { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'
export default function useColors(){
  const [colors, setColors] = useState<any>(null)

  const get =  async()=>{
    const url = 'https://i.imgur.com/68jyjZT.jpg'
    await getColors(url, {
      fallback: '#228B22',
      cache: true,
      key: url,
    }).then(res=>console.log(res))
  }
  useEffect(() => {
    get()

  }, [])

  return {colors}
}