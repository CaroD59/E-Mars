import { useEffect, useState } from 'react';
import axios from 'axios';

import EssaiApiCss from './EssaiApiCss';

function EssaiApi() {
  const [mars, setMars] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-10`
      )
      .then(({ data }) => {
        setMars(data);
      });
  }, []);

  return (
    <div>
      <EssaiApiCss>
        <h2>Photos</h2>
        <div className="">
          {mars.map((robot) => {
            return <img src={robot.url} alt="" />;
          })}
        </div>
      </EssaiApiCss>
    </div>
  );
}

export default EssaiApi;
