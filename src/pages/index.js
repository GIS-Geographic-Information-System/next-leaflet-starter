import Head from "next/head";

import Map from "../components/Map";
// import { GeoJSON } from "react-leaflet";

import styles from "../../styles/Home.module.css";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Leaflet Starter</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {/* <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}> */}
        <Map
          style={{ height: "100vh" }}
          zoom={11}
          center={[-22.573794911841464, -47.57436275482178]}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              /> */}
              <TileLayer
                attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
                url="https://api.mapbox.com/styles/v1/viannaandresouza/cl2cow8rn000414lk7kon03nk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidmlhbm5hYW5kcmVzb3V6YSIsImEiOiJja2hpOTVrcnowdmxoMnFzMXE5end6MXlyIn0.eP2vC12qAfS11lzLU_F0Rg"
              />

              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>

        <p className={styles.description}>
          <code className={styles.code}>
            yarn create next-app -e
            https://github.com/colbyfayock/next-leaflet-starter
          </code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/colbyfayock/next-leaflet-starter"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>See the code in action.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Next.js &rarr;</h3>
            <p>Getting started with Next.js</p>
          </a>

          <a href="https://leafletjs.com/" className={styles.card}>
            <h3>Leaflet &rarr;</h3>
            <p>Mapping features and APIs.</p>
          </a>

          <a href="https://react-leaflet.js.org/" className={styles.card}>
            <h3>React Leaflet &rarr;</h3>
            <p>Native Leaflet components in React</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
