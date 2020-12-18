import React, { FC } from 'react';
import { useAsync } from 'react-async'

type Props = {};

function fetchData(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Date.now() % 2 === 0) {
        resolve('abc');
      } else {
        reject('custom-error')
      }
    }, 1000)
  })
}

export const Hello: FC<Props> = ({}) => {
  const { data, error, isPending } = useAsync({ promiseFn: fetchData })
  return <div>
    <h1>Hello ReactAsync</h1>
    <div>
      {isPending && 'loading'}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {data}</div>}
    </div>
  </div>;
}
