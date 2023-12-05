import { Request } from 'express'
import { getHost, getUrl } from './utils'

const userMockedRequet = {
    baseUrl: '/userservice',
    url: '/api'
} as Request

const videoMockedRequest = {
    baseUrl: '/videoservice',
    url: '/api'
} as Request

const noSuportedMockedRequest = {
    baseUrl: '/noService',
    url: '/?all=true'
} as Request

describe('Should test get url complement', () => {
    it('Should return user api url complement', () => {
        const url = getHost(userMockedRequet)
        expect(url).toEqual('http://localhost:8001')
    })

    it('Should return equipment api url', () => {
        const url = getHost(videoMockedRequest)
        expect(url).toEqual('http://localhost:8002')
    })
    it('Should return null api url', () => {
        const url = getHost(noSuportedMockedRequest)
        expect(url).toEqual('')
    })
})

describe('Should test get url complement', () => {
    it('Should return user api url', () => {
        const complement = getUrl(userMockedRequet)
        expect(complement).toEqual(userMockedRequet.url)
    })

    it('Should return equipment api url', () => {
        const complement = getUrl(videoMockedRequest)
        expect(complement).toEqual(videoMockedRequest.url)
    })
})