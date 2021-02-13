interface InitialState{
  count:number
}

export const initialState:InitialState = {count: 0};

export function reducer(state:InitialState, action:{type:string}) {
  switch (action.type) {
    case 'increment':
      return {count: state.count};
    case 'decrement':
      const count= testPromise().then(res=>{
        console.log(res,'count');
      })
      return {count: 1};
    default:
      throw new Error();
  }
}


function testPromise(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(5555)
    },5000)
  })
}