import { add } from './add';

const Example = () => {
  // * async await
  const dynamicImport = async () => {
    const res = await import('./add');
    console.log(res);
  };
  dynamicImport();

  // * then
  // import('./add').then((addModule) => {
  //   console.log(addModule);
  // });
};

export default Example;
