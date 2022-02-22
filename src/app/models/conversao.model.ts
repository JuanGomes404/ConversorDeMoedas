export interface Root {
  motd: Motd
  success: boolean
  query: Query
  info: Info
  historical: boolean
  date: string
  result: number
}

export interface Motd {
  msg: string
  url: string
}

export interface Query {
  from: string
  to: string
  amount: number
}

export interface Info {
  rate: number
}
