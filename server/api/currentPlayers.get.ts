const servers: { [key: string]: string } = {
  fr: 'http://81.21.4.253:30120/players.json',
  rp: 'http://81.21.4.253:30125/players.json',
  frxrp: 'http://81.21.4.253:30130/players.json',
}

export default defineEventHandler(async (event) => {
  const { server } = getQuery(event)
  const serverUrl = Array.isArray(server) ? server[0] : server
  if (typeof serverUrl !== 'string' || !servers[serverUrl]) {
    return undefined
  }
  try {
    const response: Array<Object> = await $fetch(servers[serverUrl].toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
    })
    return response.length
  } catch (err) {
    return undefined
  }
})