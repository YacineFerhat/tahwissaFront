import { useState, useEffect } from 'react'
import { createAxiosInstance } from './config'

export const createRestaurant = async (input: any) => {
  const res = await createAxiosInstance().post('restaurants', input)
  const { data } = res
  return data
}

export const useFetchRestaurants = (reload: number) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`restaurants`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload])
  return data
}

export const useFetchSearchRestaurants = (reload: number, name: string) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`restaurants/search/${name}`)
        .then((res) => {
          setData(res.data)
        })
    }
    async function fetchFullData() {
      createAxiosInstance()
        .get(`restaurants`)
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
        .get(`restaurants/${id}`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload, id])
  return data
}

export const useFetchRestaurantByAlias = (
  alias: string | string[] | undefined
) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`restaurants/alias/${alias}`)
        .then((res) => {
          setData(res.data)
        })
    }
    alias && fetchData()
  }, [alias])
  return data
}
