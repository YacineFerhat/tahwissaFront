import { useState, useEffect } from 'react'
import { createAxiosInstance } from './config'

export const createHotel = async (input: any) => {
  const res = await createAxiosInstance().post('hotels', input)
  const { data } = res
  return data
}

export const useFetchHotels = (reload: number) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`hotels`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload])
  return data
}

export const useFetchSearchHotels = (reload: number, name: string) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`hotels/search/${name}`)
        .then((res) => {
          setData(res.data)
        })
    }
    async function fetchFullData() {
      createAxiosInstance()
        .get(`hotels`)
        .then((res) => {
          setData(res.data)
        })
    }
    name !== '' ? fetchData() : fetchFullData()
  }, [reload, name])
  return data
}

export const useFetchHotel = (reload: number, id: string | string[]) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`hotels/${id}`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload, id])
  return data
}

export const useFetchHotelByAlias = (alias: string | string[] | undefined) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`hotels/alias/${alias}`)
        .then((res) => {
          setData(res.data)
        })
    }
    alias && fetchData()
  }, [alias])
  return data
}
