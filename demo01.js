async function testAsync(){
  return 'Hello Async'
}
const result = testAsync()
console.log(result)

function getSomething(){
  return 'something'
}

async function test(){
  const v1 = await getSomething()
  const v2 = await testAsync()
  console.log(v1,v2)
}

test()

function takeLoneTime(){
  return new Promise(resolve => {
    setTimeout(() => resolve('long_time_value'),1000)
  })
}

async function test1() {
  const v = await takeLoneTime()
  console.log(v)
}

test1()