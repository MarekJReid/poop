import React from 'react'
import {useParams} from 'react-router-dom'

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div
    style={{
        height: `90vh`,
        marginTop: `10vh`,
        background: `#fffacd`,
        width: `100vw`,
      }}
    >
      <h3>{topicId}</h3>
      <h3>{topicId}</h3>
      <h3>{topicId}</h3>
      <h3>{topicId}</h3>
      <h3>{topicId}</h3>
    </div>
  );
}

export default Topic
