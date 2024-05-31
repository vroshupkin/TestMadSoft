export type TApi = {
  id: number,
  name: string,
  bgColor: string,
  tags: string[],
  image: string
}

export const themeCardsApi = async () => 
{
  const res = await fetch('https://logiclike.com/docs/courses.json')
  const arr = await res.json() as TApi[];
  
  return arr;
}