import React from 'react'
import Routes from './src/routes/routes'
import { AdMobBanner } from 'expo-ads-admob'

const adtest = 'ca-app-pub-3940256099942544/6300978111'
const bannerfashion2 = 'ca-app-pub-3484834519910203/5429675714'

export default function App() {
    return (
        <>
            <Routes/>
            <AdMobBanner
                bannerSize="banner"
                adUnitID={adtest} // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
            />
        </>
    )
}
