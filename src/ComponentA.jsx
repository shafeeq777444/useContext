// import React from 'react'
// import { createContext } from 'react'
// import ComponentB from './ComponentB'

//    export const UserContext=createContext();

// function ComponentA() {
//     const a="i am props-driller"
//     const b="i am contexter"
//   return (
//     <div className='border'>
//       <h1>I am component A</h1>
//       <h2>i am contexter</h2>
//       <UserContext.Provider value={b}>
//     <ComponentB msg={b} />
//     </UserContext.Provider>
//     </div>
//   )
// }

// export default ComponentA


import React from 'react'
import { createContext } from 'react'
import ComponentB from './ComponentB'

export const MyContext = createContext();

function ComponentA() {
    const a = "i am props-driller"; // Prop to be passed down
    const b = "i am contexter"; // Context value to be shared

    return (
        <div className='border'>
            <h1>I am component A</h1>
<h2>{b}</h2>
            {/* Wrap the components that need context within UserContext.Provider */}
            <MyContext.Provider value={b}>
                {/* Pass 'a' as a prop to ComponentB */}
                <ComponentB msg={a} />
            </MyContext.Provider>
        </div>
    )
}

export default ComponentA;
