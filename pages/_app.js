import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

/*Planning

  The Routers
  This project have 4 routes.

  1. Starting Page: show featured events
      path: /
  2. Events Page: show all events
      path: /events
  3. Event Detail Page: show specific event
      path: /events/[selectedId]
  4. Filter Event Page: show filtered event
      path: /events/[...slug]
  5. 404 Page

*/
