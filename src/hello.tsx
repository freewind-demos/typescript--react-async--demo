import React, { FC } from 'react';
import { useAsync } from 'react-async'

type Props = {};

// 1. have to be defined outside the component
// 2. have to define the props with type `any` to make it compilable?!
async function fetchData({ name }: { name: string }): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Date.now() % 2 === 0) {
        resolve(`Hello, ${name}`);
      } else {
        reject('custom-error')
      }
    }, 1000)
  })
}

export const Hello: FC<Props> = ({}) => {
  const { data, error, isPending } = useAsync(fetchData, { name: 'why?' })
  return <div>
    <h1>Hello ReactAsync</h1>
    <div>
      {isPending && 'loading'}
      {error && <div>Error: {error}</div>}
      {data && <div>Data: {data}</div>}
    </div>
  </div>;
}
