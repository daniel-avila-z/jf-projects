export default async function FetchDataProducts () {
  const response = await fetch('https://run.mocky.io/v3/24169703-5d10-4afc-9bad-4d436249dbbd')
  const data = await response.json()
  return data
}
