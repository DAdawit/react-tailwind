import { useState } from "react";
const Content = () => {
  const [items, SetItems] = useState([
    {
      id: 1,
      checked: true,
      item: "one half pund bag of coca coverd almods unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "one half pund bag of coca coverd almods unsalted",
    },
    {
      id: 3,
      checked: false,
      item: "one half pund bag of coca coverd almods unsalted",
    },
  ]);
  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    SetItems(listItems);
  };
  return (
    <main>
      <section>
        <div className="container flex flex-col px-4 mx-auto mt10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12">
            <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
              {" "}
              What's different about manage?
            </h2>
          </div>
        </div>
      </section>
      
      {/* <ul>
                    {items.map((item)=>(
                        <li className="item mb-2" key={item.id}>
                            <input type="checkbox" checked={item.checked} onChange={()=>handleChange(item.id)}></input>
                            <label className="mr-1">{item.item}</label>
                            <button className="bg-blue-300 p-2 ">delete</button>
                        </li>
                    ))}
                </ul> */}

      <div className="grid justify-center">
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">01</div>
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">02</div>
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">03</div>
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">04</div>
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">04</div>
        <div className="bg-blue-500 h-10  mb-2 text-center w-20">05</div>
      </div>
      <div class="flex flex-col lg:flex-row items-center flex-wrap px-2 ">
        <div class="basis-1/3 lg:basis-1/3 bg-teal-600  mb-2 text-center w-full">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Reasons i'm exited to lear react
            </h1>
            <div className="grid justify-items-center">
              <ul className="grid justify-center ">
                <li className="text-start align-middle">
                  Well it’s that time again! The time where we quickly go from
                </li>
                <li className="text-start">
                  well this is actually a ridiculous amount of new stuff
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="basis-1/3 lg:basis-1/3 bg-purple-700  mb-2 text-center w-full">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Reasons i'm exited to lear react
            </h1>
            <div className="grid justify-items-center">
              <ul className="grid justify-center ">
                <li className="text-start align-middle">
                  Well it’s that time again! The time where we quickly go from
                </li>
                <li className="text-start">
                  well this is actually a ridiculous amount of new stuff
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="basis-1/3 lg:basis-1/3 bg-pink-600  mb-2 text-center w-full">
          <div>
            <h1 className="text-4xl font-bold text-center">
              Reasons i'm exited to lear react
            </h1>
            <div className="grid justify-items-center">
              <ul className="grid justify-center ">
                <li className="text-start align-middle">
                  Well it’s that time again! The time where we quickly go from
                </li>
                <li className="text-start">
                  well this is actually a ridiculous amount of new stuff
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center">
          Reasons i'm exited to lear react
        </h1>
        <div className="grid justify-items-center">
          <ul className="grid justify-center ">
            <li className="text-start align-middle">
              Well it’s that time again! The time where we quickly go from
            </li>
            <li className="text-start">
              well this is actually a ridiculous amount of new stuff
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div class="basis-4/5 sm:basis-1/4  lg:basis-2/4 bg-pink-600  mb-2 text-center w-full">
          hello
        </div>
        <div class="basis-1/5 sm:basis-3/4 lg:basis-2/4 bg-green-600  mb-2 text-center w-full">
          hello
        </div>
      </div>
      {/* <button className="bg-green-500 w-full">hello</button> */}
<button class="btn btn-pink">
  Button
</button>

<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>
<div className="flex justify-end mx-10">
  <button className="bg-transparent font-semibold text-yellow-100 border border-blue-500 py-2 px-4 hover:bg-blue-300 rounded">Button</button>
  {/* <div>hoo</div>
  <div>hoo</div>
  <div>hoo</div> */}

</div>



<div className="grid grid-rows-4 grid-flow-col gap-1 lg:grid-rows-2">
  <div className="bg-pink-500">Grid</div>
  <div className="bg-teal-500">Grid</div>
  <div className="bg-purple-500">Grid</div>
   <div className="bg-pink-500">Grid</div>
  <div className="bg-teal-500">Grid</div>
  <div className="bg-purple-500">Grid</div>
   <div className="bg-pink-500">Grid</div>
  <div className="bg-teal-500">Grid</div>
  <div className="bg-purple-500">Grid</div>
</div>



<div className="flex ">
  <div className="bg-pink-500">Grid</div>
  <div className="bg-teal-500">Grid</div>
  <div className="bg-purple-500">Grid</div>
</div>







    </main>
  );
};

export default Content;
