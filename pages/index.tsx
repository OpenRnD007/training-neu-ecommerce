import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neu Ecommerce</title>
        <meta name="description" content="Ecommerce app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Getting Started
      </h1>
    </>
  )
}