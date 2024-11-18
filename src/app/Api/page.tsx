// export default function Page({ data }) {
//     // Render data...
//     return <div>{data.title}</div>;
//   }

//   // This gets called on every request
//   export async function getServerSideProps() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await res.json();

//     // Pass data to the page via props
//     return {
//       props: {
//         data, // Rename `todos` to `data`
//       },
//     };
//   }
